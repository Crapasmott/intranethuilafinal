'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Download, FileText } from 'lucide-react';

const CircularesCADSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Documentos basados en los archivos reales de la imagen
  const documents = [
    {
      id: 1,
      title: "Circular-001-2023.pdf",
      size: "245 KB",
      views: 2,
      dateUploaded: "15-03-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-001-2023.pdf"
    },
    {
      id: 2,
      title: "Circular-001-2024.pdf",
      size: "189 KB",
      views: 5,
      dateUploaded: "12-01-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-001-2024.pdf"
    },
    {
      id: 3,
      title: "Circular-002-2023.pdf",
      size: "312 KB",
      views: 1,
      dateUploaded: "28-03-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-002-2023.pdf"
    },
    {
      id: 4,
      title: "Circular-002-2024.pdf",
      size: "156 KB",
      views: 3,
      dateUploaded: "25-02-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-002-2024.pdf"
    },
    {
      id: 5,
      title: "Circular-003-2023.pdf",
      size: "267 KB",
      views: 0,
      dateUploaded: "10-04-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-003-2023.pdf"
    },
    {
      id: 6,
      title: "Circular-003-2024.pdf",
      size: "198 KB",
      views: 4,
      dateUploaded: "18-03-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-003-2024.pdf"
    },
    {
      id: 7,
      title: "Circular-004-2023.pdf",
      size: "334 KB",
      views: 2,
      dateUploaded: "22-04-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-004-2024.pdf"
    },
    {
      id: 8,
      title: "Circular-004-2024.pdf",
      size: "176 KB",
      views: 1,
      dateUploaded: "05-04-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-004-2024.pdf"
    },
    {
      id: 9,
      title: "Circular-005-2023.pdf",
      size: "221 KB",
      views: 3,
      dateUploaded: "15-05-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-005-2023.pdf"
    },
    {
      id: 10,
      title: "Circular-005-2024.pdf",
      size: "289 KB",
      views: 2,
      dateUploaded: "20-05-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-005-2024.pdf"
    },
    {
      id: 11,
      title: "Circular-006-2023.pdf",
      size: "345 KB",
      views: 1,
      dateUploaded: "08-06-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-006-2023.pdf"
    },
    {
      id: 12,
      title: "Circular-006-2024.pdf",
      size: "187 KB",
      views: 0,
      dateUploaded: "12-06-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-006-2024.pdf"
    },
    {
      id: 13,
      title: "Circular-007-2023.pdf",
      size: "256 KB",
      views: 2,
      dateUploaded: "25-07-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-007-2023.pdf"
    },
    {
      id: 14,
      title: "Circular-007-2024.pdf",
      size: "198 KB",
      views: 4,
      dateUploaded: "30-07-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-007-2024.pdf"
    },
    {
      id: 15,
      title: "Circular-008-2023.pdf",
      size: "367 KB",
      views: 1,
      dateUploaded: "14-08-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-008-2023.pdf"
    },
    {
      id: 16,
      title: "Circular-008-2024.pdf",
      size: "165 KB",
      views: 3,
      dateUploaded: "22-08-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-008-2024.pdf"
    },
    {
      id: 17,
      title: "Circular-009-2023.pdf",
      size: "278 KB",
      views: 0,
      dateUploaded: "10-09-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-009-2023.pdf"
    },
    {
      id: 18,
      title: "Circular-010-2023.pdf",
      size: "203 KB",
      views: 2,
      dateUploaded: "05-10-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-010-2023.pdf"
    },
    {
      id: 19,
      title: "Circular-010-2024.pdf",
      size: "389 KB",
      views: 1,
      dateUploaded: "18-10-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-010-2024.pdf"
    },
    {
      id: 20,
      title: "Circular-011-2023.pdf",
      size: "145 KB",
      views: 4,
      dateUploaded: "20-11-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-011-2023.pdf"
    },
    {
      id: 21,
      title: "Circular-011-2024.pdf",
      size: "234 KB",
      views: 0,
      dateUploaded: "25-11-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-011-2024.pdf"
    },
    {
      id: 22,
      title: "Circular-012-2023.pdf",
      size: "267 KB",
      views: 3,
      dateUploaded: "15-12-2023",
      downloadUrl: "./gestion juridica/Circulares/Circular-012-2023.pdf"
    },
    {
      id: 23,
      title: "Circular-012-2024.pdf",
      size: "398 KB",
      views: 2,
      dateUploaded: "20-12-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-012-2024.pdf"
    },
    {
      id: 24,
      title: "Circular-013-2023.pdf",
      size: "178 KB",
      views: 1,
      dateUploaded: "08-01-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-013-2023.pdf"
    },
    {
      id: 25,
      title: "Circular-013-2024.pdf",
      size: "289 KB",
      views: 0,
      dateUploaded: "14-01-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-013-2024.pdf"
    },
    {
      id: 26,
      title: "Circular-014-2023.pdf",
      size: "245 KB",
      views: 2,
      dateUploaded: "22-02-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-014-2023.pdf"
    },
    {
      id: 27,
      title: "Circular-014-2024.pdf",
      size: "412 KB",
      views: 1,
      dateUploaded: "28-02-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-014-2024.pdf"
    },
    {
      id: 28,
      title: "Circular-015-2023.pdf",
      size: "156 KB",
      views: 3,
      dateUploaded: "12-03-2024",
      downloadUrl: "./gestion juridica/Circulares/Circular-015-2023.pdf"
    },
    {
      id: 29,
      title: "Circular-No-06-2025.pdf",
      size: "267 KB",
      views: 5,
      dateUploaded: "15-01-2025",
      downloadUrl: "./gestion juridica/Circulares/Circular-No-06-2025.pdf"
    }
  ];

  // Filtrar documentos basado en la búsqueda
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

  // Resetear página cuando cambia la búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleDownload = (downloadUrl, title) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    const filename = downloadUrl.split('/').pop();
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Volver a Gestión Jurídica</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Circulares CAD</h1>
            </div>
            <div className="text-sm text-gray-500">
              {filteredDocuments.length} documento{filteredDocuments.length !== 1 ? 's' : ''} encontrado{filteredDocuments.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Barra de búsqueda */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar circulares..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Lista de documentos */}
        <div className="space-y-4">
          {currentDocuments.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentDocuments.map((doc) => (
                <div key={doc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                          {doc.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>PDF • {doc.size}</span>
                          <span>{doc.views} vistas</span>
                          <span>Subido el: {doc.dateUploaded}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                      className="ml-3 inline-flex items-center px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 flex-shrink-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No se encontraron documentos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredDocuments.length)} de {filteredDocuments.length} resultados
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Anterior
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularesCADSection;