import { mockGetPokemonsList } from '~/__mocks__/pokedex-promise-v2'
import { Pokedex } from '~/libs/pokedex/Pokedex'
import { Charmander } from '~/tests/Fixtures/Pokemon'

describe('getAll', () => {
  test('no limit is specified, 151 is passed to the client', async () => {
    await Pokedex.getAll()

    expect(mockGetPokemonsList).toHaveBeenCalledWith({
      limit: 151
    })
  })

  test('an array of pokemon names is returned', async () => {
    const list = await Pokedex.getAll()

    expect(list).toEqual(['charmander', 'pidgey'])
  })
})

describe('getByName', () => {
  test('charmander is returned when queried', async () => {
    const charmander = await Pokedex.getByName('charmander')

    expect(charmander).toEqual({ ...Charmander })
  })
})
