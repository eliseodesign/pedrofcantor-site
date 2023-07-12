import { getSEO } from '@/shared/seoData'
import { Header, Cita} from './components'

export const metadata = getSEO('INICIO')

export default async function Home() {
  return (
    <main>
      <Header />
      <Cita />
    </main>
  )
}
