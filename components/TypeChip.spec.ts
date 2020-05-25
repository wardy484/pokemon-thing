import { render } from '~/tests/VuetifyRender'
import TypeChip from '~/components/TypeChip.vue'
import { Types } from '~/types/PokemonTypes'

describe('TypeChip.vue', () => {
  test('Dragon type is provided and label is visible', async () => {
    const { getByText } = render(TypeChip, {
      propsData: {
        type: Types.Dragon
      }
    })

    expect(getByText('Dragon')).toBeVisible()
  })

  test('Dragon type is provided and chip has a bg-dragon class', async () => {
    const { baseElement, debug } = render(TypeChip, {
      propsData: {
        type: Types.Dragon
      }
    })

    // V-Chip forward any attributes to the first child component so
    // where I'd set it at root level we have to look down one level.
    expect(baseElement.firstChild).toHaveClass('bg-dragon')
  })
})
