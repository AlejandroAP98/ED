import {Spirit} from "../../types/Spirits";
import React, {useState, useEffect} from "react";
import {HugeiconsIcon} from "@hugeicons/react";
import { HealthIcon, MagicWand04Icon  } from "@hugeicons/core-free-icons";


const SpiritCard = ({spirit}: { spirit: Spirit }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (spirit) {
            setLoading(false);
        } else {
            setError("Spirit not found");
        }
    }, [spirit]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="w-auto rounded shadow-md border border-[#FEA82F] p-4 bg-[#0F7173] flex flex-col ">
            <div className="flex flex-col items-center mb-2 shadow justify-between h-full rounded-md bg-[#124e52]/55 gap-2 px-4">
                <h1 className="text-center font-bold text-xl text-[#FEA82F]">{spirit.name}</h1>
                {spirit.image && <img src={spirit.image} alt={spirit.name} className="w-36 shadow rounded-md"/>}
                <p className="text-center text-sm text-[#FEA82F]">{spirit.description}</p>
                <hr className="w-full border-[#FEA82F]"/>
                <p className="text-center text-sm text-white mb-2">{spirit.effect}</p>
                <hr className="w-full border-[#FEA82F]"/>
                <div className="flex w-full gap-2 justify-center">
                    <p className="text-center text-sm text-white mb-2 flex items-center gap-2">
                        <HugeiconsIcon icon={MagicWand04Icon} />
                        {spirit.fpCost}
                    </p>
                    <p className="text-center text-sm text-white mb-2 flex items-center gap-2">
                        <HugeiconsIcon icon={HealthIcon} />
                        {spirit.hpCost}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SpiritCard;