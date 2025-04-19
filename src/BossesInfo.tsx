import React, { useState, useEffect } from "react";
import FetchBosses from "./Fetchs/FetchBosses";
import { Boss } from "../types/Boss";
import BossCard from "./components/BossCard";

export default function BossesInfo() {
  const [bosses, setBosses] = useState<Boss[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const data = await FetchBosses();
        setBosses(data.filter(b => b.name && b.id));
      } catch (err) {
        setError("Failed to fetch bosses");
      } finally {
        setLoading(false);
      }
    };
    fetchBosses();
  }, []);

  if (loading) return <div className="flex justify-center p-4">Loading...</div>;
  if (error) return <div className="flex justify-center p-4 text-red-500">{error}</div>;
  if (bosses.length === 0) return <div className="flex justify-center p-4">No bosses found</div>;

  return (
    <div className="w-full h-auto flex flex-col items-center gap-4 px-4 py-6">
      <h1 className="text-3xl font-bold text-center">Jefes del juego</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {bosses.map((boss) => (
          <BossCard key={boss.id} boss={boss} />
        ))}
      </div>
    </div>
  );
}
