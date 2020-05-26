export const Charmander: PokemonResult = {
  id: 4,
  name: 'charmander',
  is_default: true,
  order: 1,
  height: 6,
  weight: 85,
  base_experience: 65,
  sprites: {
    back_female: 'back_female',
    back_shiny_female: 'back_shiny_female',
    back_default: 'back_default',
    front_female: 'front_female',
    front_shiny_female: 'front_shiny_female',
    back_shiny: 'back_shiny',
    front_default: 'front_default',
    front_shiny: 'front_shiny'
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://something.com/fire!'
      }
    }
  ]
}

export const Pidgey: PokemonResult = {
  id: 16,
  name: 'pidgey',
  is_default: true,
  order: 1,
  base_experience: 58,
  height: 3,
  weight: 18,
  sprites: {
    back_female: 'back_female',
    back_shiny_female: 'back_shiny_female',
    back_default: 'back_default',
    front_female: 'front_female',
    front_shiny_female: 'front_shiny_female',
    back_shiny: 'back_shiny',
    front_default: 'front_default',
    front_shiny: 'front_shiny'
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'flying',
        url: 'https://something.com/flying!'
      }
    },
    {
      slot: 2,
      type: {
        name: 'normal',
        url: 'https://something.com/normal!'
      }
    }
  ]
}
