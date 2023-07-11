import NextAuth from 'next-auth'
import CredencialProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'

const handler = NextAuth({
  providers:[
    CredencialProvider({
      name:'credentials',
      credentials:{
        username: {label: 'username', type: 'text', placeholder:'Usuario'},
        password: {label: 'password', type: 'password', placeholder:'Contraseña'}
      },
      async authorize(credentials, req){

        if(credentials === undefined) throw new Error('Credenciales no proporcionadas')

        const admin = await prisma.user.findUnique({
          where: { username:credentials.username },
          include: {
            role : true
          }
        })

        if(
          !admin ||
          admin.password != credentials.password
          ) throw new Error('Credenciales invalidas')
      
        return admin as any
      },
    })
  ],
  callbacks:{
    jwt({token, user}){
      if(user) token.user = user
      return token
    },
    session({session, token}){
      session.user = token.user as any
      return session
    }
  },
  pages:{
    // signIn: '/login',
  }
})

export { handler as GET, handler as POST }

