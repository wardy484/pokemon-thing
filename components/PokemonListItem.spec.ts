import flushPromises from 'flush-promises'
import { ComponentHarness, fireEvent } from '@testing-library/vue'
import { mocked } from 'ts-jest/utils'

import { Charmander } from '~/tests/Fixtures/Pokemon'
import PokemonListItem from '~/components/PokemonListItem.vue'
import { render } from '~/tests/VuetifyRender'
import { Pokedex } from '~/libs/pokedex/Pokedex'

jest.mock('~/libs/pokedex/Pokedex')
const mockedPokedex = mocked(Pokedex, true)

describe('PokemonListItem.vue', () => {
  test('Pokemon is not shown before it is loaded', () => {
    const { queryByText } = render(PokemonListItem, {
      propsData: {
        name: 'Pikachu'
      }
    })

    expect(queryByText('Pikachu')).toBeNull()
  })

  describe('Charmander is provided', () => {
    let wrapper: ComponentHarness
    const routerMock: { push: jest.Mock } = {
      push: jest.fn()
    }

    beforeEach(async () => {
      mockedPokedex.getByName.mockImplementation(async () => await Charmander)

      wrapper = render(PokemonListItem, {
        propsData: {
          name: 'charmander'
        },
        mocks: {
          $router: routerMock
        }
      })

      await flushPromises()
    })

    afterEach(() => routerMock.push.mockReset())

    test('name Charmander is visible', () => {
      const name = wrapper.getByText('Charmander')
      expect(name).toBeVisible()
    })

    test('type of fire is visible', () => {
      const name = wrapper.getByText('Fire')
      expect(name).toBeVisible()
    })

    test('pokemon sprite is visible', () => {
      const sprite = wrapper.getByRole('img', {
        name: 'charmander'
      })
      expect(sprite).toBeVisible()
    })

    test('pokemon can be navigated to', async () => {
      await fireEvent.click(wrapper.baseElement.firstChild as HTMLBaseElement)

      expect(routerMock.push).toHaveBeenCalledWith({
        name: 'pokemon-name',
        params: {
          name: 'charmander'
        }
      })
    })
  })
})
