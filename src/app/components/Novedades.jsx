// components/Novedades.jsx
'use client';

import React from 'react';
import { useWordPress } from '@/hooks/useWordPress';
import { Newspaper, ChevronRight, Eye } from 'lucide-react';

const Novedades = () => {
    // 🔥 CAMBIO 1: Usar categoría 138 (Novedades) que tiene 3 posts
    const { data: posts, loading, error } = useWordPress('posts?categories=138&per_page=6&_embed');

    if (loading) {
        return (
            <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Novedades</h2>
                </div>
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-600">Cargando novedades...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mb-16">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600">Error al cargar las novedades: {error}</p>
                    <p className="text-sm text-red-500 mt-2">Verifica la conexión con electrohuila.net</p>
                </div>
            </div>
        );
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="mb-16">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800">No hay novedades disponibles en este momento.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
    };

    const getExcerpt = (post) => {
        // Primero intenta con excerpt
        if (post.excerpt?.rendered) {
            const div = document.createElement('div');
            div.innerHTML = post.excerpt.rendered;
            const text = div.textContent || div.innerText || '';
            return text.trim().substring(0, 150) + '...';
        }

        // Si no hay excerpt, usa content
        if (post.content?.rendered) {
            const div = document.createElement('div');
            div.innerHTML = post.content.rendered;
            const text = div.textContent || div.innerText || '';
            return text.trim().substring(0, 150) + '...';
        }

        return 'Sin descripción disponible...';
    };

    // 🔥 CAMBIO 2: Agregar función getFeaturedImage que faltaba
    const getFeaturedImage = (post) => {
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            return post._embedded['wp:featuredmedia'][0].source_url;
        }
        // SVG inline como fallback - NO requiere conexión externa
        return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%230066cc" width="400" height="300"/%3E%3Ctext fill="%23ffffff" font-size="20" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EElectroHuila%3C/text%3E%3C/svg%3E';
    };

    return (
        <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Novedades</h2>
                <button
                    onClick={() => window.open('https://electrohuila.net/categoria/novedades/', '_blank')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                    <Newspaper className="w-4 h-4" />
                    <span>Ver Todas las Novedades</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => window.open(post.link, '_blank')}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                        <img
                            src={getFeaturedImage(post)}
                            alt={post.title.rendered}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                                // 🔥 CAMBIO 3: SVG inline en lugar de via.placeholder.com
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%230066cc" width="400" height="300"/%3E%3Ctext fill="%23ffffff" font-size="20" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EElectroHuila%3C/text%3E%3C/svg%3E';
                            }}
                        />
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                    Novedades
                                </span>
                                <span className="text-xs text-gray-500">
                                    {formatDate(post.date)}
                                </span>
                            </div>
                            <h3
                                className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {getExcerpt(post)}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1">
                                    <span>Leer más</span>
                                    <ChevronRight className="w-4 h-4" />
                                </span>
                                <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Novedades;