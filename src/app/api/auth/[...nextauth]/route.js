import NextAuth from "next-auth/next";
import GoogleProvider from"next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt"
const handler = NextAuth({
    providers:[
     CredentialsProvider({
        id: 'credentials',
        name: 'Credentials',
     /*    async authorize(credentials){
            await connect();
            try {
                const user = await User.findOne({email: credentials.email});
                console.log(user)
                if(user){
                   const isPasswordCorrent = credentials.password === user.password ? true :false
                   if(isPasswordCorrent){
                    return user
                   }else{
                    throw new Error("Password wrong")
                   }
                }else{
                    throw new Error("User not found")
                }
            } catch (error) {
                
            }
        }
     }) */
        async authorize(credentials){
            await connect();
            try {
                const user = await User.findOne({email: credentials.email});
                if(user){
                   const isPasswordCorrent = await bcrypt.compare(
                    credentials.password,
                    user.password
                   )
                   if(isPasswordCorrent){
                    return user
                   }else{
                    throw new Error("Password wrong")
                   }
                }else{
                    throw new Error("User not found")
                }
            } catch (error) {
               throw new Error(error)
            }
        }
     })
    ],
    session:{
        strategy:"jwt"
    },
    pages: {
        signIn: '/dashboard',
        error: `/dashboard/login`
      },
})

export {handler as GET, handler as POST};