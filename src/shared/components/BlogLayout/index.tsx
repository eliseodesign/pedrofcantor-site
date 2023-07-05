interface Childs {
  children: React.ReactNode
}

// globals styles
import '@/styles/globals.scss'
import '@/styles/variables.scss'
import './scss/index.scss'
// componets layout

//fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function BlogLayout({ children }: Childs) {
  return (
    <section lang="en" className={inter.className}>
      <div className='blog-layout'>
        {children}
      </div>
    </section>
  )
}

export default BlogLayout;