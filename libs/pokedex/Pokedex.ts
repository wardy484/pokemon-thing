import PokedexPromise from 'pokedex-promise-v2'

const pokedex = new PokedexPromise()

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprite: string
  types: string[]
}

class PokedexClient {
  async getAll(limit: number = 151): Promise<string[]> {
    const { results } = await pokedex.getPokemonsList({
      limit: Math.max(limit - 1, 0) // 0 index pokemon numbers /shurg
    })

    return results.map((result) => result.name)
  }

  async getByName(name: string): Promise<Pokemon> {
    const pokemon = await pokedex.getPokemonByName(name)

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      // sprite: pokemon.sprites.front_default,
      sprite: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
      types: pokemon.types.map(({ type }) => type.name)
    }
  }
}

export const Pokedex = new PokedexClient()
