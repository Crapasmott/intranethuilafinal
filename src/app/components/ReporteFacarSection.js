'use client';

import React from 'react';
import { Home, ExternalLink, TrendingUp } from 'lucide-react';

const reportesFacar = [
  {
    id: 1,
    titulo: 'Indicadora FACAR',
    descripcion: 'Reporte de indicadores FACAR con métricas clave y visualizaciones interactivas',
    url: 'https://app.powerbi.com/groups/me/reports/154d522f-8ebf-4f36-8ff4-cbe04568377f/720ca15ca46529d74367?experience=power-bi',
    imagen: './images/control-cartera.jpg',
    gradient: 'from-purple-500 to-orange-500',
  },
  {
    id: 2,
    titulo: 'Indicadora FACAR (público)',
    descripcion: 'Versión de acceso público del reporte de indicadores FACAR, sin necesidad de inicio de sesión',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiOTM1Y2MxZGMtMzA5NS00OGY0LWI1MDQtOWM2ZjllY2U1NjA0IiwidCI6ImJmZjU1MTEyLTIwMWMtNDBmYi1hZTY5LWE1M2M4YWIwNjQ0OSIsImMiOjR9',
    imagen: './images/control-cartera.jpg',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const TarjetaReporte = ({ reporte }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
    <div className={`bg-gradient-to-r ${reporte.gradient} p-3 flex items-center space-x-2`}>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5">
        <TrendingUp className="w-4 h-4 text-white" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-white leading-tight">{reporte.titulo}</h3>
        <p className="text-white/80 text-xs">Power BI Dashboard</p>
      </div>
    </div>

    <div className="p-3">
      <p className="text-gray-600 text-xs mb-2 line-clamp-2">{reporte.descripcion}</p>

      {/* Vista previa */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg h-28 overflow-hidden mb-3 relative">
        <img
          src={reporte.imagen}
          alt={`Vista previa de ${reporte.titulo}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div
          className="absolute inset-0 items-center justify-center text-center text-gray-400"
          style={{ display: 'none' }}
        >
          <div>
            <TrendingUp className="w-6 h-6 mx-auto mb-1 opacity-40" />
            <p className="text-[10px]">Vista previa en Power BI</p>
          </div>
        </div>
      </div>

      <a
        href={reporte.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        <span>Abrir en Power BI</span>
      </a>
    </div>
  </div>
);

const ReporteFacarSection = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner superior */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-10 px-4 text-center">
        <h1 className="text-white text-2xl font-semibold mb-6">
          Reportes e indicadores FACAR
        </h1>
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="bg-blue-600 rounded-lg p-1.5">
            <Home className="w-4 h-4 text-white" />
          </span>
          <span>Volver al Inicio</span>
        </button>
      </div>

      {/* Grid de tarjetas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {reportesFacar.map((reporte) => (
            <TarjetaReporte key={reporte.id} reporte={reporte} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReporteFacarSection;