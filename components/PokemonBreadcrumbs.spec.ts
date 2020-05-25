import { render } from '~/tests/VuetifyRender'
import PokemonBreadcrumbs from '~/components/PokemonBreadcrumbs.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('PokemonBreadcrumbs.vue', () => {
  test('nothing is provided and the root level breadcrumb is visible', async () => {
    const { getByText } = render(PokemonBreadcrumbs, {
      propsData: {
        name: ''
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(getByText('Pokemon')).toBeVisible()
  })

  test('nothing is provided and the root level breadcrumb is a link', async () => {
    const { getByText } = render(PokemonBreadcrumbs, {
      propsData: {
        name: ''
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(getByText('Pokemon')).toBeInstanceOf(HTMLAnchorElement)
  })

  test('ivysaur is provided and the current level breadcrumb is visible', async () => {
    const { getByText } = render(PokemonBreadcrumbs, {
      propsData: {
        name: 'ivysaur'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(getByText('Ivysaur')).toBeVisible()
  })
})
