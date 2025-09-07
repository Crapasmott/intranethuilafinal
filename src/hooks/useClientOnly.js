// HOOK PARA OBTENER NOTICIAS DESDE /news/
const useNoticias = (limit = 3) => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const api = new WordPressAPIService(WORDPRESS_CONFIG);
        
        // Intentar obtener desde la sección news primero
        let wpPosts;
        try {
          wpPosts = await api.getNoticiasFromNewsSection({ limit });
        } catch (newsError) {
          console.log('Fallback to general posts');
          wpPosts = await api.getNoticias({ limit });
        }
        
        const transformedNews = transformWordPressData.noticias(wpPosts);
        setNoticias(transformedNews);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching noticias from electrohuila.net/news:', err);
        setNoticias(getStaticNoticias());
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
    
    // Actualizar cada 10 minutos para obtener noticias frescas
    const interval = setInterval(fetchNoticias, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [limit]);

  return { noticias, loading, error };
};