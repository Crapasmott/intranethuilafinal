'use client';
import React, { useState } from 'react';
import { ArrowLeft, Download, Search, Folder, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const LegislacionGeneralSection = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'folder', 'subfolder'
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedSubfolder, setSelectedSubfolder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Carpetas/subcategorías
  const folders = [
    { id: 129, name: "001.DERECHO DE PETICION-CAPACITACION" },
    { id: 130, name: "01. FONDOS MINISTERIO DE MINAS Y ENERGIA" },
    { id: 135, name: "02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS" },
    { id: 136, name: "03. RETILAP - REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO" },
    { id: 137, name: "04. ALUMBRADO PUBLICO" },
    { id: 138, name: "05. LABORAL Y SEGURIDAD SOCIAL" },
    { id: 139, name: "06. CONCILIACION EXTRAJUDICIAL" },
    { id: 114, name: "07. BOLETIN DE DEUDORES MOROSOS - BDME" },
    { id: 115, name: "08. NORMAS ISO" },
    { id: 116, name: "09. SICE" },
    { id: 117, name: "10. MEDIO AMBIENTE" },
    { id: 118, name: "11. SERVIDUMBRES" },
    { id: 119, name: "12. ESTRATIFICACION" },
    { id: 120, name: "13. GESTION ACTIVOS DEL ESTADO - PROGA" },
    { id: 121, name: "14. CONTRATO DE APRENDIZAJE" },
    { id: 122, name: "15. REGLAMENTO TECNICO PARA TRABAJO SEGURO EN ALTURAS - RESOLUCION 3673 DE 2008" },
    { id: 123, name: "16. REGLAMENTO DE SALUD OCUPACIONAL EN EMPRESAS DEL SECTOR ELECTRICO-RESOLUCION 1348 DE 2009" },
    { id: 124, name: "17. NIIF- NORMAS INTERNACIONALES DE INFORMACION FINANCIERA" },
    { id: 125, name: "19. NUEVA ESTRUCTURA MME" },
    { id: 127, name: "20. SISTEMA UNICO ACTIVIDAD LITIGIOSA DEL ESTADO" },
    { id: 128, name: "21. DESARROLLO URBANO Y PLANES PARCIALES" }
  ];

  // Documentos principales (nivel raíz) - 38 documentos
  const documents = [
    {
      id: 18477,
      title: "ACUERDO No. 050 DEL 2009 ESTATUTO TRIBUTARIO MUNICIPIO DE NEIVA",
      size: "1.16 MB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/ACUERDO-No.-050-DEL-2009-ESTATUTO-TRIBUTARIO-MUNICIPIO-DE-NEIVA.pdf"
    },
    {
      id: 18476,
      title: "CONSTITUCION POLITICA DE COLOMBIA",
      size: "263.04 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/CONSTITUCION-POLITICA-DE-COLOMBIA.pdf"
    },
    {
      id: 18479,
      title: "DECRETO 019 DE 2012 - ANTITRAMITES",
      size: "3.58 MB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-019-DE-2012-ANTITRAMITES.pdf"
    },
    {
      id: 18441,
      title: "DECRETO 019 DE 2012 - ELIMINA Y REFORMA TRAMITES INNECESARIOS",
      size: "6.50 MB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-019-DE-2012-ELIMINA-Y-REFORMA-TRAMITES-INNECESARIOS.pdf"
    },
    {
      id: 18439,
      title: "DECRETO 381 DE 2012 - MODIFICA ESTRUCTURA DEL MME",
      size: "99.45 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-381-DE-2012-MODIFICA-ESTRUCTURA-DEL-MME.pdf"
    },
    {
      id: 18442,
      title: "DECRETO 387 DE 2007 - POLITICAS DE COMERCIALIZACION DE ENERGIA",
      size: "37.82 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-387-DE-2007-POLITICAS-DE-COMERCIALIZACION-DE-ENERGIA.pdf"
    },
    {
      id: 18440,
      title: "DECRETO 388 DE 2007 - CREA LAS AREAS DE DISTRIBUCION",
      size: "64.35 KB",
      views: 2,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-388-DE-2007-CREA-LAS-AREAS-DE-DISTRIBUCION.pdf"
    },
    {
      id: 18443,
      title: "DECRETO 847 DE 2001 - REGLAMENTA CONTRIBUCIONES Y SUBSIDIOS EN ENERGIA ELECTRICA",
      size: "30.38 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-847-DE-2001-REGLAMENTA-CONTRIBUCIONES-Y-SUBSIDIOS-EN-ENERGIA-ELECTRICA.pdf"
    },
    {
      id: 18444,
      title: "DECRETO 1429 DE 1995 - CONTROL SOCIAL SERVICIOS PUBLICOS DOMICILIARIOS",
      size: "70.31 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-1429-DE-1995-CONTROL-SOCIAL-SERVICIOS-PUBLCIOS-DOMICILIARIOS.pdf"
    },
    {
      id: 18446,
      title: "DECRETO 1766 DEL 23 DE AGOSTO DE 2012- HOGARES CONSIDERADOS ESTRATO 1",
      size: "155.56 KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-1766-DEL-23-DE-AGOSTO-DE-2012-HOGARES-CONSIDERADOS-ESTRATO-1.pdf"
    },
    // AQUÍ AGREGAS LOS 28 DOCUMENTOS RESTANTES CON EL MISMO FORMATO
    {
      id: 18501,
      title: "DECRETO 2171 DE 2009 REGLAMENTA SEGURIDAD EN PISCINAS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-2171-DE-2009-REGLAMENTA-SEGURIDAD-EN-PISCINAS.pdf"
    },
    {
      id: 18502,
      title: "DECRETO 2287 2004 CONTRIBUCION ACUEDUCTOS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-2287-2004-CONTRIBUCION-ACUEDUCTOS.pdf"
    },
    {
      id: 18503,
      title: "DECRETO 3087 DE 1997 REGLAMENTA CONTRIBUCIONES Y SUBSIDIOS DEROGADO POR DECRETO 847 DE 2001",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-3087-DE-1997-REGLAMENTA-CONTRIBUCIONES-Y-SUBSIDIOS-DEROGADO-POR-DECRETO-847-DE-2001.pdf"
    },
    {
      id: 18504,
      title: "DECRETO 3451 DE 2008 MODIFICACION EL DECRETO 388 DE 2007",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DECRETO-3451-DE-2008-MODIFICACION-EL-DECRETO-388-DE-2007.pdf"
    },
    {
      id: 18505,
      title: "DOCUMENTO CONPES 3493 DEL 8 DE OCTUBRE DE 2007",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/DOCUMENTO-CONPES-3493-DEL-8-DE-OCTUBRE-DE-2007.pdf"
    },
    {
      id: 18506,
      title: "LEY 51 DE 1986 REGLAMENTA EJERCICIO DE INGENIERIA ELECTRICA Y OTRAS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-51-DE-1986-REGLAMENTA-EJERCICIO-DE-INGENIERIA-ELECTRICA-Y-OTRAS.pdf"
    },
    {
      id: 18507,
      title: "LEY 80 DE 1993 ESTATUTO DE CONTRATACION ADMINISTRACION PUBLICA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-80-DE-1993-ESTATUTO-DE-CONTRATACION-ADMINISTRACION-PUBLICA.pdf"
    },
    {
      id: 18508,
      title: "LEY 87 DE 1993 NORMAS PARA ELJERCICIO DEL CONTROL INTERNO",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-87-DE-1993-NORMAS-PARA-ELJERCICIO-DEL-CONTROL-INTERNO.pdf"
    },
    {
      id: 18509,
      title: "LEY 100 DE 1993 CREA SISTEMA DE SEGURIDAD SOCIAL INTEGRAL",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-100-DE-1993-CREA-SISTEMA-DE-SEGURIDAD-SOCIAL-INTEGRAL.pdf"
    },
    {
      id: 18510,
      title: "LEY 142 DE 1994 LEY DE SERVICIOS PUBLICOS DOMICILIARIOS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-142-DE-1994-LEY-DE-SERVICIOS-PUBLICOS-DOMICILIARIOS.pdf"
    },
    {
      id: 18511,
      title: "LEY 143 DE 1994 LEY ELECTRICA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-143-DE-1994-LEY-ELECTRICA.pdf"
    },
    {
      id: 18512,
      title: "LEY 153 DE 1887 REGLAS SOBRE APLICACION DE LAS LEYES",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-153-DE-1887-REGLAS-SOBRE-APLICACION-DE-LAS-LEYES.pdf"
    },
    {
      id: 18513,
      title: "LEY 489 DE 1998 DEFINE ESRUCTURA RAMA EJECUTIVA DEL ESTADOART.38",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-489-DE-1998-DEFINE-ESRUCTURA-RAMA-EJECUTIVA-DEL-ESTADOART.38.pdf"
    },
    {
      id: 18514,
      title: "LEY 581 DE 2000 PARTICIPACION DE LA MUJER EN CARGOS PUBLICOS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-581-DE-2000-PARTICIPACION-DE-LA-MUJER-EN-CARGOS-PUBLICOS.pdf"
    },
    {
      id: 18515,
      title: "LEY 610 DE 2000 PARTE 1 TRAMITE PROCESOS RESPONSABILIDAD FISCAL",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-610-DE-2000-PARTE-1-TRAMITE-PROCESOS-RESPONSABILIDAD-FISCAL.pdf"
    },
    {
      id: 18516,
      title: "LEY 610 DE 2000 PARTE 2 TRAMITE PROCESOS DE RESPONSABILIDAD FISCAL",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-610-DE-2000-PARTE-2-TRAMITE-PROCESOS-DE-RESPONSABILIDAD-FISCAL.pdf"
    },
    {
      id: 18517,
      title: "LEY 675 DE 2001 REGIMEN DE PROPIEDAD HORIZONTA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-675-DE-2001-REGIMEN-DE-PROPIEDAD-HORIZONTAL.pdf"
    },
    {
      id: 18518,
      title: "LEY 689 DE 2001 MODIFICA PARCIALMENTE LEY 142 DE 1994",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-689-DE-2001-MODIFICA-PARCIALMENTE-LEY-142-DE-1994.pdf"
    },
    {
      id: 18519,
      title: "LEY 697 DE 2001 URE",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-697-DE-2001-URE.pdf"
    },
    {
      id: 18520,
      title: "LEY 755 DE 2002 LEY MARIA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-755-DE-2002-LEY-MARIA.pdf"
    },
    {
      id: 18521,
      title: "LEY 1116 DE 2006 REGIMEN DE INSOLVENCIA EMPRESARIA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1116-DE-2006-REGIMEN-DE-INSOLVENCIA-EMPRESARIAL.pdf"
    },
    {
      id: 18522,
      title: "LEY 1150 DE 2007 REFORMA LEY 80 DE 1993",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1150-DE-2007-REFORMA-LEY-80-DE-1993.pdf"
    },
    {
      id: 18523,
      title: "DOCUMENTO 33 - TITULO PENDIENTE",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/documento-33.pdf"
    },
    {
      id: 18524,
      title: "LEY 1209 DE 2008 NORMAS DE SEGURIDAD EN PISCINAS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1209-DE-2008-NORMAS-DE-SEGURIDAD-EN-PISCINAS.pdf"
    },
    {
      id: 18525,
      title: "LEY 1285 DE 2009 ESTATUTARIA DE LA ADMINISTRACION DE JUSTICIA",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1285-DE-2009-ESTATUTARIA-DE-LA-ADMINISTRACION-DE-JUSTICIA.pdf"
    },
    {
      id: 18526,
      title: "LEY 1365 DE 2009 Art. 89 SUBSIDIO DISTRITO DE RIEGOS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1365-DE-2009-Art.-89-SUBSIDIO-DISTRITO-DE-RIEGOS.pdf"
    },
    {
      id: 18527,
      title: "LEY 1437 DE 2011 CODIGO CONTENCIOSO ADMINISTRATIVO",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/LEY-1437-DE-2011-CODIGO-CONTENCIOSO-ADMINISTRATIVO.pdf"
    },
    {
      id: 18528,
      title: "PROYECTO DE LEY 32 DE 2009 REFORMA LEY 142 DE 1994",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/PROYECTO-DE-LEY-32-DE-2009-REFORMA-LEY-142-DE-1994.pdf"
    },
    {
      id: 18529,
      title: "RESOLUCION MME 182306 DE 2009 CREA ADD ORIENTE",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/RESOLUCION-MME-182306-DE-2009-CREA-ADD-ORIENTE.pdf"
    }, {
      id: 18530,
      title: "RETIE REGLAMENTO RECNICO DE INSTALACIONES ELECTRICAS",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/RETIE-REGLAMENTO-RECNICO-DE-INSTALACIONES-ELECTRICAS.pdf"
    }, {
      id: 18531,
      title: "RETILAP REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO",
      size: "XXX KB",
      views: 1,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/RETILAP-REGLAMENTO-TECNICO-DE-ILUMINACION-Y-ALUMBRADO-PUBLICO.pdf"
    }
  ];

  // Función para obtener documentos de carpetas que tienen documentos directos
  const getFolderDocuments = (folderId) => {
    switch (folderId) {
      case 129: // 001.DERECHO DE PETICION-CAPACITACION
        return [
          {
            id: 1001,
            title: "01. CAPACITACION DERECHO DE PETICION",
            size: "641 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/001.DERECHO DE PETICION-CAPACITACION/01.-CAPACITACION-DERECHO-DE-PETICION.pdf"
          },
          {
            id: 1002,
            title: "02. DERECHO DE PETICION - NORMATIVIDAD",
            size: "202 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/001.DERECHO DE PETICION-CAPACITACION/02.-DERECHO-DE-PETICION-NORMATIVIDAD.pdf"
          },
          {
            id: 1003,
            title: "03. TALLER- CASUISTICA",
            size: "227 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/001.DERECHO DE PETICION-CAPACITACION/03.-TALLER-CASUISTICA.pdf"
          }
        ];
      case 135: // 02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS
        return [
          {
            id: 3001,
            title: "01.ANEXO RESOLUCION 181294 DE 2008",
            size: "2 MB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS/01-anexo-resolucion-181294-de-2008.pdf"
          },
          {
            id: 3002,
            title: "02. RESOLUCION 18294 DE 2008- MODIFICA EL RETIE",
            size: "68 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS/02-resolucion-18294-de-2008-modifica-el-retie.pdf"
          },
          {
            id: 3003,
            title: "03. ANEXO RESOLUCION 181294 DE 2008",
            size: "2 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS/03-anexo-resolucion-181294-de-2008.pdf"
          },
          {
            id: 3004,
            title: "03. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS",
            size: "2 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS/03-retie-reglamento-tecnico-de-instalaciones-electricas.pdf"
          },
          {
            id: 3005,
            title: "04. RETIE 2013 - RES. MME 90708 DEL 30-AG-2013",
            size: "4 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/02. RETIE - REGLAMENTO TECNICO DE INSTALACIONES ELECTRICAS/04-retie-2013-res-mme-90708-del-30-ag-2013.pdf"
          }
        ];
      case 136: // 03. RETILAP - REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO
        return [
          {
            id: 5001,
            title: "RETILAP- REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO",
            size: "3 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/03. RETILAP - REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO/RETILAP-REGLAMENTO-TECNICO-DE-ILUMINACION-Y-ALUMBRADO-PUBLICO.pdf"
          }
        ];
      case 139: // 06. CONCILIACION EXTRAJUDICIAL
        return [
          {
            id: 7001,
            title: "DECRETO 1761 DE 2009 - REGLAMENTA CONCILIACION EXTRAJUDICIAL CONT. ADM.",
            size: "109 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/06. CONCILIACION EXTRAJUDICIAL/DECRETO-1761-DE-2009-REGLAMENTA-CONCILIACION-EXTRAJUDICIAL-CONT.-ADM.pdf"
          },
          {
            id: 7002,
            title: "DIRECTIVA PRESIDENCIAL 05 DE 2009",
            size: "40 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/06. CONCILIACION EXTRAJUDICIAL/DIRECTIVA-PRESIDENCIAL-05-DE-2009.pdf"
          },
          {
            id: 7003,
            title: "LEY 640 DE 2001 - PARTE 1 - CONCILIACION EXTRAJUDICIAL",
            size: "193 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/06. CONCILIACION EXTRAJUDICIAL/LEY-640-DE-2001-PARTE-1-CONCILIACION-EXTRAJUDICIAL.pdf"
          },
          {
            id: 7004,
            title: "LEY 640 DE 2001 - PARTE 2 - CONCILIACION EXTRAJUDICIAL",
            size: "124 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/06. CONCILIACION EXTRAJUDICIAL/LEY-640-DE-2001-PARTE-2-CONCILIACION-EXTRAJUDICIAL.pdf"
          }
        ];
      case 114: // 07. BOLETIN DE DEUDORES MOROSOS - BDME
        return [
          {
            id: 8001,
            title: "LEY 716 DE 2001 - CREA EL BDME",
            size: "48 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/07. BOLETIN DE DEUDORES MOROSOS - BDME/LEY-716-DE-2001-CREA-EL-BDME.pdf"
          },
          {
            id: 8002,
            title: "LEY 901 DE 2001 - PRORROGA LEY 716 DE 2001",
            size: "43 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/07. BOLETIN DE DEUDORES MOROSOS - BDME/LEY-901-DE-2001-PRORROGA-LEY-716-DE-2001.pdf"
          }
        ];
      case 119: // 12. ESTRATIFICACION
        return [
          {
            id: 13001,
            title: "DECRETO 007 DE 2010- REGLAMENTA ESTRATIFICACION",
            size: "273 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/12. ESTRATIFICACION/DECRETO-007-DE-2010-REGLAMENTA-ESTRATIFICACION.pdf"
          },
          {
            id: 13002,
            title: "LEY 505 DE 1999 - ART.11 - DEFINE COMPETENCIAS PARA REALIZAR ESTRATIFICACION",
            size: "74 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/12. ESTRATIFICACION/LEY-505-DE-1999-ART.11-DEFINE-COMPETENCIAS-PARA-REALIZAR-ESTRATIFICACION.pdf"
          },
          {
            id: 13003,
            title: "LEY 732 DE 2002. ART. 6, PARAGRAFO. 1 - PRORROGA TERMINOS PARA ESTRATIFICACION",
            size: "84 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/12. ESTRATIFICACION/LEY-732-DE-2002.-ART.-6-PARAGRAFO.-1-PRORROGA-TERMINOS-PARA-ESTRATIFICACION.pdf"
          }
        ];
        case 128: // 21. DESARROLLO URBANO Y PLANES PARCIALES
  return [
    {
      id: 22001,
      title: "01. GENERALIDADES SOBRE POLITICA DE DESARROLLO URBANO-PLANES PARCIALES",
      size: "549 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/21. DESARROLLO URBANO Y PLANES PARCIALES/01.-GENERALIDADES-SOBRE-POLITICA-DE-DESARROLLO-URBANO-PLANES-PARCIALES.pdf"
    },
    {
      id: 22002,
      title: "02. LEY 388 DE 1997",
      size: "173 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/21. DESARROLLO URBANO Y PLANES PARCIALES/02.-LEY-388-DE-1997.pdf"
    },
    {
      id: 22003,
      title: "03. DECRETO 2181 DE 2006",
      size: "162 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/21. DESARROLLO URBANO Y PLANES PARCIALES/03.-DECRETO-2181-DE-2006.pdf"
    },
    {
      id: 22004,
      title: "04. DECRETO 4300 DE 2007- REGLAMENTA PLANES PARCIALES",
      size: "114 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/21. DESARROLLO URBANO Y PLANES PARCIALES/04.-DECRETO-4300-DE-2007-REGLAMENTA-PLANES-PARCIALES.pdf"
    }
  ];
        case 127: // 20. SISTEMA UNICO ACTIVIDAD LITIGIOSA DEL ESTADO
  return [
    {
      id: 21001,
      title: "DECRETO 1795 DE 2007- REGALMENTA ART. 15 LEY 790",
      size: "115 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/20. SISTEMA UNICO ACTIVIDAD LITIGIOSA DEL ESTADO/DECRETO-1795-DE-2007-REGALMENTA-ART.-15-LEY-790.pdf"
    },
    {
      id: 21002,
      title: "LEY 790 de 2012-PROGRAMA RENOVACION ADMINIT, PUBLICA-FACULTADES PRESIDENTE",
      size: "109 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/20. SISTEMA UNICO ACTIVIDAD LITIGIOSA DEL ESTADO/LEY-790-de-2012-PROGRAMA-RENOVACION-ADMINIT-PUBLICA-FACULTADES-PRESIDEN.pdf"
    }
  ];
        case 125: // 19. NUEVA ESTRUCTURA MME
  return [
    {
      id: 20001,
      title: "Decreto MME 0381 - Febrero 16-2012",
      size: "1 MB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/19. NUEVA ESTRUCTURA MME/Decreto-MME-0381-Febrero-16-2012.pdf"
    }
  ];
      case 124: // 17. NIIF- NORMAS INTERNACIONALES DE INFORMACION FINANCIERA
  return [
    {
      id: 19001,
      title: "DECRETO 1314 DE 2012- CONVERGENCIA VOLUNTARIA",
      size: "335 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/17. NIIF- NORMAS INTERNACIONALES DE INFORMACION FINANCIERA/DECRETO-1314-DE-2012-CONVER.pdf"
    },
    {
      id: 19002,
      title: "LEY 1314 DE 2009- NIIF",
      size: "214 KB",
      views: 0,
      dateUploaded: "20-10-2024",
      downloadUrl: "./gestion juridica/Legislacion General/17. NIIF- NORMAS INTERNACIONALES DE INFORMACION FINANCIERA/LEY-1314-DE-2009-NIIF.pdf"
    }
  ];
      case 123: // 16. REGLAMENTO DE SALUD OCUPACIONAL EN EMPRESAS DEL SECTOR ELECTRICO-RESOLUCION 1348 DE 2009
        return [
          {
            id: 17001,
            title: "REGLAMENTO DE SALUD OCUPACIONAL EN EMPRESAS DEL SECTOR ELECTRICO",
            size: "177 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/16. REGLAMENTO DE SALUD OCUPACIONAL EN EMPRESAS DEL SECTOR ELECTRICO-RESOLUCION 1348 DE 2009/REGLAMENTO-DE-SALUD-OCUPACIONAL-EN-EMPRE.pdf"
          }
        ];
      case 122: // 15. REGLAMENTO TECNICO PARA TRABAJO SEGURO EN ALTURAS - RESOLUCION 3673 DE 2008
        return [
          {
            id: 16001,
            title: "1. REGLAMENTO TECNICO PARA TRABAJO SEGURO EN ALTURAS- RESOLUCION 3673 DE 2008",
            size: "154 KB",
            views: 0,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/15. REGLAMENTO TECNICO PARA TRABAJO SEGURO EN ALTURAS - RESOLUCION 3673 DE 2008/1.-REGLAMENTO-TECNICO-PARA-TRABAJO-SEGUR.pdf"
          },
          {
            id: 16002,
            title: "2. RESOLUCION 736 DE 2009 - MODIFICA RESOLUCION 3673 DE 2008",
            size: "3 KB",
            views: 0,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/15. REGLAMENTO TECNICO PARA TRABAJO SEGURO EN ALTURAS - RESOLUCION 3673 DE 2008/2.-RESOLUCION-736-DE-2009-MODIFICA-R.pdf"
          }
        ];
      case 121: // 14. CONTRATO DE APRENDIZAJE
        return [
          {
            id: 15001,
            title: "DECRETO 933 DE 2003 - REGLAMENTA CONTRATO DE APRENDIZAJE",
            size: "38 KB",
            views: 0,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/14. CONTRATO DE APRENDIZAJE/DECRETO-933-DE-2003-REGLAMENTA-CONTRATO-DE-APRENDIZAJE.pdf"
          },
          {
            id: 15002,
            title: "LEY 789 DE 2002 - ART. 30.- CREA CONTRATO DE APRENDIZAJE",
            size: "223 KB",
            views: 0,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/14. CONTRATO DE APRENDIZAJE/LEY-789-DE-2002-ART.-30.-CREA-CONTRATO-DE-APRENDIZAJE.pdf"
          }
        ];
      case 120: // 13. GESTION ACTIVOS DEL ESTADO - PROGA
        return [
          {
            id: 14001,
            title: "1. DECRETO 4695 DE 2005 - PLANES DE ENAJENACION ONEROSA",
            size: "85 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/13. GESTION ACTIVOS DEL ESTADO - PROGA/1.-DECRETO-4695-DE-2005-PLANES-DE-ENAJENACION-ONEROSA.pdf"
          },
          {
            id: 14002,
            title: "2. DECRETO 4444 2008 - ENAJENACION DE BIENES A CISA",
            size: "108 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/13. GESTION ACTIVOS DEL ESTADO - PROGA/2.-DECRETO-4444-2008-ENAJENACION-DE-BIENES-A-CISA.pdf"
          },
          {
            id: 14003,
            title: "3. DECRETO 3297 DE 2009 - ASIGNA FUNCIONES A CISA",
            size: "222 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/13. GESTION ACTIVOS DEL ESTADO - PROGA/3.-DECRETO-3297-DE-2009-ASIGNA-FUNCIONES-A-CISA.pdf"
          }
        ];
      case 118: // 11. SERVIDUMBRES
        return [
          {
            id: 12001,
            title: "LEY 56 DE 1981",
            size: "89 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/11. SERVIDUMBRES/LEY-56-DE-1981.pdf"
          },
          {
            id: 12002,
            title: "SSPD CONCEPTO 115 DE 2009- SERVIDUMBRES - COMPETENCIA",
            size: "107 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/11. SERVIDUMBRES/SSPD-CONCEPTO-115-DE-2009-SERVIDUMBRES-COMPETENCIA.pdf"
          },
          {
            id: 12003,
            title: "SSPD CONCEPTO 646 DE 2009",
            size: "59 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/11. SERVIDUMBRES/SSPD-CONCEPTO-646-DE-2009.pdf"
          }
        ];
      case 117: // 10. MEDIO AMBIENTE
        return [
          {
            id: 11001,
            title: "01. LEY 99 DE 1993 - LEY DEL MEDIO AMBIENTE",
            size: "522 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/01.-LEY-99-DE-1993-LEY-DEL-MEDIO-AMBIENTE.pdf"
          },
          {
            id: 11002,
            title: "02. LEY 165 DE 1994 - APRUEBA CONVENIO SOBRE LA DIVERSIDAD BIOLOGICA",
            size: "173 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/02.-LEY-165-DE-1994-APRUEBA-CONVENIO-SOBRE-LA-DIVERSIDAD-BIOLOGICA.pdf"
          },
          {
            id: 11003,
            title: "03. DECRETO LEY 2811 DE 1974 - CODIGO DE RECURSOS NATURALES",
            size: "279 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/03.-DECRETO-LEY-2811-DE-1994-CODIGO-DE-RECURSOS-NATURALES.pdf"
          },
          {
            id: 11004,
            title: "04. DECRETO 1220 DE 2005 - REGLAMENTA TRAMITE DE LICENCIAS AMBIENTALES",
            size: "157 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/04.-DECRETO-1220-DE-2005-REGLAMENTA-TRAMITE-DE-LICENCIAS-AMBIENTALES.pdf"
          },
          {
            id: 11005,
            title: "05. LEY 1259 DE 2008 - CREA COMPARENDOS AMBIENTALES",
            size: "300 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/05.-LEY-1259-DE-2008-CREA-COMPARENDOS-AMBIENTALES.pdf"
          },
          {
            id: 11006,
            title: "06. LEY 1333 DE 2009 - PROCESO SANCIONATORIO",
            size: "346 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/06.-LEY-1333-DE-2009-PROCESO-SANCIONATORIO (1).pdf"
          },
          {
            id: 11007,
            title: "07. P-CAM-017 LICENCIAS Y PERMISOS AMBIENTALES",
            size: "295 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/07.-P-CAM-017-LICENCIAS-Y-PERMISOS-AMBIENTALES.pdf"
          },
          {
            id: 11008,
            title: "08. ACUERDO 007 DE 2009 DE LA CAM- REGULA APROVECHAMIENTO DE BOSQUES Y OTROS",
            size: "185 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/10. MEDIO AMBIENTE/08.-ACUERDO-007-DE-2009-DE-LA-CAM-REGULA-APROVECHAMIENTO-DE-BOSQUES-Y-OTROS.pdf"
          }
        ];
      case 116: // 09. SICE
        return [
          {
            id: 10001,
            title: "CIRCULAR 005 DE 2008 - VIGENCIA DEL CUBS",
            size: "26 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/09. SICE/CIRCULAR-005-DE-2008-VIGENCIA-DEL-CUBS.pdf"
          },
          {
            id: 10002,
            title: "DECRETO 3512 DE 2003- REGLAMENTA FUNCIONAMIENTO DEL SICE",
            size: "72 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/09. SICE/DECRETO-3512-DE-2003-REGLAMENTA-FUNCIONAMIENTO-DEL-SICE.pdf"
          },
          {
            id: 10003,
            title: "LEY 598 DEL 2000 - CREA EL SICE",
            size: "46 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/09. SICE/LEY-598-DEL-2000-CREA-EL-SICE.pdf"
          }
        ];
      case 115: // 08. NORMAS ISO
        return [
          {
            id: 9001,
            title: "FAMILIA DE NORMAS ISO 9000",
            size: "63 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "/gestion juridica/Legislacion General/08. NORMAS ISO/FAMILIA-DE-NORMAS-ISO-9000.pdf"
          },
          {
            id: 9002,
            title: "GENERALIDADES SOBRE NORMAS ISO",
            size: "81 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/08. NORMAS ISO/GENERALIDADES-SOBRE-NORMAS-IS0.pdf"
          },
          {
            id: 9003,
            title: "NORMA ISO 9000-2005",
            size: "457 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/08. NORMAS ISO/NORMA-ISO-9000-2005.pdf"
          },
          {
            id: 9004,
            title: "NORMA ISO 9001-2008",
            size: "200 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/08. NORMAS ISO/NORMA-ISO-9001-2008.pdf"
          },
          {
            id: 9005,
            title: "NORMA ISO 9004-2000",
            size: "268 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/08. NORMAS ISO/NORMA-ISO-9004-2000.pdf"
          },
          {
            id: 9006,
            title: "NORMA ISO 19011-2002",
            size: "299 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/08. NORMAS ISO/NORMA-ISO-19011-2002.pdf"
          }
        ];
      case 138: // 05. LABORAL Y SEGURIDAD SOCIAL
        return [
          {
            id: 6001,
            title: "CODIGO SUSTANTIVO DEL TRABAJO",
            size: "7 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/CODIGO-SUSTANTIVO-DEL-TRABAJO.pdf"
          },
          {
            id: 6002,
            title: "DECRETO 0723 DE 2013- AFILIACION DE CONTRATISTAS A ARL",
            size: "616 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-0723-DE-2013-AFILIACION-DE-CONTRATISTAS-A-ARL.pdf"
          },
          {
            id: 6003,
            title: "DECRETO 205 DE 2003- DETERMINA ESTRUCTURA Y FUNCIONES DEL MINISTERIO PROTECCION SOCIAL",
            size: "209 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-205-DE-2003-DETERMINA-ESTRUCTURA-Y-FUNCIONES-DEL-MINISTERIO-PROTECCION-SOCIAL.pdf"
          },
          {
            id: 6004,
            title: "DECRETO 614 DE 1984 - ORGANIZACION DE LA SALUD OCUPACIONAL",
            size: "129 KB",
            views: 3,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-614-DE-1984-ORGANIZACION-DE-LA-SALUD-OCUPACIONAL.pdf"
          },
          {
            id: 6005,
            title: "DECRETO 1295 DE 1994- SISTEMA GENERAL DE RIESGOS PROFESIONALES",
            size: "589 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-1295-DE-1994-SISTEMA-GENERAL-DE-RIESGOS-PROFESIONALES.pdf"
          },
          {
            id: 6006,
            title: "DECRETO 2013 DE 1986- FUNCIONAMIENTO COMITES PARITARIO DE SALUD OCUPACIONAL.",
            size: "51 KB",
            views: 3,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-2013-DE-1986-FUNCIONAMIENTO-COMITES-PARITARIO-DE-SALUD-OCUPACIONAL.pdf"
          },
          {
            id: 6007,
            title: "DECRETO 2463 DE 2001- REGLAMENTA FUNCIONAMIENTO JUNTAS CALIFICACION INVALIDEZ",
            size: "31 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/DECRETO-2463-DE-2001-REGLAMENTA-FUNCIONAMIENTO-JUNTAS-CALIFICACION-INVALIDEZ.pdf"
          },
          {
            id: 6008,
            title: "LEY 361 DE 1997 - NORMAS SOBRE PERSONAS CON LIMITACION",
            size: "99 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/LEY-361-DE-1997-NORMAS-SOBRE-PERSONAS-CON-LIMITACION.pdf"
          },
          {
            id: 6009,
            title: "LEY 755 DE 2002 - LEY MARIA",
            size: "114 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/LEY-755-DE-2002-LEY-MARIA.pdf"
          },
          {
            id: 6010,
            title: "LEY 1010 DE 2006- ACOSO LABORAL",
            size: "79 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/LEY-1010-DE-2006-ACOSO-LABORAL.pdf"
          },
          {
            id: 6011,
            title: "RESOLUCION 1016 DE 1989 - REGLAMENTA FUNCIONAMIENTO PROGRAMAS DE SALUD OCUPACIONAL",
            size: "27 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/RESOLUCION-1016-DE-1989-REGLAMENTA-FUNCIONAMIENTO-PROGRAMAS-DE-SALUD-OCUPACIONAL.pdf"
          },
          {
            id: 6012,
            title: "RESOLUCION 1348 DE 2009 - REGLAMENTO DE SALUD OCUPACIONAL EN ACTIVIDADES SECTOR ELECTRICO",
            size: "177 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/RESOLUCION-1348-DE-2009-REGLAMENTO-DE-SALUD-OCUPACIONAL-EN-ACTIVIDADES-SECTOR-ELECTRICO.pdf"
          },
          {
            id: 6013,
            title: "RESOLUCION 2626 DE 2008 - PREVENCION RIESGO PSICOSOCIAL",
            size: "106 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/RESOLUCION-2626-DE-2008-PREVENCION-RIESGO-PSICOSOCIAL.pdf"
          },
          {
            id: 6014,
            title: "RESOLUCION 3673 DE 2008 - REGLAMENTO TECNICO DE TRABAJO SEGURO EN ALTURAS",
            size: "154 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/RESOLUCION-3673-DE-2008-REGLAMENTO-TECNICO-DE-TRABAJO-SEGURO-EN-ALTURAS.pdf"
          },
          {
            id: 6015,
            title: "SENTENCIAS - RIESGOS PROFESIONALES",
            size: "160 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/05. LABORAL Y SEGURIDAD SOCIAL/SENTENCIAS-RIESGOS-PROFESIONALES.pdf"
          }
        ];
      case 137: // 04. ALUMBRADO PUBLICO
        return [
          {
            id: 4001,
            title: "01. LEY 97 DE 1913 - AUTORIZA A CONCEJOS MUNICIPALES",
            size: "117 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/01.-LEY-97-DE-1913-AUTORIZA-A-CONCEJOS-MUNICIPALES.pdf"
          },
          {
            id: 4002,
            title: "02. LEY 84 DE 1915 - REFORMA LEY 97 DE 1913",
            size: "45 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/02.-LEY-84-DE-1915-REFORMA-LEY-97-DE-1913.pdf"
          },
          {
            id: 4003,
            title: "03. CREG 043 DE 1995 - ALUMBRADO PUBLICO.mht",
            size: "151 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/03.-CREG-043-DE-1995-ALUMBRADO-PUBLICO.mht.pdf"
          },
          {
            id: 4004,
            title: "04. CREG 043 DE 1996 - NORMAS SOBRE ALUMBRADO PUBLICO",
            size: "69 KB",
            views: 2,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/04.-CREG-O43-DE-1996-NORMAS-SOBRE-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4005,
            title: "05. DECRETO 2424 DE 2006 - REGULA PRESTACION ALUMBRADO PUBLICO",
            size: "30 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/05.-DECRETO-2424-DE-2006-REGULA-PRESTACION-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4006,
            title: "06. RESOLUCION 181331 DE 2009 - REGLAMENTO TECNICO DE ILUMINACION Y ALUMBRADO PUBLICO",
            size: "3 MB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/06.-RESOLUCION-181331-DE-2009-REGLAMENTO-TECNICO-DE-ILUMINACION-Y-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4007,
            title: "07. CONCEPTO 25208 DE 2009 - ALUMBRADO PUBLICO Y SEMAFORIZACION",
            size: "85 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/07.-CONCEPTO-25208-DE-2009-ALUMBRADO-PUBLICO-Y-SEMAFORIZACION.pdf"
          },
          {
            id: 4008,
            title: "08. ARTICULO SOBRE ALUMBRADO PUBLICO",
            size: "82 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/08.-ARTICULO-SOBRE-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4009,
            title: "09. CREG 122 DE 2001 - REGULA CONTRATO DE ALUMBRADO PUBLICO",
            size: "181 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/09.-CREG-122-DE-2001-REGULA-CONTRATO-DE-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4010,
            title: "10. CREG 123 DE 2001- REMUNERACION DE ACTIVOS DE ALUMBRADO PUBLICO",
            size: "394 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/10.-CREG-123-DE-2001-REMUNERACION-DE-ACTIVOS-DE-ALUMBRADO-PUBLICO.pdf"
          },
          {
            id: 4011,
            title: "11. DOC. CREG 102 DE 2011.FUNDAMENTO LEGAL RES. CREG 123 DE 2011.",
            size: "1000 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/11.-DOC.-CREG-102-DE-2011.FUNDAMENTO-LEGAL-RES.-CREG-123-DE-2011.pdf"
          },
          {
            id: 4012,
            title: "12. DOC. CREG 103 DE 2011.FUNDAMENTO LEGAL RES. CREG 122 DE 2011.",
            size: "813 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/12.-DOC.-CREG-103-DE-2011.FUNDAMENTO-LEGAL-RES.-CREG-122-DE-2011.pdf"
          },
          {
            id: 4013,
            title: "13. DOC. CREG 103 DE 2011.FUNDAMENTO LEGAL RES. CREG 122 DE 2011.",
            size: "813 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/13.-DOC.-CREG-103-DE-2011.FUNDAMENTO-LEGAL-RES.-CREG-122-DE-2011.pdf"
          },
          {
            id: 4014,
            title: "14. CREG 006 DE 2012 - MODIFICA CREG 122 DE 2011",
            size: "160 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/14.-CREG-005-DE-2012-MODIFICA-CREG-122-DE-2011.pdf"
          },
          {
            id: 4015,
            title: "15. PROYECTO DECRETO ALUMBRADO PUBLICO- DEROGA 2424 DE 2006",
            size: "335 KB",
            views: 1,
            dateUploaded: "20-10-2024",
            downloadUrl: "./gestion juridica/Legislacion General/04. ALUMBRADO PUBLICO/15.-PROYECTO-DECRETO-ALUMBRADO-PUBLICO-DEROGA-2424-DE-2006.pdf"
          }
        ];
      default:
        return [];
    }
  };

  // Función para obtener subcarpetas de una carpeta específica
  const getFolderSubfolders = (folderId) => {
    switch (folderId) {
      case 130: // 01. FONDOS MINISTERIO DE MINAS Y ENERGIA
        return [
          { id: 'foes', name: 'FOES' },
          { id: 'faer', name: 'FAER' },
          { id: 'fazni', name: 'FAZNI' },
          { id: 'prone', name: 'PRONE' }
        ];
      default:
        return [];
    }
  };

  // Función para obtener documentos de subcarpetas específicas
  const getSubfolderDocuments = (folderId, subfolderId) => {
    if (folderId === 130) { // 01. FONDOS MINISTERIO DE MINAS Y ENERGIA
      switch (subfolderId) {
        case 'foes': // FOES
          return [
            {
              id: 2001,
              title: "DECRETO 4978 DE 2007 - REGLAMENTA EL FOES",
              size: "637 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FOES/DECRETO-4978-DE-2007-REGLAMENTA-EL-FOES.pdf"
            },
            {
              id: 2002,
              title: "LEY 812 DE 2003 - CREA EL FOES - ART. 118",
              size: "345 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FOES/LEY-812-DE-2003-CREA-EL-FOES-ART.-118.pdf"
            },
            {
              id: 2003,
              title: "LEY 1151 DE 2007 - PRORROGA EL FOES - ART. 59",
              size: "950 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FOES/LEY-1151-DE-2007-PRORROGA-EL-FOES-ART.-59.pdf"
            },
            {
              id: 2004,
              title: "QUE ES EL FOES.",
              size: "9 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FOES/QUE-ES-EL-FOES.pdf"
            }
          ];
        case 'faer': // FAER
          return [
            {
              id: 2005,
              title: "DECRETO 1122 DE 2008 - REGLAMENTA EL FAER",
              size: "593 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAER/DECRETO-1122-DE-2008-REGLAMENTA-EL-FAER.pdf"
            },
            {
              id: 2006,
              title: "LEY 788 DE 2002 - CREA EL FAER - ART. 105",
              size: "128 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAER/LEY-788-DE-2002-CREA-EL-FAER-ART.-105.pdf"
            },
            {
              id: 2007,
              title: "QUE ES EL FAER",
              size: "94 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAER/QUE-ES-EL-FAER.pdf"
            }
          ];
        case 'fazni': // FAZNI
          return [
            {
              id: 2008,
              title: "DECRETO 1124 DEL 2008 - REGLAMENTA EL FAZNI",
              size: "485 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAZNI/DECRETO-1124-DEL-2008-REGLAMENTA-EL-FAZNI.pdf"
            },
            {
              id: 2009,
              title: "LEY 633 DE 2000- CREA EL FAZNI - ART. 81 AL 83",
              size: "225 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAZNI/LEY-633-DE-2000-CREA-EL-FAZNI-ART.-81-AL-83.pdf"
            },
            {
              id: 2010,
              title: "QUE ES EL FAZNI",
              size: "47 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/FAZNI/QUE-ES-EL-FAZNI.pdf"
            }
          ];
        case 'prone': // PRONE
          return [
            {
              id: 2011,
              title: "DECRETO 1123 DE2008 - REGLAMENTA EL PRONE",
              size: "367 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/PRONE/DECRETO-1123-DE2008-REGLAMENTA-EL-PRONE.pdf"
            },
            {
              id: 2012,
              title: "DECRETO 4926 DE 2009 - MODIFICA DECRETO 1123 DE 2008",
              size: "78 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/PRONE/DECRETO-4926-DE-2009-MODIFICA-DECRETO-1123-DE-2008.pdf"
            },
            {
              id: 2013,
              title: "LEY 1117 DE 2006 - CREA EL PRONE",
              size: "16 KB",
              views: 1,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/PRONE/LEY-1117-DE-2006-CREA-EL-PRONE.pdf"
            },
            {
              id: 2014,
              title: "QUE ES EL PRONE",
              size: "122 KB",
              views: 2,
              dateUploaded: "20-10-2024",
              downloadUrl: "./gestion juridica/Legislacion General/01. FONDOS MINISTERIO DE MINAS Y ENERGIA/PRONE/QUE-ES-EL-PRONE.pdf"
            }
          ];
        default:
          return [];
      }
    }
    return [];
  };

  const handleDownload = (url, title) => {
    if (!url) {
      alert('URL de descarga no disponible para este documento');
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    const fileName = url.split('/').pop();
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Navegación
  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setCurrentView('folder');
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleSubfolderClick = (subfolder) => {
    setSelectedSubfolder(subfolder);
    setCurrentView('subfolder');
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedFolder(null);
    setSelectedSubfolder(null);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleBackToFolder = () => {
    setCurrentView('folder');
    setSelectedSubfolder(null);
    setCurrentPage(1);
    setSearchTerm('');
  };

  // Vista de subcarpeta (documentos de subcarpeta)
  if (currentView === 'subfolder' && selectedFolder && selectedSubfolder) {
    const subfolderDocs = getSubfolderDocuments(selectedFolder.id, selectedSubfolder.id);
    const filteredDocs = subfolderDocs.filter(doc =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentDocs = filteredDocs.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBackToFolder}
                  className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Atrás
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{selectedSubfolder.name}</h1>
                  <p className="text-sm text-gray-500">Contenido de la subcarpeta</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {filteredDocs.length} documento{filteredDocs.length !== 1 ? 's' : ''}
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
                placeholder="Buscar en esta subcarpeta..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Documentos */}
          {currentDocs.length > 0 ? (
            <div className="space-y-4 mb-8">
              {currentDocs.map((document) => (
                <div key={document.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <FileText className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            {document.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>PDF • {document.size}</span>
                          <span>•</span>
                          <span>{document.views} vista{document.views !== 1 ? 's' : ''}</span>
                          <span>•</span>
                          <span>Subido el: {document.dateUploaded}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={() => handleDownload(document.downloadUrl, document.title)}
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron documentos</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Anterior
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg ${currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Vista de carpeta (subcarpetas o documentos directos)
  if (currentView === 'folder' && selectedFolder) {
    const folderDocs = getFolderDocuments(selectedFolder.id);
    const folderSubfolders = getFolderSubfolders(selectedFolder.id);

    // Si tiene subcarpetas, mostrar subcarpetas
    if (folderSubfolders.length > 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleBackToMain}
                    className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Atrás
                  </button>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{selectedFolder.name}</h1>
                    <p className="text-sm text-gray-500">Contenido de la carpeta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {folderSubfolders.length} subcarpeta{folderSubfolders.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Subcarpetas */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Subcarpetas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {folderSubfolders.map((subfolder) => (
                  <button
                    key={subfolder.id}
                    onClick={() => handleSubfolderClick(subfolder)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all p-6 text-center group"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex-shrink-0">
                        <Folder className="w-12 h-12 text-blue-500 group-hover:text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                          {subfolder.name}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Si tiene documentos directos, mostrar documentos
    else if (folderDocs.length > 0) {
      const filteredDocs = folderDocs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentDocs = filteredDocs.slice(startIndex, startIndex + itemsPerPage);

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleBackToMain}
                    className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Atrás
                  </button>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{selectedFolder.name}</h1>
                    <p className="text-sm text-gray-500">Contenido de la carpeta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {filteredDocs.length} documento{filteredDocs.length !== 1 ? 's' : ''}
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
                  placeholder="Buscar en esta carpeta..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Documentos */}
            <div className="space-y-4 mb-8">
              {currentDocs.map((document) => (
                <div key={document.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <FileText className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            {document.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>PDF • {document.size}</span>
                          <span>•</span>
                          <span>{document.views} vista{document.views !== 1 ? 's' : ''}</span>
                          <span>•</span>
                          <span>Subido el: {document.dateUploaded}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={() => handleDownload(document.downloadUrl, document.title)}
                          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Anterior
                </button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg ${currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Carpeta vacía
    else {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleBackToMain}
                    className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Atrás
                  </button>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{selectedFolder.name}</h1>
                    <p className="text-sm text-gray-500">Contenido de la carpeta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">0 documentos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <Folder className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Carpeta en desarrollo</h3>
              <p className="text-gray-500">El contenido de esta carpeta estará disponible próximamente.</p>
            </div>
          </div>
        </div>
      );
    }
  }

  // Vista principal
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

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
                <h1 className="text-xl font-bold text-gray-900">04. Legislación General</h1>
                <p className="text-sm text-gray-500">Marco legal general</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {folders.length} carpetas • {filteredDocuments.length} documento{filteredDocuments.length !== 1 ? 's' : ''}
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
              placeholder="Buscar en documentos..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Carpetas/Subcategorías */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Carpetas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => handleFolderClick(folder)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all p-4 text-left group"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Folder className="w-8 h-8 text-blue-500 group-hover:text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
                      {folder.name}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Documentos */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentos</h2>
          <div className="space-y-4">
            {currentDocuments.map((document) => (
              <div key={document.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <FileText className="w-6 h-6 text-red-500" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          {document.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>PDF • {document.size}</span>
                        <span>•</span>
                        <span>{document.views} vista{document.views !== 1 ? 's' : ''}</span>
                        <span>•</span>
                        <span>Subido el: {document.dateUploaded}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <button
                        onClick={() => handleDownload(document.downloadUrl, document.title)}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State para documentos */}
        {currentDocuments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron documentos</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </button>

            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg ${currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="px-2 text-gray-500">...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegislacionGeneralSection;