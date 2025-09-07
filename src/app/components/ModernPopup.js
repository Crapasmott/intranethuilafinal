'use client';

import React, { useState, useEffect } from 'react';
import { X, Heart, Calendar, Users, ChevronRight, Eye, ExternalLink } from 'lucide-react';

const ModernPopup = ({ isVisible, onClose, notifications = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible && notifications.length > 0) {
      setIsEntering(true);
      setCurrentIndex(0);
      setTimeout(() => setIsEntering(false), 700);
      
      // UN SOLO temporizador que controla TODO
      const mainTimer = setTimeout(() => {
        handleClose();
      }, notifications.length * 4000);
      
      return () => clearTimeout(mainTimer);
    }
  }, [isVisible, notifications]);

  useEffect(() => {
    if (isVisible && notifications.length > 1) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => {
            const next = prev + 1;
            if (next >= notifications.length) {
              return prev;
            }
            return next;
          });
          setIsAnimating(false);
        }, 300);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, notifications.length]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 500);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Verificar si hay notificaciones válidas
  if (!isVisible || !notifications || notifications.length === 0) {
    return null;
  }

  const currentNotification = notifications[currentIndex] || {};

  // Función para obtener imagen con fallback
  const getImageUrl = (notification) => {
    if (notification.image && notification.image !== '' && !notification.image.includes('SIN+IMAGEN')) {
      return notification.image;
    }
    return 'https://via.placeholder.com/400x600/1E40AF/ffffff?text=ELECTROHUILA';
  };

  // Función para obtener el tipo con fallback
  const getNotificationType = (notification) => {
    return notification.type || 'comunicado';
  };

  // Función para obtener título con fallback
  const getTitle = (notification) => {
    return notification.title || 'Aviso Important';
  };

  // Función para obtener descripción con fallback
  const getDescription = (notification) => {
    return notification.description || 'Información oficial de ElectroHuila S.A. E.S.P.';
  };

  return (
    <>
      {/* Popup Principal */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        {/* Overlay muy sutil */}
        <div 
          className="absolute inset-0 bg-black/3 backdrop-blur-[0.5px] pointer-events-auto"
          onClick={handleClose}
        />
        
        {/* Popup Container - Lado Izquierdo */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <div 
            className={`
              bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden
              w-80 max-w-sm
              transform transition-all duration-700 ease-out
              ${isEntering ? 'translate-x-0 opacity-100 scale-100' : isExiting ? '-translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'}
              ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}
              hover:shadow-3xl hover:scale-[1.02]
            `}
          >
            {/* Header con icono de la empresa */}
            <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">E</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">ElectroHuila - Aviso Importante</h3>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-lg transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contenido Principal */}
            <div className="p-0">
              {/* Título Principal */}
              <div className="px-6 py-4 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  {getTitle(currentNotification)}
                </h2>
                {currentNotification.subtitle && (
                  <h3 className="text-sm font-semibold text-gray-700">
                    {currentNotification.subtitle}
                  </h3>
                )}
              </div>

              {/* Imagen Grande Centrada */}
              <div className="px-6 mb-4">
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={getImageUrl(currentNotification)}
                    alt={getTitle(currentNotification)}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x600/1E40AF/ffffff?text=ELECTROHUILA';
                    }}
                  />
                  
                  {/* Overlay con categoría */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                      getNotificationType(currentNotification) === 'obituario' ? 'bg-gray-800' :
                      getNotificationType(currentNotification) === 'cumpleanos' ? 'bg-green-500' :
                      getNotificationType(currentNotification) === 'evento' ? 'bg-blue-600' :
                      'bg-purple-500'
                    }`}>
                      {getNotificationType(currentNotification).toUpperCase()}
                    </span>
                  </div>

                  {/* Overlay con icono */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2">
                      {getNotificationType(currentNotification) === 'obituario' && <Heart className="w-4 h-4 text-white" />}
                      {getNotificationType(currentNotification) === 'cumpleanos' && <Calendar className="w-4 h-4 text-white" />}
                      {getNotificationType(currentNotification) === 'evento' && <Users className="w-4 h-4 text-white" />}
                      {getNotificationType(currentNotification) === 'comunicado' && <ExternalLink className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Ver Imagen Completa */}
              <div className="px-6 mb-4">
                <button
                  onClick={openModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver imagen completa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Información */}
              <div className="px-6 pb-4">
                <div className="text-center mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getDescription(currentNotification)}
                  </p>
                </div>

                {/* Footer con navegación */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    Aviso {currentIndex + 1} de {notifications.length}
                  </div>
                  
                  {/* Indicadores de puntos */}
                  {notifications.length > 1 && (
                    <div className="flex space-x-1">
                      {notifications.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                              ? 'bg-blue-600 w-6' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-gray-500">
                    {currentNotification.date || new Date().toLocaleDateString('es-CO')}
                  </div>
                </div>

                {/* Información adicional */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Información oficial de ElectroHuila S.A. E.S.P.
                  </p>
                  
                  {/* Barra de progreso para tiempo */}
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-4000 ease-linear"
                      style={{
                        width: '0%',
                        animation: notifications.length > 0 ? 'progress 4s linear infinite' : 'none'
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">4 segundos visible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para imagen completa */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div 
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">E</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">ElectroHuila - Información Detallada</h3>
                  <p className="text-blue-100 text-sm">{getNotificationType(currentNotification).toUpperCase()}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Imagen grande */}
                <div>
                  <img
                    src={getImageUrl(currentNotification)}
                    alt={getTitle(currentNotification)}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x600/1E40AF/ffffff?text=ELECTROHUILA';
                    }}
                  />
                </div>

                {/* Información detallada */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {getTitle(currentNotification)}
                    </h2>
                    {currentNotification.subtitle && (
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">
                        {currentNotification.subtitle}
                      </h3>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                      getNotificationType(currentNotification) === 'obituario' ? 'bg-gray-800' :
                      getNotificationType(currentNotification) === 'cumpleanos' ? 'bg-green-500' :
                      getNotificationType(currentNotification) === 'evento' ? 'bg-blue-600' :
                      'bg-purple-500'
                    }`}>
                      {getNotificationType(currentNotification).toUpperCase()}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {currentNotification.date || new Date().toLocaleDateString('es-CO')}
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {getDescription(currentNotification)}
                    </p>
                  </div>

                  {/* Enlace a WordPress si existe */}
                  {currentNotification.url && (
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={currentNotification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                       
                      </a>
                    </div>
                  )}

                  {/* Acciones adicionales */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <button 
                      onClick={closeModal}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS para animaciones */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .zoom-in {
          animation: zoomIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default ModernPopup;