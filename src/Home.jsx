import React, { useState } from "react";
import WeaponComparator from "./WeaponComparator";
import BossesInfo from "./BossesInfo";
import TalismanInfo from "./TalismanInfo";
import SpiritsInfo from "./SpiritsInfo";

export default function App() {
  const [view, setView] = useState("home");

  const goToHome = () => setView("home");
  const goToComparator = () => setView("comparator");
  const goToBosses = () => setView("bosses");
  const goToTalismans = () => setView("talismans");
  const goToSpirits = () => setView("spirits");

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {view === "home" && (
        <>
          <h1 className="text-2xl font-bold mb-6">Seleccione una opción</h1>
          <div className="flex flex-col gap-4">
            <button
              onClick={goToComparator}
              className="px-6 py-2 bg-[#FEA82F] text-white rounded hover:bg-amber-400/50 cursor-pointer"
            >
              Comparador de Armas
            </button>
            <button
              onClick={goToBosses}
              className="px-6 py-2 bg-[#FEA82F] text-white rounded hover:bg-amber-400/50 cursor-pointer"
            >
             Jefes del Juego
            </button>
            <button
              onClick={goToTalismans}
              className="px-6 py-2 bg-[#FEA82F] text-white rounded hover:bg-amber-400/50 cursor-pointer"
            >
              Talismanes del juego
            </button>
            <button
              onClick={goToSpirits}
              className="px-6 py-2 bg-[#FEA82F] text-white rounded hover:bg-amber-400/50 cursor-pointer"
            >
             Espíritus del juego
            </button>
          </div>
        </>
      )}

      {view === "comparator" && (
        <>
          <button
            onClick={goToHome}
            className="self-start mb-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-400 fixed top-2 left-4 hover:cursor-pointer"
          >
            ← Volver al Inicio
          </button>
          <WeaponComparator />
        </>
      )}

      {view === "bosses" && (
        <>
          <button
            onClick={goToHome}
            className="self-start mb-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-400 fixed top-2 left-4 hover:cursor-pointer"
          >
            ← Volver al Inicio
          </button>
          <BossesInfo />
        </>
      )}

      {view === "talismans" && (
        <>
          <button
            onClick={goToHome}
            className="self-start mb-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-400 fixed top-2 left-4 hover:cursor-pointer"
          >
            ← Volver al Inicio
          </button>
          <TalismanInfo />
        </>
      )}
      {view === "spirits" && (
        <>
          <button
            onClick={goToHome}
            className="self-start mb-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-400 fixed top-2 left-4 hover:cursor-pointer"
          >
            ← Volver al Inicio
          </button>
          <SpiritsInfo />
        </>
      )}
    </div>
  );
}
