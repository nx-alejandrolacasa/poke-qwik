export type Pokemon = {
  height: number
  name: string
  order: number
  sprites: {
    other: {
      'official-artwork': {
        front_default?: string
      }
    }
  }
  types: { type: { name: string } }[]
  weight: number
}

export type PokemonList = {
  count: number
  results: Pokemon[]
}
