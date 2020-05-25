<template>
  <v-list-item v-if="pokemon" @click="navigate">
    <v-list-item-avatar tile :size="80">
      <v-img :src="pokemon.sprite" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ pokemon.name | capitalize }}</v-list-item-title>

      <v-list-item-subtitle>
        <type-chip v-for="type in pokemon.types" :key="type" class="mr-2" :type="type" />
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Pokedex, Pokemon } from '../libs/pokedex/Pokedex'
import { capitalize } from '~/filters/StringFilters'
import TypeChip from './TypeChip.vue'

@Component({
  filters: {
    capitalize
  },
  components: {
    TypeChip
  }
})
export default class PokemonListItem extends Vue {
  pokemon: Pokemon | null = null

  @Prop({ required: true })
  readonly name!: string

  async created() {
    this.pokemon = await Pokedex.getByName(this.name)
  }

  navigate() {
    this.$router.push({
      name: 'pokemon-name',
      params: {
        name: this.name
      }
    })
  }
}
</script>
