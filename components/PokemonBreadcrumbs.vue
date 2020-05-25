<template>
  <v-breadcrumbs :items="breadcrumbs" large />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { capitalize } from '~/filters/StringFilters'

@Component({
  filters: { capitalize }
})
export default class PokemonBreadcrumbs extends Vue {
  @Prop({ required: true })
  readonly name!: string

  get breadcrumbs() {
    return [
      {
        text: 'Pokemon',
        disabled: false,
        to: '/'
      },
      {
        text: capitalize(this.name),
        disabled: true
      }
    ]
  }
}
</script>
