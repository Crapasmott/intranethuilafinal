'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import NosotrosSection from './NosotrosSection';
import MaestrosSection from './MaestrosSection';
import GestionJuridicaSection from './GestionJuridicaSection';
import SigSection from './SigSection';
import SgcSection from './SgcSection';
import ReporteCarteraSection from './ReporteCarteraSection';
import ModernPopup from './ModernPopup';
import { useNoticias, useAllNoticias, useTalentoHumano, useGaleriaEventos, useAllTalentoHumano, useAllGaleriaEventos, useSocialMediaPosts, usePopupNotifications } from '../hooks/useWordPress';
import SocialWidgetsEmbed from './SocialWidgetsEmbed';

import {
  Bell,
  Search,
  Calendar,
  Heart,
  Users,
  ChevronRight,
  ChevronDown,
  Download,
  Shield,
  Zap,
  X,
  ExternalLink,
  RefreshCw,
  BookOpen,
  Star,
  Grid3X3,
  Newspaper,
  Mail,
  Globe,
  BarChart3,
  Headphones,
  Settings,
  Database,
  Activity,
  FileText,
  HardDrive,
  Monitor,
  Wifi,
  Server,
  Smartphone,
  Laptop,
  Printer,
  Camera,
  MessageSquare,
  Router,
  Facebook,
  Instagram,
  Youtube,
  Eye,
  ThumbsUp,
  Share2,
  Clock,
  MessageCircle
} from 'lucide-react';

// COMPONENTE PARA VISTA DETALLADA DE ARTÍCULO
const ArticleDetailView = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          <ChevronRight className="w-5 h-5 transform rotate-180" />
          <span>Volver a Novedades</span>
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-gray-500">{article.date}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Compartir</span>
                  </button>
                </div>

                <div className="text-sm text-gray-500">
                  Publicado en ElectroHuila.net
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
// COMPONENTE PARA MOSTRAR TODAS LAS NOVEDADES
const AllNovedadesView = ({ onBack, onSelectArticle }) => {
  const { noticias: allNews, loading, hasMore, loadMore } = useAllNoticias(12);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ChevronRight className="w-5 h-5 transform rotate-180" />
            <span>Volver al Inicio</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Todas las Novedades</h1>
            <p className="text-gray-600">Mantente informado con las últimas novedades de ElectroHuila</p>
          </div>
          
          <div className="w-32"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {allNews.map((article, index) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {article.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.date}
                  </span>
                  <span className="text-xs text-blue-500 font-medium">
                    {Math.floor(Math.random() * 5) + 2} min lectura
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 500) + 100}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                  </div>
                  
                  <div className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Leer</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="bg-gray-200 animate-pulse h-48"></div>
                <div className="p-6">
                  <div className="bg-gray-200 animate-pulse h-4 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-6 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-4 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && !loading && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Cargar Más Novedades</span>
            </button>
          </div>
        )}

        {!hasMore && !loading && allNews.length > 0 && (
          <div className="text-center py-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Has visto todo!</h3>
              <p className="text-gray-600">Has revisado todas las novedades disponibles</p>
            </div>
          </div>
        )}

        {!loading && allNews.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No hay novedades disponibles</h3>
              <p className="text-gray-600 mb-6">Pronto publicaremos nuevas novedades para mantenerte informado</p>
              <button
                onClick={onBack}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// COMPONENTE PARA TODAS LAS PUBLICACIONES DE TALENTO HUMANO
const AllTalentoHumanoView = ({ onBack, onSelectArticle }) => {
  const { noticias: allTalento, loading, hasMore, loadMore } = useAllTalentoHumano(12);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ChevronRight className="w-5 h-5 transform rotate-180" />
            <span>Volver al Inicio</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Talento Humano</h1>
            <p className="text-gray-600">Conoce las novedades sobre nuestro equipo de trabajo</p>
          </div>
          
          <div className="w-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {allTalento.map((article, index) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {article.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.date}
                  </span>
                  <span className="text-xs text-blue-500 font-medium">
                    {Math.floor(Math.random() * 5) + 2} min lectura
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 500) + 100}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                  </div>
                  
                  <div className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Leer</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="bg-gray-200 animate-pulse h-48"></div>
                <div className="p-6">
                  <div className="bg-gray-200 animate-pulse h-4 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-6 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-4 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && !loading && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Cargar Más Publicaciones</span>
            </button>
          </div>
        )}

        {!hasMore && !loading && allTalento.length > 0 && (
          <div className="text-center py-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Has visto todo!</h3>
              <p className="text-gray-600">Has revisado todas las publicaciones de Talento Humano</p>
            </div>
          </div>
        )}

        {!loading && allTalento.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No hay publicaciones disponibles</h3>
              <p className="text-gray-600 mb-6">Pronto publicaremos nuevas novedades de Talento Humano</p>
              <button
                onClick={onBack}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// COMPONENTE PARA TODAS LAS PUBLICACIONES DE GALERÍA DE EVENTOS
const AllGaleriaEventosView = ({ onBack, onSelectArticle }) => {
  const { noticias: allEventos, loading, hasMore, loadMore } = useAllGaleriaEventos(12);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ChevronRight className="w-5 h-5 transform rotate-180" />
            <span>Volver al Inicio</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Galería de Eventos</h1>
            <p className="text-gray-600">Revive los mejores momentos de nuestros eventos</p>
          </div>
          
          <div className="w-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {allEventos.map((article, index) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {article.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.date}
                  </span>
                  <span className="text-xs text-purple-500 font-medium">
                    Evento
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 text-lg leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 800) + 200}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 80) + 20}</span>
                    </div>
                  </div>
                  
                  <div className="text-purple-500 hover:text-purple-600 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Ver</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="bg-gray-200 animate-pulse h-48"></div>
                <div className="p-6">
                  <div className="bg-gray-200 animate-pulse h-4 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-6 rounded mb-3"></div>
                  <div className="bg-gray-200 animate-pulse h-4 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && !loading && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Cargar Más Eventos</span>
            </button>
          </div>
        )}

        {!hasMore && !loading && allEventos.length > 0 && (
          <div className="text-center py-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Has visto todo!</h3>
              <p className="text-gray-600">Has revisado todos los eventos disponibles</p>
            </div>
          </div>
        )}

        {!loading && allEventos.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 max-w-md mx-auto">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No hay eventos disponibles</h3>
              <p className="text-gray-600 mb-6">Pronto publicaremos nuevos eventos y galerías</p>
              <button
                onClick={onBack}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



const ElectroHuilaIntranet = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentDate, setCurrentDate] = useState('');
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [animationKey, setAnimationKey] = useState(0);
  const [expandedSystemCard, setExpandedSystemCard] = useState(null);
  const [animatingCards, setAnimatingCards] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

const [manualesOficina, setManualesOficina] = useState([
  { 
    id: 1, 
    titulo: 'Manual de Usuario', 
    url: './documentos/manuales/manual-usuario.pdf',
    descripcion: 'Manual para usuarios finales' 
  },
  { 
    id: 2, 
    titulo: 'Manual Técnico', 
    url: './documentos/manuales/manual-tecnico.pdf',
    descripcion: 'Documentación técnica avanzada' 
  },
  { 
    id: 3, 
    titulo: 'Guía de Instalación', 
    url: './documentos/manuales/guia-instalacion.pdf',
    descripcion: 'Pasos para instalación de sistemas' 
  },
  { 
    id: 4, 
    titulo: 'Manual de Configuración', 
    url: './documentos/manuales/manual-configuracion.pdf',
    descripcion: 'Configuración de parámetros' 
  }
]);

const [editingManual, setEditingManual] = useState(null);
const [showManualesEditor, setShowManualesEditor] = useState(false);

const handleDownloadManual = (manual) => {
  if (manual.url && manual.url.trim() !== '') {
    window.open(manual.url, '_blank');
  } else {
    alert(`El manual "${manual.titulo}" no tiene URL configurada`);
  }
};

const handleEditManual = (manual) => {
  setEditingManual({...manual});
};

const handleSaveManual = () => {
  if (!editingManual.titulo.trim()) {
    alert('El título del manual es obligatorio');
    return;
  }
  
  setManualesOficina(prev => 
    prev.map(manual => 
      manual.id === editingManual.id ? editingManual : manual
    )
  );
  setEditingManual(null);
};

const handleCancelEdit = () => {
  setEditingManual(null);
};

const handleAddManual = () => {
  const newId = Math.max(...manualesOficina.map(m => m.id)) + 1;
  const newManual = {
    id: newId,
    titulo: 'Nuevo Manual',
    url: './documentos/manuales/nuevo-manual.pdf',
    descripcion: 'Descripción del nuevo manual'
  };
  setManualesOficina(prev => [...prev, newManual]);
  setEditingManual(newManual);
};

const handleDeleteManual = (manualId) => {
  if (confirm('¿Estás seguro de que quieres eliminar este manual?')) {
    setManualesOficina(prev => prev.filter(m => m.id !== manualId));
  }
};

  // INTEGRACIÓN DE LA API - HOOK PARA NOTICIAS
const { noticias: news, loading: loadingNoticias } = useNoticias();
const { noticias: talentoHumano, loading: loadingTalento } = useTalentoHumano(3);
const { noticias: galeriaEventos, loading: loadingGaleria } = useGaleriaEventos(3);
// NUEVO HOOK PARA REDES SOCIALES
const { posts: socialPosts, loading: loadingSocialPosts } = useSocialMediaPosts(3);
const { notifications: popupNotifications, loading: loadingPopup } = usePopupNotifications(5);


  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    setCurrentDate(today.toLocaleDateString('es-ES', options));
  }, []);

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedArticle(null);
  };

  // FUNCIÓN PARA MANEJAR CLIC EN NOTICIA
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setCurrentView('article-detail');
  };

  // Notificaciones
  const notifications = [
    {
      id: 1,
      type: 'obituario',
      title: 'CONDOLENCIA',
      subtitle: 'Justina Celis Silva',
      description: 'Madre de nuestro compañero Edgar Cuenca Celis',
      date: '24 de febrero de 2025',
      icon: Heart,
      color: 'bg-gray-800',
      textColor: 'text-white',
      image: '/images/n-0.jpg',
      hasImage: true
    },
    {
      id: 2,
      type: 'cumpleanos',
      title: 'Cumpleaños Familia ElectroHuila',
      subtitle: 'Celebramos contigo',
      description: 'Hoy cumple años nuestro compañero Carlos Martínez del área técnica',
      date: new Date().toLocaleDateString('es-ES'),
      icon: Calendar,
      color: 'bg-green-500',
      textColor: 'text-white',
      image: '/images/n-1.jpg',
      hasImage: true
    },
    {
      id: 3,
      type: 'evento',
      title: 'Próximos Eventos ElectroHuila',
      subtitle: 'Capacitación Virtual',
      description: 'Jornada de capacitación en seguridad industrial - 28 de Mayo',
      date: '28 de mayo de 2025',
      icon: Users,
      color: 'bg-blue-600',
      textColor: 'text-white',
      image: '/images/n-3.jpg',
      hasImage: true
    }
  ];

  // Rotación automática de notificaciones
  useEffect(() => {
    if (showNotifications && notifications.length > 1) {
      const interval = setInterval(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showNotifications, notifications.length]);

  // Activar popup automáticamente después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotifications(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // TODAS LAS 29 APLICACIONES
  const allApplications = [
    {
      name: 'Comercial Maps',
      desc: 'Comercial Maps',
      iconPng: './images/iconos/map.png',
      url: 'https://backapp.electrohuila.com.co:8071/maps/comercial/mapa.php',
      category: 'Comercial',
      color: 'from-green-500 to-green-600',
      featured: false
    },
    {
      name: 'Calidad del Servicio',
      desc: 'Calidad del Servicio',
      iconPng: './images/iconos/encendiendo.png',
      url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Operacion/CALIDAD%20DEL%20SERVICIO/Forms/AllItems.aspx',
      category: ' Servicio',
      color: 'from-blue-500 to-blue-600',
      featured: false
    },
    {
      name: 'Control de Pérdidas',
      desc: 'Control de Pérdidas',
      iconPng: './images/iconos/analitico.png',
      url: 'http://control_perdidas.electrohuila.co:3001/login',
      category: 'Control ',
      color: 'from-red-500 to-orange-500',
      featured: false
    },
    {
      name: 'Electrohuila Mapas',
      desc: 'Electrohuila Mapas',
      iconPng: './images/iconos/ubicacion.png',
      url: 'https://backapp.electrohuila.com.co:8071/maps/login.php',
      category: 'Mapas',
      color: 'from-green-500 to-teal-500',
      featured: false
    },
    {
      name: 'ERP Electrohuila',
      desc: 'ERP Electrohuila',
      iconPng: './images/iconos/ERPLOGO3.png',
      url: 'http://192.9.200.196/erp/registro2.asp',
      category: 'Facturación Masiva',
      color: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      name: 'Facturación Masiva',
      desc: 'Facturación Masiva',
      iconPng: './images/iconos/recibo.png',
      url: 'https://enlinea.electrohuila.com.co/invoice-massive/#/login',
      category: 'Facturación',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      name: ' Nómina Designer',
      desc: 'Gestión Integral en RH y Nómina',
      iconPng: './images/iconos/gestion-del-talento.png',
      url: 'http://10.50.35.27:7778/forms/frmservlet?form=INICIORED.fmx',
      category: 'Gestión ',
      color: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      name: 'Gestión Jurídica',
      desc: 'Normatividad, códigos y documentos legales',
      iconPng: './images/iconos/libro-de-leyes.png',
      url: 'gestion-juridica',
      category: 'Legal',
      color: 'from-blue-500 to-indigo-600',
      featured: false
    },
    {
      name: 'Gestión Transversal',
      desc: 'Gestión Transversal',
      iconPng: './images/iconos/portapapeles.png',
      url: 'https://enlinea.electrohuila.com.co/gestion-transversal/#/login',
      category: 'Gestión ',
      color: 'from-indigo-500 to-blue-500',
      featured: false
    },
    {
      name: 'Inventario TIC EH',
      desc: 'Inventario TIC EH',
      iconPng: './images/iconos/inventario.png',
      url: 'http://192.9.200.134:6969/inventario',
      category: 'Gestión ',
      color: 'from-indigo-500 to-blue-500',
      featured: false
    },
    {
      name: 'KIOSKO ',
      desc: 'KIOSKO ',
      iconPng: './images/iconos/nomina-eh.png',
      url: 'http://10.50.35.27:8080/KioscoDesignerRHN-war/?grupo=GrupoEmpresarial1',
      category: 'KIOSKO  ',
      color: 'from-blue-500 to-indigo-500',
      featured: false
    },
    {
      name: 'Notificaciones Web',
      desc: 'Notificaciones Web',
      iconPng: './images/iconos/notificacion.png',
      url: 'https://enlinea.electrohuila.com.co/notificacion-web/?key=4Grak2M6ftOIJbvypC8uVNItS',
      category: 'Notificaciones',
      color: 'from-purple-500 to-blue-500',
      featured: false
    },
    {
      name: 'Página Web Principal',
      desc: 'Página Web Principal',
      iconPng: './images/iconos/web-eh.png',
      url: 'https://electrohuila.net',
      category: 'Web Principal',
      color: 'from-green-500 to-green-600',
      featured: false
    },
    {
      name: 'Plataforma Para Procesos provisionados',
      desc: 'Plataforma Para Procesos provisionados',
      iconPng: './images/iconos/computadora.png',
      url: 'https://qa-enlinea.electrohuila.com.co/juridica/',
      category: 'Plataforma ',
      color: 'from-blue-500 to-blue-600',
      featured: false
    },
    {
      name: 'Portal Interacción Corporativa',
      desc: 'Portal Interacción Corporativa',
      iconPng: '/images/iconos/reunion.png',
      url: 'https://electrohuilaco.sharepoint.com/Estrategico/Documentos%20compartidos/P%C3%A1gina%20principal%20PIC.pdf',
      category: 'Portal',
      color: 'from-red-500 to-orange-500',
      featured: false
    },
    {
      name: 'Reporte Cartera Comercial ',
      desc: 'Power BI',
      iconPng: './images/iconos/informe-de-ingresos.png',
      url: 'reporte-cartera',
      category: 'Power BI',
      color: 'from-green-500 to-teal-500',
      featured: false
    },
    {
      name: 'Reporte Presupuesto ',
      desc: 'Power BI',
      iconPng: './images/iconos/estado-de-resultados.png',
      url: 'https://app.powerbi.com/Redirect?action=OpenLink&linkId=w9XvUevexO&ctid=bff55112-201c-40fb-ae69-a53c8ab06449&pbi_source=linkShare',
      category: 'Power BI',
      color: 'from-green-500 to-teal-500',
      featured: false
    },
    {
      name: 'Seguridad Transversal',
      desc: 'Seguridad Transversal',
      iconPng: './images/iconos/proteger.png',
      url: 'https://enlinea.electrohuila.com.co/transverse-security/#/login',
      category: 'Seguridad',
      color: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      name: 'SIMAD',
      desc: 'SIMAD',
      iconPng: './images/iconos/SIMAD.png',
      url: 'http://simad.electrohuila.com.co/',
      category: 'SIMAD',
      color: 'from-yellow-500 to-orange-500',
      featured: true
    },
    {
      name: 'Sistema Integrado de Gestión',
      desc: 'Sistema Integrado de Gestión',
      iconPng: './images/iconos/SIG.png',
      url: 'sig',
      category: 'Sistema',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'Sistema Local de Consignas',
      desc: 'Sistema Local de Consignas',
      iconPng: './images/iconos/SLlogo.png',
      url: 'https://enlinea.electrohuila.com.co/consignas/#/',
      category: 'Sistema',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'Control Permiso Ambiental',
      desc: 'Control Permiso Ambiental',
      iconPng: './images/iconos/ambientalismo.png',
      url: 'https://enlinea.electrohuila.com.co/control-permiso-ambiental/',
      category: 'Control ',
      color: 'from-indigo-500 to-blue-500',
      featured: false
    },
    {
      name: 'Web SAMI',
      desc: 'Web SAMI',
      iconPng: './images/iconos/sami.png',
      url: 'http://sami.electrohuila.co:3001/login',
      category: 'SAMI',
      color: 'from-purple-600 to-blue-600',
      featured: true
    },
    {
      name: 'Cuentas Nuevas',
      desc: 'Cuentas Nuevas',
      iconPng: './images/iconos/datos.png',
      url: 'https://enlinea.electrohuila.com.co/cuentas-nuevas/#/',
      category: 'Cuentas',
      color: 'from-purple-500 to-blue-500',
      featured: false
    },
    {
      name: 'EH-Redemtor v1.0',
      desc: 'EH-Redemtor v1.0',
      iconPng: './images/iconos/LogoNBG-400x400.png',
      url: 'https://backalt.electrohuila.com.co:9071/ehproyectos',
      category: 'EH-Redemtor',
      color: 'from-green-500 to-green-600',
      featured: false
    },
    {
      name: 'Reporte Recaudo SIEC',
      desc: 'Reporte Recaudo SIEC',
      iconPng: './images/iconos/informe-de-venta.png',
      url: 'https://app.powerbi.com/groups/me/reports/f2d6f80f-551b-494e-9766-543c78d78230/ReportSection?experience=power-bi',
      category: 'Reporte',
      color: 'from-red-500 to-orange-500',
      featured: false
    },
    {
      name: 'Mesa de Servicios',
      desc: 'Mesa de Servicios',
      iconPng: '/images/iconos/servicio-al-cliente.png',
      url: 'https://enlinea.electrohuila.com.co/mesa-servicio/#/dashboard-gestor',
      category: 'Servicios',
      color: 'from-yellow-500 to-orange-500',
      featured: true
    },
    {
      name: 'Consulta Comercial',
      desc: 'Consulta Comercial',
      iconPng: './images/iconos/consultacomercial.png',
      url: 'https://backapp.electrohuila.com.co:8071/Comercial/',
      category: 'Servicios',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      name: 'Facturación Electrónica',
      desc: 'Facturación Electrónica',
      iconPng: './images/iconos/cuenta.png',
      url: 'http://192.9.200.137:8080/fe/',
      category: 'Servicios',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    },
    {
      name: 'Portal Office 365',
      desc: 'Portal Office 365',
      iconPng: './images/iconos/microsoft-outlook.png',
      url: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638918316043223777.Nzk2M2VkMjgtZjIzNi00MTBlLWE4NzYtMTc5ZGExYjQ5NGEwYmNkZjFiYTctNjgyZC00Mzg2LWJlNTAtNzZkMWZjYTM2OTY2&ui_locales=es-CO&mkt=es-CO&client-request-id=8411dbc8-2caf-4d17-9cdb-0801a0c8209e&state=xuM9Zl99kqs1EvpcCf9tV-4Zi-Ys9WCbinkqtKlm-L62iczHw2mOQn19XPYzdRgqBk5LD612qtgLNuZqMDnhuLh0VYDFRHjPSArWEQ7dD85VnLC70__zWr596neD4Jt-Xo_13u-5t0XfbpO0uBHhx0bCM0xV_sBX7VVXcUSY7D6sx8Sqw3gLBLzzOrUbQ7Jpr-mboStO5O7tKCYorYihtawhmAFI7RwweRhEeqFXE84whvl1zbIP7ayxZG4FjSYnyg-XEtbycgWWTJGKHikqv5sG7KVBzs7_BBuQzARkxsWWm7u5NFG6seaq5D5FRhp13BUWKwBqCwlHOdXLzAqyHnKCC0OmHN_TP5zfBbXG386_X-m9jRzgXpYfRl9qVFb8JQ4Cvs0aunfaKBp3v2K7FRGAEEgtNwzJSo2F3XFIrsHWNvWIQ0LMz5JA0hip9BaN&x-client-SKU=ID_NET8_0&x-client-ver=8.5.0.0&sso_reload=true',
      category: 'Servicios',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    }
  ];

  // Enlaces rápidos
  const quickLinks = [
    {
      name: 'Calendario Tributario 2024',
      icon: Calendar,
      url: './documentos/calendarios tributarios/PRESENTACION-CRONOGRAMA-IMPUESTOS.xlsx',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Calendario Tributario 2025',
      icon: Calendar,
      url: './documentos/calendarios tributarios/CRONOGRAMA-2025.xlsx',
      bgColor: 'bg-blue-500'
    }
  ];

  // Funciones auxiliares
  const getFilteredApps = () => {
    let filtered = allApplications;

    if (searchTerm) {
      filtered = filtered.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (viewMode === 'featured') {
      filtered = filtered.filter(app => app.featured);
    }

    return filtered;
  };

  const filteredApps = getFilteredApps();

  const changeView = (newViewMode, category = '') => {
    setViewMode(newViewMode);
    setSelectedCategory(category);
    setAnimationKey(prev => prev + 1);
  };

  const openApp = (url) => {
    if (url === 'gestion-juridica') {
      setCurrentView('gestion-juridica');
      return;
    }
    if (url === 'sig') {
      setCurrentView('sig');
      return;
    }
    if (url === 'reporte-cartera') {
      setCurrentView('reporte-cartera');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleSystemCard = (cardId) => {
    setExpandedSystemCard(expandedSystemCard === cardId ? null : cardId);
  };
  // RENDERIZAR VISTA ACTUAL
  const renderCurrentView = () => {
    if (currentView === 'nosotros') {
      return <NosotrosSection onBack={handleBackToHome} />;
    }
    if (currentView === 'maestros') {
      return <MaestrosSection onBack={handleBackToHome} />;
    }
    if (currentView === 'gestion-juridica') {
      return <GestionJuridicaSection onBack={handleBackToHome} />;
    }
    if (currentView === 'sig') {
      return <SigSection onBack={handleBackToHome} onNavigateToSgc={() => setCurrentView('sgc')} />;
    }
    if (currentView === 'sgc') {
      return <SgcSection onBack={() => setCurrentView('sig')} />;
    }
    if (currentView === 'reporte-cartera') {
      return <ReporteCarteraSection onBack={handleBackToHome} />;
    }
    
    // VISTA PARA ARTÍCULO INDIVIDUAL
    if (currentView === 'article-detail' && selectedArticle) {
      return <ArticleDetailView article={selectedArticle} onBack={handleBackToHome} />;
    }

    // NUEVA VISTA PARA TODAS LAS NOVEDADES
    if (currentView === 'all-novedades') {
      return <AllNovedadesView onBack={handleBackToHome} onSelectArticle={handleArticleClick} />;
    }
   // Agrega estos dos casos ANTES del return del main:

    if (currentView === 'all-talento-humano') {
  return <AllTalentoHumanoView onBack={handleBackToHome} onSelectArticle={handleArticleClick} />;
    }

    if (currentView === 'all-galeria-eventos') {
  return <AllGaleriaEventosView onBack={handleBackToHome} onSelectArticle={handleArticleClick} />;
    }
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aplicaciones</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Accede rápidamente a todas las herramientas que necesitas para tu trabajo diario
          </p>
        </div>

        {/* Grid de Aplicaciones */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="px-4 py-2 rounded-lg text-white font-semibold mr-4 bg-blue-500">
                Aplicaciones
              </div>
              <span className="text-sm text-gray-500">
                {filteredApps.length} aplicaciones disponibles
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeView('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'all'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Grid3X3 className="w-4 h-4 inline mr-2" />
                Todas
              </button>
              <button
                onClick={() => changeView('featured')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'featured'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Star className="w-4 h-4 inline mr-2" />
                Principales
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredApps.map((app, index) => (
              <div
                key={`${app.name}-${index}`}
                onClick={() => openApp(app.url)}
                className="relative group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
              >
                {app.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    ⭐ Principal
                  </div>
                )}

                <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={app.iconPng}
                    alt={app.name}
                    className="w-12 h-12 object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-2xl filter drop-shadow-sm" style={{ display: 'none' }}>📊</span>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 leading-tight">
                    {app.desc}
                  </p>
                  <span className="bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-700 text-xs px-2 py-1 rounded-full font-medium transition-colors">
                    {app.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enlaces Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => openApp(link.url)}
                className={`${link.bgColor} hover:bg-blue-600 text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-2 text-center min-h-[100px]`}
              >
                <link.icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-sm leading-tight">{link.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sección Novedades - BOTÓN ACTUALIZADO */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Novedades</h2>
            <button
              onClick={() => setCurrentView('all-novedades')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Newspaper className="w-4 h-4" />
              <span>Ver Todas las Novedades</span>
            </button>
          </div>
          
          {loadingNoticias ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article, index) => (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1">
                        <span>Leer más</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sección Talento Humano */}
<div className="mb-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Talento Humano</h2>
    <button
      onClick={() => setCurrentView('all-talento-humano')}
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
    >
      <Users className="w-4 h-4" />
      <span>Ver Todas las Publicaciones</span>
    </button>
  </div>
  
  {loadingTalento ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64"></div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talentoHumano.map((article, index) => (
        <div
          key={article.id}
          onClick={() => handleArticleClick(article)}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center space-x-1">
                <span>Leer más</span>
                <ChevronRight className="w-4 h-4" />
              </span>
              <Users className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

{/* Sección Galería de Eventos */}
<div className="mb-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Galería de Eventos</h2>
    <button
      onClick={() => setCurrentView('all-galeria-eventos')}
      className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
    >
      <Camera className="w-4 h-4" />
      <span>Ver Todos los Eventos</span>
    </button>
  </div>
  
  {loadingGaleria ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-64"></div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galeriaEventos.map((article, index) => (
        <div
          key={article.id}
          onClick={() => handleArticleClick(article)}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-purple-500 hover:text-purple-600 font-medium text-sm flex items-center space-x-1">
                <span>Ver evento</span>
                <ChevronRight className="w-4 h-4" />
              </span>
              <Camera className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
<div className="mb-16">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Oficina de Sistemas</h2>
    
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow group">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
            <Download className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Descargar Manuales</h3>
            <p className="text-blue-100 text-sm">Documentación técnica</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {manualesOficina.map((manual) => (
            <div key={manual.id} className="border border-gray-200 rounded-lg p-3">
              {editingManual && editingManual.id === manual.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editingManual.titulo}
                    onChange={(e) => setEditingManual({...editingManual, titulo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-medium"
                    placeholder="Título del manual"
                  />
                  <input
                    type="text"
                    value={editingManual.url}
                    onChange={(e) => setEditingManual({...editingManual, url: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs"
                    placeholder="/documentos/manuales/archivo.pdf"
                  />
                  <input
                    type="text"
                    value={editingManual.descripcion}
                    onChange={(e) => setEditingManual({...editingManual, descripcion: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs"
                    placeholder="Descripción del manual"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveManual}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs font-medium"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-gray-900 text-sm">{manual.titulo}</span>
                    </div>
                    <div className="flex space-x-1">
                      <button 
                        onClick={() => handleDownloadManual(manual)}
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium px-2 py-1 rounded hover:bg-blue-50"
                      >
                        Descargar
                      </button>
                      {showManualesEditor && (
                        <>
                          <button
                            onClick={() => handleEditManual(manual)}
                            className="text-yellow-600 hover:text-yellow-800 text-xs px-2 py-1 rounded hover:bg-yellow-50"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeleteManual(manual.id)}
                            className="text-red-600 hover:text-red-800 text-xs px-2 py-1 rounded hover:bg-red-50"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs">{manual.descripcion}</p>
                  {showManualesEditor && (
                    <p className="text-gray-500 text-xs mt-1 font-mono">{manual.url}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {showManualesEditor && (
          <div className="mt-4">
            <button
              onClick={handleAddManual}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border-2 border-dashed border-gray-300 hover:border-gray-400"
            >
              + Agregar Manual
            </button>
          </div>
        )}
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-2">
            <Settings className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-blue-700 text-xs">
                {showManualesEditor ? 
                  'Modo edición: Puedes modificar títulos, URLs y descripciones de los manuales.' :
                  'Los manuales se actualizarán periódicamente. Contacta a Sistemas para soporte.'
                }
              </p>
              {showManualesEditor && (
                <p className="text-blue-600 text-xs mt-1 font-medium">
                  Sube tus PDFs a la carpeta /public/documentos/manuales/
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
     {/* Sección Redes Sociales */}
<SocialWidgetsEmbed />
  

      </main>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={handleNavigation}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {renderCurrentView()}
      
     <ModernPopup 
  isVisible={showNotifications}
  onClose={() => setShowNotifications(false)}
  notifications={popupNotifications}  // ✅ Esta es la variable correcta del hook
/>
<footer className="bg-white border-t border-gray-200 mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <img 
          src="/images/iconos/electro.png" 
          alt="ElectroHuila Logo" 
          className="w-6 h-6 object-contain"
        />
        <span className="text-gray-600 text-sm">© 2025 ElectroHuila S.A. E.S.P.</span>
      </div>
      <div className="flex items-center space-x-6 text-sm text-gray-600">
        <button className="hover:text-gray-900 transition-colors">Soporte</button>
        <button className="hover:text-gray-900 transition-colors">Términos</button>
        <button className="hover:text-gray-900 transition-colors">Privacidad</button>
      </div>
    </div>
  </div>
</footer>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .article-content h1, .article-content h2, .article-content h3 {
          font-weight: bold;
          margin: 1.5rem 0 1rem 0;
          color: #1f2937;
        }

        .article-content h1 {
          font-size: 2rem;
        }

        .article-content h2 {
          font-size: 1.5rem;
        }

        .article-content h3 {
          font-size: 1.25rem;
        }

        .article-content p {
          margin: 1rem 0;
          line-height: 1.7;
        }

        .article-content ul, .article-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }

        .article-content li {
          margin: 0.5rem 0;
        }

        .article-content img {
          max-width: 100%;
          height: auto;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }

        .article-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .article-content a {
          color: #3b82f6;
          text-decoration: underline;
        }

        .article-content a:hover {
          color: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default ElectroHuilaIntranet;