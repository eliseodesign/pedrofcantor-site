'use client'
import CreateArticle from '../components/CreateArticle'
import { useSession } from 'next-auth/react'

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