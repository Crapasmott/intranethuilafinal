// components/PopupIntranet.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { useWordPress } from '@/hooks/useWordPress';
import { X } from 'lucide-react';

const PopupIntranet = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentPopup, setCurrentPopup] = useState(null);

    // Obtener posts de la categoría 142 (popup-intranet)
    const { data: popups, loading } = useWordPress('posts?categories=142&per_page=1&_embed');

    useEffect(() => {
        if (popups && popups.length > 0) {
            const popup = popups[0];

            // Verificar si ya se mostró este popup (por ID)
            const shownPopups = JSON.parse(localStorage.getItem('shownPopups') || '[]');

            if (!shownPopups.includes(popup.id)) {
                setCurrentPopup(popup);
                // Esperar 2 segundos antes de mostrar
                setTimeout(() => {
                    setShowPopup(true);
                }, 2000);
            }
        }
    }, [popups]);

    const handleClose = () => {
        if (currentPopup) {
            // Guardar en localStorage que ya se mostró
            const shownPopups = JSON.parse(localStorage.getItem('shownPopups') || '[]');
            shownPopups.push(currentPopup.id);
            localStorage.setItem('shownPopups', JSON.stringify(shownPopups));
        }
        setShowPopup(false);
    };

    const getFeaturedImage = (post) => {
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        }
        return null;
    };

    if (loading || !showPopup || !currentPopup) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Imagen */}
                {getFeaturedImage(currentPopup) && (
                    <div className="relative">
                        <img
                            src={getFeaturedImage(currentPopup)}
                            alt={currentPopup.title.rendered}
                            className="w-full h-auto max-h-[70vh] object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Contenido */}
                <div className="p-6 overflow-y-auto max-h-[50vh]">
                    <h2
                        className="text-2xl font-bold text-gray-900 mb-4"
                        dangerouslySetInnerHTML={{ __html: currentPopup.title.rendered }}
                    />
                    <div
                        className="prose prose-sm max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: currentPopup.content.rendered }}
                    />
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={handleClose}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupIntranet;