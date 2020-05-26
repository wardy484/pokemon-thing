import { Charmander, Pidgey } from '~/tests/Fixtures/Pokemon'

export const listOfPokemon = [
  {
    name: 'charmander'
  },
  {
    name: 'pidgey'
  }
]

export const mockGetAll = jest.fn(async () => {
  return await ['charmander', 'pidgey']
})

export const mockGetByName = jest.fn((pokemon: string) => {
  switch (pokemon) {
    case 'charmander':
      return { ...Charmander }
    case 'pidgey':
      return { ...Pidgey }
  }
})

export const Pokedex = {
  getAll: mockGetAll,
  getByName: mockGetByName
}
