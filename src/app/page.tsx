import styles from './page.module.scss'
import { getSEO } from '@/shared/seoData'

export const metadata = getSEO("INICIO")

export default function Home() {
  return (
    <main className={styles.main}>
      Home
    </main>
  )
}
