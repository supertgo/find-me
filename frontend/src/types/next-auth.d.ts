import "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    access_token?: string
    email: string
  }

  interface User {
    id?: string
    access_token?: string
    error?: string
  }
}
