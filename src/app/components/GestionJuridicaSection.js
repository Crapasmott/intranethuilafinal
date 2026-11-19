'use client';

import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Phone,
  Building,
  Home,
  ArrowLeft
} from 'lucide-react';

import NormatividadInternaSection from './NormatividadInternaSection';
import AcuerdosJuntaSection from './AcuerdosJuntaSection';
import CodigosSection from './CodigosSection';
import LegislacionGeneralSection from './LegislacionGeneralSection';
import ResolucionesCREGSection from './ResolucionesCREGSection';
import SentenciasConceptosSection from './SentenciasConceptosSection';
import ResolucionesSSPDSection from './ResolucionesSSPDSection';
import BancoSentenciasSection from './BancoSentenciasSection';
import CircularesCADSection from './CircularesCADSection';
import DocumentosGerenciaSection from './DocumentosGerenciaSection';

const GestionJuridicaSection = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const juridicaItems = [
    {
      id: 'normatividad',
      title: 'Normatividad Interna',
      iconPng: './images/iconos/electro.png',
      color: 'from-orange-500 to-red-500',
      description: 'Consulta normatividad interna',
      isInternal: true
    },
    /*{
      id: 'acuerdos',
      title: 'Acuerdos de Junta Directiva',
      iconPng: './images/iconos/grupo.png',
      color: 'from-blue-500 to-indigo-500',
      description: 'Acuerdos y decisiones directivas',
      isInternal: true
    },*/
    {
      id: 'codigos',
      title: 'Códigos',
      iconPng: './images/iconos/reglamentos.png',
      color: 'from-purple-500 to-pink-500',
      description: 'Códigos y reglamentos',
      isInternal: true
    },
    {
      id: 'legislacion',
      title: 'Legislación General',
      iconPng: './images/iconos/ley.png',
      color: 'from-green-500 to-teal-500',
      description: 'Marco legal general',
      isInternal: true
    },
    {
      id: 'resoluciones-creg',
      title: 'Resoluciones CREG',
      iconPng: './images/iconos/creg-400x436.png',
      color: 'from-yellow-500 to-orange-500',
      description: 'Resoluciones regulatorias',
      isInternal: true,
      component: 'creg'
    },
    {
      id: 'sentencias',
      title: 'Sentencias y Conceptos',
      iconPng: './images/iconos/juez.png',
      color: 'from-red-500 to-pink-500',
      description: 'Jurisprudencia aplicable',
      isInternal: true,
      component: 'sentencias'
    },
    {
      id: 'resoluciones-sspd',
      title: 'Resoluciones SSPD',
      iconPng: './images/iconos/superservicios_logo-copia-400x287.png',
      color: 'from-indigo-500 to-purple-500',
      description: 'Superintendencia de servicios',
      isInternal: true,
      component: 'sspd'
    },
    {
      id: 'banco-sentencias',
      title: 'Banco de Sentencias',
      iconPng: './images/iconos/sentencia.png',
      color: 'from-pink-500 to-red-500',
      description: 'Base de datos jurisprudencial',
      isInternal: true,
      component: 'banco-sentencias'
    },
    {
      id: 'circulares-cad',
      title: 'Circulares CAD',
      iconPng: './images/iconos/documentos.png',
      color: 'from-cyan-500 to-blue-500',
      description: 'Circulares administrativas',
      isInternal: true,
      component: 'circulares-cad'
    },
    {
      id: 'documentos-gerencia',
      title: 'Documentos Gerencia',
      iconPng: './images/iconos/documentos-gerencia.png',
      color: 'from-teal-500 to-green-500',
      description: 'Documentos de gerencia',
      isInternal: true,
      component: 'documentos-gerencia'
    }
  ];

  const enlacesInteres = [
    {
      id: 'creg',
      name: 'CREG',
      description: 'Comisión de Regulación de Energía y Gas',
      logo: './images/logos/creg-logo.png',
      url: 'https://www.creg.gov.co'
    },
    {
      id: 'republica-colombia',
      name: 'República de Colombia',
      description: 'Portal oficial del Estado',
      logo: './images/logos/colombia-logo.png',
      url: 'https://www.gov.co'
    },
    {
      id: 'rama-judicial',
      name: 'Rama Judicial',
      description: 'Poder Judicial de Colombia',
      logo: './images/logos/rama-judicial-logo.png',
      url: 'https://www.ramajudicial.gov.co'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % enlacesInteres.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [enlacesInteres.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % enlacesInteres.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + enlacesInteres.length) % enlacesInteres.length);
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = (item) => {
    if (item.isInternal) {
      if (item.id === 'normatividad') {
        setCurrentView('normatividad-interna');
      } else if (item.id === 'acuerdos') {
        setCurrentView('acuerdos-junta');
      } else if (item.id === 'codigos') {
        setCurrentView('codigos');
      } else if (item.id === 'legislacion') {
        setCurrentView('legislacion-general');
      } else if (item.id === 'resoluciones-creg') {
        setCurrentView('creg');
      } else if (item.id === 'sentencias') {
        setCurrentView('sentencias');
      } else if (item.id === 'resoluciones-sspd') {
        setCurrentView('sspd');
      } else if (item.id === 'banco-sentencias') {
        setCurrentView('banco-sentencias');
      } else if (item.id === 'circulares-cad') {
        setCurrentView('circulares-cad');
      } else if (item.id === 'documentos-gerencia') {
        setCurrentView('documentos-gerencia');
      }
    } else {
      openLink(item.url);
    }
  };

  const handleBackToGestionJuridica = () => {
    setCurrentView('main');
  };

  if (currentView === 'normatividad-interna') {
    return (
      <NormatividadInternaSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'acuerdos-junta') {
    return (
      <AcuerdosJuntaSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'codigos') {
    return (
      <CodigosSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'legislacion-general') {
    return (
      <LegislacionGeneralSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'creg') {
    return (
      <ResolucionesCREGSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'sentencias') {
    return (
      <SentenciasConceptosSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'sspd') {
    return (
      <ResolucionesSSPDSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'banco-sentencias') {
    return (
      <BancoSentenciasSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'circulares-cad') {
    return (
      <CircularesCADSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  if (currentView === 'documentos-gerencia') {
    return (
      <DocumentosGerenciaSection
        onBack={handleBackToGestionJuridica}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                {/* Icono principal de gestión jurídica */}
                <img
                  src="./images/juridica/gestion-juridica-main.png"
                  alt="Gestión Jurídica"
                  className="w-16 h-16 object-contain filter brightness-0 invert"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Gestión Jurídica</h1>
            <p className="text-xl text-blue-100 mb-8">
              Inicio / Gestión Jurídica
            </p>

            {/* ✨ BOTÓN MEJORADO - VERSIÓN 1: Gradiente con brillo y animación */}
            <button
              onClick={onBack}
              className="group relative bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-blue-300/50 hover:scale-105 transform overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Contenido del botón */}
              <div className="relative flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="relative">
                  Volver al Inicio
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            {/* ✨ ALTERNATIVA - VERSIÓN 2: Botón sólido con borde luminoso 
            <button
              onClick={onBack}
              className="group relative bg-white hover:bg-blue-50 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl hover:shadow-white/50 border-4 border-white/30 hover:border-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="relative font-extrabold">
                  Volver al Inicio
                </span>
                <div className="bg-blue-500/20 p-1.5 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </button>
            */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grid principal de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {juridicaItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Fondo gradiente animado */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Contenido */}
              <div className="relative p-8 text-center">
                {/* Ícono PNG personalizado - Sin recuadro de color */}
                <div className="mb-6 mx-auto w-fit transform transition-all duration-500 group-hover:scale-110">
                  <img
                    src={item.iconPng}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback si no carga la imagen */}
                  <div className="w-16 h-16 rounded-lg hidden items-center justify-center bg-gray-100">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Indicador de hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Ícono de enlace externo o interno */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  {item.isInternal ? (
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Sección Enlaces de Interés */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Enlaces de Interés</h4>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-blue-500 rounded"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              <div className="text-center group">
                <a href="https://www.ramajudicial.gov.co/" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="./images/iconos/rama.png"
                    alt="Rama Judicial"
                    className="w-20 h-20 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm text-gray-600 group-hover:text-blue-600">Rama Judicial</p>
                </a>
              </div>

              <div className="text-center group">
                <a href="https://www.superservicios.gov.co/" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="./images/iconos/superservicios.png"
                    alt="Superintendencia de Servicios Públicos Domiciliarios"
                    className="w-20 h-20 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm text-gray-600 group-hover:text-blue-600">Superservicios</p>
                </a>
              </div>

              <div className="text-center group">
                <a href="https://www.senado.gov.co/" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="./images/iconos/senado.png"
                    alt="Senado de la República"
                    className="w-20 h-20 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm text-gray-600 group-hover:text-blue-600">Senado</p>
                </a>
              </div>

              <div className="text-center group">
                <a href="https://creg.gov.co/" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="./images/iconos/creg.png"
                    alt="CREG"
                    className="w-20 h-20 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm text-gray-600 group-hover:text-blue-600">CREG</p>
                </a>
              </div>

              <div className="text-center group">
                <a href="https://www.minenergia.gov.co/es/" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="./images/iconos/Minenergia.png"
                    alt="Ministerio de Minas y Energía"
                    className="w-20 h-20 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm text-gray-600 group-hover:text-blue-600">MinEnergía</p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionJuridicaSection;