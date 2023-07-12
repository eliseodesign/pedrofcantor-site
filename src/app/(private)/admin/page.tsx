'use client'
import { MarkdownEditor } from '../components/MarkdownEditor'
import { useSession } from 'next-auth/react'

function Admin() {
  const { data: session, status } = useSession()
  
  console.log(session, status)
  return (
    <div>
      <MarkdownEditor />
    </div>
  )
}

export default Admin