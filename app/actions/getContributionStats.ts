"use server"

import { CONTRIBUTIONS_QUERY } from "@/lib/queries/contributions"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import axios from "axios"
import type { JWT } from "next-auth/jwt"

export const getContributions= async (query: string , accessToken : string)=>{
    const response = await axios.post("https://api.github.com/graphql" , {query} , {
        headers : {
            Authorization : `Bearer ${accessToken}`
        } ,
    })
    return response.data.data
}


export async function getGithubStats(){
    const session = await getServerSession(authOptions);
    const token = session?.accessToken 

    if (!token) throw new Error("No access token available.");

    const data = await getContributions(CONTRIBUTIONS_QUERY , token)


    return data
}