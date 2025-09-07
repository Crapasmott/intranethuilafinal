'use client';

import { useState, useEffect } from 'react';


// HOOK PARA OBTENER NOTICIAS DEL BLOG (3 PARA HOME)
export const useNoticias = (limit = 3) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        
        // Obtener ID de la categoría "novedades"
        const categoryResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/categories?slug=novedades`);
        const categories = await categoryResponse.json();

        if (categories.length === 0) {
          setNoticias(getStaticNoticias());
          return;
        }

        const categoryId = categories[0].id;
        
        // Obtener SOLO posts de la categoría "novedades"
        const response = await fetch(`https://electrohuila.net/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed=true&orderby=date&order=desc`);
        
        if (!response.ok) {
          throw new Error('Error al obtener posts');
        }

        const wpPosts = await response.json();
        
        if (wpPosts && wpPosts.length > 0) {
          const transformedNews = wpPosts.map(post => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            content: post.content.rendered,
            date: new Date(post.date).toLocaleDateString('es-ES'),
            category: 'Novedades',
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || './images/placeholder.jpg',
            url: `news/${post.id}`
          }));
          
          setNoticias(transformedNews);
        } else {
          setNoticias(getStaticNoticias());
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setNoticias(getStaticNoticias());
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [limit]);

  return { noticias, loading, error };
};

// HOOK PARA TODAS LAS NOTICIAS
export const useAllNoticias = (limit = 12) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchAllNoticias = async () => {
      try {
        setLoading(true);
       const categoryResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/categories?slug=novedades`);
const categories = await categoryResponse.json();

if (categories.length === 0) {
  const staticNews = getStaticNoticias();
  setNoticias([...staticNews, ...staticNews, ...staticNews]);
  setHasMore(false);
  return;
}

const categoryId = categories[0].id;
const response = await fetch(`https://electrohuila.net/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed=true&orderby=date&order=desc`);
        
        if (!response.ok) {
          throw new Error('Error al obtener posts');
        }

        const wpPosts = await response.json();
        
        if (wpPosts && wpPosts.length > 0) {
          const filteredPosts = wpPosts.filter(post => {
  const title = post.title.rendered.toLowerCase();
  
  // Excluir boletines
  if (title.includes('boletín') || title.includes('boletin')) {
    return false;
  }
  
  // Filtrar por categorías
  if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
    const categories = post._embedded['wp:term'][0];
    const categoryNames = categories.map(cat => cat.slug.toLowerCase());
    
    // Excluir posts de otras secciones específicas
    if (categoryNames.includes('popup-intranet') || 
        categoryNames.includes('galeria') || 
        categoryNames.includes('talento')) {
      return false;
    }
  }
  
  return true;
});
          const transformedNews = filteredPosts.slice(0, limit).map(post => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            content: post.content.rendered,
            date: new Date(post.date).toLocaleDateString('es-ES'),
            category: 'Noticias',
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || './images/placeholder.jpg',
            url: `news/${post.id}`
          }));
          
          setNoticias(transformedNews);
          setHasMore(filteredPosts.length > limit);
        } else {
          const staticNews = getStaticNoticias();
          setNoticias([...staticNews, ...staticNews, ...staticNews]);
          setHasMore(false);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        const staticNews = getStaticNoticias();
        setNoticias([...staticNews, ...staticNews, ...staticNews]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNoticias();
  }, [limit]);

  const loadMore = () => {
    // Función placeholder
  };

  return { noticias, loading, error, hasMore, loadMore };
};

// HOOK PARA NOTICIAS POR CATEGORÍA
export const useNoticiasPorCategoria = (categoria, limit = 6) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticiasPorCategoria = async () => {
      try {
        setLoading(true);
        
        const categoryResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/categories?slug=${categoria}`);
        const categories = await categoryResponse.json();
        
        if (categories.length === 0) {
          setNoticias([]);
          return;
        }
        
        const categoryId = categories[0].id;
        const postsResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed=true&orderby=date&order=desc`);
        const wpPosts = await postsResponse.json();
        
        if (wpPosts && wpPosts.length > 0) {
          const transformedNews = wpPosts.map(post => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            content: post.content.rendered,
            date: new Date(post.date).toLocaleDateString('es-ES'),
            category: categoria,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || './images/placeholder.jpg',
            url: `news/${post.id}`
          }));
          
          setNoticias(transformedNews);
        } else {
          setNoticias([]);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setNoticias([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoria) {
      fetchNoticiasPorCategoria();
    }
  }, [categoria, limit]);

  return { noticias, loading, error };
};

// HOOK PARA TODAS LAS NOTICIAS DE UNA CATEGORÍA
export const useAllNoticiasPorCategoria = (categoria, limit = 12) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchAllNoticiasPorCategoria = async () => {
      try {
        setLoading(true);
        
        const categoryResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/categories?slug=${categoria}`);
        const categories = await categoryResponse.json();
        
        if (categories.length === 0) {
          setNoticias([]);
          setHasMore(false);
          return;
        }
        
        const categoryId = categories[0].id;
        const postsResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit * 2}&_embed=true&orderby=date&order=desc`);
        const wpPosts = await postsResponse.json();
        
        if (wpPosts && wpPosts.length > 0) {
          const transformedNews = wpPosts.slice(0, limit).map(post => ({
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            content: post.content.rendered,
            date: new Date(post.date).toLocaleDateString('es-ES'),
            category: categoria,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || './images/placeholder.jpg',
            url: `news/${post.id}`
          }));
          
          setNoticias(transformedNews);
          setHasMore(wpPosts.length === limit * 2);
        } else {
          setNoticias([]);
          setHasMore(false);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setNoticias([]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    if (categoria) {
      fetchAllNoticiasPorCategoria();
    }
  }, [categoria, limit]);

  const loadMore = () => {
    // Función placeholder
  };

  return { noticias, loading, error, hasMore, loadMore };
};

// HOOKS ESPECÍFICOS
export const useTalentoHumano = (limit = 6) => {
  return useNoticiasPorCategoria('talento', limit);
};

export const useAllTalentoHumano = (limit = 12) => {
  return useAllNoticiasPorCategoria('talento', limit);
};

export const useGaleriaEventos = (limit = 6) => {
  return useNoticiasPorCategoria('galeria', limit);
};

export const useAllGaleriaEventos = (limit = 12) => {
  return useAllNoticiasPorCategoria('galeria', limit);
};

// HOOK PARA REDES SOCIALES
export const useSocialMediaPosts = (limit = 6) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialPosts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const staticPosts = [
          {
            id: 'fb-latest',
            platform: 'facebook',
            content: 'Conoce nuestros nuevos servicios de atención al cliente.',
            image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
            url: 'https://www.facebook.com/electrohuila',
            date: new Date().toLocaleDateString('es-CO'),
            likes: 45,
            comments: 8,
            icon: 'Facebook'
          },
          {
            id: 'ig-latest', 
            platform: 'instagram',
            content: 'Behind the scenes de nuestro equipo técnico.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
            url: 'https://www.instagram.com/electrohuila',
            date: new Date(Date.now() - 86400000).toLocaleDateString('es-CO'),
            likes: 132,
            comments: 12,
            type: 'IMAGE',
            icon: 'Instagram'
          },
          {
            id: 'yt-latest',
            platform: 'youtube',
            content: 'Tutorial: Cómo reportar una falla eléctrica',
            description: 'Aprende paso a paso...',
            image: 'https://images.unsplash.com/photo-1558618666-fbd01c5cd5c7?w=400&h=300&fit=crop',
            url: 'https://www.youtube.com/@electrohuila',
            date: new Date(Date.now() - 172800000).toLocaleDateString('es-CO'),
            channel: 'ElectroHuila Oficial',
            icon: 'Youtube'
          }
        ];
        
        setPosts(staticPosts.slice(0, limit));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialPosts();
  }, [limit]);

  return { posts, loading, error };
};

// HOOK PARA POPUP
export const usePopupNotifications = (limit = 5) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        
        const categoryResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/categories?slug=popup-intranet`);
        const categories = await categoryResponse.json();
        
        if (categories.length === 0) {
          setNotifications([
            {
              id: 'no-category',
              title: 'CREAR CATEGORÍA POPUP-INTRANET',
              subtitle: 'Configuración requerida',
              description: 'Ve a WordPress Admin → Entradas → Categorías → Crear nueva: "Popup Intranet" con slug "popup-intranet"',
              image: 'https://via.placeholder.com/400x600/FF9800/ffffff?text=CONFIGURAR+CATEGORIA',
              type: 'comunicado',
              date: new Date().toLocaleDateString('es-CO'),
              priority: 1
            }
          ]);
          return;
        }
        
        const categoryId = categories[0].id;
        const postsResponse = await fetch(`https://electrohuila.net/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${limit}&_embed`);
        const posts = await postsResponse.json();
        
        if (posts && posts.length > 0) {
          const formattedNotifications = posts.map(post => ({
            id: post.id,
            title: post.title.rendered,
            subtitle: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 50),
            description: post.content.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/400x600/1E40AF/ffffff?text=SIN+IMAGEN',
            type: 'comunicado',
            date: new Date(post.date).toLocaleDateString('es-CO'),
            url: post.link,
            priority: 1
          }));
          
          setNotifications(formattedNotifications);
        } else {
          setNotifications([
            {
              id: 'no-posts',
              title: 'CREAR POSTS PARA POPUP',
              subtitle: 'Sin contenido disponible',
              description: 'Ve a WordPress Admin → Entradas → Agregar nueva. Asigna la categoría "Popup Intranet" y publica.',
              image: 'https://via.placeholder.com/400x600/2196F3/ffffff?text=AGREGAR+POSTS',
              type: 'comunicado',
              date: new Date().toLocaleDateString('es-CO'),
              priority: 1
            }
          ]);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setNotifications([
          {
            id: 'error-connection',
            title: 'ERROR DE CONEXIÓN',
            subtitle: 'WordPress no responde',
            description: 'No se pudo conectar con WordPress.',
            image: 'https://via.placeholder.com/400x600/F44336/ffffff?text=ERROR+CONEXION',
            type: 'comunicado',
            date: new Date().toLocaleDateString('es-CO'),
            priority: 1
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [limit]);

  return { notifications, loading, error };
};

// DATOS ESTÁTICOS DE RESPALDO
const getStaticNoticias = () => [
  {
    id: 1,
    title: 'Nueva Infraestructura Eléctrica en Neiva',
    excerpt: 'ElectroHuila invierte en modernización de la red eléctrica para mejorar el servicio...',
    content: '<p>ElectroHuila S.A. E.S.P. ha anunciado una importante inversión en modernización.</p>',
    date: '25 de Mayo, 2025',
    image: './images/1.jpg',
    category: 'Infraestructura',
    url: 'news/1'
  },
  {
    id: 2,
    title: 'Programa de Sostenibilidad Ambiental',
    excerpt: 'Nuevas iniciativas verdes para reducir el impacto ambiental...',
    content: '<p>ElectroHuila lanza su nuevo programa de sostenibilidad ambiental.</p>',
    date: '23 de Mayo, 2025',
    image: './images/2.jpg',
    category: 'Sostenibilidad',
    url: 'news/2'
  },
  {
    id: 3,
    title: 'Capacitación en Seguridad Industrial',
    excerpt: 'Jornada de formación para todo el personal técnico...',
    content: '<p>Todo el personal técnico participó en capacitación.</p>',
    date: '20 de Mayo, 2025',
    image: './images/3.jpg',
    category: 'Capacitación',
    url: 'news/3'
  }
];