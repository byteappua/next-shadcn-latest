import NextAuth, { type User, type Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "./auth.config";

interface ExtendedSession extends Session {
  user: User;
}

interface ExtendedToken {
  id?: string;
  [key: string]: unknown;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      /**
       * Authorize a user based on provided credentials.
       *
       * @param credentials - Object containing user email and password.
       * @returns User object if successful, otherwise null.
       */
      async authorize(credentials) {
        // Check if email and password are provided
        if (!credentials?.email || !credentials?.password) return null;

        // Return a user object if authorization is successful
        return {
          id: "1",
          email: "demo@qq.com",
          password: "123456",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }: { session: ExtendedSession; token: ExtendedToken }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
