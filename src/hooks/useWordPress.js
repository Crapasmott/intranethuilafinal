// src/hooks/useWordPress.js
'use client';

import { useState, useEffect } from 'react';

export function useWordPress(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                // 🔥 IMPORTANTE: Sin barra al final de 'wordpress'
                const apiUrl = `/api/wordpress?endpoint=${encodeURIComponent(endpoint)}`;

                console.log('🔵 Cargando desde API interna:', apiUrl);

                const response = await fetch(apiUrl, {
                    headers: {
                        'Accept': 'application/json',
                    },
                    ...options
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.error) {
                    throw new Error(result.error);
                }

                console.log('✅ Datos recibidos:', Array.isArray(result) ? `${result.length} items` : '1 item');
                setData(result);
                setError(null);
            } catch (err) {
                console.error('❌ Error fetching WordPress data:', err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}