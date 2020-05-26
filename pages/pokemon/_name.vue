<template>
  <div>
    <pokemon-breadcrumbs :name="pokemon.name" />

    <v-container v-if="pokemon.id !== 0">
      <v-row justify="center">
        <v-col cols="4">
          <div class="pa-1 pa-md-7">
            <v-img :src="pokemon.sprite" />
          </div>

          <div class="text-center">No. {{ pokemon.id | padStart(3, '0') }}</div>
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col>{{ pokemon.name | capitalize }}</v-col>
      </v-row>

      <v-row>
        <v-col cols="3" class="text-right">{{ pokemon.height }}m</v-col>

        <v-col class="text-center">
          <type-chip v-for="type in pokemon.types" :key="type" class="mr-2" :type="type" />
        </v-col>

        <v-col cols="3" class="text-left">{{ pokemon.weight }} kg</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { EmptyPokemon } from '../../tests/Fixtures/Pokemon'
import { Pokedex, Pokemon } from '~/libs/pokedex/Pokedex'
import TypeChip from '~/components/TypeChip.vue'
import { capitalize, padStart } from '~/filters/StringFilters'
import PokemonBreadcrumbs from '~/components/PokemonBreadcrumbs.vue'

@Component({
  components: { TypeChip, PokemonBreadcrumbs },
  filters: { capitalize, padStart }
})
export default class PokemonName extends Vue {
  pokemon: Pokemon = { ...EmptyPokemon }

  async created() {
    const { name } = this.$route.params
    this.pokemon = await Pokedex.getByName(name)
  }
}
</script>
