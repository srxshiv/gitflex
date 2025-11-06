"use client";

import { useSession } from "next-auth/react";
import axios from "axios";

export default function GetData() {
  const session = useSession();
  async function getGithubData() {
    const response = await axios.get(`https://api.github.com/user/repos`, {
      headers: {
        Authorization: "Bearer " + session?.data?.accessToken,
      },
    });

    return response.data;
  }

  return (
    <div>
      <button onClick={getGithubData}>GET DATA</button>
    </div>
  );
}
