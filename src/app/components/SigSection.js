'use client';

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Settings, FileText, Target, Mail } from 'lucide-react';

const SigSection = ({ onBack, onNavigateToSgc }) => {
    // Estado para el SGA
    const [sgaView, setSgaView] = useState('main'); // 'main', 'sga-menu', 'politica', 'objetivos', 'config', 'sgc'
    const [sgaUrls, setSgaUrls] = useState({
        documentacion: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20AMBIENTAL%20SGA/Forms/AllItems.aspx?viewpath=%2FSISTEMA%20DE%20GESTIN%20AMBIENTAL%20SGA%2FForms%2FAllItems%2Easpx',
        contacto: 'sga@electrohuila.com'
    });

    // Estados para el flipbook
    const [currentPage, setCurrentPage] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const totalPages = 3;

    const documentPages = [
        "./images/SGA-politica.jpg",
        "http://localhost/intranet/wp-content/uploads/2021/04/SGA_2022-3.jpg",
        "http://localhost/intranet/wp-content/uploads/2021/04/SGA_2022-1.jpg"
    ];

    // Funciones para el flipbook
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    };

    const sigSystems = [
        {
            id: 'calidad',
            name: 'Sistema de Gestión de Calidad',
            description: 'Gestión y control de procesos de calidad organizacional',
            color: 'from-orange-500 to-red-500',
            image: './images/iconos/SGC.png',
            position: 'top-left',
            isInternal: true
        },
        {
            id: 'seguridad',
            name: 'Seguridad & Salud en el trabajo',
            description: 'Sistema de gestión de seguridad y salud ocupacional',
            color: 'from-green-500 to-blue-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20SST/Forms/AllItems.aspx',
            image: './images/iconos/SS.png',
            position: 'bottom-left'
        },
        {
            id: 'sig-central',
            name: 'SIG - Sistema Integrado de Gestión',
            description: 'Plataforma central del sistema integrado de gestión',
            color: 'from-blue-500 to-cyan-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20INTEGRADO%20DE%20GESTIN/Forms/AllItems.aspx?',
            image: './images/iconos/SIG.png',
            featured: true,
            position: 'center'
        },
        {
            id: 'sga',
            name: 'SGA - Sistema de Gestión Ambiental',
            description: 'Sistema de gestión ambiental y sostenibilidad',
            color: 'from-green-400 to-emerald-500',
            url: '/',
            image: './images/iconos/sga.png',
            position: 'top-right',
            isInternal: true
        },
        {
            id: 'sigac',
            name: 'SIGAC - Sistema de Gestión de Activos',
            description: 'Gestión y control de activos empresariales',
            color: 'from-yellow-500 to-orange-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20DE%20ACTIVOS/Forms/AllItems.aspx?viewpath=%2FSISTEMA%20DE%20GESTIN%20DE%20ACTIVOS%2FForms%2FAllItems%2Easpx',
            image: './images/iconos/SGAC.png',
            position: 'bottom-right'
        }
    ];

    const openSystem = (system) => {
        if (system.id === 'sga') {
            setSgaView('sga-menu');
            return;
        }
        if (system.id === 'calidad') {
            setSgaView('sgc');
            return;
        }
        if (system.isInternal && onNavigateToSgc) {
            onNavigateToSgc();
            return;
        }
        window.open(system.url, '_blank', 'noopener,noreferrer');
    };

    // Vista de Política SGA con flipbook
    if (sgaView === 'politica') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSgaView('sga-menu')}
                            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Volver al menú SGA
                        </button>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Política SGA</h1>
                            <p className="text-xl text-blue-100">Sistema de Gestión Ambiental</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    {/* Visor de documentos estilo DearFlip */}
                    <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-center text-green-600">
                                Política Ambiental ElectroHuila
                            </h3>
                            <p className="text-center text-gray-600 mt-2">
                                Documento oficial del Sistema de Gestión Ambiental
                            </p>
                        </div>

                        {/* Contenedor principal del flipbook */}
                        <div className="relative bg-gray-700" style={{ height: isFullscreen ? '90vh' : '600px' }}>

                            {/* Barra de herramientas superior */}
                            <div className="absolute top-0 left-0 right-0 z-10 bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium">Política SGA ElectroHuila</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setIsFullscreen(!isFullscreen)}
                                        className="hover:bg-gray-700 p-2 rounded text-xs transition-colors"
                                        title="Pantalla completa"
                                    >
                                        {isFullscreen ? 'Salir' : 'Pantalla completa'}
                                    </button>
                                    <button
                                        className="hover:bg-gray-700 p-2 rounded text-xs transition-colors"
                                        title="Compartir"
                                    >
                                        Compartir
                                    </button>
                                </div>
                            </div>

                            {/* Área principal del documento */}
                            <div className="absolute inset-0 flex items-center justify-center pt-12 pb-16">
                                <div className="relative">
                                    {/* Páginas del documento - Vista de libro abierto */}
                                    <div className="flex items-center justify-center space-x-2">

                                        {/* Página izquierda */}
                                        {currentPage > 1 && (
                                            <div
                                                className="bg-white shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                                                style={{
                                                    width: isFullscreen ? '450px' : '340px',   // Más ancho
                                                    height: isFullscreen ? '320px' : '240px'   // Menos alto
                                                }}
                                            >
                                                <img
                                                    src={documentPages[currentPage - 2]}
                                                    alt={`Página ${currentPage - 1} - Política SGA`}
                                                    className="w-full h-full object-cover rounded shadow-lg"
                                                    onError={(e) => {
                                                        e.target.src = `https://via.placeholder.com/${isFullscreen ? '320x450' : '240x340'}/1E40AF/ffffff?text=POLITICA+SGA+P${currentPage - 1}`;
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* Página derecha (actual) */}
                                        <div
                                            className="bg-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                                            style={{
                                                width: isFullscreen ? '450px' : '340px',   // Más ancho
                                                height: isFullscreen ? '320px' : '240px'   // Menos alto
                                            }}
                                        >
                                            <img
                                                src={documentPages[currentPage - 1]}
                                                alt={`Página ${currentPage} - Política SGA`}
                                                className="w-full h-full object-cover rounded shadow-lg"
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/${isFullscreen ? '320x450' : '240x340'}/1E40AF/ffffff?text=POLITICA+SGA+P${currentPage}`;
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Efectos de profundidad */}
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-sm"></div>
                                </div>
                            </div>

                            {/* Navegación lateral izquierda */}
                            {currentPage > 1 && (
                                <button
                                    onClick={prevPage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
                                    title="Página anterior"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                            )}

                            {/* Navegación lateral derecha */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={nextPage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
                                    title="Página siguiente"
                                >
                                    <ArrowLeft className="w-6 h-6 rotate-180" />
                                </button>
                            )}

                            {/* Barra de controles inferior */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white px-4 py-3">
                                <div className="flex items-center justify-between">

                                    {/* Controles de navegación */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => goToPage(1)}
                                            disabled={currentPage === 1}
                                            className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            title="Primera página"
                                        >
                                            Primera
                                        </button>
                                        <button
                                            onClick={prevPage}
                                            disabled={currentPage === 1}
                                            className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            title="Página anterior"
                                        >
                                            Anterior
                                        </button>
                                    </div>

                                    {/* Indicador de página con input */}
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="number"
                                            min="1"
                                            max={totalPages}
                                            value={currentPage}
                                            onChange={(e) => goToPage(parseInt(e.target.value))}
                                            className="w-12 px-2 py-1 text-center bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                                        />
                                        <span className="text-sm">/ {totalPages}</span>
                                    </div>

                                    {/* Controles de navegación derecha */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={nextPage}
                                            disabled={currentPage === totalPages}
                                            className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            title="Página siguiente"
                                        >
                                            Siguiente
                                        </button>
                                        <button
                                            onClick={() => goToPage(totalPages)}
                                            disabled={currentPage === totalPages}
                                            className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            title="Última página"
                                        >
                                            Última
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnails laterales */}
                            <div className="absolute left-2 top-20 space-y-2 opacity-70 hover:opacity-100 transition-opacity">
                                {documentPages.map((page, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToPage(index + 1)}
                                        className={`block w-12 h-16 rounded border-2 overflow-hidden transition-all ${currentPage === index + 1 ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-400 hover:border-gray-200'
                                            }`}
                                        title={`Ir a página ${index + 1}`}
                                    >
                                        <img
                                            src={page}
                                            alt={`Miniatura página ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://via.placeholder.com/48x64/666/fff?text=${index + 1}`;
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Información complementaria */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Resumen de la política */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-green-600">
                                Compromisos Ambientales
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-green-700 mb-2">Protección Ambiental</h4>
                                    <p className="text-sm text-green-800">Prevención de la contaminación y uso eficiente de recursos naturales</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-blue-700 mb-2">Energía Sostenible</h4>
                                    <p className="text-sm text-blue-800">Promoción de fuentes de energía renovable y tecnologías limpias</p>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-yellow-700 mb-2">Cumplimiento</h4>
                                    <p className="text-sm text-yellow-800">Cumplimiento de la legislación ambiental y mejora continua</p>
                                </div>
                            </div>
                        </div>

                        {/* Acciones disponibles */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold mb-6 text-gray-900">
                                Acciones Disponibles
                            </h3>

                            <div className="space-y-4">
                                <button
                                    onClick={() => window.open(documentPages[0], '_blank')}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                                >
                                    <FileText className="w-5 h-5" />
                                    <span>Descargar Documento Completo</span>
                                </button>

                                <button
                                    onClick={() => window.print()}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>Imprimir Política</span>
                                </button>

                                <button
                                    onClick={() => setSgaView('objetivos')}
                                    className="w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                                >
                                    <Target className="w-5 h-5" />
                                    <span>Ver Objetivos Ambientales</span>
                                </button>
                            </div>

                            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <p className="text-xs text-gray-600 text-center">
                                    <strong>Versión:</strong> 2022-2 <br />
                                    <strong>Fecha de aprobación:</strong> Marzo 2022 <br />
                                    <strong>Próxima revisión:</strong> Marzo 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Vista del menú SGA
    if (sgaView === 'sga-menu') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSgaView('main')}
                            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Volver al SIG
                        </button>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Sistema de Gestión Ambiental</h1>
                            <p className="text-xl text-green-100">Gestión integral del medio ambiente</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Política SGA */}
                        <div
                            onClick={() => setSgaView('politica')}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                                Política SGA
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Consulta nuestra política ambiental y compromisos de sostenibilidad
                            </p>
                            <span className="text-green-600 font-medium">Ver política →</span>
                        </div>

                        {/* Documentación */}
                        <div
                            onClick={() => window.open(sgaUrls.documentacion, '_blank')}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ExternalLink className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                Documentación
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Accede a todos los documentos, procedimientos y registros ambientales
                            </p>
                            <span className="text-blue-600 font-medium">Ir a SharePoint →</span>
                        </div>

                        {/* Objetivos Ambientales */}
                        <div
                            onClick={() => setSgaView('objetivos')}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                                Objetivos Ambientales
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Revisa nuestros objetivos, metas e indicadores ambientales
                            </p>
                            <span className="text-yellow-600 font-medium">Ver objetivos →</span>
                        </div>

                        {/* Alcance */}
                        <div
                            onClick={() => setSgaView('alcance')}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img
                                    src="./images/sga-alcance.png"
                                    alt="Alcance SGA"
                                    className="w-10 h-10 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <Target className="w-8 h-8 text-green-600 hidden" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                                Alcance
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Conoce el alcance del Sistema de Gestión Ambiental y las sedes cubiertas
                            </p>
                            <span className="text-green-600 font-medium">Ver alcance →</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Vista de Alcance SGA
    if (sgaView === 'alcance') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSgaView('sga-menu')}
                            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Volver al menú SGA
                        </button>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Alcance SGA</h1>
                            <p className="text-xl text-green-100">Sistema de Gestión Ambiental</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center text-green-600">
                            Alcance del Sistema de Gestión Ambiental
                        </h3>

                        <p className="text-lg mb-8 text-center text-gray-700">
                            La distribución y comercialización de energía eléctrica, para las siguientes sedes:
                        </p>

                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h4 className="font-bold text-green-700 mb-3 text-lg">Complejo ecológico El Bote</h4>
                                <p className="text-green-800">Km. 1 Vía Palermo, Huila, Colombia.</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-700 mb-3 text-lg">Edificio Saire</h4>
                                <p className="text-blue-800">Carrera 18 calle 19 esquina: Servicio al cliente, Mantenimiento de líneas y Almacén.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Vista de Objetivos SGA
    if (sgaView === 'objetivos') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSgaView('sga-menu')}
                            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Volver al menú SGA
                        </button>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Objetivos Ambientales</h1>
                            <p className="text-xl text-blue-100">Sistema de Gestión Ambiental</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-8 text-center text-green-600">
                            Objetivos del Sistema de Gestión Ambiental
                        </h3>

                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Garantizar la conservación, uso eficiente de los recursos naturales y ahorro del
                                    recurso hídrico y energético, así como la correcta gestión y disposición final de
                                    los residuos generados en la organización.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Identificar los aspectos, valorar y evaluar los impactos ambientales significativos
                                    asociados a las diferentes operaciones.
                                </p>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Cumplir con los requisitos legales ambientales y otros requisitos aplicables.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Destinar los recursos necesarios para la implementación, mantenimiento, control y
                                    mejora continua del sistema de gestión ambiental.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setSgaView('sga-menu')}
                                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                            >
                                Volver al menú SGA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Vista principal (diseño original)
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={onBack}
                        className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </button>

                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">
                            Sistema Integral de Gestión
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Accede a todos los subsistemas de gestión de ElectroHuila
                        </p>
                        <div className="mt-6 text-sm text-blue-200">
                            Inicio / Sistema Integral de Gestión
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Descripción */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Subsistemas de Gestión
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        El Sistema Integral de Gestión de ElectroHuila está compuesto por diferentes subsistemas
                        que trabajan de manera coordinada para garantizar la excelencia operacional y el cumplimiento
                        de los más altos estándares de calidad, seguridad y gestión de activos.
                    </p>
                </div>

                {/* Grid de Sistemas - Layout especial con SIG en el centro */}
                <div className="relative max-w-6xl mx-auto mb-16">
                    {/* Grid container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Fila superior */}
                        <div className="flex justify-center">
                            {(() => {
                                const calidad = sigSystems.find(s => s.position === 'top-left');
                                return (
                                    <div
                                        key={calidad.id}
                                        onClick={() => openSystem(calidad)}
                                        className="relative group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-sm"
                                    >
                                        <div className="mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <img
                                                src={calidad.image}
                                                alt={calidad.name}
                                                className="w-16 h-16 object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 hidden items-center justify-center shadow-lg">
                                                <span className="text-xl">📊</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {calidad.name}
                                            </h3>
                                            <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                                {calidad.description}
                                            </p>
                                            <span className={`bg-gradient-to-r ${calidad.color} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                                                Acceder al Sistema
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${calidad.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* SIG Central - Centro y más grande */}
                        <div className="flex justify-center">
                            {(() => {
                                const sigCentral = sigSystems.find(s => s.position === 'center');
                                return (
                                    <div
                                        key={sigCentral.id}
                                        onClick={() => openSystem(sigCentral)}
                                        className="relative group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-md ring-2 ring-blue-100 shadow-xl"
                                    >
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                                            Principal
                                        </div>

                                        <div className="mb-6 mx-auto w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <img
                                                src={sigCentral.image}
                                                alt={sigCentral.name}
                                                className="w-20 h-20 object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 hidden items-center justify-center shadow-lg">
                                                <span className="text-2xl">📊</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                                {sigCentral.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                {sigCentral.description}
                                            </p>
                                            <span className={`bg-gradient-to-r ${sigCentral.color} text-white text-sm px-4 py-2 rounded-full font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                                                Acceder al Sistema
                                            </span>
                                        </div>
                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${sigCentral.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* SGA - Arriba derecha */}
                        <div className="flex justify-center">
                            {(() => {
                                const sga = sigSystems.find(s => s.position === 'top-right');
                                return (
                                    <div
                                        key={sga.id}
                                        onClick={() => openSystem(sga)}
                                        className="relative group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-sm"
                                    >
                                        <div className="mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <img
                                                src={sga.image}
                                                alt={sga.name}
                                                className="w-16 h-16 object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 hidden items-center justify-center shadow-lg">
                                                <span className="text-xl">📊</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {sga.name}
                                            </h3>
                                            <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                                {sga.description}
                                            </p>
                                            <span className={`bg-gradient-to-r ${sga.color} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                                                Acceder al Sistema
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${sga.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                    {/* Fila inferior */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                        {/* Seguridad - Abajo izquierda */}
                        {(() => {
                            const seguridad = sigSystems.find(s => s.position === 'bottom-left');
                            return (
                                <div
                                    key={seguridad.id}
                                    onClick={() => openSystem(seguridad)}
                                    className="relative group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105"
                                >
                                    <div className="mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={seguridad.image}
                                            alt={seguridad.name}
                                            className="w-16 h-16 object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 hidden items-center justify-center shadow-lg">
                                            <span className="text-xl">📊</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {seguridad.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                            {seguridad.description}
                                        </p>
                                        <span className={`bg-gradient-to-r ${seguridad.color} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                                            Acceder al Sistema
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ExternalLink className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${seguridad.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                                </div>
                            );
                        })()}

                        {/* SIGAC - Abajo derecha */}
                        {(() => {
                            const sigac = sigSystems.find(s => s.position === 'bottom-right');
                            return (
                                <div
                                    key={sigac.id}
                                    onClick={() => openSystem(sigac)}
                                    className="relative group bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105"
                                >
                                    <div className="mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={sigac.image}
                                            alt={sigac.name}
                                            className="w-16 h-16 object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 hidden items-center justify-center shadow-lg">
                                            <span className="text-xl">📊</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {sigac.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                            {sigac.description}
                                        </p>
                                        <span className={`bg-gradient-to-r ${sigac.color} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md group-hover:shadow-lg transition-shadow`}>
                                            Acceder al Sistema
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ExternalLink className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sigac.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigSection;