'use client';
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, BarChart3, TrendingUp, Home } from 'lucide-react';

const ReporteCarteraSection = ({ onBack }) => {
  // URLs reales de Power BI configuradas manualmente
  const powerBIReports = [
    {
      id: 'cartera-comercial',
      title: 'Cartera Comercial',
      description: 'Análisis detallado de la cartera comercial con métricas clave y visualizaciones interactivas',
      thumbnailUrl: './images/Cartera-Comercial-300x169-1.jpg',
      // URL para abrir en nueva ventana con single sign-on
      powerBIUrl: 'https://app.powerbi.com/links/I23yUioJzJ?ctid=bff55112-201c-40fb-ae69-a53c8ab06449&pbi_source=linkShare',
      // URL para iframe incrustado
      iframeUrl: 'https://app.powerbi.com/links/I23yUioJzJ?ctid=bff55112-201c-40fb-ae69-a53c8ab06449&pbi_source=linkShare',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'recaudo-estrato',
      title: 'Recaudo por Estrato',
      description: 'Recaudo detallado por estratos socioeconómicos con análisis comparativo y tendencias',
      thumbnailUrl: '/images/Recaudo-por-estrato-300x167-1.png',
      // URL para abrir en nueva ventana con single sign-on
      powerBIUrl: 'https://app.powerbi.com/Redirect?action=OpenLink&linkId=wwWLqPyqr8&ctid=bff55112-201c-',
      // URL para iframe incrustado
      iframeUrl: 'https://app.powerbi.com/Redirect?action=OpenLink&linkId=wwWLqPyqr8&ctid=bff55112-201c-',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'Cartera Comercial (público)',
      title: 'Cartera Comercial (público)',
      description: 'Recaudo detallado por estratos socioeconómicos con análisis comparativo y tendencias',
      thumbnailUrl: 'public/images/control-cartera.jpg',
      // URL para abrir en nueva ventana con single sign-on
      powerBIUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGQwODJlMzYtODBkMS00OTg2LWJjZTYtYzFjZDczNzA1NjFmIiwidCI6ImJmZjU1MTEyLTIwMWMtNDBmYi1hZTY5LWE1M2M4YWIwNjQ0OSIsImMiOjR9',
      // URL para iframe incrustado
      iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGQwODJlMzYtODBkMS00OTg2LWJjZTYtYzFjZDczNzA1NjFmIiwidCI6ImJmZjU1MTEyLTIwMWMtNDBmYi1hZTY5LWE1M2M4YWIwNjQ0OSIsImMiOjR9',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    },
     {
      id: 'Total Comercial por día',
      title: 'Total Comercial por día',
      description: 'Recaudo detallado por estratos socioeconómicos con análisis comparativo y tendencias',
      thumbnailUrl: '/images/total-dia1.jpg',
      // URL para abrir en nueva ventana con single sign-on
      powerBIUrl: 'https://app.powerbi.com/home?ctid=bff55112-201c-40fb-ae69-a53c8ab06449&experience=power-bi',
      // URL para iframe incrustado
      iframeUrl: 'https://app.powerbi.com/home?ctid=bff55112-201c-40fb-ae69-a53c8ab06449&experience=power-bi',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'Total Comercial por día (público)',
      title: 'Total Comercial por día (público)',
      description: 'Recaudo detallado por estratos socioeconómicos con análisis comparativo y tendencias',
      thumbnailUrl: '/images/total--dia.jpg',
      // URL para abrir en nueva ventana con single sign-on
      powerBIUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODIxYjMyMTItNWVjMy00MWI3LTgxZjEtMzFhNGQ0NDBkNTM0IiwidCI6ImJmZjU1MTEyLTIwMWMtNDBmYi1hZTY5LWE1M2M4YWIwNjQ0OSIsImMiOjR9',
      // URL para iframe incrustado
      iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODIxYjMyMTItNWVjMy00MWI3LTgxZjEtMzFhNGQ0NDBkNTM0IiwidCI6ImJmZjU1MTEyLTIwMWMtNDBmYi1hZTY5LWE1M2M4YWIwNjQ0OSIsImMiOjR9',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const handleReportClick = (report) => {
    // Abre el reporte en Power BI con login automático
    window.open(report.powerBIUrl, '_blank', 'noopener,noreferrer');
  };

  // Vista principal con las tarjetas de reportes
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Power BI - Cartera</h1>
            <p className="text-xl text-blue-100 mb-8">
              Reportes y análisis de cartera comercial
            </p>

            {/* ✨ BOTÓN VISTOSO MEJORADO - Debajo del título */}
            <button
              onClick={onBack}
              className="group relative bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center space-x-3 shadow-2xl hover:shadow-blue-300/50 hover:scale-105 transform overflow-hidden"
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
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {powerBIReports.map((report, index) => {
            const IconComponent = report.icon;
            return (
              <div
                key={report.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Header del reporte */}
                <div className={`bg-gradient-to-r ${report.color} p-3`}>
                  <div className="flex items-center space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-tight">{report.title}</h3>
                      <p className="text-white/80 text-xs">Power BI</p>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-3">
                  <p className="text-gray-600 mb-3 text-xs leading-snug line-clamp-3">
                    {report.description}
                  </p>

                  {/* Preview/Thumbnail área */}
                  <div className="bg-gray-100 rounded-lg p-2 mb-3 h-20 flex items-center justify-center">
                    <img
                      src={report.thumbnailUrl}
                      alt={`Preview ${report.title}`}
                      className="max-w-full max-h-full h-auto rounded-md shadow-sm object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-gray-400">
                      <BarChart3 className="w-6 h-6 mb-1" />
                      <p className="text-[10px] text-center">Ver Reporte</p>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <div className="flex">
                    <button
                      onClick={() => handleReportClick(report)}
                      className="w-full bg-blue-600 text-white py-2 px-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Abrir</span>
                    </button>
                  </div>
                </div>

                {/* Efecto de hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReporteCarteraSection;