'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Bell, Cake, X } from 'lucide-react';

// Pon MODO_PRUEBA en false para usar solo los datos reales
const MODO_PRUEBA = true;
const EJEMPLO = [
    { id: 'demo1', nombre: 'María Fernanda Pérez' },
    { id: 'demo2', nombre: 'Carlos Andrés Rojas' },
    { id: 'demo3', nombre: 'Luz Marina Cabrera' },
    { id: 'demo4', nombre: 'Jhon Alexander Trujillo' },
];
const conDemo = (lista) => (MODO_PRUEBA && lista.length === 0 ? EJEMPLO : lista);

export default function BirthdayBell({ className = '', showText = true, textFirst = false }) {
    const [birthdays, setBirthdays] = useState([]);
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let activo = true;
        fetch('/api/cumpleanos', { cache: 'no-store' })
            .then((res) => (res.ok ? res.json() : []))
            .then((data) => { if (activo) setBirthdays(conDemo(Array.isArray(data) ? data : [])); })
            .catch(() => { if (activo) setBirthdays(conDemo([])); });
        return () => { activo = false; };
    }, []);

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const hay = birthdays.length > 0;
    const texto = !hay
        ? 'Cumpleaños de hoy'
        : birthdays.length === 1
            ? `Cumpleaños de hoy: ${birthdays[0].nombre}`
            : `Cumpleaños de hoy: ${birthdays[0].nombre} y ${birthdays.length - 1} más`;

    const modal = (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{ zIndex: 9999 }} onClick={() => setOpen(false)}>
            <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-5 border-b">
                    <h2 className="text-xl font-bold">🎂 Cumpleaños de hoy</h2>
                    <button type="button" onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Cerrar">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-5">
                    {!hay ? (
                        <p className="text-gray-500 text-center py-6">Hoy no hay cumpleaños 🎈</p>
                    ) : (
                        <ul className="space-y-3">
                            {birthdays.map((p, i) => (
                                <li key={p.id ?? i} className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                                    <span className="text-2xl">🎂</span>
                                    <span className="font-medium text-gray-800">{p.nombre}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );

    const pill = showText && (
        <button type="button" onClick={() => setOpen(true)}
            className={`flex items-center gap-1.5 max-w-[260px] rounded-full border px-3 py-1.5 text-xs font-semibold shadow-md ${hay ? 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
            <Cake className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{texto}</span>
        </button>
    );

    return (
        <>
            <div className={`flex items-center gap-2 ${className}`}>
                {textFirst && pill}
                <button type="button" onClick={() => setOpen(true)}
                    aria-label={hay ? `Cumpleaños de hoy: ${birthdays.length}` : 'Cumpleaños de hoy'}
                    className={`relative w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 ${hay ? 'bg-gradient-to-br from-pink-500 to-rose-600 bell-glow' : 'bg-gradient-to-br from-sky-500 to-blue-700'}`}>
                    {hay && <span className="absolute inset-0 rounded-full bg-pink-400 opacity-50 animate-ping" />}
                    <Bell className={`relative w-6 h-6 ${hay ? 'bell-ring' : 'bell-sway'}`} />
                    {hay && (
                        <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 bg-amber-400 text-gray-900 text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                            {birthdays.length}
                        </span>
                    )}
                </button>
                {!textFirst && pill}
            </div>

            {mounted && open && createPortal(modal, document.body)}

            <style jsx global>{`
                @keyframes bell-ring {
                    0%, 55%, 100% { transform: rotate(0); }
                    5% { transform: rotate(22deg); }
                    12% { transform: rotate(-20deg); }
                    20% { transform: rotate(16deg); }
                    28% { transform: rotate(-14deg); }
                    36% { transform: rotate(9deg); }
                    44% { transform: rotate(-5deg); }
                }
                @keyframes bell-sway {
                    0%, 100% { transform: rotate(-8deg); }
                    50% { transform: rotate(8deg); }
                }
                @keyframes bell-glow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,.55); }
                    50% { box-shadow: 0 0 0 14px rgba(236,72,153,0); }
                }
                .bell-ring { transform-origin: top center; animation: bell-ring 2.4s ease-in-out infinite; }
                .bell-sway { transform-origin: top center; animation: bell-sway 3s ease-in-out infinite; }
                .bell-glow { animation: bell-glow 1.8s ease-out infinite; }
            `}</style>
        </>
    );
}