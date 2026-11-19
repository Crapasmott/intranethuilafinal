'use client';
import BirthdayBell from './BirthdayBell';

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Mi Aplicación</h1>

                <div className="flex items-center gap-3">
                    <BirthdayBell />   {/* 👈 la campana va aquí, a la derecha */}
                    {/* otros iconos, usuario, etc. */}
                </div>
            </div>
        </header>
    );
}