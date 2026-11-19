'use client';

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Settings, FileText, Target, Mail } from 'lucide-react';
import SigAcordeon from './SigAcordeon';

const SigSection = ({ onBack, onNavigateToSgc }) => {
    // Estado para el SGA y navegación
    const [sgaView, setSgaView] = useState('main'); // 'main', 'sga-menu', 'politica', 'objetivos', 'alcance', 'sgc'
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

    // Configuración de los sistemas SIG
    // El orden importa: así se muestran las franjas del acordeón (de izquierda a derecha)
    const sigSystems = [
        {
            id: 'calidad',
            name: 'Sistema de Gestión de Calidad',
            description: 'Gestión y control de procesos de calidad organizacional',
            color: 'from-orange-500 to-red-500',
            image: '/images/iconos/logo-calidad.png',
            position: 'top-left',
            isInternal: true
        },
        {
            id: 'seguridad',
            name: 'Seguridad & Salud en el trabajo',
            description: 'Sistema de gestión de seguridad y salud ocupacional',
            color: 'from-green-500 to-blue-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20SST/Forms/AllItems.aspx',
            image: '/images/iconos/logo-sst.png',
            position: 'bottom-left'
        },
        {
            id: 'sig-central',
            name: 'SIG - Sistema Integrado de Gestión',
            description: 'Plataforma central del sistema integrado de gestión',
            color: 'from-blue-500 to-cyan-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20INTEGRADO%20DE%20GESTIN/Forms/AllItems.aspx?',
            image: '/images/iconos/logo-sig.png',
            featured: true,
            position: 'center'
        },
        {
            id: 'sga',
            name: 'SGA - Sistema de Gestión Ambiental',
            description: 'Sistema de gestión ambiental y sostenibilidad',
            color: 'from-green-400 to-emerald-500',
            url: '/',
            image: '/images/iconos/logo-sga.png',
            position: 'top-right',
            isInternal: true
        },
        {
            id: 'sigac',
            name: 'SIGAC - Sistema de Gestión de Activos',
            description: 'Gestión y control de activos empresariales',
            color: 'from-yellow-500 to-orange-500',
            url: 'https://electrohuilaco.sharepoint.com/SISTEMA%20DE%20GESTIN%20DE%20ACTIVOS/Forms/AllItems.aspx?viewpath=%2FSISTEMA%20DE%20GESTIN%20DE%20ACTIVOS%2FForms%2FAllItems%2Easpx',
            image: '/images/iconos/logo-sigac.png',
            position: 'bottom-right'
        }
    ];

    // Función para abrir sistemas
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

    // Vista del Sistema de Gestión de Calidad (SGC)
    if (sgaView === 'sgc') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSgaView('main')}
                            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                        >
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
                    {/* BOTONES LATERALES ESTÁTICOS */}
                    <div style={{ position: 'absolute', left: '-30px', top: '300px' }}>
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B6F8D640E-DD39-4974-94DE-689EFA24B475%7D&file=Requisitos%20clientes%20legales%2Cinstitucionales%2C%20otros%20%20CLIO.xls" target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#22c55e', color: 'white', padding: '60px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textDecoration: 'none', writingMode: 'vertical-rl', transform: 'scale(-1, -1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Matriz Clio</a>
                    </div>

                    <div style={{ position: 'absolute', right: '-30px', top: '300px' }}>
                        <a href="https://enlinea.electrohuila.com.co/acciones-mejoramiento/#/sign-in" target="_blank" rel="noopener noreferrer" style={{ display: 'block', backgroundColor: '#4b5563', color: 'white', padding: '60px 12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', textDecoration: 'none', writingMode: 'vertical-rl', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Acciones de Mejoramiento</a>
                    </div>


                    {/* Sección superior - Estratégica */}
                    <div className="mb-6">
                        <div className="bg-blue-700 text-white text-center py-2 rounded-t-lg font-bold text-sm">ESTRATÉGICO</div>
                        <div className="bg-gray-100 border-2 border-blue-700 rounded-b-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://electrohuilaco.sharepoint.com/Estrategico/Planeacion_Estrategica/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-4 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md">Planeación Estratégica</a>
                                <a href="https://electrohuilaco.sharepoint.com/Estrategico/ORSA/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FEstrategico%2FORSA%2FDocumentos%20SGC%2FForms%2FAllItems%2Easpx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-4 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md">Gestión Sostenible</a>
                            </div>
                        </div>
                    </div>

                    {/* Sección central - Cadena de Valor */}
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

                    {/* Control Interno */}
                    <div className="mb-8">
                        <div className="bg-blue-700 text-white text-center py-2 rounded-t-lg font-bold text-sm">CONTROL</div>
                        <div className="bg-gray-100 border-2 border-blue-700 rounded-b-lg p-4">
                            <div className="flex justify-center">
                                <a href="https://electrohuilaco.sharepoint.com/Control/Control_Interno/Documentos%20SGC/Forms/AllItems.aspx" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-gray-800 text-center py-3 px-8 rounded border-2 border-gray-400 transition-all font-medium text-sm shadow-sm hover:shadow-md w-1/3">Control Interno</a>
                            </div>
                        </div>
                    </div>

                    {/* Documentos principales */}
                    <div className="grid grid-cols-4 gap-4 mt-8">
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?CID=f9dbff58-a422-0b8e-adb2-fed64db231cf&sourcedoc=%7B9A0D6731-9D84-4030-B14E-8CA85FF546A4%7D&file=LISTADO%20MAESTRO%20DE%20DOCUMENTOS%20EXTERNOS%20(V.%203).xls&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Listado Doc. Externos</a>
                        <a href="https://electrohuilaco.sharepoint.com/:p:/r/_layouts/15/Doc.aspx?sourcedoc=%7B9D8011E0-B8F6-428E-987F-423CC3857635%7D&file=Mapa%20de%20procesos.ppt&action=edit&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Mapa de Procesos</a>
                        <a href="https://electrohuilaco.sharepoint.com/:w:/r/_layouts/15/Doc.aspx?CID=789dafc1-554e-d159-cffa-7238c6a3727f&sourcedoc=%7BBB5478B9-168D-4414-B0BB-CB48C509F7D7%7D&file=MA-GPE-01-001%20MANUAL%20SISTEMAS%20DE%20GESTI%C3%93N.docx&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-8 rounded-lg transition-all font-medium text-center text-sm">Manual Sistemas de Gestión</a>
                        <a href="https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B4BF05744-E715-4CDC-ACCA-2EFE4C6770E2%7D&file=Listado%20Maestro%20de%20Documentos%20Internos%20y%20Registros%20(V.3).xls&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-6 rounded-lg transition-all font-medium text-center text-xs leading-tight">Listado de Documentos internos y Registros del SGC</a>
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
                                <Target className="w-8 h-8 text-green-600" />
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
                                                    width: isFullscreen ? '450px' : '340px',
                                                    height: isFullscreen ? '320px' : '240px'
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
                                                width: isFullscreen ? '450px' : '340px',
                                                height: isFullscreen ? '320px' : '240px'
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
                                        className={`block w-12 h-16 rounded border-2 overflow-hidden transition-all ${currentPage === index + 1 ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-400 hover:border-gray-200'}`}
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

    // Vista principal: acordeón de subsistemas
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
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Subsistemas de Gestión
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        El Sistema Integral de Gestión de ElectroHuila está compuesto por diferentes subsistemas
                        que trabajan de manera coordinada para garantizar la excelencia operacional y el cumplimiento
                        de los más altos estándares de calidad, seguridad y gestión de activos.
                    </p>
                </div>

                <SigAcordeon systems={sigSystems} onOpen={openSystem} />
            </div>
        </div>
    );
};

export default SigSection;