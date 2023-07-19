import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
       
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json()

        if (res.ok && user) {
          return user.user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/Signin"
  }
}