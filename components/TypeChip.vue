<template>
  <v-chip :class="chipClass" dark>{{ type | capitalize }}</v-chip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { capitalize } from '~/filters/StringFilters'

@Component({
  filters: {
    capitalize
  }
})
export default class TypeChip extends Vue {
  @Prop({ required: true })
  readonly type!: string

  get chipClass(): Record<string, boolean> {
    return {
      ['bg-' + this.type]: true,
      'white-text': true
    }
  }
}
</script>
