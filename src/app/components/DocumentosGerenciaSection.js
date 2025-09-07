'use client';
import React from 'react';
import { ArrowLeft, FileText, Clock, Wrench } from 'lucide-react';

const DocumentosGerenciaSection = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver a Gestión Jurídica</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">Documentos Gerencia</h1>
          </div>
        </div>
      </div>

      {/* Contenido principal - Página en construcción */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Icono principal */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-teal-500 to-green-500 rounded-full shadow-lg">
              <img
                src="./images/iconos/documentos-gerencia.png"
                alt="Documentos Gerencia"
                className="w-12 h-12 object-contain filter brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 hidden items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Documentos Gerencia
          </h2>

          {/* Descripción */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accede a los documentos oficiales y comunicaciones de la gerencia general de la empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentosGerenciaSection;