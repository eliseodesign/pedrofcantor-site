import '@/styles/globals.scss'
import '@/styles/variables.scss'
import { Inter } from 'next/font/google'
import NavBar from '@/shared/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
