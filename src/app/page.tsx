import { getSEO } from '@/shared/seoData'
import Header from '@/app/components/Header'

export const metadata = getSEO("INICIO")

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}
