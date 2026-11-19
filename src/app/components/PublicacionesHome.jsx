'use client';
import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, Newspaper, Images } from 'lucide-react';

const Card = ({ a, onOpen, accent }) => (
    <button onClick={() => onOpen(a)}
        className="group snap-start shrink-0 w-72 sm:w-80 overflow-hidden rounded-3xl border border-gray-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
        <div className="relative h-44 overflow-hidden bg-gray-200">
            <img src={a.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold shadow-sm" style={{ color: accent }}>
                {a.category}
            </span>
            {a.isGaleria && (
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                    <Images className="w-3.5 h-3.5" /> {a.fotos?.length || 1}
                </span>
            )}
        </div>
        <div className="p-5">
            <p className="text-xs text-gray-500">{a.date}{a.autor ? ` · ${a.autor}` : ''}</p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-gray-900 line-clamp-2 group-hover:underline">{a.title}</h3>
            {a.excerpt && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{a.excerpt}</p>}
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: accent }}>
                {a.isGaleria ? 'Ver galería' : 'Leer más'}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
        </div>
    </button>
);

export default function PublicacionesHome({ items, loading, tabs, tab, onTab, onOpen, onVerTodas, accent = '#1a5276' }) {
    const pista = useRef(null);
    const lista = items.slice(0, 8);
    const tabActual = tabs.find(t => t.id === tab);
    const mover = (dir) => pista.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });

    return (
        <section id="publicaciones" className="mt-14 scroll-mt-4">
            <div className="flex items-end justify-between gap-4 mb-5">
                <h2 className="text-xl font-semibold text-gray-900">Publicaciones</h2>
                <div className="flex items-center gap-2">
                    <button onClick={onVerTodas} className="mr-2 inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: accent }}>
                        Ver todas <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => mover(-1)} aria-label="Anterior"
                        className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => mover(1)} aria-label="Siguiente"
                        className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-1" role="tablist">
                {tabs.map(t => (
                    <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => onTab(t.id)}
                        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${tab === t.id ? 'text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        style={tab === t.id ? { background: accent } : undefined}>
                        {t.label}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex gap-5 overflow-hidden animate-pulse">
                    {[1, 2, 3].map(n => <div key={n} className="h-80 w-80 shrink-0 rounded-3xl bg-gray-100" />)}
                </div>
            ) : lista.length > 0 ? (
                <div ref={pista} className="pub-pista flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {lista.map(a => <Card key={a.id} a={a} onOpen={onOpen} accent={accent} />)}
                </div>
            ) : (
                <div className="rounded-3xl border border-dashed border-gray-300 py-12 text-center text-gray-500">
                    <Newspaper className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm">No hay publicaciones en {tabActual?.label}.</p>
                </div>
            )}

            <style jsx global>{`
                .pub-pista { scrollbar-width: none; }
                .pub-pista::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
}