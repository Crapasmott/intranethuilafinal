'use client';

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Settings, FileText, Target, Mail } from 'lucide-react';

const SigSection = ({ onBack, onNavigateToSgc }) => {
    const [sgaView, setSgaView] = useState('main');
    const [sgaUrls, setSgaUrls] = useState({
        documentacion: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20AMBIENTAL%20SGA/Forms/AllItems.aspx?viewpath=%2FSISTEMA%20DE%20GESTIN%20AMBIENTAL%20SGA%2FForms%2FAllItems%2Easpx',
        contacto: 'sga@electrohuila.com'
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const totalPages = 3;

    const [activeSystem, setActiveSystem] = useState('sig-central');
    const [hoveredSystem, setHoveredSystem] = useState(null);

    const documentPages = [
        "./images/SGA-politica.jpg",
        "http://localhost/intranet/wp-content/uploads/2021/04/SGA_2022-3.jpg",
        "http://localhost/intranet/wp-content/uploads/2021/04/SGA_2022-1.jpg"
    ];

    const nextPage = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
    const prevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
    const goToPage = (pageNum) => { if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum); };

    const sigSystems = [
        {
            id: 'calidad',
            name: 'Sistema de Gestión de Calidad',
            short: 'SGC',
            description: 'Gestión y control de procesos de calidad organizacional',
            color: '#ED5565',
            gradient: 'from-orange-500 to-red-500',
            image: './images/iconos/SGC.png',
            emoji: '📋',
            isInternal: true,
        },
        {
            id: 'seguridad',
            name: 'Seguridad & Salud en el trabajo',
            short: 'SST',
            description: 'Sistema de gestión de seguridad y salud ocupacional',
            color: '#2ECC71',
            gradient: 'from-green-400 to-blue-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20SST/Forms/AllItems.aspx',
            image: './images/iconos/SS.png',
            emoji: '🦺',
        },
        {
            id: 'sig-central',
            name: 'SIG - Sistema Integrado de Gestión',
            short: 'SIG',
            description: 'Plataforma central del sistema integrado de gestión',
            color: '#5D9CEC',
            gradient: 'from-blue-500 to-cyan-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20INTEGRADO%20DE%20GESTIN/Forms/AllItems.aspx?',
            image: './images/iconos/SIG.png',
            emoji: '🔷',
            featured: true,
        },
        {
            id: 'sga',
            name: 'SGA - Sistema de Gestión Ambiental',
            short: 'SGA',
            description: 'Sistema de gestión ambiental y sostenibilidad',
            color: '#48CFAD',
            gradient: 'from-green-400 to-emerald-500',
            url: '/',
            image: './images/iconos/sga.png',
            emoji: '🌿',
            isInternal: true,
        },
        {
            id: 'sigac',
            name: 'SIGAC - Sistema de Gestión de Activos',
            short: 'SIGAC',
            description: 'Gestión y control de activos empresariales',
            color: '#FC6E51',
            gradient: 'from-yellow-500 to-orange-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20DE%20ACTIVOS/Forms/AllItems.aspx?viewpath=%2FSISTEMA%20DE%20GESTIN%20DE%20ACTIVOS%2FForms%2FAllItems%2Easpx',
            image: './images/iconos/SGAC.png',
            emoji: '⚙️',
        },
    ];

    const openSystem = (system) => {
        if (system.id === 'sga') { setSgaView('sga-menu'); return; }
        if (system.id === 'calidad') { setSgaView('sgc'); return; }
        if (system.isInternal && onNavigateToSgc) { onNavigateToSgc(); return; }
        window.open(system.url, '_blank', 'noopener,noreferrer');
    };

    // ── SGC VIEW ──────────────────────────────────────────────────────────────
    if (sgaView === 'sgc') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSgaView('main')} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Volver al SIG
                        </button>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-4">Sistema de Gestión</h1>
                            <p className="text-xl text-orange-100">Gestión y control de procesos de calidad organizacional</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-8 py-8 relative">
                    <div style={{ position: 'absolute', left: '-30px', top: '300px' }}>
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B6F8D640E-DD39-4974-94DE-689EFA24B475%7D&file=Requisitos%20clientes%20legales%2Cinstitucionales%2C%20otros%20%20CLIO.xls" target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#22c55e', color: 'white', padding: '60px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textDecoration: 'none', writingMode: 'vertical-rl', transform: 'scale(-1, -1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Matriz Clio</a>
                    </div>
                    <div style={{ position: 'absolute', right: '-30px', top: '300px' }}>
                        <a href="https://enlinea.electrohuila.com.co/acciones-mejoramiento/#/sign-in" target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#4b5563', color: 'white', padding: '60px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textDecoration: 'none', writingMode: 'vertical-rl', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Acciones de Mejoramiento</a>
                    </div>
                    <div className="mb-6">
                        <div className="bg-blue-700 text-white text-center py-2 rounded-t-lg font-bold text-sm">ESTRATÉGICO</div>
                        <div className="bg-gray-100 border-2 border-blue-700 rounded-b-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://electrohuilaco.sharepoint.com/Estrategico/Planeacion_Estrategica/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-4 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md">Planeación Estratégica</a>
                                <a href="https://electrohuilaco.sharepoint.com/Estrategico/ORSA/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FEstrategico%2FORSA%2FDocumentos%20SGC%2FForms%2FAllItems%2Easpx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-4 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md">Gestión Sostenible</a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="bg-orange-600 text-white text-center py-2 rounded-t-lg font-bold text-sm">CADENA DE VALOR</div>
                        <div className="bg-orange-50 border-2 border-orange-600 rounded-b-lg p-4">
                            <div className="grid grid-cols-4 gap-3">
                                <div className="space-y-3">
                                    <a href="https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Gestion_Comercial/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Comercial</a>
                                    <a href="https://electrohuilaco.sharepoint.com/Soporte/Cartera/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Cartera</a>
                                    <a href="https://electrohuilaco.sharepoint.com/Soporte/Facturacion/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Facturación</a>
                                </div>
                                <div className="space-y-3">
                                    <a href="https://electrohuilaco.sharepoint.com/Soporte/Expansi%C3%B3n/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Expansión</a>
                                    <a href="https://electrohuilaco.sharepoint.com/Soporte/Perdidas/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs leading-tight shadow-sm hover:shadow-md">Gestión Pérdidas de energía</a>
                                </div>
                                <div className="space-y-3">
                                    <a href="https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Operacion/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs leading-tight shadow-sm hover:shadow-md">Operación infraestructura</a>
                                    <a href="https://electrohuilaco.sharepoint.com/Soporte/Mantenimiento/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs leading-tight shadow-sm hover:shadow-md">Mantenimiento Infraestructura</a>
                                </div>
                                <div>
                                    <a href="https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Servicio_al_Cliente/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-gray-50 text-gray-800 text-center py-16 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs h-full shadow-sm hover:shadow-md">Servicio al Cliente</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="bg-orange-600 text-white text-center py-2 rounded-t-lg font-bold text-sm">SOPORTE</div>
                        <div className="bg-orange-50 border-2 border-orange-600 rounded-b-lg p-4">
                            <div className="grid grid-cols-3 gap-4 mb-3">
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Gestion_Financiera/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-3 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Financiera</a>
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Talento_Humano/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-3 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Talento Humano</a>
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Gestion_Adquisiciones/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-3 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Contractual</a>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Gestion_Tecnologica/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Tecnológica</a>
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Gestion_Facilidades/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Facilidades</a>
                                <a href="https://electrohuilaco.sharepoint.com/Estrategico/Gestion_Regulatoria/SitePages/Inicio.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Regulatoria</a>
                                <a href="https://electrohuilaco.sharepoint.com/Soporte/Gestion_Juridica/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-2 rounded border-2 border-gray-400 transition-all font-medium text-xs shadow-sm hover:shadow-md">Gestión Jurídica</a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="bg-blue-700 text-white text-center py-2 rounded-t-lg font-bold text-sm">CONTROL</div>
                        <div className="bg-gray-100 border-2 border-blue-700 rounded-b-lg p-4">
                            <div className="flex justify-center">
                                <a href="https://electrohuilaco.sharepoint.com/Control/Control_Interno/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-8 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md w-1/3">Control Interno</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-8">
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?CID=f9dbff58-a422-0b8e-adb2-fed64db231cf&sourcedoc=%7B9A0D6731-9D84-4030-B14E-8CA85FF546A4%7D&file=LISTADO%20MAESTRO%20DE%20DOCUMENTOS%20EXTERNOS%20(V.%203).xls&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Listado Doc. Externos</a>
                        <a href="https://electrohuilaco.sharepoint.com/:p:/r/_layouts/15/Doc.aspx?CID=f320c3f4-38d9-994f-6adc-c9f4e0feffdb&sourcedoc=%7B9BBC6F1E-B378-4979-9636-74BE13FD2616%7D&file=Mapa%20de%20procesos.pptx&action=edit&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Mapa de Procesos</a>
                        <a href="https://electrohuilaco.sharepoint.com/:w:/r/_layouts/15/Doc.aspx?CID=789dafc1-554e-d159-cffa-7238c6a3727f&sourcedoc=%7BBB5478B9-168D-4414-B0BB-CB48C509F7D7%7D&file=MA-GPE-01-001%20MANUAL%20SISTEMAS%20DE%20GESTI%C3%93N.docx&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Manual Sistemas de Gestión</a>
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B4BF05744-E715-4CDC-ACCA-2EFE4C6770E2%7D&file=Listado%20Maestro%20de%20Documentos%20Internos%20y%20Registros%20(V.3).xls&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-6 rounded-lg transition-all font-medium text-center text-xs leading-tight">Listado de Documentos internos y Registros del SGC</a>
                    </div>
                </div>
            </div>
        );
    }

    // ── SGA MENU ──────────────────────────────────────────────────────────────
    if (sgaView === 'sga-menu') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSgaView('main')} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
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
                        <div onClick={() => setSgaView('politica')} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Política SGA</h3>
                            <p className="text-gray-600 mb-4">Consulta nuestra política ambiental y compromisos de sostenibilidad</p>
                            <span className="text-green-600 font-medium">Ver política →</span>
                        </div>
                        <div onClick={() => window.open(sgaUrls.documentacion, '_blank')} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ExternalLink className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Documentación</h3>
                            <p className="text-gray-600 mb-4">Accede a todos los documentos, procedimientos y registros ambientales</p>
                            <span className="text-blue-600 font-medium">Ir a SharePoint →</span>
                        </div>
                        <div onClick={() => setSgaView('objetivos')} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">Objetivos Ambientales</h3>
                            <p className="text-gray-600 mb-4">Revisa nuestros objetivos, metas e indicadores ambientales</p>
                            <span className="text-yellow-600 font-medium">Ver objetivos →</span>
                        </div>
                        <div onClick={() => setSgaView('alcance')} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Alcance</h3>
                            <p className="text-gray-600 mb-4">Conoce el alcance del Sistema de Gestión Ambiental y las sedes cubiertas</p>
                            <span className="text-green-600 font-medium">Ver alcance →</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── OBJETIVOS SGA ─────────────────────────────────────────────────────────
    if (sgaView === 'objetivos') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSgaView('sga-menu')} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
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
                        <h3 className="text-2xl font-bold mb-8 text-center text-green-600">Objetivos del Sistema de Gestión Ambiental</h3>
                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500"><p className="text-gray-700 leading-relaxed">Garantizar la conservación, uso eficiente de los recursos naturales y ahorro del recurso hídrico y energético, así como la correcta gestión y disposición final de los residuos generados en la organización.</p></div>
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"><p className="text-gray-700 leading-relaxed">Identificar los aspectos, valorar y evaluar los impactos ambientales significativos asociados a las diferentes operaciones.</p></div>
                            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500"><p className="text-gray-700 leading-relaxed">Cumplir con los requisitos legales ambientales y otros requisitos aplicables.</p></div>
                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500"><p className="text-gray-700 leading-relaxed">Destinar los recursos necesarios para la implementación, mantenimiento, control y mejora continua del sistema de gestión ambiental.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── ALCANCE SGA ───────────────────────────────────────────────────────────
    if (sgaView === 'alcance') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSgaView('sga-menu')} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
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
                        <h3 className="text-2xl font-bold mb-6 text-center text-green-600">Alcance del Sistema de Gestión Ambiental</h3>
                        <p className="text-lg mb-8 text-center text-gray-700">La distribución y comercialización de energía eléctrica, para las siguientes sedes:</p>
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

    // ── POLÍTICA SGA ──────────────────────────────────────────────────────────
    if (sgaView === 'politica') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSgaView('sga-menu')} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
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
                    <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-center text-green-600">Política Ambiental ElectroHuila</h3>
                            <p className="text-center text-gray-600 mt-2">Documento oficial del Sistema de Gestión Ambiental</p>
                        </div>
                        <div className="relative bg-gray-700" style={{ height: isFullscreen ? '90vh' : '600px' }}>
                            <div className="absolute top-0 left-0 right-0 z-10 bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                                <span className="text-sm font-medium">Política SGA ElectroHuila</span>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setIsFullscreen(!isFullscreen)} className="hover:bg-gray-700 p-2 rounded text-xs transition-colors">{isFullscreen ? 'Salir' : 'Pantalla completa'}</button>
                                    <button className="hover:bg-gray-700 p-2 rounded text-xs transition-colors">Compartir</button>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pt-12 pb-16">
                                <div className="relative">
                                    <div className="flex items-center justify-center space-x-2">
                                        {currentPage > 1 && (
                                            <div className="bg-white shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300" style={{ width: isFullscreen ? '450px' : '340px', height: isFullscreen ? '320px' : '240px' }}>
                                                <img src={documentPages[currentPage - 2]} alt={`Página ${currentPage - 1}`} className="w-full h-full object-cover rounded shadow-lg" onError={(e) => { e.target.src = `https://via.placeholder.com/240x340/1E40AF/ffffff?text=P${currentPage - 1}`; }} />
                                            </div>
                                        )}
                                        <div className="bg-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300" style={{ width: isFullscreen ? '450px' : '340px', height: isFullscreen ? '320px' : '240px' }}>
                                            <img src={documentPages[currentPage - 1]} alt={`Página ${currentPage}`} className="w-full h-full object-cover rounded shadow-lg" onError={(e) => { e.target.src = `https://via.placeholder.com/240x340/1E40AF/ffffff?text=P${currentPage}`; }} />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-sm"></div>
                                </div>
                            </div>
                            {currentPage > 1 && <button onClick={prevPage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"><ArrowLeft className="w-6 h-6" /></button>}
                            {currentPage < totalPages && <button onClick={nextPage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"><ArrowLeft className="w-6 h-6 rotate-180" /></button>}
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white px-4 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <button onClick={() => goToPage(1)} disabled={currentPage === 1} className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Primera</button>
                                        <button onClick={prevPage} disabled={currentPage === 1} className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Anterior</button>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="number" min="1" max={totalPages} value={currentPage} onChange={(e) => goToPage(parseInt(e.target.value))} className="w-12 px-2 py-1 text-center bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-blue-500" />
                                        <span className="text-sm">/ {totalPages}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button onClick={nextPage} disabled={currentPage === totalPages} className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Siguiente</button>
                                        <button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} className="hover:bg-gray-700 p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Última</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-2 top-20 space-y-2 opacity-70 hover:opacity-100 transition-opacity">
                                {documentPages.map((page, index) => (
                                    <button key={index} onClick={() => goToPage(index + 1)} className={`block w-12 h-16 rounded border-2 overflow-hidden transition-all ${currentPage === index + 1 ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-400 hover:border-gray-200'}`}>
                                        <img src={page} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" onError={(e) => { e.target.src = `https://via.placeholder.com/48x64/666/fff?text=${index + 1}`; }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold mb-4 text-green-600">Compromisos Ambientales</h3>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-4 rounded-xl"><h4 className="font-bold text-green-700 mb-2">Protección Ambiental</h4><p className="text-sm text-green-800">Prevención de la contaminación y uso eficiente de recursos naturales</p></div>
                                <div className="bg-blue-50 p-4 rounded-xl"><h4 className="font-bold text-blue-700 mb-2">Energía Sostenible</h4><p className="text-sm text-blue-800">Promoción de fuentes de energía renovable y tecnologías limpias</p></div>
                                <div className="bg-yellow-50 p-4 rounded-xl"><h4 className="font-bold text-yellow-700 mb-2">Cumplimiento</h4><p className="text-sm text-yellow-800">Cumplimiento de la legislación ambiental y mejora continua</p></div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Acciones Disponibles</h3>
                            <div className="space-y-4">
                                <button onClick={() => window.open(documentPages[0], '_blank')} className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"><FileText className="w-5 h-5" /><span>Descargar Documento Completo</span></button>
                                <button onClick={() => window.print()} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"><span>Imprimir Política</span></button>
                                <button onClick={() => setSgaView('objetivos')} className="w-full bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-xl transition-all flex items-center justify-center space-x-2"><Target className="w-5 h-5" /><span>Ver Objetivos Ambientales</span></button>
                            </div>
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <p className="text-xs text-gray-600 text-center"><strong>Versión:</strong> 2022-2 <br /><strong>Fecha de aprobación:</strong> Marzo 2022 <br /><strong>Próxima revisión:</strong> Marzo 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── VISTA PRINCIPAL ───────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-[#F0F2F5]">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={onBack} className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </button>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Sistema Integral de Gestión</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">Accede a todos los subsistemas de gestión de ElectroHuila</p>
                        <div className="mt-6 text-sm text-blue-200">Inicio / Sistema Integral de Gestión</div>
                    </div>
                </div>
            </div>

            {/* Sección principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="block w-10 h-px bg-gray-300" />
                    <span className="text-[11px] tracking-[0.28em] uppercase text-gray-400 font-normal">
                        Subsistemas de Gestión
                    </span>
                    <span className="block w-10 h-px bg-gray-300" />
                </div>

                {/* ── PANELES EXPANDIBLES ── */}
                <div className="flex flex-row items-stretch gap-3 h-[400px] w-full mb-6">
                    {sigSystems.map((sys, i) => {
                        const isActive = sys.id === activeSystem;
                        return (
                            <div
                                key={sys.id}
                                onClick={() => {
                                    if (activeSystem === sys.id) {
                                        openSystem(sys);
                                    } else {
                                        setActiveSystem(sys.id);
                                    }
                                }}
                                onMouseEnter={() => setHoveredSystem(sys.id)}
                                onMouseLeave={() => setHoveredSystem(null)}
                                className="relative overflow-hidden cursor-pointer"
                                style={{
                                    flexGrow: isActive ? 10000 : 1,
                                    minWidth: isActive ? 62 : hoveredSystem === sys.id ? 90 : 62,  // ← crece al hover
                                    maxWidth: isActive ? 620 : undefined,
                                    borderRadius: isActive ? 24 : 16,
                                    background: '#000',
                                    border: `2px solid ${isActive ? sys.color : hoveredSystem === sys.id ? sys.color : '#e5e7eb'}`,  // ← borde con color al hover
                                    boxShadow: isActive
                                        ? `0 20px 60px ${sys.color}33`
                                        : hoveredSystem === sys.id
                                            ? `0 8px 24px ${sys.color}44`   // ← sombra al hover
                                            : '0 2px 8px rgba(0,0,0,0.06)',
                                    transition: 'flex-grow 0.55s cubic-bezier(0.4,0,0.1,1), min-width 0.3s ease, border-radius 0.55s cubic-bezier(0.4,0,0.1,1), box-shadow 0.3s ease, border-color 0.3s ease',
                                }}
                            >
                                {/* ── IMAGEN DE FONDO FULL CARD ── */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        zIndex: 0,
                                        borderRadius: 'inherit',
                                        overflow: 'hidden',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <img
                                        src={sys.image}
                                        alt={sys.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            opacity: 1,
                                            transition: 'opacity 0.55s ease',
                                        }}
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                    {/* ── OVERLAY GRADIENTE PARA LEGIBILIDAD ── */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: isActive
                                            ? 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)'
                                            : 'rgba(0,0,0,0.40)',
                                        transition: 'background 0.55s ease',
                                    }} />
                                </div>

                                {/* Top accent bar */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0,
                                        height: 4,
                                        background: sys.color,
                                        borderRadius: '24px 24px 0 0',
                                        transform: isActive ? 'scaleX(1)' : 'scaleX(0.4)',
                                        transformOrigin: 'left',
                                        opacity: isActive ? 1 : 0.3,
                                        transition: 'transform 0.55s cubic-bezier(0.4,0,0.1,1), opacity 0.4s ease',
                                        zIndex: 2,
                                    }}
                                />

                                {/* Number badge */}
                                <div
                                    className="absolute top-4 right-4 text-[10px] font-semibold tracking-[0.15em]"
                                    style={{
                                        color: '#fff',
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 0.4s ease',
                                        zIndex: 2,
                                    }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Colapsado: etiqueta vertical */}
                                <div
                                    className="absolute top-1/2 left-1/2 pointer-events-none whitespace-nowrap"
                                    style={{
                                        transform: 'translate(-50%, -50%) rotate(-90deg)',
                                        opacity: isActive ? 0 : 1,
                                        transition: 'opacity 0.4s ease, font-size 0.3s ease, letter-spacing 0.3s ease',
                                        fontSize: hoveredSystem === sys.id ? 18 : 15,         // ← más grande al hover
                                        fontWeight: 700,
                                        letterSpacing: hoveredSystem === sys.id ? '0.2em' : '0.3em',
                                        textTransform: 'uppercase',
                                        color: '#fff',
                                        zIndex: 2,
                                        textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                                    }}
                                >
                                    {sys.short}
                                </div>

                                {/* Activo: contenido completo */}
                                <div
                                    className="absolute inset-0 flex flex-col justify-between p-7"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 0.35s ease',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                        zIndex: 2,
                                    }}
                                >
                                    {/* Parte superior: badge "Principal" si aplica */}
                                    <div className="flex justify-end">
                                        {sys.featured && (
                                            <span
                                                className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                                                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                                            >
                                                Principal
                                            </span>
                                        )}
                                    </div>

                                    {/* Parte inferior: nombre + descripción + botón */}
                                    <div>
                                        <div
                                            style={{
                                                height: 1,
                                                background: 'rgba(255,255,255,0.4)',
                                                marginBottom: 16,
                                            }}
                                        />
                                        <h3
                                            className="font-bold text-white mb-2 leading-tight"
                                            style={{
                                                fontSize: '1.15rem',
                                                textShadow: '0 1px 1px rgba(0,0,0,0.5)',
                                                animation: isActive ? 'sigSlideUp 0.4s ease forwards' : 'none',
                                            }}
                                        >
                                            {sys.name}
                                        </h3>
                                        <p
                                            className="text-white text-xs leading-relaxed mb-5"
                                            style={{
                                                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                                                opacity: 0.9,
                                                animation: isActive ? 'sigSlideUp 0.4s ease 0.06s both' : 'none',
                                            }}
                                        >
                                            {sys.description}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots / indicator */}
                <div className="flex items-center justify-center gap-2 mt-2 mb-12">
                    {sigSystems.map((sys) => (
                        <button
                            key={sys.id}
                            onClick={() => {
                                if (isActive) {
                                    openSystem(sys);
                                } else {
                                    setActiveSystem(sys.id);
                                }
                            }}
                            className="rounded-full transition-all"
                            style={{
                                width: activeSystem === sys.id ? 24 : 8,
                                height: 8,
                                background: activeSystem === sys.id ? sys.color : '#d1d5db',
                                transition: 'all 0.35s ease',
                            }}
                        />
                    ))}
                </div>

                {/* Texto descriptivo */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-gray-500 text-base leading-relaxed">
                        El Sistema Integral de Gestión de ElectroHuila está compuesto por diferentes subsistemas
                        que trabajan de manera coordinada para garantizar la excelencia operacional y el cumplimiento
                        de los más altos estándares de calidad, seguridad y gestión de activos.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes sigSlideUp {
                    from { transform: translateY(10px); opacity: 0; }
                    to   { transform: translateY(0);    opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default SigSection;