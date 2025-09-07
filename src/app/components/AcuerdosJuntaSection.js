'use client';

import React, { useState } from 'react';
import { ArrowLeft, Download, Search, Calendar, Eye, FileText } from 'lucide-react';

const AcuerdosJuntaSection = ({ onBack }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 12;

  // Datos de años con conteos exactos
  const yearsData = [
    { year: 2008, count: 19, color: 'from-blue-500 to-indigo-500' },
    { year: 2009, count: 24, color: 'from-green-500 to-emerald-500' },
    { year: 2010, count: 22, color: 'from-purple-500 to-violet-500' },
    { year: 2011, count: 16, color: 'from-red-500 to-pink-500' },
    { year: 2012, count: 20, color: 'from-yellow-500 to-orange-500' },
    { year: 2013, count: 16, color: 'from-teal-500 to-cyan-500' },
    { year: 2014, count: 17, color: 'from-rose-500 to-red-500' },
    { year: 2015, count: 20, color: 'from-indigo-500 to-blue-500' },
    { year: 2016, count: 10, color: 'from-emerald-500 to-green-500' },
    { year: 2017, count: 16, color: 'from-violet-500 to-purple-500' },
    { year: 2018, count: 6, color: 'from-pink-500 to-rose-500' },
    { year: 2019, count: 14, color: 'from-orange-500 to-yellow-500' },
    { year: 2020, count: 18, color: 'from-cyan-500 to-teal-500' },
    { year: 2021, count: 10, color: 'from-blue-500 to-indigo-500' },
    { year: 2022, count: 18, color: 'from-green-500 to-emerald-500' },
    { year: 2023, count: 11, color: 'from-purple-500 to-violet-500' },
    { year: 2024, count: 15, color: 'from-red-500 to-pink-500' }
  ];

  // Función para obtener documentos por año
  const getDocumentsByYear = (year) => {
    switch (year) {
      case 2008:
        return [
          { id: 1, title: "ACUERDO 001 - 22/01/2008", date: "2008-01-22", size: "245 KB", views: 15, downloads: 8, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-001-22-01-2008.pdf" },
          { id: 2, title: "ACUERDO 002 - 25/02/2008", date: "2008-02-25", size: "312 KB", views: 12, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-002-25-02-2008.pdf" },
          { id: 3, title: "ACUERDO 003 - 02/04/2008", date: "2008-04-02", size: "189 KB", views: 18, downloads: 11, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-003-02-04-2008.pdf" },
          { id: 4, title: "ACUERDO 004 - 02/04/2008", date: "2008-04-02", size: "267 KB", views: 9, downloads: 4, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-004-02-04-2008.pdf" },
          { id: 5, title: "ACUERDO 005 - 14/05/2008", date: "2008-05-14", size: "423 KB", views: 22, downloads: 13, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-005-14-05-2008.pdf" },
          { id: 6, title: "ACUERDO 006 - 25/06/2008", date: "2008-06-25", size: "356 KB", views: 16, downloads: 9, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-006-25-06-2008.pdf" },
          { id: 7, title: "ACUERDO 007 - 25/08/2008", date: "2008-08-25", size: "198 KB", views: 14, downloads: 7, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-007-25-08-2008.pdf" },
          { id: 8, title: "ACUERDO 008 - 25/08/2008", date: "2008-08-25", size: "289 KB", views: 11, downloads: 6, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-008-25-08-2008.pdf" },
          { id: 9, title: "ACUERDO 009 - 25/08/2008", date: "2008-08-25", size: "334 KB", views: 20, downloads: 12, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-009-25-08-2008.pdf" },
          { id: 10, title: "ACUERDO 010 - 22/09/2008", date: "2008-09-22", size: "412 KB", views: 17, downloads: 10, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-010-22-09-2008.pdf" },
          { id: 11, title: "ACUERDO 011 - 22/09/2008", date: "2008-09-22", size: "256 KB", views: 13, downloads: 8, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-011-22-09-2008.pdf" },
          { id: 12, title: "ACUERDO 012 - 22/09/2008", date: "2008-09-22", size: "378 KB", views: 19, downloads: 11, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-012-22-09-2008.pdf" },
          { id: 13, title: "ACUERDO 013 - 10/11/2008", date: "2008-11-10", size: "445 KB", views: 25, downloads: 15, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-013-10-11-2008.pdf" },
          { id: 14, title: "ACUERDO 014 - 10/11/2008", date: "2008-11-10", size: "298 KB", views: 21, downloads: 14, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-014-10-11-2008.pdf" },
          { id: 15, title: "ACUERDO 015 - 10/09/2008", date: "2008-09-10", size: "367 KB", views: 18, downloads: 9, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-015-10-09-2008.pdf" },
          { id: 16, title: "ACUERDO 016 - 10/11/2008", date: "2008-11-10", size: "234 KB", views: 12, downloads: 7, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-016-10-11-2008.pdf" },
          { id: 17, title: "ACUERDO 017 - 10/11/2008", date: "2008-11-10", size: "456 KB", views: 23, downloads: 16, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-017-10-11-2008.pdf" },
          { id: 18, title: "ACUERDO 018 - 10/11/2008", date: "2008-11-10", size: "189 KB", views: 14, downloads: 8, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-018-10-11-2008.pdf" },
          { id: 19, title: "ACUERDO 019 - 12/12/2008", date: "2008-12-12", size: "523 KB", views: 28, downloads: 18, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2008/ACUERDO-019-12-12-2008.pdf" }
        ];

      case 2009:
        return [
          { id: 1, title: "ACUERDO-001-29-01-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-001-29-01-2009.pdf" },
          { id: 2, title: "ACUERDO-002-29-01-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-002-29-01-2009.pdf" },
          { id: 3, title: "ACUERDO-003-29-01-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-003-29-01-2009.pdf" },
          { id: 4, title: "ACUERDO-004-29-01-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-004-29-01-2009.pdf" },
          { id: 5, title: "ACUERDO-005-17-02-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-005-17-02-2009.pdf" },
          { id: 6, title: "ACUERDO-006-26-02-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-006-26-02-2009.pdf" },
          { id: 7, title: "ACUERDO-007-13-03-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-007-13-03-2009.pdf" },
          { id: 8, title: "ACUERDO-008-13-03-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-008-13-03-2009.pdf" },
          { id: 9, title: "ACUERDO-009-07-05-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-009-07-05-2009.pdf" },
          { id: 10, title: "ACUERDO-010-24-06-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-010-24-06-2009.pdff" },
          { id: 11, title: "ACUERDO-011-24-06-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-011-24-06-2009.pdf" },
          { id: 12, title: "ACUERDO-012-27-07-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-012-27-07-2009.pdf" },
          { id: 13, title: "ACUERDO-013-27-07-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-013-27-07-2009.pdf" },
          { id: 14, title: "ACUERDO-014-27-07-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-014-27-07-2009.pdf" },
          { id: 15, title: "ACUERDO-015-27-07-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-015-27-07-2009.pdf" },
          { id: 16, title: "ACUERDO-016-10-08-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-016-10-08-2009.pdf" },
          { id: 17, title: "ACUERDO-017-19-10-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-017-19-10-2009.pdf" },
          { id: 18, title: "ACUERDO-018-19-10-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-018-19-10-2009.pdf" },
          { id: 19, title: "ACUERDO-019-19-10-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-019-19-10-2009.pdf" },
          { id: 20, title: "ACUERDO-020-11-11-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-020-11-11-2009.pdf" },
          { id: 21, title: "ACUERDO-021-11-11-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-021-11-11-2009.pdf" },
          { id: 22, title: "ACUERDO-022-15-12-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-022-15-12-2009.pdf" },
          { id: 23, title: "ACUERDO-023-15-12-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-023-15-12-2009.pdf" },
          { id: 24, title: "ACUERDO-024-15-12-2009", date: "2009-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2009/ACUERDO-024-15-12-2009.pdf" }
        ];

      case 2010:
        return [
          { id: 1, title: "ACUERDO-No.-01-4-02-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-01-4-02-2010.pdf" },
          { id: 2, title: "ACUERDO-No.-02-4-02-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-02-4-02-2010.pdf" },
          { id: 3, title: "ACUERDO-No.-03-1-03-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-03-1-03-2010.pdf" },
          { id: 4, title: "ACUERDO-No.-04-1-03-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-04-1-03-2010.pdf" },
          { id: 5, title: "ACUERDO-No.-07-30-06-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No-05-21-05-2010.pdf" },
          { id: 6, title: "ACUERDO-No.-08-30-07-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No-06-21-05-2010.pdf" },
          { id: 7, title: "ACUERDO-No.-09-20-08-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-07-30-06-2010.pdf" },
          { id: 8, title: "ACUERDO-No.-10-20-08-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-08-30-07-2010.pdf" },
          { id: 9, title: "ACUERDO-No.-11-1-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-09-20-08-2010.pdf" },
          { id: 10, title: "ACUERDO-No.-12-1-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-10-20-08-2010.pdf" },
          { id: 11, title: "ACUERDO-No.-13-1-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-11-1-10-2010.pdf" },
          { id: 12, title: "ACUERDO-No.-14-29-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-12-1-10-2010.pdf" },
          { id: 13, title: "ACUERDO-No.-15-29-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-13-1-10-2010.pdf" },
          { id: 14, title: "ACUERDO-No.-16-29-10-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-14-29-10-2010.pdf" },
          { id: 15, title: "ACUERDO-No.-17-25-11-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-15-29-10-2010.pdf" },
          { id: 16, title: "ACUERDO-No.-18-25-11-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-16-29-10-2010.pdf" },
          { id: 17, title: "ACUERDO-No.-19-17-12-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-17-25-11-2010.pdf" },
          { id: 18, title: "ACUERDO-No.-20-17-12-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-18-25-11-2010.pdf" },
          { id: 19, title: "ACUERDO-No.-21-17-12-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-19-17-12-2010.pdf" },
          { id: 20, title: "ACUERDO-No.-22-17-12-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-20-17-12-2010.pdf" },
          { id: 21, title: "ACUERDO-No.-05-21-05-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-21-17-12-2010.pdf" },
          { id: 22, title: "ACUERDO-No.-06-21-05-2010", date: "2010-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2010/ACUERDO-No.-22-17-12-2010.pdf" }
        ];

      case 2011:
        return [
          { id: 1, title: "ACUERDO 01 del 31 de enero de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-01-del-31-de-enero-de-2011.pdf" },
          { id: 2, title: "ACUERDO 02 del 31 de enero de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-02-del-31-de-enero-de-2011.pdf" },
          { id: 3, title: "ACUERDO 03 del 25 de febrero de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-03-del-31-de-enero-de-2011.pdf" },
          { id: 4, title: "ACUERDO 04 del 25 de febrero de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-04-del-25-de-febrero-de-2011.pdf" },
          { id: 5, title: "ACUERDO 05 del 25 de febrero de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-05-del-25-de-febrero-de-2011.pdf" },
          { id: 6, title: "ACUERDO 06 del 15 de abril de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-06-del-15-de-abril-de-2011.pdf" },
          { id: 7, title: "ACUERDO 07 del 15 de abril de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Directiva/ACUERDOS 2011/ACUERDO-07-del-15-de-abril-de-2011.pdf" },
          { id: 8, title: "ACUERDO 08 del 13 de mayo de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Jirectiva/ACUERDOS 2011/ACUERDO-08-del-15-de-abril-de-2011.pdf" },
          { id: 9, title: "ACUERDO 09 del 13 de mayo de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-09-del-13-de-mayo-de-2011.pdf" },
          { id: 10, title: "ACUERDO 10 del 13 de mayo de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-10-del-13-de-mayo-de-2011.pdf" },
          { id: 11, title: "ACUERDO 11 del 15 de julio de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-11-del-15-de-julio-de-2011.pdf" },
          { id: 12, title: "ACUERDO 12 del 31 de agosto de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-12-del-31-de-agosto-de-2011.pdf" },
          { id: 13, title: "ACUERDO 13 del 31 de agosto de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-13-del-31-de-agosto-de-2011.pdf" },
          { id: 14, title: "ACUERDO 14 del 11 de octubre de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-14-del-11-de-octubre-de-2011.pdf" },
          { id: 15, title: "ACUERDO 15 del 11 de octubre de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-15-del-11-de-octubre-de-2011.pdf" },
          { id: 16, title: "ACUERDO 17 del 27 de diciembre de 2011", date: "2011-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2011/ACUERDO-17-del-27-de-diciembre-de-2011.pdf" }
        ];

      case 2012:
        return [
          { id: 1, title: "Acuerdo No 01 Marzo 07 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-01-Marzo-07-de-2012.pdf" },
          { id: 2, title: "Acuerdo No 02 de Marzo 07 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-02-de-Marzo-07-de-2012.pdf" },
          { id: 3, title: "Acuerdo No 03 Marzo 07 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-03-Marzo-07-de-2012.pdf" },
          { id: 4, title: "Acuerdo No 04 de Marzo 07 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-04-de-Marzo-07-de-2012.pdf" },
          { id: 5, title: "Acuerdo No 05 de Abril 11 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-05-de-Abril-11-de-2012.pdf" },
          { id: 6, title: "Acuerdo No 06 de Abril 11 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-06-de-Abril-11-de-2012.pdf" },
          { id: 7, title: "Acuerdo No 07 del 18 de mayo de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-07-del-18-de-mayo-de-2012.pdf" },
          { id: 8, title: "Acuerdo No 08 del 18 de mayo de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-08-del-18-de-mayo-de-2012.pdf" },
          { id: 9, title: "Acuerdo No 09 del 18 de mayo de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-09-del-18-de-mayo-de-2012.pdf" },
          { id: 10, title: "Acuerdo No 10 del 27 de junio de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-10-del-27-de-junio-de-2012.pdf" },
          { id: 11, title: "Acuerdo No 11 del 27 de junio de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-11-del-27-de-junio-de-2012.pdf" },
          { id: 12, title: "Acuerdo No 12 del 01 de agosto de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-12-del-01-de-agosto-de-2012.pdf" },
          { id: 13, title: "Acuerdo No 13 del 28 de Agosto de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-13-del-28-de-Agosto-de-2012.pdf" },
          { id: 14, title: "Acuerdo No 14 del 28 de Agosto de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-14-del-28-de-Agosto-de-2012.pdf" },
          { id: 15, title: "Acuerdo No 15 Septiembre 25 de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-15-Septiembre-25-de-2012.pdf" },
          { id: 16, title: "Acuerdo No 16 del 25 de sep de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-16-del-25-de-sep-de-2012.pdf" },
          { id: 17, title: "Acuerdo No 17 del 02 de Nov de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-17-del-02-de-Nov.-2012.pdf" },
          { id: 18, title: "Acuerdo No 18 del 23 de Nov de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-18-del-23-de-Nov.-2012.pdf" },
          { id: 19, title: "Acuerdo No 19 del 23 de Nov de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-19-del-23-de-Nov.-2012.pdf" },
          { id: 20, title: "Acuerdo No 20 del 23 de Nov de 2012", date: "2012-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2012/Acuerdo-No.-20-del-23-de-Nov.-2012.pdf" }
        ];

      case 2013:
        return [
          { id: 1, title: "Acuerdo 01 del 31 de enero de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/01.-Acuerdo-01-del-31-de-enero-de-2013.pdf" },
          { id: 2, title: "Acuerdo 02 del 22 de febrero de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/02.-Acuerdo-02-del-31-de-enero-de-2013.pdf" },
          { id: 3, title: "Acuerdo 03 del 22 de febrero de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/03.-Acuerdo-03-del-22-de-febrero-de-2013.pdf" },
          { id: 4, title: "Acuerdo 04 del 20 de marzo de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/04.-Acuerdo-04-del-20-de-marzo-de-2013.pdf" },
          { id: 5, title: "Acuerdo 05 del 30 de abril de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/05.-Acuerdo-05-del-30-de-abril-de-2013.pdf" },
          { id: 6, title: "Acuerdo 06 del 20 de mayo de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/06.-Acuerdo-06-del-20-de-mayo-de-2013.pdf" },
          { id: 7, title: "Acuerdo 07 del 26 de junio de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/07.-Acuerdo-07-del-26-de-junio-de-2013.pdf" },
          { id: 8, title: "Acuerdo 08 del 02 de agosto de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/08.-Acuerdo-08-del-02-de-agosto-de-2013.pdf" },
          { id: 9, title: "Acuerdo 09 del 02 de agosto de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/09.-Acuerdo-09-del-02-de-agosto-de-2013.pdf" },
          { id: 10, title: "Acuerdo 10 del 02 de agosto de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/10.-Acuerdo-10-del-02-de-agosto-de-2013.pdf" },
          { id: 11, title: "Acuerdo 11 del 27 de agosto de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/11.-Acuerdo-11-del-27-de-agosto-de-2013.pdf" },
          { id: 12, title: "Acuerdo 12 del 01 de octubre de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/12.-Acuerdo-12-del-01-de-octubre-de-2013.pdf" },
          { id: 13, title: "Acuerdo 13 del 01 de octubre de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/13.-Acuerdo-13-del-01-de-octubre-de-2013.pdf" },
          { id: 14, title: "Acuerdo 14 del 01 de octubre de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/14.-Acuerdo-14-del-01-de-Noviembre-de-2013.pdf" },
          { id: 15, title: "Acuerdo 15 del 28 de noviembre de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/15.-Acuerdo-15-del-28-de-noviembre-de-2013.pdf" },
          { id: 16, title: "Acuerdo 16 del 10 de diciembre de 2013", date: "2013-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2013/16.-Acuerdo-16-del-10-de-diciembre-de-2013.pdf" }
        ];

      case 2014:
        return [
          { id: 1, title: "Acuerdo 01 del 29 de enero de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/01.-Acuerdo-01-del-29-de-enero-de-2014.pdf" },
          { id: 2, title: "Acuerdo 02 del 29 de enero de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/02.-Acuerdo-02-del-29-de-enero-de-2014.pdf" },
          { id: 3, title: "Acuerdo 03 del 21 de febrero de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/03.-Acuerdo-03-del-21-de-febrero-de-2014.pdf " },
          { id: 4, title: "Acuerdo 04 del 21 de marzo de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/04.-Acuerdo-04-del-21-de-marzo-de-2014.pdf" },
          { id: 5, title: "Acuerdo 05 del 23 de abril de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/05.-Acuerdo-05-del-23-de-abril-de-2014.pdf " },
          { id: 6, title: "Acuerdo 06 del 25 de junio de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/06.-Acuerdo-06-del-25-de-junio-de-2014.pdf " },
          { id: 7, title: "Acuerdo 07 del 25 de junio de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/07.-Acuerdo-07-del-25-de-junio-de-2014.pdf" },
          { id: 8, title: "Acuerdo 08 del 29 de julio de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/08.-Acuerdo-08-del-29-de-julio-de-2014.pdf" },
          { id: 9, title: "Acuerdo 09 del 29 de julio de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/09.-Acuerdo-09-del-29-de-julio-de-2014.pdf" },
          { id: 10, title: "Acuerdo 10 del 23 de septiembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/10.-Acuerdo-10-del-23-de-septiembre-de-2014.pdf " },
          { id: 11, title: "Acuerdo 11 del 23 de septiembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/11.-Acuerdo-11-del-23-de-septiembre-de-2014.pdf" },
          { id: 12, title: "Acuerdo 12 del 28 de octubre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/12.-Acuerdo-12-del-28-de-octubre-de-2014.pdf " },
          { id: 13, title: "Acuerdo 13 del 28 de octubre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/13.-Acuerdo-13-del-28-de-octubre-de-2014.pdf" },
          { id: 14, title: "Acuerdo 14 del 12 de noviembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/14.-Acuerdo-14-del-12-de-noviembre-de-2014.pdf" },
          { id: 15, title: "Acuerdo 15 del 25 de noviembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/15.Acuerdo-15-del-25-de-noviembre-de-2014.pdf" },
          { id: 16, title: "Acuerdo 16 del 25 de noviembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/16.-Acuerdo-16-del-25-de-noviembre-de-2014.pdf" },
          { id: 17, title: "Acuerdo 17 del 25 de noviembre de 2014", date: "2014-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2014/17.-Acuerdo-17-del-25-de-noviembre-de-2014.pdf" }
        ];

      case 2015:
        return [
          { id: 1, title: "Acuerdo 01 del 27 de enero de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/01.-Acuerdo-01-del-27-de-enero-de-2015.pdf" },
          { id: 2, title: "Acuerdo 02 del 20 de febrero de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/02.-Acuerdo-02-del-20-de-febrero-de-2015.pdf" },
          { id: 3, title: "Acuerdo 03 del 20 de febrero de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/03.-Acuerdo-03-del-20-de-febrero-de-2015.pdf" },
          { id: 4, title: "Acuerdo 04 del 20 de marzo de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/04.-Acuerdo-04-del-20-de-marzo-de-2015.pdf" },
          { id: 5, title: "Acuerdo 05 del 20 de marzo de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/05.-Acuerdo-05-del-20-de-marzo-de-2015.pdf" },
          { id: 6, title: "Acuerdo 06 del 29 de abril de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/06.-Acuerdo-06-del-29-de-abril-de-2015.pdf" },
          { id: 7, title: "Acuerdo 07 del 26 de mayo de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/07.-Acuerdo-07-del-26-de-mayo-de-2015.pdf" },
          { id: 8, title: "Acuerdo 08 del 26 de mayo de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/08.-Acuerdo-08-del-26-de-mayo-de-2015.pdf" },
          { id: 9, title: "Acuerdo 09 del 24 de junio de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/09.Acuerdo-09-del-24-de-junio-de-2015.pdf" },
          { id: 10, title: "Acuerdo 10 del 24 de junio de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/10.Acuerdo-10-del-24-de-junio-de-2015.pdf" },
          { id: 11, title: "Acuerdo 11 del 24 de junio de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/11.Acuerdo-11-del-24-de-junio-de-2015.pdf" },
          { id: 12, title: "Acuerdo 12 del 28 de agosto de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/12.-Acuerdo-12-del-28-de-agosto-de-2015.pdf" },
          { id: 13, title: "Acuerdo 13 del 29 de septiembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/13.-Acuerdo-13-del-29-de-septiembre-de-2015.pdf" },
          { id: 14, title: "Acuerdo 14 del 29 de septiembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/14.-Acuerdo-14-del-29-de-septiembre-de-2015.pdf" },
          { id: 15, title: "Acuerdo 15 del 29 de septiembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/15.-Acuerdo-15-del-29-de-septiembre-de-2015.pdf" },
          { id: 16, title: "Acuerdo 16 del 27 de octubre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/16.-Acuerdo-16-del-27-de-octubre-de-2015.pdf" },
          { id: 17, title: "Acuerdo 17 del 29 de octubre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/17.-Acuerdo-17-del-29-de-octubre-de-2015.pdf" },
          { id: 18, title: "Acuerdo 18 del 30 de noviembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/18.-Acuerdo-18-del-30-de-noviembre-de-2015.pdf" },
          { id: 19, title: "Acuerdo 19 del 30 de noviembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/19.-Acuerdo-19-del-30-de-noviembre-de-2015.pdf" },
          { id: 20, title: "Acuerdo 20 del 22 de diciembre de 2015", date: "2015-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2015/20.-Acuerdo-20-del-22-de-diciembre-de-2015.pdf" }
        ];

      case 2016:
        return [
          { id: 1, title: "Acuerdo 01 del 26 de enero de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/01.-Acuerdo-01-del-26-de-enero-de-2016.pdf" },
          { id: 2, title: "Acuerdo 02 del 26 de enero de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/02.-Acuerdo-02-del-26-de-enero-de-2016.pdf" },
          { id: 3, title: "Acuerdo 03 del 04 de febrero de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/03.-Acuerdo-03-del-04-de-febrero-de-2016.pdf" },
          { id: 4, title: "Acuerdo 04 del 29 de abril de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/04.-Acuerdo-04-del-29-de-abril-de-2016.pdf" },
          { id: 5, title: "Acuerdo 05 del 24 de mayo de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/05.-Acuerdo-05-del-24-de-mayo-de-2016.pdf" },
          { id: 6, title: "Acuerdo 06 del 28 de junio de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/06.-Acuerdo-06-del-28-de-junio-de-2016.pdf" },
          { id: 7, title: "Acuerdo 07 del 03 de noviembre de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/07.-Acuerdo-07-del-03-de-noviembre-de-2016.pdf" },
          { id: 8, title: "Acuerdo 08 del 03 de noviembre de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/08.-Acuerdo-08-del-03-de-noviembre-de-2016.pdf" },
          { id: 9, title: "Acuerdo 09 del 08 de noviembre de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/09.-Acuerdo-09-del-08-de-noviembre-de-2016.pdf" },
          { id: 10, title: "Acuerdo 10 del 02 de diciembre de 2016", date: "2016-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2016/10.-Acuerdo-10-del-02-de-diciembre-de-2016.pdf" }
        ];

      case 2017:
        return [
          { id: 1, title: "Acuerdo 01 del 27 de enero de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/01.-Acuerdo-01-del-27-de-enero-de-2017.pdf" },
          { id: 2, title: "Acuerdo 02 del 27 de enero de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/02.-Acuerdo-02-del-27-de-enero-de-2017.pdf" },
          { id: 3, title: "Acuerdo 03 del 24 de febrero de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/03.-Acuerdo-03-del-24-de-febrero-de-2017.pdf" },
          { id: 4, title: "Acuerdo 04 del 24 de febrero de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/04.-Acuerdo-04-del-24-de-febrero-de-2017.pdf" },
          { id: 5, title: "Acuerdo 05 del 31 de mayo de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/05.-Acuerdo-05-del-31-de-mayo-de-2017.pdf" },
          { id: 6, title: "Acuerdo 06 del 14 de julio de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/06.-Acuerdo-06-del-14-de-julio-de-2017.pdf" },
          { id: 7, title: "Acuerdo 07 del 14 de julio de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/07.-Acuerdo-07-del-14-de-julio-de-2017.pdf" },
          { id: 8, title: "Acuerdo 08 del 01 de agosto de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/08.-Acuerdo-08-del-01-de-agosto-de-2017.pdf" },
          { id: 9, title: "Acuerdo 09 del 01 de agosto de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/09.-Acuerdo-09-del-01de-agosto-de-2017.pdf" },
          { id: 10, title: "Acuerdo 10 del 26 de septiembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/10.-Acuerdo-10-del-26-de-septiembre-de-2017.pdf" },
          { id: 11, title: "Acuerdo 11 del 26 de septiembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/11.-Acuerdo-11-del-26-de-septiembre-de-2017.pdf" },
          { id: 12, title: "Acuerdo 12 del 25 de octubre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/12.-Acuerdo-12-del-25-de-octubre-de-2017.pdf" },
          { id: 13, title: "Acuerdo 13 del 27 de noviembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/13.-Acuerdo-13-del-27-de-noviembre-de-2017.pdf" },
          { id: 14, title: "Acuerdo 14 del 27 de noviembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/14.-Acuerdo-14-del-27-de-noviembre-de-2017.pdf" },
          { id: 15, title: "Acuerdo 15 del 11 de diciembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/15.-Acuerdo-15-del-11-de-diciembre-de-2017.pdf" },
          { id: 16, title: "Acuerdo 16 del 27 de diciembre de 2017", date: "2017-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2017/16.-Acuerdo-16-del-27-de-diciembre-de-2017.pdf" }
        ];

      case 2018:
        return [
          { id: 1, title: "Acuerdo 01 del 30 de enero de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/01.-Acuerdo-01-del-30-de-enero-de-2018.pdf" },
          { id: 2, title: "Acuerdo 02 del 30 de enero de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/02.-Acuerdo-02-del-30-de-enero-de-2018.pdf" },
          { id: 3, title: "Acuerdo 03 del 27 de abril de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/03.-Acuerdo-03-del-27-de-abril-de-2018.pdf" },
          { id: 4, title: "Acuerdo 04 del 26 de junio de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/04.-Acuerdo-04-del-26-de-junio-de-2018.pdf" },
          { id: 5, title: "Acuerdo 05 del 30 de octubre de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/05.-Acuerdo-05-del-30-de-octubre-de-2018.pdf" },
          { id: 6, title: "Acuerdo 06 del 30 de noviembre de 2018", date: "2018-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2018/06.-Acuerdo-06-del-30-de-noviembre-de-2018.pdf" }
        ];

      case 2019:
        return [
          { id: 1, title: "Acuerdo 01 del 28 de enero de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-01-del-28-de-enero-de-2019.pdf" },
          { id: 2, title: "Acuerdo 02 del 26 de febrero de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-02-del-26-de-febrero-de-2019.pdf" },
          { id: 3, title: "Acuerdo 03 del 26 de marzo de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-03-del-26-de-marzo-de-2019.pdf" },
          { id: 4, title: "Acuerdo 04 del 21 de junio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-04-del-21-de-junio-de-2019.pdf" },
          { id: 5, title: "Acuerdo 05 del 21 de junio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-05-del-21-de-junio-de-2019.pdf" },
          { id: 6, title: "Acuerdo 06 del 21 de junio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-06-del-21-de-junio-de-2019.pdf" },
          { id: 7, title: "Acuerdo 07 del 26 de julio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-07-del-26-de-julio-de-2019.pdf" },
          { id: 8, title: "Acuerdo 08 del 26 de julio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-08-del-26-de-julio-de-2019.pdf" },
          { id: 9, title: "Acuerdo 09 del 26 de julio de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-09-del-26-de-julio-de-2019.pdf" },
          { id: 10, title: "Acuerdo 10 del 16 de agosto de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-10-del-16-de-agosto-de-2019.pdf" },
          { id: 11, title: "Acuerdo 11 del 27 de septiembre de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-11-del-27-de-septiembre-de-2019.pdf" },
          { id: 12, title: "Acuerdo 12 del 25 de octubre de 2019 Reglamento de Junta Directiva", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-12-del-25-de-octubre-de-2019-Reglamento-de-Junta-Directiva.pdf" },
          { id: 13, title: "Acuerdo 13 del 20 de diciembre de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-13-del-20-de-diciembre-de-2019.pdf" },
          { id: 14, title: "Acuerdo 14 del 20 de diciembre de 2019", date: "2019-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2019/Acuerdo-14-del-20-de-diciembre-de-2019.pdf" }
        ];

      case 2020:
        return [
          { id: 1, title: "Acuerdo 01 del 31 de enero de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-01-del-31-de-enero-de-2020.pdf" },
          { id: 2, title: "Acuerdo 02 del 28 de febrero de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-02-del-28-de-febrero-de-2020.pdf" },
          { id: 3, title: "Acuerdo 03 del 26 de marzo de 2019", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-03-del-26-de-marzo-de-2019.pdf" },
          { id: 4, title: "Acuerdo 04 del 25 de marzo de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-03-del-28-de-febrero-de-2020.pdf" },
          { id: 5, title: "Acuerdo 05 del 28 de abril de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-04-del-25-de-marzo-de-2020.pdf" },
          { id: 6, title: "Acuerdo 06 del 28 de mayo de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-05-del-28-de-abril-de-2020.pdf" },
          { id: 7, title: "Acuerdo 07 del 28 de mayo de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-06-del-28-de-mayo-de-2020.pdf" },
          { id: 8, title: "Acuerdo 08 del 26 de junio de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-07-del-28-de-mayo-de-2020.pdf" },
          { id: 9, title: "Acuerdo 09 del 26 de junio de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-08-del-26-de-junio-de-2020.pdf" },
          { id: 10, title: "Acuerdo 10 del 25 de septiembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-09-del-26-de-junio-de-2020.pdf" },
          { id: 11, title: "Acuerdo 11 del 25 de septiembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-11-del-25-de-septiembre-de-2020.pdf" },
          { id: 12, title: "Acuerdo 12 del 25 de septiembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-12-del-25-de-septiembre-de-2020.pdf" },
          { id: 13, title: "Acuerdo 13 del 25 de septiembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-13-del-25-de-septiembre-de-2020.pdf" },
          { id: 14, title: "Acuerdo 14 del 25 de septiembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-14-del-25-de-septiembre-de-2020.pdf" },
          { id: 15, title: "Acuerdo 15 del 27 de noviembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-15-del-27-de-noviembre-de-2020.pdf" },
          { id: 16, title: "Acuerdo 16 del 27 de noviembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-16-del-27-de-noviembre-de-2020.pdf" },
          { id: 17, title: "Acuerdo 17 del 29 de diciembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-17-del-29-de-diciembre-de-2020.pdf" },
          { id: 18, title: "Acuerdo 18 del 29 de diciembre de 2020", date: "2020-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2020/Acuerdo-18-del-29-de-diciembre-de-2020.pdf" }
        ];

      case 2021:
        return [
          { id: 1, title: "Acuerdo 01 del 29 de enero de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-01-del-29-de-enero-de-2021.pdf" },
          { id: 2, title: "Acuerdo 02 del 29 de enero de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-02-del-29-de-enero-de-2021.pdf" },
          { id: 3, title: "Acuerdo 03 del 29 de enero de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-03-del-29-de-enero-de-2021.pdf" },
          { id: 4, title: "Acuerdo 04 del 26 de febrero de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-04-del-26-de-febrero-de-2021.pdf" },
          { id: 5, title: "Acuerdo 07 del 28 de mayo de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-07-del-28-de-mayo-de-2021.pdf" },
          { id: 6, title: "Acuerdo 09 del 28 de mayo de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-09-del-28-de-mayo-de-2021.pdf" },
          { id: 7, title: "Acuerdo 10 del 04 de junio de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-10-del-04-de-junio-de-2021.pdf" },
          { id: 8, title: "Acuerdo 11 del 13 de agosto de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-11-del-13-de-agosto-de-2021.pdf" },
          { id: 9, title: "Acuerdo 12 del 13 de agosto de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-12-del-13-de-agosto-de-2021.pdf" },
          { id: 10, title: "Acuerdo 15 del 03 de diciembre de 2021", date: "2021-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2021/Acuerdo-15-del-03-de-diciembre-de-2021.pdf" }
        ];

      case 2022:
        return [
          { id: 1, title: "Acuerdo 01 del 27 de enero de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-01-del-27-de-enero-de-2022.pdf" },
          { id: 2, title: "Acuerdo 02 del 27 de enero de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-02-del-27-de-enero-de-2022.pdf" },
          { id: 3, title: "Acuerdo 03 del 27 de enero de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-03-del-27-de-enero-de-2022.pdf" },
          { id: 4, title: "Acuerdo 04 del 04 de marzo de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-04-del-04-de-marzo-de-2022.pdf" },
          { id: 5, title: "Acuerdo 05 del 01 de abril de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-05-del-01-de-abril-de-2022.pdf" },
          { id: 6, title: "Acuerdo 06 del 01 de abril de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-06-del-01-de-abril-de-2022.pdf" },
          { id: 7, title: "Acuerdo 07 del 02 de mayo de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-07-del-27-de-mayo-de-2022.pdf" },
          { id: 8, title: "Acuerdo 08 del 02 de junio de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-08-del-27-de-junio-de-2023.pdf" },
          { id: 9, title: "Acuerdo 08 del 02 de mayo de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-08-del-27-de-mayo-de-2022.pdf" },
          { id: 10, title: "Acuerdo 09 del 26 de agosto de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-09-del-26-de-agosto-de-2022.pdf" },
          { id: 11, title: "Acuerdo 10 del 23 de septiembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-10-del-23-de-septiembre-de-2022.pdf" },
          { id: 12, title: "Acuerdo 11 del 10 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-11-del-10-de-noviembre-de-2022.pdf" },
          { id: 13, title: "Acuerdo 12 del 10 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-12-del-10-de-noviembre-de-2022.pdf" },
          { id: 14, title: "Acuerdo 13 del 10 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-13-del-10-de-noviembre-de-2022.pdf" },
          { id: 15, title: "Acuerdo 14 del 10 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-14-del-10-de-noviembre-de-2022.pdf" },
          { id: 16, title: "Acuerdo 15 del 10 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-15-del-10-de-noviembre-de-2022.pdf" },
          { id: 17, title: "Acuerdo 16 del 28 de noviembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-16-del-28-de-noviembre-de-2022.pdf" },
          { id: 18, title: "Acuerdo 17 del 22 de diciembre de 2022", date: "2022-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2022/Acuerdo-17-del-22-de-diciembre-de-2022.pdf" }
        ];

      case 2023:
        return [
          { id: 1, title: "Acuerdo 01 del 20 de enero de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-01-del-20-de-enero-de-2023.pdf" },
          { id: 2, title: "Acuerdo 02 del 20 de enero de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-02-del-20-de-enero-de-2023.pdf" },
          { id: 3, title: "Acuerdo 03 del 20 de enero de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-03-del-20-de-enero-de-2023.pdf" },
          { id: 4, title: "Acuerdo 04 del 04 de febrero de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-04-del-04-de-febrero-de-2023.pdf" },
          { id: 5, title: "Acuerdo 05 del 04 de febrero de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-05-del-04-de-febrero-de-2023.pdf" },
          { id: 6, title: "Acuerdo 06 del 26 de mayo de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-06-del-26-de-mayo-de-2023.pdf" },
          { id: 7, title: "Acuerdo 07 del 27 de junio de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-07-del-27-de-junio-de-2023.pdf" },
          { id: 8, title: "Acuerdo 08 del 27 de junio de 2023 (1)", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-08-del-27-de-junio-de-2023 (1).pdf" },
          { id: 9, title: "Acuerdo 09 del 27 de junio de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-09-del-27-de-junio-de-2023.pdf" },
          { id: 10, title: "Acuerdo 11 del 04 de agosto de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-11-del-04-de-agosto-de-2023.pdf" },
          { id: 11, title: "Acuerdo 12 del 04 de agosto de 2023", date: "2023-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2023/Acuerdo-12-del-04-de-agosto-de-2023.pdf" }
        ];

      case 2024:
        return [
          { id: 1, title: "Acuerdo 01 del 02 de febrero de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-01-del-02-de-febrero-de-2024.pdf" },
          { id: 2, title: "Acuerdo 02 del 01 de marzo de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-02-del-01-de-marzo-de-2024.pdf" },
          { id: 3, title: "Acuerdo 03 del 05 de abril de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-03-del-05-de-abril-de-2024.pdf" },
          { id: 4, title: "Acuerdo 04 del 28 de junio de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-04-del-28-de-junio-de-2024.pdf" },
          { id: 5, title: "Acuerdo 05 del 28 de junio de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-05-del-28-de-junio-de-2024.pdf" },
          { id: 6, title: "Acuerdo 07 del 27 de agosto de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-07-del-27-de-agosto-de-2024.pdf" },
          { id: 7, title: "Acuerdo 09 del 28 de agosto de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-09-del-27-de-agosto-de-2024.pdf" },
          { id: 8, title: "Acuerdo 10 del 28 de agosto de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-10-del-27-de-agosto-de-2024.pdf" },
          { id: 9, title: "Acuerdo 12 del 27 de septiembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-12-del-27-de-septiembre-de-2024.pdf" },
          { id: 10, title: "Acuerdo 13 del 27 de septiembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-13-del-27-de-septiembre-de-2024.pdf" },
          { id: 11, title: "Acuerdo 14 del 01 de noviembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-14-del-01-de-noviembre-de-2024.pdf" },
          { id: 12, title: "Acuerdo 15 del 01 de noviembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-15-del-01-de-noviembre-de-2024.pdf" },
          { id: 13, title: "Acuerdo 16 del 01 de noviembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-16-del-01-de-noviembre-de-2024.pdf" },
          { id: 14, title: "Acuerdo 17 del 26 de noviembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-17-del-26-de-noviembre-de-2024.pdf" },
          { id: 15, title: "Acuerdo 18 del 26 de noviembre de 2024", date: "2024-01-01", size: "XXX KB", views: 10, downloads: 5, downloadUrl: "./gestion juridica/Acuerdos de Junta Directiva/ACUERDOS 2024/Acuerdo-18-del-26-de-noviembre-de-2024.pdf" }
        ];

      default:
        return [];
    }
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleBackToYears = () => {
    setSelectedYear(null);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    // Extraer el nombre del archivo de la URL
    const fileName = url.split('/').pop();
    link.download = fileName;
    link.click();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Vista de carpetas por año
  if (!selectedYear) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-lg border-b-4 border-blue-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <button
                    onClick={onBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 mb-2 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Volver a Gestión Jurídica
                  </button>
                  <h1 className="text-3xl font-bold text-gray-900">Acuerdos de Junta Directiva</h1>
                  <p className="text-gray-600 mt-1">Gestión Jurídica / Acuerdos de Junta Directiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selecciona un año</h2>
            <p className="text-gray-600">Documentos organizados por año de emisión</p>
          </div>

          {/* Grid de años */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {yearsData.map((yearData) => (
              <div
                key={yearData.year}
                onClick={() => handleYearClick(yearData.year)}
                className="cursor-pointer group"
              >
                <div className={`bg-gradient-to-br ${yearData.color} rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">{yearData.year}</h3>
                    <div className="text-sm opacity-90">
                      <p>{yearData.count} documentos</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Vista de documentos del año seleccionado
  const documents = getDocumentsByYear(selectedYear);
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + documentsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <button
                  onClick={handleBackToYears}
                  className="flex items-center text-blue-600 hover:text-blue-800 mb-2 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Volver a años
                </button>
                <h1 className="text-3xl font-bold text-gray-900">Acuerdos {selectedYear}</h1>
                <p className="text-gray-600 mt-1">Gestión Jurídica / Acuerdos de Junta Directiva / {selectedYear}</p>
              </div>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <span className="text-blue-800 font-semibold">Total: {documents.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar acuerdos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-800"
            />
          </div>
        </div>

        {/* Lista de documentos */}
        {documents.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay documentos disponibles</h3>
            <p className="text-gray-600">Los documentos para el año {selectedYear} aún no han sido agregados.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-4">
              {paginatedDocuments.map((doc) => (
                <div key={doc.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                      className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Descargar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Anterior
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AcuerdosJuntaSection;