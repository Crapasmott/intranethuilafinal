'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const SigAcordeon = ({ systems, onOpen, inicial = 'sig-central' }) => {
    const [activo, setActivo] = useState(inicial);

    const handleClick = (system) => {
        if (system.id === activo) {
            onOpen(system);
        } else {
            setActivo(system.id);
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:h-[480px]">
                {systems.map((system) => {
                    const abierto = system.id === activo;

                    return (
                        <button
                            key={system.id}
                            type="button"
                            onClick={() => handleClick(system)}
                            aria-expanded={abierto}
                            aria-label={abierto ? `Abrir ${system.name}` : `Ver ${system.name}`}
                            className={`relative overflow-hidden rounded-[2rem] text-left shadow-lg
                                transition-all duration-500 ease-in-out
                                focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400
                                ${abierto
                                    ? 'h-80 md:h-auto md:flex-[6]'
                                    : 'h-20 md:h-auto md:flex-[1] md:min-w-[80px] hover:brightness-110'}`}
                        >
                            {system.image && (
                                <img
                                    src={system.image}
                                    alt=""
                                    draggable={false}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            )}

                            <div
                                className={`absolute inset-0 bg-gradient-to-b ${system.color} transition-opacity duration-500
                                    ${abierto ? 'opacity-0' : 'opacity-40'}`}
                            />

                            {!abierto && (
                                <div className="absolute inset-0 flex items-center justify-center md:items-end md:pb-6 px-3">
                                    <span className="text-white font-bold text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:[writing-mode:vertical-rl] md:rotate-180 md:whitespace-nowrap truncate">
                                        {system.name}
                                    </span>
                                </div>
                            )}

                            {abierto && (
                                <>
                                    <span className="absolute top-4 right-4 inline-flex items-center gap-2 bg-white/90 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow">
                                        <ExternalLink className="w-4 h-4" />
                                        Abrir sistema
                                    </span>

                                    <div className="absolute inset-x-0 bottom-0 px-6 pt-16 pb-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                        <h3 className="text-white text-xl md:text-2xl font-bold">{system.name}</h3>
                                        <p className="text-white/85 text-sm md:text-base">{system.description}</p>
                                    </div>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
                Toque un sistema para verlo y toque de nuevo para abrirlo.
            </p>
        </div>
    );
};

export default SigAcordeon;