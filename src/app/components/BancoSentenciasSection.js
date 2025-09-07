'use client';
import React, { useState } from 'react';
import { ArrowLeft, Download, Search, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const CircularesCADSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const documents = [
    // Página 1
    {
      id: 70001,
      title: "Circular 007-2023",
      subtitle: "Intervenciones locativas sede Saire - área parqueadero",
      size: "689.25 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-007-2023.pdf"
    },
    {
      id: 70002,
      title: "Circular 010-2023",
      subtitle: "Prohibición de: participación en actividades políticas en nombre de Electrohuila, reuniones con fines políticos en el horario laboral y espacios de infraestructura institucional y en el desarrollo de sus funciones efectuar divulgación de propaganda política",
      size: "330.83 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-010-2023.pdf"
    },
    {
      id: 70003,
      title: "Circular 004-2023",
      subtitle: "Cumplimiento de las políticas, lineamientos y documentos vinculantes a la oficina de Ética y Cumplimiento",
      size: "5.86 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-004-2023.pdf"
    },
    {
      id: 70004,
      title: "Circular 008-2023",
      subtitle: "Procedimientos para el manejo de hospitalidades, obsequios y beneficios de la Electrificadora del Huila S.A. E.S.P.",
      size: "105 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-008-2023.pdf"
    },
    {
      id: 70005,
      title: "Circular No 06-2025",
      size: "3.64 MB",
      views: 0,
      dateUploaded: "12-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025.pdf"
    },
    {
      id: 70006,
      title: "Circular 002-2023",
      subtitle: "Inventario de elementos devolutivos",
      size: "905.46 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-002-2023.pdf"
    },
    {
      id: 70007,
      title: "Circular 010-2024",
      subtitle: "Facturación electrónica mensual",
      size: "3.31 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-010-2024.pdf"
    },
    {
      id: 70008,
      title: "Circular No 06-2025",
      size: "3.64 MB",
      views: 0,
      dateUploaded: "12-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-2.pdf"
    },
    {
      id: 70009,
      title: "Circular 007-2024",
      subtitle: "Presentación de Revisoría Fiscal",
      size: "850.73 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-007-2024.pdf"
    },
    {
      id: 70010,
      title: "Circular 008-2024",
      subtitle: "Notificaciones Entes de Control (Policía responsabilidad Servidores Públicos - RSPJ)",
      size: "481.63 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-008-2024.pdf"
    },
    // Página 2
    {
      id: 70011,
      title: "Circular 002-2023",
      subtitle: "Inventario de elementos devolutivos",
      size: "905 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-002-2023-2.pdf"
    },
    {
      id: 70012,
      title: "Circular 004-2023",
      subtitle: "Cumplimiento de las políticas, lineamientos y documentos vinculantes a la oficina de Ética y Cumplimiento",
      size: "5 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-004-2023-2.pdf"
    },
    {
      id: 70013,
      title: "Circular 008-2023",
      subtitle: "Procedimientos para el manejo de hospitalidades, obsequios y beneficios de la Electrificadora del Huila S.A. E.S.P.",
      size: "105 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-008-2023-2.pdf"
    },
    {
      id: 70014,
      title: "Circular 007-2023",
      subtitle: "Intervenciones locativas sede Saire - área parqueadero",
      size: "689 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-007-2023-2.pdf"
    },
    {
      id: 70015,
      title: "Circular 010-2023",
      subtitle: "Prohibición de: participación en actividades políticas en nombre de Electrohuila, reuniones con fines políticos en el horario laboral y espacios de infraestructura institucional y en el desarrollo de sus funciones efectuar divulgación de propaganda política",
      size: "311 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-010-2023-2.pdf"
    },
    {
      id: 70016,
      title: "Circular 014-2023",
      subtitle: "Lineamientos cierre contable y fiscal del año 2023",
      size: "715 KB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-014-2023.pdf"
    },
    {
      id: 70017,
      title: "Circular 013-2023",
      subtitle: "REITERACIÓN de la Circular No. 01V 2023 en lo que respecta a: la prohibición de participación en actividades políticas en nombre de Electrohuila, reuniones con fines políticos en el horario laboral y espacios de infraestructura institucional y en el desarrollo de las funciones efectuar divulgación de propaganda política",
      size: "2 MB",
      views: 0,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-013-2023.pdf"
    },
    {
      id: 70018,
      title: "Circular No 06-2025",
      size: "4 MB",
      views: 0,
      dateUploaded: "12-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-3.pdf"
    },
    {
      id: 70019,
      title: "Circular No 06-2025",
      size: "4 MB",
      views: 0,
      dateUploaded: "12-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-4.pdf"
    },
    {
      id: 70020,
      title: "Circular No 06-2025",
      size: "4 MB",
      views: 0,
      dateUploaded: "12-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-5.pdf"
    },
    // Página 3
    {
      id: 70021,
      title: "Circular 009-2023",
      subtitle: "Reporte de información en medios magnéticos - Declaración de renta",
      size: "1.70 KB",
      views: 1,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-009-2023.pdf"
    },
    {
      id: 70022,
      title: "Circular 011-2023",
      subtitle: "Lineamientos frente al horario y ausentismos laborales",
      size: "648 KB",
      views: 1,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-011-2023.pdf"
    },
    {
      id: 70023,
      title: "Circular 015-2023",
      subtitle: "Debida diligencia a los grupos de interés de la Electrificadora del Huila S.A. E.S.P.",
      size: "735 KB",
      views: 1,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-015-2023.pdf"
    },
    {
      id: 70024,
      title: "Circular 014-2024",
      subtitle: "Lineamientos cierre contable y fiscal del año 2024",
      size: "581 KB",
      views: 1,
      dateUploaded: "29-11-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-014-2024.pdf"
    },
    {
      id: 70025,
      title: "Circular 011-2024",
      subtitle: "Uso obligatorio de dotación y elementos de protección personal",
      size: "858 KB",
      views: 2,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-011-2024.pdf"
    },
    {
      id: 70026,
      title: "Circular 005-2023",
      subtitle: "Derecho de Petición -término de respuesta, silencio administrativo aplicado y recursos",
      size: "2 MB",
      views: 2,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-005-2023.pdf"
    },
    {
      id: 70027,
      title: "Circular No 06-2025",
      size: "2 MB",
      views: 2,
      dateUploaded: "08-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-6.pdf"
    },
    {
      id: 70028,
      title: "Circular 013-2024",
      subtitle: "Ausentismo laboral y Reporte de permisos",
      size: "1 MB",
      views: 3,
      dateUploaded: "30-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-013-2024.pdf"
    },
    {
      id: 70029,
      title: "Circular 001-2024",
      subtitle: "Cumplimiento de la directiva presidencial No. 01 de 2025 'Buenas prácticas de ahorro de energía y agua'",
      size: "3 MB",
      views: 4,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-001-2024.pdf"
    },
    {
      id: 70030,
      title: "Circular 012-2024",
      subtitle: "Recomendaciones Protocolo de Seguridad por Orden Público",
      size: "295 KB",
      views: 4,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-012-2024.pdf"
    },
    // Página 4
    {
      id: 70031,
      title: "Circular 006-2023",
      subtitle: "Novedades de nómina: horas extras (Zonas)",
      size: "547 KB",
      views: 2,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-006-2023.pdf"
    },
    {
      id: 70032,
      title: "Circular 012-2023",
      subtitle: "Novedades de Nómina, viáticos, viajas de alimentación y ordenador de gastos presupuestarios",
      size: "468 KB",
      views: 6,
      dateUploaded: "29-10-2024",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-012-2023.pdf"
    },
    {
      id: 70033,
      title: "Circular No 06-2025",
      size: "2 MB",
      views: 22,
      dateUploaded: "09-05-2025",
      downloadUrl: "./gestion juridica/Circulares CAD/Circular-No-06-2025-7.pdf"
    }
  ];

  const handleDownload = (downloadUrl, title) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    const filename = downloadUrl.split('/').pop();
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (doc.subtitle && doc.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Atrás
        </button>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CIRCULARES CAD</h1>
            <p className="text-gray-600">Circulares administrativas</p>
          </div>
          <div className="text-sm text-gray-500">
            {filteredDocuments.length} documentos
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar circulares..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Grid de documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {currentDocuments.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {doc.title}
                  </h3>
                  {doc.subtitle && (
                    <p className="text-xs text-gray-700 mb-2 line-clamp-3">
                      {doc.subtitle}
                    </p>
                  )}
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <span>PDF • {doc.size}</span>
                    <span>{doc.views} vistas</span>
                    <span>Subido el: {doc.dateUploaded}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Descargar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>
          
          <span className="text-gray-600">
            Página {currentPage} de {totalPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CircularesCADSection;