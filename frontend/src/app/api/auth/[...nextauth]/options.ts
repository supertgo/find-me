import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserType } from 'protocols/external/user/user';
import { PostAuthLoginRouteConst } from 'utils/routes';
import { SignInUrl } from 'utils/urls';

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/${PostAuthLoginRouteConst}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          ).then((res) => res.json());


          if (response.message) throw new Error(response.message);

          const authMeResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            }
          }).then((res) => res.json())


          return {
            name: authMeResponse.data.name,
            email: credentials?.email,
            password: credentials?.password,
            type: authMeResponse.data.type as UserType,
            access_token: response.access_token,
          };
        } catch (error) {
          if (error instanceof Error) {
            return { error: error.message };
          }

          return { error: 'Ocorreu um erro, tente novamente!' };
        }
      },
    }),
  ],
  pages: {
    signIn: `/${SignInUrl}`,
  },
  callbacks: {
    async signIn({ user }) {
      if (user.error) {
        throw new Error(user.error);
      }
      return true;
    },
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

