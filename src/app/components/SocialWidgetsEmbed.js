'use client';

import React, { useEffect } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialWidgetsEmbed = () => {

    useEffect(() => {
        // Cargar SDK de Facebook
        if (window.FB) {
            window.FB.XFBML.parse();
        } else {
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0';
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            document.body.appendChild(script);
        }

        // Cargar script de Instagram
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Síguenos en Nuestras Redes Sociales
                </h2>
                <p className="text-gray-600 mb-8">
                    Mantente conectado con las últimas noticias y actualizaciones de ElectroHuila
                </p>

            </div>

            {/* Grid de widgets */}
            <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Widget de Facebook */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Facebook className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Facebook</h3>
                            <p className="text-sm text-gray-600">Últimas publicaciones</p>
                        </div>
                    </div>
                    
                    {/* Widget oficial de Facebook */}
                    <div className="fb-page" 
                         data-href="https://www.facebook.com/ElectroHuilaOficial?ref=embed_page"
                         data-tabs="timeline"
                         data-width="350"
                         data-height="500"
                         data-small-header="true"
                         data-adapt-container-width="true"
                         data-hide-cover="false"
                         data-show-facepile="false">
                    </div>
                </div>

                {/* Widget de Instagram */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
                            <p className="text-sm text-gray-600">Fotos y videos</p>
                        </div>
                    </div>
                    
                    {/* Posts específicos de Instagram - Necesitas reemplazar con URLs reales */}
                    <div className="space-y-4">
                        <blockquote 
                            className="instagram-media" 
                            data-instgrm-permalink="https://www.instagram.com/electrohuila/?utm_source=ig_embed&ig_rid=5d4b889d-fd89-46b6-aa25-f190b2f22d83"
                            data-instgrm-version="14"
                            style={{
                                background: '#FFF',
                                border: '0',
                                borderRadius: '3px',
                                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                margin: '1px',
                                maxWidth: '350px',
                                minWidth: '326px',
                                padding: '0',
                                width: '100%'
                            }}>
                        </blockquote>
                        
                    </div>
                </div>

                {/* Widget de YouTube */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Youtube className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">YouTube</h3>
                            <p className="text-sm text-gray-600">Videos recientes</p>
                        </div>
                    </div>
                    
                   {/* Widget oficial del canal de YouTube */}
<div className="space-y-4">
    <div className="relative">
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed?listType=playlist&list=UUf9CyNxFm559ZBXFHkzDTWw"
            title="Canal ElectroHuila YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
        ></iframe>
    </div>
    
    {/* Enlace directo al canal */}
    <div className="text-center">
        
        <a
            href="https://www.youtube.com/channel/UCf9CyNxFm559ZBXFHkzDTWw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
        >
            Ver canal completo →
        </a>
    </div>
</div>
                    </div>
                </div>
            </div>
    );
};

export default SocialWidgetsEmbed;