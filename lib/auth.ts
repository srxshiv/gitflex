import GitHubProvider from "next-auth/providers/github";
import type { JWT } from "next-auth/jwt";
import type { Account , Session } from "next-auth";


export const authOptions= {
    providers : [
        GitHubProvider({
            clientId : process.env.GITHUB_CLIENT_ID! ,
            clientSecret : process.env.GITHUB_SECRET! ,
            authorization: {
                params: {
                  scope: "read:user user:email repo",
                },
              },
        } ) 
    ] ,
    callbacks : {
        async jwt({account , token } : {account : Account | null , token : JWT}){
            if(account) {
                token.accessToken = account.access_token
            }
            return token
        } ,
        async session({token , session} : {token : JWT , session : Session}) {
            session.accessToken = token.accessToken as string
            return session;
        }
    } ,
    secret : process.env.NEXTAUTH_SECRET
}