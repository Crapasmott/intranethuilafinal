'use client';
import React, { useState } from 'react';
import { ArrowLeft, Download, Search, FileText, ChevronLeft, ChevronRight, Folder } from 'lucide-react';

const ResolucionesSSPDSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState('main');
  const itemsPerPage = 8;

  // Documentos principales
  const documents = [
    {
      id: 50001,
      title: "CONCEPTO No. 112 DE 2005- DERECHO DE PETICION Y RESERVA DE INFORMACION.",
      size: "78.68 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-112-DE-2005-DERECHO-DE-PETICION-Y-RESERVA-DE-INFORMACION.pdf"
    },
    {
      id: 50002,
      title: "CONCEPTO No. 187 DE 2006 - RECONOCIMIENTO ACTIVOS DE TERCEROS",
      size: "116.57 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-187-DE-2006-RECONOCIMIENTO-ACTIVOS-DE-TERCEROS.pdf"
    },
    {
      id: 50003,
      title: "CONCEPTO No. 239 DE 2010 - DERECHO DE PETICION Y ACTIVOS DE TERCEROS",
      size: "196.14 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-239-DE-2010-DERECHO-DE-PETICION-Y-ACTIVOS-DE-TERCEROS.pdf"
    },
    {
      id: 50004,
      title: "CONCEPTO No. 260 DE 2009 - FACULTAD SANCIONATORIA",
      size: "191.19 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-260-DE-2009-FACULTAD-SANCIONATORIA.pdf"
    },
    {
      id: 50005,
      title: "CONCEPTO No. 414 DE 2003 - CORRECCION ESTRATIFICACION, NO OPERA ART. 150 LEY 142 DE 1994",
      size: "170.88 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-414-DE-2003-CORRECCION-ESTRATIFICACION.-NO-OPERA-ART.-150-LEY-142-DE-1994.pdf"
    },
    {
      id: 50006,
      title: "CONCEPTO No. 646 DE 2009 - REGIMEN LEGAL SERVIDUMBRES",
      size: "58.97 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-646-DE-2009-REGIMEN-LEGAL-SERVIDUMBRES.pdf"
    },
    {
      id: 50007,
      title: "CONCEPTO No. 658 DE 2009 - INTERESES EN SERVICIOS PUBLICOS",
      size: "166.18 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-658-DE-2009-INTERESES-EN-SERVICIOS-PUBLICOS.pdf"
    },
    {
      id: 50008,
      title: "CONCEPTO No. 661 DE 2009 - MEDICION DEL CONSUMO",
      size: "92.05 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-661-DE-2009-MEDICION-DEL-CONSUMO.pdf"
    },
    {
      id: 50009,
      title: "CONCEPTO No. 662 DE 2009 - SOLIDARIDAD - ROMPIMIENTO",
      size: "94.71 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-662-DE-2009-SOLIDARIDAD-ROMPIMIENTO.pdf"
    },
    {
      id: 50010,
      title: "CONCEPTO No. 668 DE 2006 - DERECHO DE PETICION Y CONFIDENCIALIDAD DE LA INFORMACION",
      size: "137.58 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-668-DE-2006-DERECHO-DE-PETICION-Y-CONFIDENCIALIDAD-DE-LA-INFORMACION.pdf"
    },
    {
      id: 50011,
      title: "CONCEPTO No. 867 DE 2008 - SERVICIO INTERNET NO COMPETENCIA DE LA SSPD",
      size: "143 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTO-No.-867-DE-2008-SERVICIO-INTERNET-NO-COMPETENCIA-DE-LA-SSPD.pdf"
    }
  ];

  // Documentos de la carpeta "CONCEPTOS DE L..."
  const conceptosAlumbradoDocuments = [
    {
      id: 51001,
      title: "cto_sspd_0000223_2008 - Concesionarios",
      size: "23 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000223_2008-Concesionarios.pdf"
    },
    {
      id: 51002,
      title: "cto_sspd_0000238_2008 - Cobro en factura",
      size: "14 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000238_2008-Cobro-en-factura.pdf"
    },
    {
      id: 51003,
      title: "cto_sspd_0000275_2008 - Impuesto",
      size: "18 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000275_2008-Impuesto.pdf"
    },
    {
      id: 51004,
      title: "cto_sspd_0000325_2007 - Cobro en la factura",
      size: "14 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000325_2007-Cobro-en-la-factura.pdf"
    },
    {
      id: 51005,
      title: "cto_sspd_0000364_2007 - No es servicio domiciliario",
      size: "34 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000364_2007-No-es-servicio-domiciliario.pdf"
    },
    {
      id: 51006,
      title: "cto_sspd_0000419_2008 - Normatividad",
      size: "16 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000419_2008-Normatividad.pdf"
    },
    {
      id: 51007,
      title: "cto_sspd_0000610_2008 - Legalidad de las tarifas",
      size: "18 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000610_2008-Legalidad-de-las-tarifas.pdf"
    },
    {
      id: 51008,
      title: "cto_sspd_0000639_2008 - Tarifa",
      size: "17 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000639_2008-Tarifa.pdf"
    },
    {
      id: 51009,
      title: "cto_sspd_0000691_2008 - Inclusion en la factura",
      size: "20 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000691_2008-Inclusion-en-la-factura.pdf"
    },
    {
      id: 51010,
      title: "cto_sspd_0000720_2008 - Competencia",
      size: "18 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO/cto_sspd_0000720_2008-Competencia.pdf"
    }
  ];

  // Documentos de la carpeta "RESOLUCIONES S..."
  const resolucionesDocuments = [
    {
      id: 52001,
      title: "CIRCULAR SSPD 0011 DEL 2004 - DEFENSA DEL DEBIDO PROCESO",
      size: "240 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/RESOLUCIONES SSPD/RESOLUCION-SSPD-FALTA-DE-COMPETENCIA-PARA-SANCIONAR-USUARIOS.pdf"
    },
    {
      id: 52002,
      title: "RESOLUCION SSPD - FALTA DE COMPETENCIA PARA SANCIONAR USUARIOS",
      size: "157 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/RESOLUCIONES SSPD/RESOLUCION-SSPD-FIJA-CONTRIBUCION-2009 (1).pdf"
    },
    {
      id: 52003,
      title: "RESOLUCION SSPD - FUA CONTRIBUCION 2009",
      size: "464 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Resoluciones SSPD/RESOLUCIONES SSPD/RESOLUCION-SSPD-FIJA-CONTRIBUCION-2009.pdf"
    }
  ];

  const handleFolderClick = (folderType) => {
    setCurrentView(folderType);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleDownload = (downloadUrl, title) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    const filename = downloadUrl.split('/').pop();
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Funciones de paginación
  const renderPagination = (totalPages) => {
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

    return totalPages > 1 && (
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
    );
  };

  // Vista de carpeta CONCEPTOS DE L...
  if (currentView === 'conceptos-alumbrado') {
    const filteredDocuments = conceptosAlumbradoDocuments.filter(doc =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <div className="mb-6">
          <button
            onClick={handleBackToMain}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Atrás
          </button>
          
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CONCEPTOS DE LA SSPD SOBRE ALUMBRADO PUBLICO</h1>
              <p className="text-gray-600">Contenido de la carpeta</p>
            </div>
            <div className="text-sm text-gray-500">
              {filteredDocuments.length} documentos
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentDocuments.map((doc) => (
            <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
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

        {renderPagination(totalPages)}
      </div>
    );
  }

  // Vista de carpeta RESOLUCIONES S...
  if (currentView === 'resoluciones') {
    const filteredDocuments = resolucionesDocuments.filter(doc =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <div className="mb-6">
          <button
            onClick={handleBackToMain}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Atrás
          </button>
          
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RESOLUCIONES SSPD</h1>
              <p className="text-gray-600">Contenido de la carpeta</p>
            </div>
            <div className="text-sm text-gray-500">
              {filteredDocuments.length} documentos
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentDocuments.map((doc) => (
            <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                      {doc.title}
                    </h3>
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

        {renderPagination(totalPages)}
      </div>
    );
  }

  // Vista principal
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

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
            <h1 className="text-2xl font-bold text-gray-900">RESOLUCIONES SSPD</h1>
            <p className="text-gray-600">Superintendencia de servicios</p>
          </div>
          <div className="text-sm text-gray-500">
            {filteredDocuments.length} documentos
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar documentos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Carpetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div 
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-blue-50 cursor-pointer"
          onClick={() => handleFolderClick('conceptos-alumbrado')}
        >
          <div className="flex items-center space-x-3">
            <Folder className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                CONCEPTOS DE L...
              </h3>
              <p className="text-xs text-gray-500">Carpeta - Conceptos legales</p>
            </div>
            <div className="text-xs text-gray-500">
              Carpeta
            </div>
          </div>
        </div>

        <div 
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-blue-50 cursor-pointer"
          onClick={() => handleFolderClick('resoluciones')}
        >
          <div className="flex items-center space-x-3">
            <Folder className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                RESOLUCIONES S...
              </h3>
              <p className="text-xs text-gray-500">Carpeta - Resoluciones SSPD</p>
            </div>
            <div className="text-xs text-gray-500">
              Carpeta
            </div>
          </div>
        </div>
      </div>

      {/* Grid de documentos principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {currentDocuments.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {doc.title}
                  </h3>
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
      {renderPagination(totalPages)}
    </div>
  );
};

export default ResolucionesSSPDSection;