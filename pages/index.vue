<template>
  <v-list three-line>
    <v-list-item-group>
      <template v-for="(pokemon, index) in pokemons">
        <div :key="index">
          <pokemon-list-item :name="pokemon" />

          <v-divider />
        </div>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Pokedex } from '~/libs/pokedex/Pokedex'
import PokemonListItem from '~/components/PokemonListItem.vue'

@Component({
  components: { PokemonListItem }
})
export default class Index extends Vue {
  pokemons: string[] = []

  async created() {
    this.pokemons = await Pokedex.getAll(151)
  }
}
</script>
