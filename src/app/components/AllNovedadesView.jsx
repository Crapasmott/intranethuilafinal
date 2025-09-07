import React from 'react';
import { useAllNoticias } from '../hooks/useWordPress';
import {
  ChevronRight,
  Newspaper,
  Eye,
  ThumbsUp,
  Share2,
  Clock,
  RefreshCw
} from 'lucide-react';

// COMPONENTE PARA MOSTRAR TODAS LAS NOVEDADES - SIN ESTADÍSTICAS
const AllNovedadesView = ({ onBack, onSelectArticle }) => {
  const { noticias: allNews, loading, hasMore, loadMore } = useAllNoticias(12);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
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
          
          <div className="w-32"></div> {/* Spacer para centrar el título */}
        </div>

        {/* Grid de Novedades - DIRECTO SIN ESTADÍSTICAS */}
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Loading State */}
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

        {/* Botón Cargar Más */}
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

        {/* Sin más noticias */}
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

        {/* Estado vacío */}
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
      `}</style>
    </div>
  );
};

export default AllNovedadesView;