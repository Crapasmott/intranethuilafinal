'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Download,
  Eye,
  Calendar,
  FileText,
  Building2,
  Filter
} from 'lucide-react';

const NormatividadInternaSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 12;

  const documents = [
    {
      id: 1,
      title: "00.CIRCULAR 010 2023 Prohibicion de participacion en actividades politicas en nombre de Electrohuila",
      category: "Circular",
      department: "Secretaría General",
      date: "2025-05-21",
      size: "62 MB",
      format: "PDF",
      views: 16,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/00.-CIRCULAR-010-2023-Prohibicion-de-participacion-en-actividades-politicas-en-nombre-de-Electrohuila.pdf",
      previewUrl: "./gestion juridica/normatividad interna/00.-CIRCULAR-010-2023-Prohibicion-de-participacion-en-actividades-politicas-en-nombre-de-Electrohuila.pdf"
    },
    {
      id: 2,
      title: "01. CERTIFICADO DE EXISTENCIA Y REPRESENTACION LEGAL - EH",
      category: "Circular",
      department: "Secretaría General",
      date: "2025-05-21",
      size: "62 MB",
      format: "PDF",
      views: 16,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/01. CERTIFICADO DE EXISTENCIA Y REPRESENTACION LEGAL - EH .pdf",
      previewUrl: "./gestion juridica/normatividad interna/01. CERTIFICADO DE EXISTENCIA Y REPRESENTACION LEGAL - EH .pdf"
    },
    {
      id: 3,
      title: "02.REFORMA ESTATUTARIA 2025 REFORMA Y COMPILACION 2025",
      category: "Circular",
      department: "Secretaría General",
      date: "2025-05-21",
      size: "62 MB",
      format: "PDF",
      views: 16,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/02.-REFORMA-ESTATUTARIA-2025-REFORMA-Y-COMPILACION-2025.pdf",
      previewUrl: "./gestion juridica/normatividad interna/02.-REFORMA-ESTATUTARIA-2025-REFORMA-Y-COMPILACION-2025.pdf"
    },
    {
      id: 4,
      title: "03. REGISTRO UNICO TRIBUTARIO 29-08-2025.pdf",
      category: "Reforma",
      department: "Secretaría General",
      date: "2025-05-21",
      size: "62 MB",
      format: "PDF",
      views: 16,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/03. REGISTRO UNICO TRIBUTARIO 29-08-2025.pdf",
      previewUrl: "./gestion juridica/normatividad interna/03. REGISTRO UNICO TRIBUTARIO 29-08-2025.pdf"
    },
    {
      id: 5,
      title: "04.CODIGO DE BUEN GOBIERNO CORPORATIVO",
      category: "codigo",
      department: "Secretaría General",
      date: "2025-05-21",
      size: "62 MB",
      format: "PDF",
      views: 16,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/04.-CODIGO-DE-BUEN-GOBIERNO-CORPORATIVO.pdf",
      previewUrl: "./gestion juridica/normatividad interna/04.-CODIGO-DE-BUEN-GOBIERNO-CORPORATIVO.pdf"
    },
    {
      id: 6,
      title: "05. CONTRATO DE CONDICIONES UNIFORMES EHUI 28-12-2021",
      category: "Contrato",
      department: "Ética y Compliance",
      date: "2024-10-06",
      size: "12 MB",
      format: "PDF",
      views: 6,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/05.-CONTRATO-DE-CONDICIONES-UNIFORMES-EHUI-28-12-2021.pdf",
      previewUrl: "./gestion juridica/normatividad interna/05.-CONTRATO-DE-CONDICIONES-UNIFORMES-EHUI-28-12-2021.pdf"
    },
    {
      id: 7,
      title: "06. REGISTRO UNICO DE PRESTADORES DE SERVICIOS PUBLICOS RUPS",
      category: "Registro",
      department: "Comercial",
      date: "2024-10-06",
      size: "1000 KB",
      format: "PDF",
      views: 20,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/06.-REGISTRO-UNICO-DE-PRESTADORES-DE-SERVICIOS-PUBLICOS-RUPS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/06.-REGISTRO-UNICO-DE-PRESTADORES-DE-SERVICIOS-PUBLICOS-RUPS.pdf"
    },
    {
      id: 8,
      title: "07. POLITICA DE SALUD OCUPACIONAL",
      category: "Políticas",
      department: "SST",
      date: "2024-10-06",
      size: "209 KB",
      format: "PDF",
      views: 5,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/07.-POLITICA-DE-SALUD-OCUPACIONAL.pdf",
      previewUrl: "./gestion juridica/normatividad interna/07.-POLITICA-DE-SALUD-OCUPACIONAL.pdf"
    },
    {
      id: 9,
      title: "08. CODIGO DE ETICAL",
      category: "Codigo",
      department: "SST",
      date: "2024-10-06",
      size: "209 KB",
      format: "PDF",
      views: 5,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/08.-CODIGO-DE-ETICA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/08.-CODIGO-DE-ETICA.pdf"
    },
    {
      id: 10,
      title: "09.POLITICA DE LA LINEA DE TRANSPARENCIA Y EL COMITE DE ETICA",
      category: "Política",
      department: "Ética y Compliance",
      date: "2024-03-18",
      size: "1.8 MB",
      format: "PDF",
      views: 345,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/09.-POLITICA-DE-LA-LINEA-DE-TRANSPARENCIA-Y-EL-COMITE-DE-ETICA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/09.-POLITICA-DE-LA-LINEA-DE-TRANSPARENCIA-Y-EL-COMITE-DE-ETICA.pdf"
    },
    {
      id: 11,
      title: "10.PROGRAMA DE TRANSPARENCIA Y ETICA EMPRESARIAL",
      category: "Programa",
      department: "Ética y Compliance",
      date: "2024-04-22",
      size: "2.9 MB",
      format: "PDF",
      views: 167,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/10.-PROGRAMA-DE-TRANSPARENCIA-Y-ETICA-EMPRESARIAL.pdf",
      previewUrl: "./gestion juridica/normatividad interna/10.-PROGRAMA-DE-TRANSPARENCIA-Y-ETICA-EMPRESARIAL.pdf"
    },
    {
      id: 12,
      title: "11. MANUAL DE SEGURIDAD EN TECNOLOGIA",
      category: "Manuales",
      department: "Tecnología",
      date: "2024-07-08",
      size: "1.2 MB",
      format: "PDF",
      views: 98,
      downloads: 0,
      priority: "Baja",
      downloadUrl: "./gestion juridica/normatividad interna/11.-MANUAL-DE-SEGURIDAD-EN-TECNOLOGIA-INFORMATICA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/11.-MANUAL-DE-SEGURIDAD-EN-TECNOLOGIA-INFORMATICA.pdf"
    },
    {
      id: 13,
      title: "12. MANUAL DE CONTRATACION DE ELECTROHUILA",
      category: "Manuales",
      department: "Tecnología",
      date: "2024-07-08",
      size: "1.2 MB",
      format: "PDF",
      views: 98,
      downloads: 0,
      priority: "Baja",
      downloadUrl: "./gestion juridica/normatividad interna/12.-MANUAL-DE-CONTRATACION-DE-ELECTROHUILA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/12.-MANUAL-DE-CONTRATACION-DE-ELECTROHUILA.pdf"
    },
    {
      id: 14,
      title: "13. MANUAL DE SUPERVISON E INTERVENTORIA DE ELECTROHUILA",
      category: "Manuales",
      department: "Contratación",
      date: "2024-01-15",
      size: "7.3 MB",
      format: "PDF",
      views: 456,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/13.-MANUAL-DE-SUPERVISON-E-INTERVENTORIA-DE-ELECTROHUILA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/13.-MANUAL-DE-SUPERVISON-E-INTERVENTORIA-DE-ELECTROHUILA.pdf"
    },
    {
      id: 15,
      title: "14. REGLAMENTACION FONDO ROTATORIO DE PRESTAMOS PARA COMPRA DE COMPUTADORES",
      category: "Reglamentación",
      department: "Supervision",
      date: "2024-02-10",
      size: "5.4 MB",
      format: "PDF",
      views: 278,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/14.-REGLAMENTACION-FONDO-ROTATORIO-DE-PRESTAMOS-PARA-COMPRA-DE-COMPUTADORES.pdf",
      previewUrl: "./gestion juridica/normatividad interna/14.-REGLAMENTACION-FONDO-ROTATORIO-DE-PRESTAMOS-PARA-COMPRA-DE-COMPUTADORES.pdf"
    },
    {
      id: 16,
      title: "15.REGIMEN INTERNO PARA EL MANEJO PRESUPUESTAL Acuerdo No. 005 de 1998",
      category: "Regimen",
      department: "Operaciones",
      date: "2024-06-20",
      size: "533 KB",
      format: "PDF",
      views: 12,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/15.-REGIMEN-INTERNO-PARA-EL-MANEJO-PRESUPUESTAL-Acuerdo-No.-005-de-1998.pdf",
      previewUrl: "./gestion juridica/normatividad interna/15.-REGIMEN-INTERNO-PARA-EL-MANEJO-PRESUPUESTAL-Acuerdo-No.-005-de-1998.pdf"
    },
    {
      id: 17,
      title: "15. REGIMEN INTERNO PARA EL MANEJO PRESUPUESTAL MOD. Acuerdo No. 02 de 2016",
      category: "Regimen",
      department: "Presupuesto",
      date: "2025-06-12",
      size: "1 MB",
      format: "PDF",
      views: 8,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/15.-REGIMEN-INTERNO-PARA-EL-MANEJO-PRESUPUESTAL-MOD.-Acuerdo-No.-02-de-2016.pdf",
      previewUrl: "./gestion juridica/normatividad interna/15.-REGIMEN-INTERNO-PARA-EL-MANEJO-PRESUPUESTAL-MOD.-Acuerdo-No.-02-de-2016.pdf"
    },
    {
      id: 17,
      title: "16.-REGLAMENTO-DE-CAJAS-MENORES-Y-ANTICIPOS",
      category: "Reglamentos",
      department: "Tesorería",
      date: "2025-05-21",
      size: "25 MB",
      format: "PDF",
      views: 0,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/16.-REGLAMENTO-DE-CAJAS-MENORES-Y-ANTICIPOS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/16.-REGLAMENTO-DE-CAJAS-MENORES-Y-ANTICIPOS.pdf"
    },
    {
      id: 18,
      title: "17. MANUAL PARA LA ADMINISTRACION DE ACTIVOS",
      category: "Manuales",
      department: "Activos Fijos",
      date: "2025-05-21",
      size: "25 MB",
      format: "PDF",
      views: 0,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/17.-MANUAL-PARA-LA-ADMINISTRACION-DE-ACTIVOS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/17.-MANUAL-PARA-LA-ADMINISTRACION-DE-ACTIVOS.pdf"
    },
    {
      id: 19,
      title: "17.-MANUAL PARA LA ADMINISTRACION-DE-ACTIVOS",
      category: "Manuales",
      department: "Contabilidad",
      date: "2024-10-04",
      size: "3 MB",
      format: "PDF",
      views: 10,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/17.-MANUAL-PARA-LA-ADMINISTRACION-DE-ACTIVOS.pdff",
      previewUrl: "./gestion juridica/normatividad interna/17.-MANUAL-PARA-LA-ADMINISTRACION-DE-ACTIVOS.pdf"
    },
    {
      id: 20,
      title: "18. MANUAL DE POLITICAS CONTABLES",
      category: "Manual",
      department: "Talento Humano",
      date: "2024-08-15",
      size: "2.5 MB",
      format: "PDF",
      views: 145,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/18.-MANUAL-DE-POLITICAS-CONTABLES.pdf",
      previewUrl: "./gestion juridica/normatividad interna/18.-MANUAL-DE-POLITICAS-CONTABLES.pdf"
    },
    {
      id: 21,
      title: "19. REGLAMENTO-INTERNO-DE-TRABAJO",
      category: " Regamento",
      department: "Construcciones",
      date: "2024-07-20",
      size: "8.7 MB",
      format: "PDF",
      views: 298,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/19.-REGLAMENTO-INTERNO-DE-TRABAJO.pdf",
      previewUrl: "./gestion juridica/normatividad interna/19.-REGLAMENTO-INTERNO-DE-TRABAJO.pdf"
    },
    {
      id: 22,
      title: "20.-POLITICA-INSTITUCIONAL-PARA-CONSTRUCCION-Y-FINANCIACION-DE-OBRAS-ELECTRICAS",
      category: "Unificación",
      department: "Auditoria",
      date: "2024-06-10",
      size: "4.2 MB",
      format: "PDF",
      views: 412,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/20.-POLITICA-INSTITUCIONAL-PARA-CONSTRUCCION-Y-FINANCIACION-DE-OBRAS-ELECTRICAS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/20.-POLITICA-INSTITUCIONAL-PARA-CONSTRUCCION-Y-FINANCIACION-DE-OBRAS-ELECTRICAS.pdf"
    },
    {
      id: 23,
      title: "21.-UNIFICACION-AUDITORIA-INTERNAS-Y-DE-CALIDAD",
      category: "Reglamentos",
      department: "Bienestar",
      date: "2024-08-01",
      size: "3.1 MB",
      format: "PDF",
      views: 89,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/21.-UNIFICACION-AUDITORIA-INTERNAS-Y-DE-CALIDAD.pdf",
      previewUrl: "./gestion juridica/normatividad interna/21.-UNIFICACION-AUDITORIA-INTERNAS-Y-DE-CALIDAD.pdf"
    },
    {
      id: 24,
      title: "22.-REGLAMENTO-DEL-FONDO-DE-VIVIENDA",
      category: "Planes",
      department: "Seguridad",
      date: "2024-05-15",
      size: "6.8 MB",
      format: "PDF",
      views: 234,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/22.-REGLAMENTO-DEL-FONDO-DE-VIVIENDA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/22.-REGLAMENTO-DEL-FONDO-DE-VIVIENDA.pdf"
    },
    {
      id: 25,
      title: "23.-PLAN-ESTRATEGICO-DE-SEGURIDAD-VIAL.pdf",
      category: "Reglamentos",
      department: "Bienestar",
      date: "2024-04-22",
      size: "2.9 MB",
      format: "PDF",
      views: 167,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/23.-PLAN-ESTRATEGICO-DE-SEGURIDAD-VIAL.pdf",
      previewUrl: "./gestion juridica/normatividad interna/23.-PLAN-ESTRATEGICO-DE-SEGURIDAD-VIAL.pdf"
    },
    {
      id: 26,
      title: "24.REGLAMENTO-PARA-PRESTAMO-CON-DESTINO-A-COMPRA-O-REPARACION-DE-MOTOCICLETA",
      category: "Procedimientos",
      department: "Protocolo",
      date: "2024-03-18",
      size: "1.8 MB",
      format: "PDF",
      views: 345,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/24.-REGLAMENTO-PARA-PRESTAMO-CON-DESTINO-A-COMPRA-O-REPARACION-DE-MOTOCICLETA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/24.-REGLAMENTO-PARA-PRESTAMO-CON-DESTINO-A-COMPRA-O-REPARACION-DE-MOTOCICLETA.pdf"
    },
    {
      id: 27,
      title: "26.1-PROCEDIMIENTO-MANEJO-DE-HOSPITALIDADES-OBSEQUIOS-Y-BENEFICIOS",
      category: "Políticas",
      department: "Protocolo",
      date: "2024-02-10",
      size: "5.4 MB",
      format: "PDF",
      views: 278,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/26.1-PROCEDIMIENTO-MANEJO-DE-HOSPITALIDADES-OBSEQUIOS-Y-BENEFICIOS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/26.1-PROCEDIMIENTO-MANEJO-DE-HOSPITALIDADES-OBSEQUIOS-Y-BENEFICIOS.pdf"
    },
    {
      id: 28,
      title: "27.-POLITICA-DE-MANEJO-DE-HOSPITALIDADES-OBSEQUISOS-Y-BENEFICIOS",
      category: "Políticas",
      department: "Tecnología",
      date: "2024-06-20",
      size: "533 KB",
      format: "PDF",
      views: 12,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/27.-POLITICA-DE-MANEJO-DE-HOSPITALIDADES-OBSEQUISOS-Y-BENEFICIOS.pdf",
      previewUrl: "./gestion juridica/normatividad interna/27.-POLITICA-DE-MANEJO-DE-HOSPITALIDADES-OBSEQUISOS-Y-BENEFICIOS.pdf"
    },
    {
      id: 29,
      title: "28.-POLITICA-DE-PRIVACIDAD-TRATAMIENTO-Y-PROTECCION-DE-DATOS-PERSONALES-DE-ELECTROHUILA-S.A.-E.S.P",
      category: "Políticas",
      department: "Talento Humano",
      date: "2025-06-12",
      size: "1 MB",
      format: "PDF",
      views: 8,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/28.-POLITICA-DE-PRIVACIDAD-TRATAMIENTO-Y-PROTECCION-DE-DATOS-PERSONALES-DE-ELECTROHUILA-S.A.-E.S.P.pdf",
      previewUrl: "./gestion juridica/normatividad interna/28.-POLITICA-DE-PRIVACIDAD-TRATAMIENTO-Y-PROTECCION-DE-DATOS-PERSONALES-DE-ELECTROHUILA-S.A.-E.S.P.pdf"
    },
    {
      id: 30,
      title: "29.-POLITICA-DE-NO-REPRESARIAS-Y-PROTECCION-AL-DENUNCIANTE",
      category: "Manuales",
      department: "Comunicaciones",
      date: "2025-05-21",
      size: "25 MB",
      format: "PDF",
      views: 0,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/29.-POLITICA-DE-NO-REPRESARIAS-Y-PROTECCION-AL-DENUNCIANTE.pdf",
      previewUrl: "./gestion juridica/normatividad interna/29.-POLITICA-DE-NO-REPRESARIAS-Y-PROTECCION-AL-DENUNCIANTE.pdf"
    },
    {
      id: 31,
      title: "30.-MANUAL-DE-IMAGEN-CORPORATIVA-ELECTROHUILA.pdf",
      category: "Convenciones",
      department: "Talento Humano",
      date: "2025-05-21",
      size: "25 MB",
      format: "PDF",
      views: 0,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/30.-MANUAL-DE-IMAGEN-CORPORATIVA-ELECTROHUILA.pdf",
      previewUrl: "./gestion juridica/normatividad interna/30.-MANUAL-DE-IMAGEN-CORPORATIVA-ELECTROHUILA.pdff"
    },
    {
      id: 32,
      title: "31.CONVENCION-COLECTIVA-DE-TRABAJO-2004-2007",
      category: "Convención",
      department: "Talento Humano",
      date: "2024-10-04",
      size: "3 MB",
      format: "PDF",
      views: 10,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2004-2007.pdf",
      previewUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2004-2007.pdf"
    },
    {
      id: 33,
      title: "31.CONVENCION-COLECTIVA-DE-TRABAJO-2017-2020",
      category: "Convenciones",
      department: "Talento Humano",
      date: "2024-08-15",
      size: "2.5 MB",
      format: "PDF",
      views: 145,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2017-2020.pdf",
      previewUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2017-2020.pdf"
    },
    {
      id: 34,
      title: "32.CONVENCION-COLECTIVA-DE-TRABAJO-2021-2024",
      category: "Informes",
      department: "Gerencia",
      date: "2024-07-20",
      size: "8.7 MB",
      format: "PDF",
      views: 298,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2021-2024.pdf",
      previewUrl: "./gestion juridica/normatividad interna/31.-CONVENCION-COLECTIVA-DE-TRABAJO-2021-2024.pdf"
    },
    {
      id: 35,
      title: "32.INFORME-DE-GESTION-2020",
      category: "Informes",
      department: "Gerencia",
      date: "2024-06-10",
      size: "4.2 MB",
      format: "PDF",
      views: 412,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2020.pdf",
      previewUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2020.pdf"
    },
    {
      id: 36,
      title: "32.INFORME-DE-GESTION-2021",
      category: "Informes",
      department: "Gerencia",
      date: "2024-08-01",
      size: "3.1 MB",
      format: "PDF",
      views: 89,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2021.pdf",
      previewUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2021.pdf"
    },
    {
      id: 37,
      title: "32.INFORME-DE-GESTION-2022",
      category: "Reportes",
      department: "Planeación",
      date: "2024-05-15",
      size: "6.8 MB",
      format: "PDF",
      views: 234,
      downloads: 0,
      priority: "Alta",
      downloadUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2022.pdf",
      previewUrl: "./gestion juridica/normatividad interna/32.-INFORME-DE-GESTION-2022.pdf"
    },
    {
      id: 38,
      title: "32. REPORTE INTEGRADO 2023",
      category: "Reportes",
      department: "Planeación",
      date: "2024-04-22",
      size: "2.9 MB",
      format: "PDF",
      views: 167,
      downloads: 0,
      priority: "Media",
      downloadUrl: "./gestion juridica/normatividad interna/32.-REPORTE-INTEGRADO-2023.pdf",
      previewUrl: "./gestion juridica/normatividad interna/32.-REPORTE-INTEGRADO-2023.pdf"
    }
  ];

  const categories = ['Todos', ...new Set(documents.map(doc => doc.category))];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + documentsPerPage);

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

  const handlePreview = (url) => {
    window.open(url, '_blank');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Estatutos': 'bg-purple-50 text-purple-700 border-purple-200',
      'Códigos': 'bg-red-50 text-red-700 border-red-200',
      'Contratos': 'bg-cyan-50 text-cyan-700 border-cyan-200',
      'Registros': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Políticas': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Programas': 'bg-violet-50 text-violet-700 border-violet-200',
      'Manuales': 'bg-orange-50 text-orange-700 border-orange-200',
      'Reglamentos': 'bg-teal-50 text-teal-700 border-teal-200',
      'Auditorías': 'bg-rose-50 text-rose-700 border-rose-200',
      'Planes': 'bg-pink-50 text-pink-700 border-pink-200',
      'Procedimientos': 'bg-amber-50 text-amber-700 border-amber-200',
      'Convenciones': 'bg-lime-50 text-lime-700 border-lime-200',
      'Informes': 'bg-sky-50 text-sky-700 border-sky-200',
      'Reportes': 'bg-green-50 text-green-700 border-green-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="font-medium">Volver a Gestión Jurídica</span>
              </button>
              <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Normatividad Interna</h1>
                  <p className="text-sm text-gray-500">Gestión Jurídica / Normatividad Interna</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total de documentos</p>
              <p className="text-2xl font-bold text-blue-600">{filteredDocuments.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título o departamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-800"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentDocuments.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(doc.category)}`}>
                    {doc.category}
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(doc.priority)}`}>
                    {doc.priority}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {doc.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{doc.department}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{new Date(doc.date).toLocaleDateString('es-CO')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {doc.format} • {doc.size}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    <span>{doc.views} vistas</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    <span>{doc.downloads} descargas</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NormatividadInternaSection;