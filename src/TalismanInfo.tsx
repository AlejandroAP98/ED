import React, {useEffect, useState} from "react"
import { Talisman } from "../types/Talisman"
import TalismanCard from "./components/TalismanCard"
import FetchTalisman from "./Fetchs/FectTalisman"

export default function TalismanInfo(){
    const [talisman, setTalisman] = useState<Talisman[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTalisman = async () => {
            try {
                const data = await FetchTalisman()
                setTalisman(data.filter(t => t.name && t.id))
            } catch (err) {
                setError("Failed to fetch talismans")
            }
            finally {
                setLoading(false)
            }
        }
        fetchTalisman()
    }, [])

    if (loading) return <div className="flex justify-center p-4">Loading...</div>
    if (error) return <div className="flex justify-center p-4 text-red-500">{error}</div>
    if (talisman.length === 0) return <div className="flex justify-center p-4">No talismans found</div>

    return (
        <div className="w-full h-auto flex flex-col items-center gap-4 px-4 py-6">
            <h1 className="text-3xl font-bold text-center">Talismanes del juego</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {talisman.map((talisman) => (
                    <TalismanCard key={talisman.id} talisman={talisman} />
                ))}
            </div>
        </div>
    )
    
    
}