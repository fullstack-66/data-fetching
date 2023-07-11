"use client";

import { useEffect } from "react";
import DisplayPost from "@components/utils/displayTime";
import { type Time } from "@components/utils/types";
import usePostStore from "@components/utils/postStore";

async function getPosts() {
  console.log("This is fetching data from ClientGlobalStore.");
  const res = await fetch("http://localhost:3001");
  const data = (await res.json()) as Time;
  return data;
}

const ClientGlobalStore = () => {
  const [data, setData] = usePostStore((state) => [state.time, state.setTime]);

  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);

  return <DisplayPost time={data} />;
};

export default ClientGlobalStore;