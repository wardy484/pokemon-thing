import { Charmander, Pidgey } from '~/tests/Fixtures/PokemonResponse'

export const listOfPokemon = [
  {
    name: 'charmander'
  },
  {
    name: 'pidgey'
  }
]

export const mockGetPokemonsList = jest.fn(async () => {
  return await {
    results: [...listOfPokemon]
  }
})

export const mockGetPokemonByName = jest.fn((pokemon: string) => {
  switch (pokemon) {
    case 'charmander':
      return { ...Charmander }
    case 'pidgey':
      return { ...Pidgey }
  }
})

export default jest.fn().mockImplementation(() => {
  return {
    getPokemonsList: mockGetPokemonsList,
    getPokemonByName: mockGetPokemonByName
  }
})
