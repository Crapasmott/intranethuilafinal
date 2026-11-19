'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Header from './Header';
import NosotrosSection from './NosotrosSection';
import MaestrosSection from './MaestrosSection';
import GestionJuridicaSection from './GestionJuridicaSection';
import SigSection from './SigSection';
import SgcSection from './SgcSection';
import ReporteCarteraSection from './ReporteCarteraSection';
import ReporteFacarSection from './ReporteFacarSection';
import ModernPopup from './ModernPopup';
import SocialWidgetsEmbed from './SocialWidgetsEmbed';
import ElectroHuilaKidsButton from './ElectroHuilaKidsButton';
import PtepSection from './PtepSection';
import PublicacionesSection from './PublicacionesSection';
import { Bell, Search, Star, ChevronRight, ChevronDown, FileText, ExternalLink, Facebook, Newspaper, Megaphone } from 'lucide-react';
import PublicacionesHome from './PublicacionesHome';

// ─── DATOS ────────────────────────────────────────────────────────────────────
// Las publicaciones vienen del plugin de WordPress
const API_URL = 'https://electrohuila.com.co/blog/wp-json/electrohuila/v1/publicaciones';
const ACCENT = '#1a5276';

const APPS = [
  { name: 'SIMAD', icon: 'SIMAD.png', url: 'http://simad.electrohuila.co/', cat: 'Sistemas', main: true },
  { name: 'Sistema Integrado de Gestión', icon: 'SIG.png', url: 'sig', cat: 'Gestión', main: true },
  { name: 'Sistema Local de Consignas', icon: 'SLlogo.png', url: 'https://enlinea.electrohuila.com.co/consignas/#/', cat: 'Operativos', main: true },
  { name: 'Web SAMI', icon: 'sami.png', url: 'http://sami.electrohuila.co:3001/login/', cat: 'Operativos', main: true },
  { name: 'Mesa de Servicios', icon: 'servicio-al-cliente.png', url: 'https://enlinea.electrohuila.com.co/mesa-servicio/#/dashboard-gestor', cat: 'Sistemas', main: true },
  { name: 'Reporte Cartera Comercial', icon: 'informe-de-ingresos.png', url: 'reporte-cartera', cat: 'Power BI' },
  { name: 'Indicadora FACAR', icon: 'mejora.png', url: 'reporte-facar', cat: 'Power BI' },
  { name: 'Reporte Presupuesto', icon: 'estado-de-resultados.png', url: 'https://app.powerbi.com/Redirect?action=OpenLink&linkId=w9XvUevexO&ctid=bff55112-201c-40fb-ae69-a53c8ab06449&pbi_source=linkShare', cat: 'Power BI' },
  { name: 'Reporte Recaudo SIEC', icon: 'informe-de-venta.png', url: 'https://app.powerbi.com/groups/me/reports/f2d6f80f-551b-494e-9766-543c78d78230/ReportSection?experience=power-bi', cat: 'Power BI' },
  { name: 'Comercial Maps', icon: 'map.png', url: 'https://backapp.electrohuila.com.co:8071/maps/comercial/mapa.php', cat: 'Comerciales' },
  { name: 'Electrohuila Mapas', icon: 'ubicacion.png', url: 'https://backapp.electrohuila.com.co:8071/maps/login.php', cat: 'Operativos' },
  { name: 'Consulta Comercial', icon: 'consultacomercial.png', url: 'https://backapp.electrohuila.com.co:8071/Comercial/', cat: 'Comerciales' },
  { name: 'Cuentas Nuevas', icon: 'datos.png', url: 'https://enlinea.electrohuila.com.co/cuentas-nuevas/#/', cat: 'Comerciales' },
  { name: 'Facturación Masiva', icon: 'recibo.png', url: 'https://enlinea.electrohuila.com.co/invoice-massive/#/login', cat: 'Comerciales' },
  { name: 'Facturación Electrónica', icon: 'cuenta.png', url: 'http://192.9.200.137:8080/fe/', cat: 'Comerciales' },
  { name: 'Calidad del Servicio', icon: 'encendiendo.png', url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Operacion/CALIDAD%20DEL%20SERVICIO/Forms/AllItems.aspx', cat: 'Operativos' },
  { name: 'Control de Pérdidas', icon: 'analitico.png', url: 'http://control_perdidas.electrohuila.co:3001/login', cat: 'Comerciales' },
  { name: 'Control Permiso Ambiental', icon: 'ambientalismo.png', url: 'https://enlinea.electrohuila.com.co/control-permiso-ambiental/', cat: 'Gestión' },
  { name: 'ERP Electrohuila', icon: 'ERPLOGO3.png', url: 'http://192.9.200.196/erp/registro2.asp', cat: 'Gestión' },
  { name: 'Nómina Designer', icon: 'gestion-del-talento.png', url: 'http://10.50.35.27:7778/forms/frmservlet?form=INICIORED.fmx', cat: 'Gestión' },
  { name: 'Kiosko', icon: 'nomina-eh.png', url: 'https://kiosco.electrohuila.com.co:8179/#/login/GrupoEmpresarial1', cat: 'Gestión' },
  { name: 'Gestión Jurídica', icon: 'libro-de-leyes.png', url: 'gestion-juridica', cat: 'Gestión' },
  { name: 'Gestión Transversal', icon: 'portapapeles.png', url: 'https://enlinea.electrohuila.com.co/gestion-transversal/#/login', cat: 'Gestión' },
  { name: 'Procesos provisionados', icon: 'computadora.png', url: 'https://qa-enlinea.electrohuila.com.co/juridica/', cat: 'Gestión' },
  { name: 'Seguridad Transversal', icon: 'proteger.png', url: 'https://enlinea.electrohuila.com.co/transverse-security/#/login', cat: 'Sistemas' },
  { name: 'Notificaciones Web', icon: 'notificacion.png', url: 'https://enlinea.electrohuila.com.co/notificacion-web/?key=4Grak2M6ftOIJbvypC8uVNItS', cat: 'Sistemas' },
  // ▼▼▼ TARJETA WATTHUNTER ▼▼▼
  // El icono se carga desde ./images/iconos/, por eso '../' para apuntar a ./images/logo-watthunter.png
  { name: 'WattHunter', icon: '../logo-watthunter.png', url: 'http://192.9.200.97:5173/login?redirect=%2F', cat: 'Sistemas' },
  // ▲▲▲ FIN TARJETA WATTHUNTER ▲▲▲
  { name: 'Página Web Principal', icon: 'web-eh.png', url: 'https://electrohuila.com.co', cat: 'Corporativo' },
  { name: 'Portal Interacción Corporativa', icon: 'Logo-PIC.jpg', url: 'https://electrohuilaco.sharepoint.com/Estrategico/Documentos%20compartidos/P%C3%A1gina%20principal%20PIC.pdf', cat: 'Gestión' },
  { name: 'Portal Office 365', icon: 'microsoft-outlook.png', url: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638918316043223777.Nzk2M2VkMjgtZjIzNi00MTBlLWE4NzYtMTc5ZGExYjQ5NGEwYmNkZjFiYTctNjgyZC00Mzg2LWJlNTAtNzZkMWZjYTM2OTY2&ui_locales=es-CO&mkt=es-CO&sso_reload=true', cat: 'Corporativo' },
];

const CATS = ['Power BI', 'Comerciales', 'Operativos', 'Gestión', 'Sistemas', 'Corporativo'];

// Apps que siempre se muestran arriba (el nombre debe coincidir con "name" en APPS)
const FIJAS = ['SIMAD', 'ERP Electrohuila', 'Mesa de Servicios', 'Kiosko', 'Página Web Principal'];
const APPS_FIJAS = FIJAS.map(n => APPS.find(a => a.name === n)).filter(Boolean);

const QUICK_LINKS = [
  { name: 'Calendario tributario 2024', url: './documentos/calendarios tributarios/PRESENTACION-CRONOGRAMA-IMPUESTOS.xlsx' },
  { name: 'Calendario tributario 2025', url: './documentos/calendarios tributarios/CRONOGRAMA-2025.xlsx' },
  { name: 'Calendario tributario 2026', url: './documentos/calendarios tributarios/CRONOGRAMA 2026 - PRESENTACION.xlsx' },
];

// CAMBIO 1: las pestañas ahora usan solo las 4 categorías oficiales del plugin
const TABS = [
  { id: 'novedades', label: 'Novedades', cats: ['Novedades'] },
  { id: 'eventos', label: 'Eventos', cats: ['Eventos'] },
  { id: 'talento', label: 'Talento Humano', cats: ['Talento Humano'] },
  { id: 'sistemas', label: 'Sistemas', cats: ['Sistemas'] },
];

const DOCS = [
  {
    title: 'Manuales de sistemas',
    items: [{ label: 'Abrir carpeta de manuales', href: 'https://electrohuilaco-my.sharepoint.com/personal/adriana_riveroso_electrohuila_co/_layouts/15/onedrive.aspx?CT=1760718681779&OR=OWA%2DNT%2DMail&CID=3d0d3afe%2Dce88%2D24d7%2D2387%2Dd4824e177b11&e=5%3Af3575c8c00cb40d4979a73e98080a742&sharingv2=true&fromShare=true&at=9&id=%2Fpersonal%2Fadriana%5Friveroso%5Felectrohuila%5Fco%2FDocuments%2FManuales%20Sistemas%20de%20Informaci%C3%B3n&FolderCTID=0x0120002F74BA4A61F2A54C9891CA36E1F35328&view=0' }],
  },
  {
    title: 'Organización y Sistemas',
    items: [
      { label: 'Matriz de contacto de autoridades', href: 'https://electrohuila.net/wp-content/uploads/2025/10/MATRIZ-DE-CONTACTO-AUTORIDADES-.pdf' },
      { label: 'Política de Seguridad de la Información', href: 'https://electrohuila.net/wp-content/uploads/2025/10/Politica-de-Seguridad-de-la-Informacion.pdf' },
      { label: 'Política de Gestión de Incidentes de Seguridad de la Información', href: 'https://electrohuila.net/wp-content/uploads/2025/10/Politica-Gestion-de-Incidentes-de-Seguridad-De-la-Informacion.pdf' },
    ],
  },
  {
    title: 'Calendario de mantenimiento 2026',
    items: [1, 2, 3, 4, 5].map(n => ({
      label: `Cronograma de mantenimiento ${n}`,
      href: `./cronograma mantenimeintos/FT-AGT-03-005-CRONOGRAMA-MANT. 2026 - ELECTROHUILA-${n}.pdf`,
    })),
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
// CAMBIO 2: normaliza la categoría (acepta "eventos", "EVENTOS", "Eventos", etc.)
const CAT_OFICIALES = ['Novedades', 'Eventos', 'Talento Humano', 'Sistemas'];
const normalizarCat = (c) =>
  CAT_OFICIALES.find(o => o.toLowerCase() === (c || '').trim().toLowerCase()) || c || 'Publicación';

const formatearPublicacion = (p) => ({
  id: `local-${p.id}`,
  title: p.titulo,
  excerpt: p.descripcion || '',
  // WordPress ya entrega HTML con sus párrafos, no se envuelve en otro <p>
  content: p.contenido || `<p>${p.descripcion || ''}</p>`,
  image: p.imagen || (p.fotos && p.fotos.length > 0 ? p.fotos[0] : '/images/default-pub.jpg'),
  fotos: p.fotos || [],
  // CAMBIO 3: categoría normalizada; las de "Eventos" se abren como galería
  category: normalizarCat(p.categoria),
  dateISO: p.fechaISO || p.fecha || new Date().toISOString(),
  date: (() => {
    try {
      return new Date(p.fechaISO || p.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch { return ''; }
  })(),
  autor: p.autor || '',
  isGaleria: normalizarCat(p.categoria) === 'Eventos',
});

const leerLS = (key, fallback) => {
  try { const v = JSON.parse(localStorage.getItem(key)); return Array.isArray(v) ? v : fallback; } catch { return fallback; }
};
const guardarLS = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { } };

// ─── HOOK: publicaciones (API + localStorage) ─────────────────────────────────
const usePublicaciones = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargar = useCallback(async () => {
    const aplicar = (raw) => {
      const f = raw.map(formatearPublicacion).sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
      setItems(f);
    };
    try {
      const res = await fetch(API_URL, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          guardarLS('electrohuila_publicaciones', data);
          aplicar(data);
          setLoading(false);
          return;
        }
      }
    } catch { /* API no disponible: se usa localStorage */ }
    const stored = leerLS('electrohuila_publicaciones', null);
    setItems(stored ? stored.map(formatearPublicacion).sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO)) : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    cargar();
    window.addEventListener('publicaciones_actualizadas', cargar);
    window.addEventListener('storage', cargar);
    return () => {
      window.removeEventListener('publicaciones_actualizadas', cargar);
      window.removeEventListener('storage', cargar);
    };
  }, [cargar]);

  return { items, loading };
};

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
const Lightbox = ({ fotos, indiceInicial, onClose }) => {
  const [i, setI] = useState(indiceInicial);
  const prev = useCallback(() => setI(n => (n - 1 + fotos.length) % fotos.length), [fotos.length]);
  const next = useCallback(() => setI(n => (n + 1) % fotos.length), [fotos.length]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [prev, next, onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90" onClick={onClose}>
      <button onClick={onClose} aria-label="Cerrar" className="absolute top-4 right-4 w-10 h-10 rounded-full text-white text-xl hover:bg-white/20">✕</button>
      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">{i + 1} / {fotos.length}</span>
      {fotos.length > 1 && <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior" className="absolute left-4 w-12 h-12 rounded-full text-white text-3xl hover:bg-white/20">‹</button>}
      <img onClick={e => e.stopPropagation()} src={fotos[i]} alt={`Foto ${i + 1}`} className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl" />
      {fotos.length > 1 && <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Siguiente" className="absolute right-4 w-12 h-12 rounded-full text-white text-3xl hover:bg-white/20">›</button>}
    </div>
  );
};

// ─── MODAL GALERÍA ────────────────────────────────────────────────────────────
const GaleriaModal = ({ article, onClose }) => {
  const [idx, setIdx] = useState(null);
  const fotos = article.fotos?.length ? article.fotos : (article.image ? [article.image] : []);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 py-8"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-4 overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-gray-100">
            <p className="text-xs text-gray-500">{article.date}{article.autor ? ` · ${article.autor}` : ''} · {fotos.length} foto{fotos.length !== 1 ? 's' : ''}</p>
            <h2 className="text-xl font-semibold text-gray-900 mt-1">{article.title}</h2>
            {article.excerpt && <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>}
          </div>
          <div className="p-6">
            {fotos.length === 0 ? (
              <p className="text-center py-10 text-gray-400">Esta galería no tiene fotos.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {fotos.map((f, i) => (
                  <button key={i} onClick={() => setIdx(i)} className="aspect-square overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                    <img src={f} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-white rounded-lg" style={{ background: ACCENT }}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      {idx !== null && <Lightbox fotos={fotos} indiceInicial={idx} onClose={() => setIdx(null)} />}
    </>
  );
};

// ─── DETALLE DE ARTÍCULO ──────────────────────────────────────────────────────
const ArticleDetail = ({ article, onBack }) => (
  <div className="min-h-screen bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <button onClick={onBack} className="mb-6 flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: ACCENT }}>
        <ChevronRight className="w-4 h-4 rotate-180" /> Volver al inicio
      </button>
      <img src={article.image} alt={article.title} className="w-full max-h-96 object-contain bg-gray-50 rounded-2xl" />
      <p className="text-sm text-gray-500 mt-6">{article.category} · {article.date}</p>
      <h1 className="text-3xl font-semibold text-gray-900 mt-2 mb-6">{article.title}</h1>
      <div className="article-content text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg" style={{ background: ACCENT }}>
          <Facebook className="w-4 h-4" /> Compartir
        </button>
        <span className="text-sm text-gray-400">Publicado en ElectroHuila</span>
      </div>
    </div>
  </div>
);

// ─── PIEZAS DEL HOME ──────────────────────────────────────────────────────────
const AppRow = ({ app, fav, onOpen, onToggleFav }) => (
  <div className="flex items-center rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors">
    <button onClick={() => onOpen(app)}
      className="flex-1 min-w-0 flex items-center gap-3 p-3 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
      <img src={`./images/iconos/${app.icon}`} alt="" className="w-8 h-8 object-contain shrink-0" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
      <span className="text-sm text-gray-800 line-clamp-2">{app.name}</span>
    </button>
    <button onClick={() => onToggleFav(app.name)} aria-pressed={fav}
      aria-label={fav ? `Quitar ${app.name} de favoritas` : `Marcar ${app.name} como favorita`}
      className="p-2 mr-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
      <Star className={`w-4 h-4 ${fav ? 'fill-amber-400 text-amber-400' : 'text-gray-300 hover:text-amber-500'}`} />
    </button>
  </div>
);

// Tarjeta de acceso fijo (siempre visible arriba)
const FijaCard = ({ app, onOpen }) => (
  <button onClick={() => onOpen(app)}
    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
    <img src={`./images/iconos/${app.icon}`} alt="" className="w-10 h-10 object-contain"
      onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
    <span className="text-sm font-medium text-gray-800 line-clamp-2">{app.name}</span>
  </button>
);

const PubCard = ({ a, onClick, big }) => (
  <button onClick={onClick}
    className={`group text-left bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors ${big ? 'md:row-span-2' : 'flex'}`}>
    <img src={a.image} alt="" className={big ? 'w-full h-56 md:h-72 object-cover bg-gray-100' : 'w-28 sm:w-36 object-cover bg-gray-100 shrink-0'} />
    <div className="p-4 min-w-0">
      <p className="text-xs text-gray-500">{a.category} · {a.date}</p>
      <h3 className={`font-semibold text-gray-900 mt-1 group-hover:underline ${big ? 'text-lg line-clamp-3' : 'text-sm line-clamp-2'}`}>{a.title}</h3>
      {a.excerpt && <p className={`text-sm text-gray-600 mt-1 ${big ? 'line-clamp-3' : 'line-clamp-2'}`}>{a.excerpt}</p>}
      <span className="text-sm font-medium mt-2 inline-block" style={{ color: ACCENT }}>{a.isGaleria ? 'Ver galería' : 'Leer más'}</span>
    </div>
  </button>
);

const PubSkeleton = () => (
  <div className="grid md:grid-cols-2 gap-4 animate-pulse">
    <div className="md:row-span-2 h-80 bg-gray-100 rounded-2xl" />
    <div className="h-36 bg-gray-100 rounded-2xl" />
    <div className="h-36 bg-gray-100 rounded-2xl" />
  </div>
);

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
const ElectroHuilaIntranet = () => {
  const [currentView, setCurrentView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [chip, setChip] = useState('Todas');
  const [tab, setTab] = useState('novedades');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [galeriaModal, setGaleriaModal] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [fecha, setFecha] = useState({ saludo: 'Hola', texto: '' });
  const [favs, setFavs] = useState([]);
  const searchRef = useRef(null);

  const { items: publicaciones, loading } = usePublicaciones();

  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    setFecha({
      saludo: h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches',
      texto: now.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }),
    });
    setFavs(leerLS('eh_favs', []));
  }, []);

  // Ctrl + K enfoca el buscador
  useEffect(() => {
    const h = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const handleNavigation = (view) => {
    if (view === 'inicio') { setCurrentView('home'); setSelectedArticle(null); }
    else setCurrentView(view);
  };
  const handleBackToHome = () => { setCurrentView('home'); setSelectedArticle(null); };

  const handleArticleClick = (a) => {
    if (a.isGaleria) setGaleriaModal(a);
    else { setSelectedArticle(a); setCurrentView('article-detail'); }
  };

  const openApp = (app) => {
    const internas = { 'gestion-juridica': 1, sig: 1, 'reporte-cartera': 1, 'reporte-facar': 1, ptep: 1, publicaciones: 1 };
    if (internas[app.url]) setCurrentView(app.url);
    else window.open(app.url, '_blank', 'noopener,noreferrer');
  };

  const toggleFav = (name) => {
    const next = favs.includes(name) ? favs.filter(n => n !== name) : [...favs, name];
    setFavs(next);
    guardarLS('eh_favs', next);
  };

  const q = searchTerm.trim().toLowerCase();
  const filtradas = APPS.filter(a => !q || a.name.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q));
  const esFav = (a) => favs.includes(a.name);
  const grupos = (chip === 'Todas'
    ? [...(favs.length && !q ? [['Favoritas', filtradas.filter(esFav)]] : []), ...CATS.map(c => [c, filtradas.filter(a => a.cat === c)])]
    : chip === 'Favoritas' ? [['Favoritas', filtradas.filter(esFav)]]
      : [[chip, filtradas.filter(a => a.cat === chip)]]
  ).filter(([, l]) => l.length > 0);
  const menu = [['Todas', APPS.length], ['Favoritas', favs.length], ...CATS.map(c => [c, APPS.filter(a => a.cat === c).length])];
  const pubsBusqueda = q ? publicaciones.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)).slice(0, 4) : [];
  const irA = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const irANoticias = () => {
    setTab('novedades');
    if (currentView !== 'home') {
      setCurrentView('home');
      setSelectedArticle(null);
      setTimeout(() => irA('publicaciones'), 150);
    } else {
      irA('publicaciones');
    }
  };
  const docsTodos = [...DOCS, { title: 'Calendarios tributarios', items: QUICK_LINKS.map(l => ({ label: l.name, href: l.url })) }];

  const tabActual = TABS.find(t => t.id === tab);
  const pubsTab = publicaciones.filter(p => tabActual.cats.includes(p.category)).slice(0, 3);

  const renderView = () => {
    if (currentView === 'nosotros') return <NosotrosSection onBack={handleBackToHome} />;
    if (currentView === 'maestros') return <MaestrosSection onBack={handleBackToHome} />;
    if (currentView === 'gestion-juridica') return <GestionJuridicaSection onBack={handleBackToHome} />;
    if (currentView === 'sig') return <SigSection onBack={handleBackToHome} onNavigateToSgc={() => setCurrentView('sgc')} />;
    if (currentView === 'sgc') return <SgcSection onBack={() => setCurrentView('sig')} />;
    if (currentView === 'reporte-cartera') return <ReporteCarteraSection onBack={handleBackToHome} />;
    if (currentView === 'reporte-facar') return <ReporteFacarSection onBack={handleBackToHome} />;
    if (currentView === 'ptep') return <PtepSection onBack={handleBackToHome} />;
    if (currentView === 'publicaciones') return <PublicacionesSection onBack={handleBackToHome} />;
    if (currentView === 'article-detail' && selectedArticle) return <ArticleDetail article={selectedArticle} onBack={handleBackToHome} />;

    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* 1. Encabezado: saludo, buscador y atajos a las secciones */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 capitalize">{fecha.texto}</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">{fecha.saludo}</h1>
          </div>
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input ref={searchRef} type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar aplicaciones o publicaciones" aria-label="Buscar aplicaciones o publicaciones"
              className="w-full pl-10 pr-14 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            <kbd className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">Ctrl K</kbd>
          </div>
        </div>

        {/* Accesos fijos: siempre visibles, no dependen del buscador ni de las categorías */}
        <section aria-label="Accesos fijos" className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Accesos fijos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {APPS_FIJAS.map(a => <FijaCard key={a.name} app={a} onOpen={openApp} />)}
          </div>
        </section>

        <nav className="flex gap-6 mt-6 border-b border-gray-200 text-sm" aria-label="Secciones de la página">
          {[['apps', 'Aplicaciones'], ['publicaciones', 'Publicaciones'], ['documentos', 'Documentos']].map(([id, label]) => (
            <button key={id} onClick={() => irA(id)} className="pb-3 -mb-px border-b-2 border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300">{label}</button>
          ))}
        </nav>

        {/* 2. Aplicaciones: menú de categorías a la izquierda, grupos a la derecha */}
        <section id="apps" className="mt-8 scroll-mt-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Aplicaciones</h2>
          <div className="grid lg:grid-cols-[200px_1fr] gap-6">
            <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:sticky lg:top-4 self-start" aria-label="Categorías">
              {menu.map(([name, n]) => (
                <li key={name} className="shrink-0">
                  <button onClick={() => setChip(name)} aria-current={chip === name ? 'true' : undefined}
                    className={`w-full flex items-center justify-between gap-3 text-sm px-3 py-2 rounded-lg transition-colors ${chip === name ? 'font-medium text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    style={chip === name ? { background: ACCENT } : undefined}>
                    <span>{name}</span>
                    <span className={`text-xs ${chip === name ? 'text-white/80' : 'text-gray-400'}`}>{n}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="space-y-8 min-w-0">
              {grupos.length === 0 && (
                <p className="py-10 text-center text-sm text-gray-500">
                  {chip === 'Favoritas' ? 'Aún no tienes favoritas. Toca la estrella de una aplicación para guardarla aquí.' : 'No encontramos aplicaciones con esa búsqueda.'}
                </p>
              )}
              {grupos.map(([nombre, lista]) => (
                <div key={nombre}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{nombre} <span className="font-normal text-gray-400">{lista.length}</span></h3>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2">
                    {lista.map(a => <AppRow key={nombre + a.name} app={a} fav={esFav(a)} onOpen={openApp} onToggleFav={toggleFav} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {q && pubsBusqueda.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Publicaciones encontradas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pubsBusqueda.map(a => <PubCard key={a.id} a={a} onClick={() => handleArticleClick(a)} />)}
            </div>
          </section>
        )}

        {/* 3. Publicaciones por pestañas */}
        {!q && (
          <PublicacionesHome
            items={publicaciones.filter(p => tabActual.cats.includes(p.category))}
            loading={loading}
            tabs={TABS}
            tab={tab}
            onTab={setTab}
            onOpen={handleArticleClick}
            onVerTodas={() => setCurrentView('publicaciones')}
            accent={ACCENT}
          />
        )}

        {/* 4. Documentos */}
        {!q && (
          <section id="documentos" className="mt-14 scroll-mt-4 max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentos</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {docsTodos.map(g => (
                <details key={g.title} className="group">
                  <summary className="flex items-center justify-between py-3.5 cursor-pointer list-none text-sm font-medium text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                    {g.title}
                    <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pb-3 space-y-1">
                    {g.items.map(d => (
                      <li key={d.href}>
                        <a href={d.href} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2">
                          <FileText className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                          <span className="flex-1">{d.label}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>
        )}
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigation} searchTerm={searchTerm} setSearchTerm={setSearchTerm} currentView={currentView} />
      {renderView()}

      {galeriaModal && <GaleriaModal article={galeriaModal} onClose={() => setGaleriaModal(null)} />}

      {/* Avisos: ahora se abren a demanda, no a los 3 segundos */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-4">
        <div className="flex items-center gap-2">
          <button onClick={irANoticias} aria-label="Ver noticias urgentes" title="Publicaciones"
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 alert-glow">
            <span className="absolute inset-0 rounded-full bg-red-400 opacity-50 animate-ping" />
            <Megaphone className="relative w-6 h-6 mega-shake" />
          </button>
        </div>
      </div>
      <ModernPopup isVisible={showNotifications} onClose={() => setShowNotifications(false)} showAdminButton={true} />


      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center gap-3">
          <img src="./images/iconos/electro.png" alt="" className="w-5 h-5 object-contain" />
          <span className="text-gray-500 text-sm">© {new Date().getFullYear()} ElectroHuila S.A. E.S.P.</span>
        </div>
      </footer>

      <style jsx global>{`
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        details > summary::-webkit-details-marker { display: none; }
        .article-content h1, .article-content h2, .article-content h3 { font-weight: 600; margin: 1.5rem 0 1rem; color: #1f2937; }
        .article-content p { margin: 1rem 0; line-height: 1.7; }
        .article-content ul, .article-content ol { margin: 1rem 0; padding-left: 2rem; }
        .article-content img { max-width: 100%; height: auto; margin: 2rem 0; border-radius: 0.5rem; }
        .article-content blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1.5rem 0; color: #6b7280; }
        .article-content a { color: #1a5276; text-decoration: underline; }
        @keyframes mega-shake {
          0%, 55%, 100% { transform: rotate(0) scale(1); }
          10% { transform: rotate(-14deg) scale(1.2); }
          20% { transform: rotate(14deg) scale(1.2); }
          30% { transform: rotate(-10deg) scale(1.1); }
          40% { transform: rotate(10deg) scale(1.1); }
          50% { transform: rotate(0) scale(1); }
        }
        @keyframes alert-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,.6); }
          50% { box-shadow: 0 0 0 14px rgba(239,68,68,0); }
        }
        .mega-shake { animation: mega-shake 2.4s ease-in-out infinite; }
        .alert-glow { animation: alert-glow 1.8s ease-out infinite; }
      `}</style>
    </div>
  );
};

export default ElectroHuilaIntranet;
