import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import prisma from "../../../clients/prisma"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  events: {
    signIn: async ({user, account, profile, isNewUser}) => {
      try {
        await prisma.budget.create({
          data: {
            email: user.email,
            income: 0,
            expense: 0,
            transactions: "[]"
          }
        })
      }
      catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
          // Thrown when existing user signs in
          // Nothing done if existing user signs in
        }
        else {
          console.error(`Error Occurred: ${err.message}`)
        }
      }
    }
  },
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)