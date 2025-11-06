"use client"

import { getGithubStats } from "@/app/actions/getContributionStats";


export default function OpenSourceStats() {

    const buttonHandler = async()=>{
        const data = await getGithubStats()
        console.log(data.viewer.contributionsCollection)
    }


    return <div>
        <button onClick={buttonHandler}>
            getStats
        </button>
    </div>
}