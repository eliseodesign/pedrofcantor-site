'use client'
import { useSession } from 'next-auth/react'
import { CreateArticle } from '../components'

function Admin() {
  const { data: session, status } = useSession()
  
  console.log(session, status)
  return (
    <div>
      <CreateArticle />
    </div>
  )
}

export default Admin