declare interface Config {
  protocol?: string
  hostName?: string
  versionPath?: string
  cacheLimit?: number
  timeout?: number
}

declare interface ResourceListOptions {
  offset?: number
  limit?: number
}

declare interface ResourceDetails {
  name: string
  url: string
}

declare interface ResourceListResult {
  count: number
  next?: string
  previous?: string
  results: ResourceDetails[]
}

declare interface PokemonResult {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: {
    is_hidden: boolean
    slot: number
    ability: ResourceDetails
  }[]
  sprites: {
    back_female: string
    back_shiny_female: string
    back_default: string
    front_female: string
    front_shiny_female: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  types: {
    slot: number
    type: ResourceDetails
  }[]
}

declare class PokeApi {
  constructor(config?: Config)

  getPokemonsList(options: ResourceListOptions): ResourceListResult

  getPokemonByName(identifier: string | number): PokemonResult
}

declare module 'pokedex-promise-v2' {
  export default PokeApi
}
