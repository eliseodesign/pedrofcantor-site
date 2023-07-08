import { getSEO } from '@/shared/seoData'
import { Header, Cita} from './components'
import { AdminQueries } from '@/database/queries/admin'

export const metadata = getSEO("INICIO")

export default async function Home() {
  const s = new AdminQueries()
  const result = await s.selectAll()
  return (
    <main>
      <Header />
      <Cita />

      {
        JSON.stringify(
          result
        )
      }
    </main>
  )
}
