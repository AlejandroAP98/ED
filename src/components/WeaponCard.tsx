import { Weapon } from "../../types/Weapon"
import React, { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { AppleReminderIcon, ArrangeIcon, ChartUpIcon, KnightShieldIcon, Sword03Icon, WeightScale01Icon } from '@hugeicons/core-free-icons'


const WeaponCard = ({ weapon }: { weapon: Weapon }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (weapon) {
            setLoading(false)
        } else {
            setError("Weapon not found")
        }
    }, [weapon])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <section className="w-auto rounded shadow-md border border-[#FEA82F] p-4 bg-[#0F7173] flex flex-col ">
            <div className="flex flex-col items-center mb-2 shadow rounded-md bg-[#124e52]/55 gap-2">
                <h1 className="text-center font-bold text-xl text-[#FEA82F]">{weapon.name}</h1>
                {weapon.image && <img src={weapon.image} alt={weapon.name} className="w-36 shadow rounded-md"/>}
            </div>
            <hr className="border-[#FEA82F] mb-2" />
            <div className="flex flex-col w-full gap-2">
                <div className="flex flex-col text-sm gap-2">
                    <div className="flex justify-around">
                        <div>
                            {weapon.attack && 
                                <div className="flex items-center gap-2">
                                    <strong>Ataque</strong>
                                    <HugeiconsIcon icon={Sword03Icon} size={18} />
                                </div>}
                            {weapon.attack?.map((attack) => (
                                <p key={attack.name}>{attack.name}: {attack.amount}</p>
                            ))}
                        </div>
                        <div>
                        {weapon.defence && 
                            <div className="flex items-center gap-2">
                                <strong>Defensa</strong>
                                <HugeiconsIcon icon={KnightShieldIcon} size={18} />
                            </div>}
                            {weapon.defence?.map((def) => (
                                <p key={def.name}>{def.name}: {def.amount}</p>
                            ))}
                        </div>
                    </div>
                    <hr className="border-[#FEA82F] mb-2" />
                    <div className="flex justify-around">
                        <div>
                        {weapon.requiredAttributes && 
                            <div className="flex items-center gap-2">
                                <strong>Atributos</strong>
                                <HugeiconsIcon icon={AppleReminderIcon} size={18} />
                            </div>}
                            {weapon.requiredAttributes?.map((attr) => (
                                <p key={attr.name}>{attr.name}: {attr.amount}</p>
                            ))}
                        </div>
                        <div>
                        {weapon.scalesWith && 
                            <div className="flex items-center gap-2 ">
                                <strong>Escalado</strong>
                                <HugeiconsIcon icon={ChartUpIcon} size={18} />
                            </div>}
                            {weapon.scalesWith?.map((scale) => (
                                <p key={scale.name}>{scale.name}: {scale.scaling}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-[#FEA82F] mb-2" />
                <div className="flex justify-around text-sm">
                {weapon.weight && 
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <strong>Peso</strong>
                        <HugeiconsIcon icon={WeightScale01Icon} size={18}  />
                    </div>
                    <p>{weapon.weight}</p>
                </div>}
                {weapon.category &&
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <strong>Categoria</strong>
                        <HugeiconsIcon icon={ArrangeIcon} size={18} />
                    </div>
                    <p>{weapon.category}</p>
                </div>}
                </div>
            </div>
        </section>
    )
}
export default WeaponCard
  