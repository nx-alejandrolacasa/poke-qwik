import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'
import type { Pokemon } from '~/types'
import { getPokemonImage } from '~/utils/pokemon.utils'
import { component$ } from '@builder.io/qwik'

type PokemonTileProps = {
  loading?: boolean
  pokemon: Pokemon
}

export const PokemonTile = component$<PokemonTileProps>(
  ({ loading = false, pokemon }) => {
    {
      return (
        <div class="overflow-hidden rounded-xl border-4 border-slate-200 bg-slate-100 text-center shadow-lg hover:border-slate-500">
          <Link href={`/pokemon/${pokemon.name}`} title={pokemon.name}>
            <Image
              alt={`${pokemon.name} official artwork`}
              class="aspect-square p-4"
              height={475}
              src={loading ? '/loading.svg' : getPokemonImage(pokemon)}
              width={475}
            />
            <span class="block truncate bg-slate-200 py-4 text-xl font-bold capitalize">
              {pokemon.name.replaceAll('-', ' ')}
            </span>
          </Link>
        </div>
      )
    }
  }
)
