import { Talisman } from "../../types/Talisman";

export default async function FetchTalisman(): Promise<Talisman[]> {
  const res = await fetch("https://eldenring.fanapis.com/api/talismans?limit=100");
  const data = await res.json();
  return data.data;
}

