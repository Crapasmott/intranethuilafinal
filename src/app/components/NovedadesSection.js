// 1. PASO 1: Agregar este hook personalizado al inicio de tu archivo
// (Después de los imports, antes del componente principal)

import { useState, useEffect } from 'react';

// Hook personalizado para obtener posts de WordPress
const useWordPressAPI = (apiUrl, options = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Construir URL con parámetros
        const params = new URLSearchParams({
          per_page: options.perPage || 6,
          page: options.page || 1,
          orderby: options.orderBy || 'date',
          order: options.order || 'desc',
          status: 'publish',
          ...options.extraParams
        });
        
        const response = await fetch(`${apiUrl}?${params}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
        
      } catch (err) {
        console.error('Error fetching WordPress posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (apiUrl) {
      fetchPosts();
    }
  }, [apiUrl, options.perPage, options.page]);

  return { posts, loading, error, refetch: () => fetchPosts() };
};

// 2. PASO 2: Componente Novedades (agregar esto a tu código principal)
const NovedadesSection = () => {
  // Configuración de la API de WordPress de ElectroHuila
  const API_BASE_URL = 'https://electrohuila.net/wp-json/wp/v2/posts';
  
  // Usar el hook para obtener los posts
  const { posts, loading, error } = useWordPressAPI(API_BASE_URL, {
    perPage: 6, // Número de novedades a mostrar
    orderBy: 'date',
    order: 'desc'
  });

  // Función para extraer imagen destacada
  const getPostImage = (post) => {
    // Si tiene imagen destacada en _embedded
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // Imagen por defecto si no tiene
    return './images/default-news.jpg';
  };

  // Función para limpiar contenido HTML
  const cleanContent = (htmlContent, maxLength = 150) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const textContent = div.textContent || div.innerText || '';
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...' 
      : textContent;
  };

  // Función para formatear fecha
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'America/Bogota'
    };
    return new Date(dateString).toLocaleDateString('es-CO', options);
  };

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Novedades ElectroHuila
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Novedades ElectroHuila
        </h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
          <p>⚠️ No se pudieron cargar las novedades</p>
          <p className="text-sm mt-1">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          📰 Novedades ElectroHuila
        </h2>
        <a 
          href="https://electrohuila.net/noticias" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
        >
          Ver todas →
        </a>
      </div>

      {/* Grid de Novedades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden 
                     hover:shadow-lg transition-all duration-300 hover:scale-[1.02]
                     cursor-pointer group"
            onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
          >
            {/* Imagen */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <img
                src={getPostImage(post)}
                alt={post.title.rendered}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = '/images/default-news.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Contenido */}
            <div className="p-5">
              {/* Fecha */}
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </div>

              {/* Título */}
              <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {post.title.rendered}
              </h3>

              {/* Excerpt/Contenido */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt?.rendered 
                  ? cleanContent(post.excerpt.rendered, 120)
                  : cleanContent(post.content.rendered, 120)
                }
              </p>

              {/* CTA */}
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800">
                <span>Leer más</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer con link a más noticias */}
      <div className="text-center mt-8">
        <a
          href="https://electrohuila.net/noticias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Ver todas las novedades
        </a>
      </div>
    </div>
  );
};

// 3. PASO 3: Agregar estilos CSS adicionales (agregar al final de tu componente)
const additionalStyles = `
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
`;

export { NovedadesSection, useWordPressAPI };