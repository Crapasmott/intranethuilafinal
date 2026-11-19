'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import BirthdayBell from './BirthdayBell';

const Header = ({ onNavigate, searchTerm, setSearchTerm, currentView }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comunicacionesOpen, setComunicacionesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);
  const videoRefs = useRef({});

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setComunicacionesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationMenu = [
    {
      name: 'Nosotros',
      view: 'nosotros',
      action: () => { onNavigate && onNavigate('nosotros'); },
      video: './videos/3j.mp4'
    },
    {
      name: 'Publicaciones',
      view: 'publicaciones',
      action: () => { onNavigate && onNavigate('publicaciones'); },
      video: null
    },
    {
      name: 'PTEP',
      view: 'ptep',
      action: () => { onNavigate && onNavigate('ptep'); },
      video: null
    },
  ];

  const comunicacionesItems = [
    {
      name: 'Comunicados y boletines de prensa',
      url: 'https://www.electrohuila.com.co/boletines-comunicados/',
      video: './videos/2j.mp4'
    },
  ];

  const handleMenuClick = (menuItem) => {
    if (menuItem.action) {
      menuItem.action();
    } else if (menuItem.url) {
      window.open(menuItem.url, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  const handleComunicacionesClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setComunicacionesOpen(false);
  };

  const handleLogoClick = () => {
    if (onNavigate) onNavigate('inicio');
    setIsMenuOpen(false);
    setComunicacionesOpen(false);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
    setTimeout(() => {
      if (videoRefs.current[itemId]) {
        videoRefs.current[itemId].play().catch(() => { });
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoveredItem && videoRefs.current[hoveredItem]) {
      videoRefs.current[hoveredItem].pause();
      videoRefs.current[hoveredItem].currentTime = 0;
    }
    setHoveredItem(null);
  };

  const videoStyle = {
    width: '205px', height: '110px', objectFit: 'cover',
    display: 'block', minWidth: '205px', maxWidth: '205px',
    minHeight: '110px', maxHeight: '110px'
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
              title="Ir al inicio"
            >
              <img
                src="./images/LOGO-normal.png"
                alt="ElectroHuila Logo"
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>

          {/* Menú desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationMenu.map((menuItem, index) => {
              const itemId = `menu-${index}`;
              const isActive = currentView === menuItem.view;
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => menuItem.video && handleMouseEnter(itemId)}
                  onMouseLeave={() => menuItem.video && handleMouseLeave()}
                >
                  <button
                    onClick={() => handleMenuClick(menuItem)}
                    className={`cursor-pointer px-4 py-2 font-medium rounded-lg transition-all duration-200 ${isActive
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500 font-bold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                  >
                    {menuItem.name}
                  </button>

                  {/* Tooltip video en hover */}
                  {menuItem.video && hoveredItem === itemId && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                      <div className="bg-white rounded-lg shadow-2xl border-2 border-blue-500 overflow-hidden" style={{ width: '205px' }}>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-blue-500 rotate-45"></div>
                        <video
                          ref={(el) => videoRefs.current[itemId] = el}
                          src={menuItem.video}
                          muted loop playsInline
                          style={videoStyle}
                        >
                          Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700">
                          <p className="text-white text-xs font-medium text-center">{menuItem.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Dropdown Comunicaciones */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setComunicacionesOpen(!comunicacionesOpen)}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Comunicaciones
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${comunicacionesOpen ? 'rotate-180' : ''}`} />
              </button>

              {comunicacionesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[280px] py-1">
                  {comunicacionesItems.map((item, index) => {
                    const itemId = `comunicaciones-${index}`;
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => item.video && handleMouseEnter(itemId)}
                        onMouseLeave={() => item.video && handleMouseLeave()}
                      >
                        <button
                          onClick={() => handleComunicacionesClick(item.url)}
                          className="cursor-pointer w-full text-left px-4 py-3 text-gray-700 text-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item.name}
                        </button>

                        {item.video && hoveredItem === itemId && (
                          <div className="absolute top-0 left-full ml-2 z-50">
                            <div className="bg-white rounded-lg shadow-2xl border-2 border-blue-500 overflow-hidden" style={{ width: '205px' }}>
                              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-blue-500 rotate-45"></div>
                              <video
                                ref={(el) => videoRefs.current[itemId] = el}
                                src={item.video}
                                muted loop playsInline
                                style={videoStyle}
                              >
                                Tu navegador no soporta el elemento de video.
                              </video>
                              <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700">
                                <p className="text-white text-xs font-medium text-center">{item.name}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Buscador y acciones */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar aplicaciones..."
                  value={searchTerm || ''}
                  onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
              </div>
            </div>

            {/* Campana de cumpleaños */}
            <BirthdayBell />

            <div className="hidden sm:block text-right">
              <p className="text-sm text-gray-700 font-medium">{currentDate}</p>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigationMenu.map((menuItem, index) => {
                const isActive = currentView === menuItem.view;
                return (
                  <button
                    key={index}
                    onClick={() => handleMenuClick(menuItem)}
                    className={`cursor-pointer w-full text-left px-4 py-3 font-medium rounded-lg transition-all duration-200 ${isActive
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500 font-bold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                  >
                    {menuItem.name}
                  </button>
                );
              })}

              <div className="px-4">
                <div className="text-gray-700 font-medium py-2 border-b border-gray-100">Comunicaciones</div>
                {comunicacionesItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleComunicacionesClick(item.url)}
                    className="cursor-pointer w-full text-left px-4 py-2 text-gray-600 text-sm rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 px-4 md:hidden">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar aplicaciones..."
                  value={searchTerm || ''}
                  onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;