import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl, headers } }) {
      const isLoggedIn = !!auth?.user;
      const urlParams = new URLSearchParams(nextUrl.search);
      const paramValue = urlParams.get("access"); // 替换 'paramName' 为你的参数名
      let authorization;
      if (paramValue) {
        authorization = paramValue;
      } else {
        // 例如，获取特定的 header
        authorization = headers.get("Authorization"); // 替换 'your-header-name' 为你的 header 名称
      }
      console.log("Authorization:", authorization);
      console.log("urlParams:", urlParams);
      const isOnChat = nextUrl.pathname.startsWith("/");
      const isOnRegister = nextUrl.pathname.startsWith("/register");
      const isOnLogin = nextUrl.pathname.startsWith("/login");

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL("/", nextUrl as unknown as URL));
      }

      if (authorization === process.env.ACCESS_TOKEN) {
        return true;
      }

      if (isOnRegister || isOnLogin) {
        return true; // Always allow access to register and login pages
      }

      if (isOnChat) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      if (isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl as unknown as URL));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
