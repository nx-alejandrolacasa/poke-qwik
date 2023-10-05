import { component$ } from '@builder.io/qwik'
import { useServerTimeLoader } from '~/routes/layout'

export const Footer = component$(() => {
  const serverTime = useServerTimeLoader()
  const date = new Date(serverTime.value.date)

  return (
    <footer class="w-screen">
      <div class="mx-auto max-w-5xl p-6">
        Copyright &copy; nexum {date.getFullYear()}
      </div>
    </footer>
  )
})
