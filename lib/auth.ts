import GitHubProvider from "next-auth/providers/github";

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
        async jwt({account , token }){
            if(account) {
                token.accessToken = account.access_token
            }
            return token
        } ,
        async session({token , session}) {
            session.accessToken = token.accessToken;
            return session;
        }
    } ,
    secret : process.env.NEXTAUTH_SECRET
}