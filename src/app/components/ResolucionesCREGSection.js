'use client';
import React, { useState } from 'react';
import { ArrowLeft, Download, Search, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const ResolucionesCREGSection = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const documents = [
    {
      id: 30001,
      title: "CIRCULAR-018-DE-2003-PAGO-DE-CARG...",
      size: "120 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CIRCULAR-018-DE-2003-PAGO-DE-CARG.pdf"
    },
    {
      id: 30002,
      title: "CREG-001-DE-2007-SUBSIDIOS-ESTRATO...",
      size: "155 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-001-DE-2007-SUBSIDIOS-ESTRATO.pdf"
    },
    {
      id: 30003,
      title: "CREG-011-DE-2001-FORMULA-TARIFARI...",
      size: "54 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-011-DE-2001-FORMULA-TARIFARI.pdf"
    },
    {
      id: 30004,
      title: "CREG-024-DE-1995-REGLAMENTA-ASPE...",
      size: "1.943 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-024-DE-1995-REGLAMENTA-ASPE.pdf"
    },
    {
      id: 30005,
      title: "CREG-025-DE-1995-CODIGO-DE-REDES-...",
      size: "4.131 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-025-DE-1995-CODIGO-DE-REDES.pdf"
    },
    {
      id: 30006,
      title: "CREG-027-DE-2011-INDICES-DE-REFERE...",
      size: "104 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-027-DE-2011-INDICES-DE-REFERE.pdf"
    },
    {
      id: 30007,
      title: "CREG-031-DE-1997-FORMULAS-PARA-C...",
      size: "388 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-031-DE-1997-FORMULAS-PARA-C.pdf"
    },
    {
      id: 30008,
      title: "CREG-043-DE-1996-NORMAS-E-ALUMB...",
      size: "69 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-043-DE-1996-NORMAS-E-ALUMB.pdf"
    },
    {
      id: 30009,
      title: "CREG-043-DE-1996-NORMAS-SOBRE-AL...",
      size: "69 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-043-DE-1996-NORMAS-SOBRE-AL.pdf"
    },
    {
      id: 30010,
      title: "CREG-051-DE-2009-DEFINE-REGLAS-DE...",
      size: "588 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-051-DE-2009-DEFINE-REGLAS-DE.pdf"
    },
    {
      id: 30011,
      title: "CREG-057-DE-2003-APRUEBA-COSTO-A...",
      size: "477 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-057-DE-2003-APRUEBA-COSTO-A.pdf"
    },
    {
      id: 30012,
      title: "CREG-070-DE-1998-REGLAMENTO-DE-DI...",
      size: "3.060 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-070-DE-1998-REGLAMENTO-DE-DI.pdf"
    },
    {
      id: 30013,
      title: "CREG-071-DE-2008-ACCESO-INFRAESTR...",
      size: "156 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-071-DE-2008-ACCESO-INFRAESTR.pdf"
    },
    {
      id: 30014,
      title: "CREG-076-DE-1997-COMPLEMENTA-LAS...",
      size: "68 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-076-DE-1997-COMPLEMENTA-LAS.pdf"
    },
    {
      id: 30015,
      title: "CREG-082-DE-2002-CARGOS-POR-USO-...",
      size: "4.703 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-082-DE-2002-CARGOS-POR-USO.pdf"
    },
    {
      id: 30016,
      title: "CREG-085-2009-TASAS-Y-PAGOS-CONV...",
      size: "87 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-085-2009-TASAS-Y-PAGOS-CONV.pdf"
    },
    {
      id: 30017,
      title: "CREG-089-2009-ACLARA-REGLAS-RESOL...",
      size: "186 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-089-2009-ACLARA-REGLAS-RESOL.pdf"
    },
    {
      id: 30018,
      title: "CREG-097-DE-2008-PRINCIPIOS-Y-METO...",
      size: "2.669 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-097-DE-2008-PRINCIPIOS-Y-METO.pdf"
    },
    {
      id: 30019,
      title: "CREG-099-DE-1997-DEFINE-METODOLO...",
      size: "772 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-099-DE-1997-DEFINE-METODOLO.pdf"
    },
    {
      id: 30020,
      title: "CREG-099-DE-1997-DOCUMENTO-MODI...",
      size: "118 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-099-DE-1997-DOCUMENTO-MODI.pdf"
    },
    {
      id: 30021,
      title: "CREG-108-DE-1997-DERECHOS-DE-LOS...",
      size: "259 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-108-DE-1997-DERECHOS-DE-LOS-USUARIOS.pdf"
    },
    {
      id: 30022,
      title: "CREG-110-DE-2006-INGRESOS-REGULAD...",
      size: "113 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-110-DE-2006-INGRESOS-REGULADOS-POR-SERVICIOS-PRESTADOS-AL-CND-ASIC-LAC-para-el-2007.pdf"
    },
    {
      id: 30023,
      title: "CREG-111-DE-2009-APRUEBA-COSTOS-Y...",
      size: "282 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-111-DE-2009-APRUEBA-COSTOS-YCARGOS-ACTIVOS-OPERADOS-POR-ELECTROHUILA.pdf"
    },
    {
      id: 30024,
      title: "CREG-112-DE-2001-FORMULAS-TARIFAR...",
      size: "1.134 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-112-DE-2001-FORMULAS-TARIFARIAS.pdf"
    },
    {
      id: 30025,
      title: "CREG-119-DE-2007-FORMULA-TARIFARI...",
      size: "473 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-119-DE-2007-FORMULA-TARIFARI.pdf"
    },
    {
      id: 30026,
      title: "CREG-122-DE-2003-REGLAMENTA-ASPE...",
      size: "568 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-122-DE-2003-REGLAMENTA-ASPECTOS-COMERCIALRES-DEL-MERCADO-MAYORISTA-EN-SIN.pdf"
    },
    {
      id: 30027,
      title: "CREG-149-DE-2010-MODIFICA-CREG-05...",
      size: "117 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-149-DE-2010-MODIFICA-CREG-058-DE-2008-QUE-ESTABLECE-LAS-ADD.pdf"
    },
    {
      id: 30028,
      title: "CREG-156-DE-2011-REGLAMENTO-DE-C...",
      size: "838 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-156-DE-2011-REGLAMENTO-DE-COMERCIALIZACION-DE-ENERGIA-ELECTRICA.pdf"
    },
    {
      id: 30029,
      title: "CREG-157-DE-2011-REGISTRO-DE-FRON...",
      size: "432 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-157-DE-2011-REGISTRO-DE-FRONTERAS-Y-CONTRATOS-COMPRA-ENERGIA.pdf"
    },
    {
      id: 30030,
      title: "CREG-168-DE-2008-OPCION-TARIFARIA-...",
      size: "83 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-168-DE-2008-OPCION-TARIFARIA-PARA-COMERCIALIZACION.pdf"
    },
    {
      id: 30031,
      title: "CREG-172-DE-2011-METODOLOGIA-PAR...",
      size: "1.071 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-172-DE-2011-METODOLOGIA-PARA-PLANES-DE-PERDIDAS-NO-TECNICAS.pdf"
    },
    {
      id: 30032,
      title: "CREG-183-DE-2009-REGLAS-RELATIVAS-...",
      size: "193 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-183-DE-2009-REGLAS-RELATIVAS-AL-CAMBIO-ENTRE-MERCADO-REGULADO-Y-NO-REGULADO.pdf"
    },
    {
      id: 30033,
      title: "CREG-189-DE-2009-REGLAMENTA-TRAN...",
      size: "150 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-189-DE-2009-REGLAMENTA-TRANSICION-HACIA-EL-CARGO-DE-LA-ADD.pdf"
    },
    {
      id: 30034,
      title: "CREG-182306-DE-2009-CREA-AREA-DE-...",
      size: "494 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/CREG-182306-DE-2009-CREA-AREA-DE-DISTRIBUCION-QUE-INVOLUCRA-A-ELECTROHUILA.pdf"
    },
    {
      id: 30035,
      title: "DOCUMENTO-CREG-090-DE-2009-ANEX...",
      size: "669 KB",
      views: 0,
      dateUploaded: "22/08/2025",
      downloadUrl: "./gestion juridica/Resoluciones CREG/DOCUMENTO-CREG-090-DE-2009-ANEXO-RESOLUCION-111-DE-2009.pdf"
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
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-2xl font-bold text-gray-900">RESOLUCIONES CREG</h1>
            <p className="text-gray-600">Resoluciones regulatorias</p>
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

export default ResolucionesCREGSection;