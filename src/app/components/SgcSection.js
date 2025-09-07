'use client';

import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Search, FileText, Settings, Users, BarChart, Shield } from 'lucide-react';

const SgcSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const sgcData = {
    estrategico: [
      {
        name: 'Planeación Estratégica',
        url: 'http://electrohuilaco.sharepoint.com/Estrategico/Planeacion_Estrategica/Documentos%20SGC/',
        icon: BarChart,
        description: 'Documentos de planificación y estrategia organizacional'
      },
      {
        name: 'Responsabilidad Social y Ambiental',
        url: 'https://electrohuilaco.sharepoint.com/Estrategico/ORSA/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FEstrategico%2FORSA%2FDocumentos%20SGC%2FForms%2FAllItems.aspx',
        icon: Shield,
        description: 'Gestión ambiental y responsabilidad social'
      }
    ],
    cadenaValor: [
      {
        name: 'Gestión Comercial',
        url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Gestion_Comercial/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FCadena_de_Valor%2FGestion_Comercial%2FDocumentos%20SGC%2FForms%2FAllItems.aspx',
        icon: Users
      },
      {
        name: 'Operación Infraestructura',
        url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Operacion/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FCadena_de_Valor%2FOperacion%2FDocumentos%20SGC%2FForms%2FAllItems.aspx',
        icon: Settings
      },
      {
        name: 'Servicio al Cliente',
        url: 'https://electrohuilaco.sharepoint.com/Cadena_de_Valor/Servicio_al_Cliente/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FCadena_de_Valor%2FServicio_al_Cliente%2FDocumentos%20SGC%2FForms%2FAllItems.aspx',
        icon: Users
      }
    ],
    soporte: [
      { name: 'Gestión Proyectos', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Proyectos/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Proyectos%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Expansión', url: 'https://electrohuilaco.sharepoint.com/Soporte/Expansi%C3%B3n/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FExpansi%C3%B3n%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Mantenimiento', url: 'https://electrohuilaco.sharepoint.com/Soporte/Mantenimiento/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FMantenimiento%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Control Pérdidas', url: 'https://electrohuilaco.sharepoint.com/Soporte/Perdidas/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FPerdidas%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Facturación', url: 'https://electrohuilaco.sharepoint.com/Soporte/Facturacion/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FFacturacion%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Control Cartera', url: 'https://electrohuilaco.sharepoint.com/Soporte/Cartera/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FCartera%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Gestión Financiera', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Financiera/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Financiera%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Gestión Jurídica', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Juridica/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Juridica%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Talento Humano', url: 'https://electrohuilaco.sharepoint.com/Soporte/Talento_Humano/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FTalento_Humano%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Gestión Adquisiciones', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Adquisiciones/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Adquisiciones%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Gestión Tecnológica', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Tecnologica/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Tecnologica%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' },
      { name: 'Gestión Facilidades', url: 'https://electrohuilaco.sharepoint.com/Soporte/Gestion_Facilidades/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FSoporte%2FGestion_Facilidades%2FDocumentos%20SGC%2FForms%2FAllItems.aspx' }
    ],
    accesosDirectos: [
      {
        name: 'Matriz Clio',
        url: 'https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B6F8D640E-DD39-4974-94DE-689EFA24B475%7D&file=Requisitos%20clientes%20legales%2Cinstitucionales%2C%20otros%20%20CLIO.xls&action=default&mobileredirect=true&wdLOR=c816D22C2-50A6-4243-95E6-787B74B3ABC6&cid=5eb0a53e-666b-4bfe-af21-5cd96b1652b9',
        color: 'blue',
        featured: true
      },
      {
        name: 'Acciones de Mejoramiento',
        url: 'https://enlinea.electrohuila.com.co/acciones-mejoramiento/#/sign-in',
        color: 'green',
        featured: true
      },
      {
        name: 'Manual de Calidad',
        url: 'https://electrohuilaco.sharepoint.com/:w:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B7F9A71AE-EB0B-42F6-8D02-C8046F6CC3D1%7D&file=MANUAL%20DE%20CALIDAD.doc&action=default&mobileredirect=true',
        color: 'red',
        featured: true
      },
      {
        name: 'Listado Doc. Externos',
        url: 'https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7BC1AAC7DE-A2F2-4466-BEC2-A5A82EF67A45%7D&file=LISTADO%20MAESTRO%20DE%20DOCUMENTOS%20EXTERNOS%20(V.%203).xls&action=default&mobileredirect=true',
        color: 'orange'
      },
      {
        name: 'Mapa de Procesos',
        url: 'https://electrohuilaco.sharepoint.com/:p:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7B233142C3-498B-457C-875E-AD9FE5DDC1AE%7D&file=Mapa%20de%20procesos.ppt&action=edit&mobileredirect=true',
        color: 'purple'
      },
      {
        name: 'Listado Documentos Internos',
        url: 'https://electrohuilaco.sharepoint.com/:x:/r/Estrategico/_layouts/15/Doc.aspx?sourcedoc=%7BC77B8E60-B8CA-4DE2-B71E-3932199CB82E%7D&file=Listado%20Maestro%20de%20Documentos%20Internos%20y%20Registros%20(V.3).xls&action=default&mobileredirect=true',
        color: 'indigo'
      }
    ],
    control: [
      {
        name: 'Control Interno',
        url: 'https://electrohuilaco.sharepoint.com/Control/Control_Interno/Documentos%20SGC/Forms/AllItems.aspx?viewpath=%2FControl%2FControl_Interno%2FDocumentos%20SGC%2FForms%2FAllItems.aspx',
        icon: Shield
      }
    ]
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colors[color] || colors.blue;
  };

  const allItems = [
    ...sgcData.estrategico,
    ...sgcData.cadenaValor,
    ...sgcData.soporte,
    ...sgcData.accesosDirectos,
    ...sgcData.control
  ];

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header minimalista */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Volver a SIG</span>
              </button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                Sistema de Gestión de Calidad
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Barra de búsqueda */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {searchTerm ? (
          /* Resultados de búsqueda */
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Resultados de búsqueda ({filteredItems.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => openLink(item.url)}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                      {item.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Vista por categorías */
          <div className="space-y-12">
            
            {/* Accesos Directos - Principal */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Accesos Directos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sgcData.accesosDirectos.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => openLink(item.url)}
                    className={`p-6 rounded-lg text-white transition-all transform hover:scale-105 ${
                      item.featured ? 'md:col-span-1' : ''
                    } bg-gradient-to-r ${getColorClasses(item.color)}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-left">{item.name}</h3>
                      <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Gestión Estratégica */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Gestión Estratégica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sgcData.estrategico.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => openLink(item.url)}
                      className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-500">{item.description}</p>
                          )}
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Cadena de Valor */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Cadena de Valor</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sgcData.cadenaValor.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => openLink(item.url)}
                      className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                          <IconComponent className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="font-medium text-gray-900 group-hover:text-green-600 flex-1">
                          {item.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Procesos de Soporte */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Procesos de Soporte</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {sgcData.soporte.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => openLink(item.url)}
                    className="p-3 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all text-center group"
                  >
                    <FileText className="w-5 h-5 text-orange-500 mx-auto mb-2 group-hover:text-orange-600" />
                    <h3 className="text-xs font-medium text-gray-900 group-hover:text-orange-600 leading-tight">
                      {item.name}
                    </h3>
                  </button>
                ))}
              </div>
            </section>

            {/* Control */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Control</h2>
              <div className="max-w-md">
                {sgcData.control.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => openLink(item.url)}
                      className="w-full p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                          <IconComponent className="w-5 h-5 text-red-600" />
                        </div>
                        <h3 className="font-medium text-gray-900 group-hover:text-red-600 flex-1">
                          {item.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

          </div>
        )}
      </div>
    </div>
  );
};

export default SgcSection;