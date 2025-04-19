
import { Weapon } from "../../types/Weapon";

export default async function FetchWeapons(): Promise<Weapon[]> {
  const res = await fetch("https://eldenring.fanapis.com/api/weapons?limit=100");
  const data = await res.json();
  return data.data;
}

