'use client';
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, BarChart3, TrendingUp } from 'lucide-react';

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
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver</span>
            </button>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">Power BI - Cartera</h1>
            <p className="text-xl text-blue-100">
              Reportes y análisis de cartera comercial
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {powerBIReports.map((report, index) => {
            const IconComponent = report.icon;
            return (
              <div
                key={report.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Header del reporte */}
                <div className={`bg-gradient-to-r ${report.color} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{report.title}</h3>
                      <p className="text-white/80">Power BI Dashboard</p>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {report.description}
                  </p>

                  {/* Preview/Thumbnail área */}
                  <div className="bg-gray-100 rounded-lg p-4 mb-6 min-h-[200px] flex items-center justify-center">
                    <img
                      src={report.thumbnailUrl}
                      alt={`Preview ${report.title}`}
                      className="max-w-full h-auto rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center text-gray-400">
                      <BarChart3 className="w-16 h-16 mb-4" />
                      <p className="text-sm">Dashboard {report.title}</p>
                      <p className="text-xs text-gray-500 mt-2">Haz clic en "Ver Reporte" para visualizar</p>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <div className="flex">
                    <button
                      onClick={() => handleReportClick(report)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Abrir en Power BI</span>
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