import {Talisman} from '../../types/Talisman'
import React, {useState, useEffect} from "react";

const TalismanCard = ({talisman}: { talisman: Talisman }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (talisman) {
            setLoading(false);
        } else {
            setError("Talisman not found");
        }
    }, [talisman]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="w-auto rounded shadow-md border border-[#FEA82F] p-4 bg-[#0F7173] flex flex-col ">
            <div className="flex flex-col items-center mb-2 shadow justify-between h-full rounded-md bg-[#124e52]/55 gap-2 px-4">
                <h1 className="text-center font-bold text-xl text-[#FEA82F]">{talisman.name}</h1>
                {talisman.image && <img src={talisman.image} alt={talisman.name} className="w-36 shadow rounded-md"/>}
                <p className="text-center text-sm text-[#FEA82F]">{talisman.description}</p>
                <hr className="w-full border-[#FEA82F]"/>
                <p className="text-center text-sm text-white mb-2">{talisman.effect}</p>
            </div>
        </section>
    )}  
export default TalismanCard;