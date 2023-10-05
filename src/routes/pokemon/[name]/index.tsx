import {
  fetchPokemonByName,
  getPokemonImage,
  getPokemonName,
} from '~/utils/pokemon.utils'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { Pokemon } from '~/types'
import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'

export const usePokemon = routeLoader$<Pokemon>(async (requestEvent) => {
  return await fetchPokemonByName(requestEvent.params.name)
})

export const head: DocumentHead = ({ resolveValue, params }) => {
  const pokemon = resolveValue(usePokemon)
  return {
    title: `PokéQwik - ${getPokemonName(pokemon.name)}`,
    meta: [
      {
        name: 'description',
        content: 'Pokémon app developed with Qwik ⚡',
      },
      {
        name: 'name',
        content: params.name,
      },
    ],
  }
}

export default component$(() => {
  const pokemon = usePokemon()

  if (!pokemon.value) {
    return <div>Loading...</div>
  }

  return (
    <div class="flex w-full flex-col justify-between md:flex-row">
      <div>
        <h2 class="mb-4 block truncate text-2xl font-bold capitalize md:text-4xl">
          <span class="text-slate-500">#{pokemon.value.order}</span>&nbsp;
          {pokemon.value.name}
        </h2>
        <ul class="flex flex-col gap-2 py-5 text-lg md:gap-4 md:pt-10 md:text-2xl">
          <li>
            {pokemon.value.types.length > 1 ? 'Types' : 'Type'}:&nbsp;
            <b class="capitalize">
              {pokemon.value.types.map(({ type }) => type.name).join(', ')}
            </b>
          </li>
          <li>
            Height: <b>{pokemon.value.height} dm.</b>
          </li>
          <li>
            Weight: <b>{pokemon.value.weight} hg.</b>
          </li>
        </ul>
      </div>
      <div>
        <Image
          class="mt-5 aspect-square rounded-2xl bg-slate-200 md:ml-10 md:mt-0"
          src={getPokemonImage(pokemon.value)}
          alt={`${pokemon.value.name} official artwork`}
          height={475}
          width={475}
        />
      </div>
    </div>
  )
})
