'use client';
import React, { useState } from 'react';
import { ArrowLeft, Download, Search } from 'lucide-react';

const CodigosSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const codigos = [
    {
      id: 1,
      title: "Código Civil",
      size: "2.1 MB",
      views: 245,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-civil.pdf"
    },
    {
      id: 2,
      title: "Código de Comercio",
      size: "1.8 MB",
      views: 198,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-comercio.pdf"
    },
    {
      id: 3,
      title: "Código de Procedimiento Civil",
      size: "1.5 MB",
      views: 167,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-procedimiento-civil.pdf"
    },
    {
      id: 4,
      title: "Código Penal",
      size: "1.3 MB",
      views: 189,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-penal.pdf"
    },
    {
      id: 5,
      title: "Código Procesal del Trabajo",
      size: "945 KB",
      views: 134,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-procesal-trabajo.pdf"
    },
    {
      id: 6,
      title: "Código Sustantivo del Trabajo",
      size: "1.1 MB",
      views: 223,
      dateUploaded: "2024-01-15",
      downloadUrl: "./gestion juridica/codigos/codigo-sustantivo-trabajo.pdf"
    }
  ];

  const handleDownload = (url, title) => {
    if (!url) {
      alert('URL de descarga no disponible para este documento');
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    // Extraer el nombre del archivo de la URL
    const fileName = url.split('/').pop();
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredCodigos = codigos.filter(codigo =>
    codigo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCodigos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCodigos = filteredCodigos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Códigos</h1>
                <p className="text-sm text-gray-500">Códigos legales y normativos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredCodigos.length} código{filteredCodigos.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar código..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Códigos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentCodigos.map((codigo) => (
            <div key={codigo.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {codigo.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>PDF • {codigo.size}</span>
                    <span>•</span>
                    <span>{codigo.views} vistas</span>
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDownload(codigo.downloadUrl, codigo.title)}
                      className="flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentCodigos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron códigos</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodigosSection;