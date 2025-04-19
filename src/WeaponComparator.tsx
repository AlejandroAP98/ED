import React, { useEffect, useState } from "react";
import FetchWeapons from "./Fetchs/FetchWeapons";
import { Weapon } from "../types/Weapon";
import WeaponCard from "./components/WeaponCard";

export default function WeaponComparator() {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [weapon1, setWeapon1] = useState<Weapon | null>(null);
  const [weapon2, setWeapon2] = useState<Weapon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const data = await FetchWeapons();
        setWeapons(data.filter(w => w.name && w.id));
      } catch (err) {
        setError("Failed to fetch weapons");
      } finally {
        setLoading(false);
      }
    };
    fetchWeapons();
  }, []);

  const handleWeaponChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setWeapon: (weapon: Weapon | null) => void
  ) => {
    const selectedWeapon = weapons.find(
      (weapon) => weapon.id === event.target.value
    );
    setWeapon(selectedWeapon || null);
  };

  const categories = Array.from(new Set(weapons.map(w => w.category))).filter(Boolean);
  const filteredWeapons = selectedCategory
    ? weapons.filter(w => w.category === selectedCategory)
    : weapons;

  if (loading) return <div className="flex justify-center p-4">Loading...</div>;
  if (error) return <div className="flex justify-center p-4 text-red-500">{error}</div>;

  return (
    <div className="w-full px-4 py-6 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold text-center">Comparar Armas</h1>

      {/* Selector de categoría */}
      <select
        className="p-2 border rounded text-sm bg-[#124e52] text-white w-full max-w-sm"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="">Todas las categorías</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Selectores de armas */}
      <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-4">
        <select
          onChange={(e) => handleWeaponChange(e, setWeapon1)}
          className="p-2 text-sm rounded bg-[#124e52] text-white w-full"
        >
          <option value="">Selecciona Arma 1</option>
          {filteredWeapons.map((weapon) => (
            <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
          ))}
        </select>

        <select
          onChange={(e) => handleWeaponChange(e, setWeapon2)}
          className="p-2 text-sm rounded bg-[#124e52] text-white w-full"
        >
          <option value="">Selecciona Arma 2</option>
          {filteredWeapons.map((weapon) => (
            <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
          ))}
        </select>
      </div>

      {/* Tarjetas comparativas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mt-4">
        {weapon1 && <WeaponCard weapon={weapon1} />}
        {weapon2 && <WeaponCard weapon={weapon2} />}
      </div>
    </div>
  );
}
