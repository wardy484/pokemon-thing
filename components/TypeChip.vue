<template>
  <v-chip :class="chipClass" dark>{{ type | capitalize }}</v-chip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { capitalize } from '~/filters/StringFilters'
import { Types } from '~/types/PokemonTypes'

@Component({
  filters: {
    capitalize
  }
})
export default class TypeChip extends Vue {
  @Prop({ required: true })
  readonly type!: Types

  get chipClass(): Record<string, boolean> {
    return {
      ['bg-' + this.type]: true,
      'white-text': true
    }
  }
}
</script>
