import { render } from '~/tests/VuetifyRender'
import PokemonBreadcrumbs from '~/components/PokemonBreadcrumbs.vue'
import VueRouter from 'vue-router'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('PokemonBreadcrumbs.vue', () => {
  test('nothing is provided and the root level breadcrumb is visible', async () => {
    const { getByText } = render(PokemonBreadcrumbs, {
      // localVue,
      propsData: {
        name: ''
      }
    })

    expect(getByText('Pokemon')).toBeVisible()
  })

  test('ivysaur is provided and the current level breadcrumb is visible', async () => {
    const { getByText } = render(PokemonBreadcrumbs, {
      propsData: {
        name: 'ivysaur'
      },
      stubs: ['router-link']
    })

    expect(getByText('Ivysaur')).toBeVisible()
  })
})
