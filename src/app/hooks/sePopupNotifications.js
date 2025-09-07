// Agregar a tu archivo useWordPress.js o crear archivo usePopupNotifications.js

import { useState, useEffect } from 'react';
import PopupAPIService from '../api/PopupAPI';

// Hook para obtener notificaciones del popup desde WordPress
export const usePopupNotifications = (limit = 5) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const api = new PopupAPIService();
        
        console.log('Obteniendo notificaciones del popup desde WordPress...');
        
        const popupNotifications = await api.getActiveNotifications(limit);
        
        if (popupNotifications && popupNotifications.length > 0) {
          console.log('Notificaciones del popup obtenidas:', popupNotifications.length);
          setNotifications(popupNotifications);
        } else {
          console.log('No se encontraron notificaciones activas');
          setNotifications([]);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error obteniendo notificaciones del popup:', err);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
    
    // Actualizar cada 2 minutos para mantener notificaciones frescas
    const interval = setInterval(fetchNotifications, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, [limit]);

  return { notifications, loading, error };
};

// Hook para obtener notificaciones por tipo específico
export const usePopupNotificationsByType = (type, limit = 3) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotificationsByType = async () => {
      try {
        setLoading(true);
        const api = new PopupAPIService();
        
        console.log(`Obteniendo notificaciones del tipo: ${type}...`);
        
        const typeNotifications = await api.getNotificationsByType(type, limit);
        setNotifications(typeNotifications);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(`Error obteniendo notificaciones del tipo ${type}:`, err);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    if (type) {
      fetchNotificationsByType();
      
      // Actualizar cada 5 minutos
      const interval = setInterval(fetchNotificationsByType, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [type, limit]);

  return { notifications, loading, error };
};