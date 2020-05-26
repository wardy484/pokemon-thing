import flushPromises from 'flush-promises'
import each from 'jest-each'
import { RouterLinkStub } from '@vue/test-utils'
import { render } from '~/tests/VuetifyRender'
import Page from '~/pages/pokemon/_name.vue'

jest.mock('~/libs/pokedex/Pokedex')

const generateOptions = (name: string) => ({
  mocks: {
    $route: {
      params: {
        name
      }
    }
  },
  stubs: {
    RouterLink: RouterLinkStub
  }
})

test('Link to home page is shown', async () => {
  const { getByText } = render(Page, generateOptions('charmander'))

  await flushPromises()

  expect(getByText('Pokemon')).toBeInstanceOf(HTMLAnchorElement)
})

test('No pokemon details are shown before response from api', async () => {
  const { queryByText } = render(Page, generateOptions('charmander'))

  expect(queryByText('Charmander')).toBeNull()
})

describe('Charmander', () => {
  const options = generateOptions('charmander')

  test('Charmander breadcrumb is shown', async () => {
    const { getAllByText } = render(Page, options)

    await flushPromises()

    expect(getAllByText('Charmander')[0]).toBeVisible()
  })

  test('Charmander name is shown', async () => {
    const { getAllByText } = render(Page, options)

    await flushPromises()

    expect(getAllByText('Charmander')[1]).toBeVisible()
  })

  each([
    ['number', 'No. 004'],
    ['weight', '85 kg'],
    ['height', '6m'],
    ['type', 'Fire']
  ]).test('%s is shown', async (_: string, value: string) => {
    const { getByText } = render(Page, options)

    await flushPromises()

    expect(getByText(value)).toBeVisible()
  })
})

describe('Pidgey', () => {
  const options = generateOptions('pidgey')

  test('Pidgey breadcrumb is shown', async () => {
    const { getAllByText } = render(Page, options)

    await flushPromises()

    expect(getAllByText('Pidgey')[0]).toBeVisible()
  })

  test('Pidgey name is shown', async () => {
    const { getAllByText } = render(Page, options)

    await flushPromises()

    expect(getAllByText('Pidgey')[1]).toBeVisible()
  })

  each([
    ['number', 'No. 016'],
    ['weight', '18 kg'],
    ['height', '3m'],
    ['type1', 'Normal'],
    ['type2', 'Flying']
  ]).test('%s is shown', async (_: string, value: string) => {
    const { getByText } = render(Page, options)

    await flushPromises()

    expect(getByText(value)).toBeVisible()
  })
})
