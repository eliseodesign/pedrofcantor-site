interface Childs {
  children: React.ReactNode
}

// globals styles
import '@/styles/globals.scss'
import '@/styles/variables.scss'
// componets layout
import NavBar from '@/shared/components/NavBar'
//fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function BlogLayout({ children }: Childs) {
  return (
    <div lang="en" className={inter.className}>
      <NavBar />
      {children}
    </div>
  )
}

export default BlogLayout;