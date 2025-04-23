import { Spirit } from "../types/Spirits";
import React, { useEffect, useState } from "react";
import SpiritCard from "./components/SpiritCard";
import FetchSpirits from "./Fetchs/FetchSpirits";

export default function SpiritsInfo() {
    const [spirits, setSpirits] = useState<Spirit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpirits = async () => {
            try {
                const data = await FetchSpirits();
                setSpirits(data.filter((s) => s.name && s.id));
            } catch (err) {
                setError("Failed to fetch spirits");
            } finally {
                setLoading(false);
            }
        };
        fetchSpirits();
    }, []);

    if (loading) return <div className="flex justify-center p-4">Loading...</div>;
    if (error) return <div className="flex justify-center p-4 text-red-500">{error}</div>;
    if (spirits.length === 0) return <div className="flex justify-center p-4">No spirits found</div>;

    return (
        <div className="w-full h-auto flex flex-col items-center gap-4 px-4 py-6">
            <h1 className="text-3xl font-bold text-center">Espíritus del juego</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {spirits.map((spirit) => (
                    <SpiritCard key={spirit.id} spirit={spirit} />
                ))}
            </div>
        </div>
    );
}


