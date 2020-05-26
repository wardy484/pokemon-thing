import flushPromises from 'flush-promises'
import each from 'jest-each'
import { render } from '~/tests/VuetifyRender'
import Index from '~/pages/index.vue'

jest.mock('~/libs/pokedex/Pokedex')

each([['Charmander'], ['Pidgey']]).test(
  '%s is listed on page',
  async (pokemon: string) => {
    const { getByText } = render(Index)

    await flushPromises()

    expect(getByText(pokemon)).toBeVisible()
  }
)

each([['Fire'], ['Normal'], ['Flying']]).test(
  '%s element is listed on the page',
  async (element: string) => {
    const { getByText } = render(Index)

    await flushPromises()

    expect(getByText(element)).toBeVisible()
  }
)

each([['charmander'], ['pidgey']]).test(
  '%s avatar is displayed on the page',
  async (pokemon: string) => {
    const { getByRole } = render(Index)

    await flushPromises()

    expect(
      getByRole('img', {
        name: pokemon
      })
    ).toBeVisible()
  }
)
