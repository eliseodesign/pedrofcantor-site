import { getSEO } from '@/shared/seoData'
import { Header, Cita} from '@/app/components/'

export const metadata = getSEO("INICIO")

export default function Home() {
  return (
    <main>
      <Header />
      <Cita />
    </main>
  )
}
