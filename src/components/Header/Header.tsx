import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

export const Header = component$(() => {
  return (
    <header class="flex h-20 items-center justify-center">
      <nav class="flex w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link href="/" title="Go home">
          <Image
            alt="Pokemon"
            class="h-16"
            height={64}
            src="/pokemon-logo.svg"
            width={175}
          />
        </Link>
        <Link class="text-xl font-bold hover:underline" href="/pokedex">
          Pokédex
        </Link>
      </nav>
    </header>
  )
})
