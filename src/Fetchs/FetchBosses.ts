import {Boss} from "../../types/Boss";

export default async function FetchBosses(): Promise<Boss[]> {
  const res = await fetch("https://eldenring.fanapis.com/api/bosses?limit=100");
  const data = await res.json();
    return data.data; 
}