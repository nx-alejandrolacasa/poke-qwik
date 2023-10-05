import type { Pokemon } from '~/types'

export async function fetchPokemonByName(
  name: string,
  init?: RequestInit
): Promise<Pokemon> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name, init)
  return res.json()
}

export function getPokemonName(name: string) {
  return name
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function getPokemonImage(pokemon: Pokemon) {
  return (
    pokemon.sprites.other['official-artwork'].front_default ?? '/not-found.svg'
  )
}
