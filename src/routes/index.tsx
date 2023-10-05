import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'
import { PokemonTile } from '~/components/PokemonTile/PokemonTile'
import { fetchPokemonByName } from '~/utils/pokemon.utils'
import type { Pokemon } from '~/types'

export const useInitialPokemon = routeLoader$<Pokemon[]>(async () => {
  return await Promise.all([
    fetchPokemonByName('pikachu'),
    fetchPokemonByName('charmander'),
    fetchPokemonByName('squirtle'),
    fetchPokemonByName('bulbasaur'),
  ])
})

export default component$(() => {
  const pokemons = useInitialPokemon()

  return (
    <ul class="grid grid-cols-2 gap-4">
      {pokemons.value.filter(Boolean).map((pokemon) => (
        <li class="list-none" key={pokemon.name}>
          <PokemonTile pokemon={pokemon} />
        </li>
      ))}
    </ul>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
