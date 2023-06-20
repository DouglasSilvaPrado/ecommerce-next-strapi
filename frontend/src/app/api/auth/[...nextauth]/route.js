import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import axios from 'axios';

const login = async (credentials) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, credentials, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Login failed", error);
  }
};

export const authOption = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        // Adicione aqui a lógica para autenticar o usuário com base nas credenciais fornecidas
        // Consulte a documentação do Strapi.io para obter detalhes sobre como autenticar usando sua API
        const user = await login(credentials);
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: "/Signin",
  }
}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST }