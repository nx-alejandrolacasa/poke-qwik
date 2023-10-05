import type { Pokemon } from '~/types'

export async function fetchPokemonByName(
  name: string,
  init?: RequestInit
): Promise<Pokemon> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name, init)
  return res.json()
}

export function getPokemonImage(pokemon: Pokemon) {
  return (
    pokemon.sprites.other['official-artwork'].front_default ?? '/not-found.svg'
  )
}
