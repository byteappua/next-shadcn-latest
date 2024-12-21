import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string; // Add user ID type
    } & DefaultSession["user"]; // Keep existing user properties
  }
}
