import { Boss } from "../../types/Boss";
import React, { useEffect, useState } from "react";

const BossCard = ({ boss }: { boss: Boss }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (boss) {
            setLoading(false);
        } else {
            setError("Boss not found");
        }
    }, [boss]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {/* Tarjeta principal */}
            <section
                className="bg-[#124e52] p-4 rounded-sm flex flex-col gap-2 w-full cursor-pointer hover:shadow-lg transition"
                onClick={() => setShowModal(true)}
            >
                <h1 className="text-center font-bold text-md text-[#FEA82F]">
                    {boss.name}
                </h1>
                {boss.image && (
                    <img
                        src={boss.image}
                        alt={boss.name}
                        className="w-full h-48 object-contain"
                    />
                )}
            </section>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
                    <div className="bg-[#124e52] text-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-[#FEA82F]">{boss.name}</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-red-500 font-bold text-lg"
                            >
                                ×
                            </button>
                        </div>

                        {boss.image && (
                            <img
                                src={boss.image}
                                alt={boss.name}
                                className="w-full mb-4 rounded"
                            />
                        )}

                        {boss.description && (
                            <div className="mb-4">
                                <strong>Descripción</strong>
                                <p>{boss.description}</p>
                            </div>
                        )}

                        {boss.location && (
                            <div className="mb-4">
                                <strong>Ubicación</strong>
                                <p>{boss.location}</p>
                            </div>
                        )}

                        {boss.drops && (
                            <div className="mb-4">
                                <strong>Botín</strong>
                                <p>{boss.drops.join(", ")}</p>
                            </div>
                        )}

                        {boss.healthPoints && (
                            <div className="mb-4">
                                <strong>Vida</strong>
                                <p>{boss.healthPoints}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default BossCard;
