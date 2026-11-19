'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Eye, ChevronRight, Plus, Trash2, Edit3, Save, Settings, Bell, Image, Lock, AlertCircle, Upload } from 'lucide-react';

// ── CONTRASEÑA DEL PANEL ADMIN ──
const ADMIN_PASSWORD = 'ElectroAdmin2025';

// ── RUTA DEL EXCEL DE CUMPLEAÑOS (carpeta public/) ──
const CUMPLEANOS_XLSX = '/cumpleanos.xlsx';

// ── NOTIFICACIONES POR DEFECTO ──
const DEFAULT_NOTIFICATIONS = [
  {
    id: 1,
    type: 'comunicado',
    title: 'Aviso Importante',
    subtitle: '',
    description: 'Información oficial de ElectroHuila S.A. E.S.P.',
    image: '',
    date: new Date().toLocaleDateString('es-CO'),
    active: true,
  },
];

// ── COLORES Y ETIQUETAS POR TIPO ──
const TIPO_CONFIG = {
  comunicado: { label: 'Comunicado', color: 'bg-purple-500', icon: '📢' },
  obituario: { label: 'Obituario', color: 'bg-gray-800', icon: '🕊️' },
  cumpleanos: { label: 'Cumpleaños', color: 'bg-green-500', icon: '🎂' },
  evento: { label: 'Evento', color: 'bg-blue-600', icon: '📅' },
};

// ════════════════════════════════════════════════════════════════
//  CUMPLEAÑOS DESDE EXCEL
// ════════════════════════════════════════════════════════════════
const hoyClave = () => {
  const h = new Date();
  return `${h.getFullYear()}-${h.getMonth() + 1}-${h.getDate()}`;
};

// Devuelve { dia, mes } desde un valor de Excel (número serial, Date o texto "15/03" o "15/03/1990")
const extraerDiaMes = (valor, XLSX) => {
  if (valor === null || valor === undefined || valor === '') return null;

  if (valor instanceof Date) {
    return { dia: valor.getDate(), mes: valor.getMonth() + 1 };
  }

  if (typeof valor === 'number') {
    const p = XLSX.SSF.parse_date_code(valor);
    return p ? { dia: p.d, mes: p.m } : null;
  }

  const txt = String(valor).trim();

  // 15/03, 15-03, 15/03/1990, 15-03-1990
  let m = txt.match(/^(\d{1,2})[\/\-.](\d{1,2})(?:[\/\-.]\d{2,4})?$/);
  if (m) return { dia: parseInt(m[1], 10), mes: parseInt(m[2], 10) };

  // 1990-03-15
  m = txt.match(/^\d{4}[\/\-.](\d{1,2})[\/\-.](\d{1,2})$/);
  if (m) return { dia: parseInt(m[2], 10), mes: parseInt(m[1], 10) };

  return null;
};

const leerCumpleanosDeHoy = async () => {
  const XLSX = await import('xlsx');
  const res = await fetch(`${CUMPLEANOS_XLSX}?t=${Date.now()}`);
  if (!res.ok) throw new Error('No se encontró cumpleanos.xlsx');
  const buffer = await res.arrayBuffer();

  const wb = XLSX.read(buffer, { type: 'array' });
  const hoja = wb.Sheets[wb.SheetNames[0]];
  const filas = XLSX.utils.sheet_to_json(hoja, { defval: '' });

  const hoy = new Date();
  const diaHoy = hoy.getDate();
  const mesHoy = hoy.getMonth() + 1;
  const fechaHoy = hoy.toLocaleDateString('es-CO');

  const resultado = [];
  filas.forEach((fila, i) => {
    const claves = Object.keys(fila);
    const kNombre = claves.find(k => k.toLowerCase().trim().includes('nombre'));
    const kFecha = claves.find(k => k.toLowerCase().trim().includes('fecha'));
    if (!kNombre || !kFecha) return;

    const nombre = String(fila[kNombre]).trim();
    const dm = extraerDiaMes(fila[kFecha], XLSX);
    if (!nombre || !dm) return;

    if (dm.dia === diaHoy && dm.mes === mesHoy) {
      resultado.push({
        id: `cumple-${i}-${nombre}`,
        type: 'cumpleanos',
        title: nombre,
        subtitle: '¡Feliz cumpleaños! 🎉',
        description: `Hoy celebramos el cumpleaños de ${nombre}. Toda la familia ElectroHuila le desea un día lleno de alegría y bendiciones.`,
        image: '',
        date: fechaHoy,
        active: true,
        isBirthday: true,
      });
    }
  });

  return resultado;
};

// Visual para cada notificación: imagen, o tarjeta de cumpleaños si no tiene imagen
const BirthdayVisual = ({ name, className = '' }) => (
  <div
    className={`flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 text-white ${className}`}
  >
    <span className="text-6xl mb-2">🎂</span>
    <span className="text-sm font-semibold tracking-wide opacity-90">🎈 🎉 🎈</span>
  </div>
);

// ════════════════════════════════════════════════════════════════
//  MODAL DE CONTRASEÑA
// ════════════════════════════════════════════════════════════════
const PasswordModal = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 600);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
        style={shake ? { animation: 'shake 0.5s ease' } : {}}
      >
        <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-white font-bold">Acceso Administrativo</h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white hover:bg-white/20 p-1 rounded-lg transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600 text-center">
            Ingresa la contraseña para acceder al panel de administración.
          </p>
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false); }}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="••••••••"
              className={`w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${error
                  ? 'border-red-400 focus:border-red-500 bg-red-50'
                  : 'border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                }`}
            />
            {error && (
              <div className="flex items-center gap-1.5 mt-2 text-red-500">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <p className="text-xs font-medium">Contraseña incorrecta. Intenta de nuevo.</p>
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Ingresar
          </button>
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-8px); }
          30%       { transform: translateX(8px); }
          45%       { transform: translateX(-6px); }
          60%       { transform: translateX(6px); }
          75%       { transform: translateX(-3px); }
          90%       { transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════
//  PANEL ADMIN
// ════════════════════════════════════════════════════════════════
const AdminPanel = ({ notifications, onSave, onClose }) => {
  const [lista, setLista] = useState(notifications);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({});
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef(null);

  const nuevoItem = () => {
    const nuevo = {
      id: Date.now(),
      type: 'comunicado',
      title: '',
      subtitle: '',
      description: '',
      image: '',
      date: new Date().toLocaleDateString('es-CO'),
      active: true,
    };
    setLista(prev => [...prev, nuevo]);
    abrirEditor(nuevo);
  };

  const abrirEditor = (item) => {
    setEditando(item.id);
    setForm({ ...item });
  };

  const guardarItem = () => {
    if (!form.title?.trim()) { alert('El título es obligatorio'); return; }
    setLista(prev => prev.map(n => n.id === editando ? { ...form } : n));
    setEditando(null);
  };

  const eliminar = (id) => {
    if (!confirm('¿Eliminar esta notificación?')) return;
    setLista(prev => prev.filter(n => n.id !== id));
    if (editando === id) setEditando(null);
  };

  const toggleActivo = (id) => {
    setLista(prev => prev.map(n => n.id === id ? { ...n, active: !n.active } : n));
  };

  const publicar = () => {
    try {
      localStorage.setItem('electrohuila_notificaciones', JSON.stringify(lista));
    } catch (e) { }
    onSave(lista);
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1200);
  };

  // ── Cargar imagen desde el equipo ──────────────────────────────
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen (JPG, PNG, GIF, WEBP)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen no debe superar los 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm(prev => ({ ...prev, image: ev.target.result }));
    };
    reader.readAsDataURL(file);

    e.target.value = '';
  };

  const quitarImagen = () => {
    setForm(prev => ({ ...prev, image: '' }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">

        {/* Header */}
        <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-white" />
            <h2 className="text-white font-bold text-lg">Panel de Notificaciones</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/20 transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">

          {/* Lista izquierda */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-3 border-b border-gray-100">
              <button
                onClick={nuevoItem}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-semibold transition-all"
              >
                <Plus className="w-4 h-4" />
                Nueva notificación
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {lista.length === 0 && (
                <p className="text-gray-400 text-xs text-center mt-8 px-4">
                  No hay notificaciones. Crea una nueva.
                </p>
              )}
              {lista.map(item => (
                <div
                  key={item.id}
                  onClick={() => abrirEditor(item)}
                  className={`p-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-all ${editando === item.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${TIPO_CONFIG[item.type]?.color || 'bg-gray-400'}`}>
                      {TIPO_CONFIG[item.type]?.icon} {TIPO_CONFIG[item.type]?.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={e => { e.stopPropagation(); toggleActivo(item.id); }}
                        title={item.active ? 'Activa — clic para desactivar' : 'Inactiva — clic para activar'}
                        className={`w-8 h-4 rounded-full transition-all relative ${item.active ? 'bg-green-400' : 'bg-gray-300'}`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full shadow absolute top-0.5 transition-all ${item.active ? 'left-4' : 'left-0.5'}`} />
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); eliminar(item.id); }}
                        className="text-red-400 hover:text-red-600 p-0.5 rounded transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-800 truncate">{item.title || 'Sin título'}</p>
                  <p className="text-[10px] text-gray-400">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Editor derecha */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {editando === null ? (
              <div className="flex-1 flex items-center justify-center text-gray-400 flex-col gap-3">
                <Bell className="w-10 h-10 opacity-30" />
                <p className="text-sm">Selecciona una notificación para editarla</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-blue-600" /> Editar notificación
                  </h3>

                  {/* Tipo */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-1">Tipo</label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(TIPO_CONFIG).map(([key, val]) => (
                        <button
                          key={key}
                          onClick={() => setForm({ ...form, type: key })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border-2 transition-all flex items-center gap-1.5 ${form.type === key
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                        >
                          {val.icon} {val.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Título */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-1">Título *</label>
                    <input
                      type="text"
                      value={form.title || ''}
                      onChange={e => setForm({ ...form, title: e.target.value })}
                      placeholder="Ej: Suspensión programada del servicio"
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Subtítulo */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-1">Subtítulo</label>
                    <input
                      type="text"
                      value={form.subtitle || ''}
                      onChange={e => setForm({ ...form, subtitle: e.target.value })}
                      placeholder="Opcional"
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Descripción */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-1">Descripción</label>
                    <textarea
                      value={form.description || ''}
                      onChange={e => setForm({ ...form, description: e.target.value })}
                      placeholder="Texto informativo..."
                      rows={3}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
                    />
                  </div>

                  {/* ── IMAGEN DESDE EL EQUIPO ── */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-2 flex items-center gap-1">
                      <Image className="w-3 h-3" /> Imagen
                    </label>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />

                    {form.image ? (
                      <div className="relative rounded-xl overflow-hidden border border-gray-200">
                        <img
                          src={form.image}
                          alt="preview"
                          className="w-full h-36 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-gray-100 transition-all"
                          >
                            <Upload className="w-3 h-3" /> Cambiar
                          </button>
                          <button
                            onClick={quitarImagen}
                            className="bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-red-600 transition-all"
                          >
                            <X className="w-3 h-3" /> Quitar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 rounded-xl py-8 flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-all"
                      >
                        <Upload className="w-7 h-7" />
                        <span className="text-xs font-semibold">Haz clic para subir imagen</span>
                        <span className="text-[10px]">JPG, PNG, GIF, WEBP · máx. 5 MB</span>
                      </button>
                    )}
                  </div>

                  {/* Fecha */}
                  <div>
                    <label className="text-xs font-semibold text-gray-900 block mb-1">Fecha</label>
                    <input
                      type="text"
                      value={form.date || ''}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      placeholder="DD/MM/AAAA"
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Guardar item */}
                <div className="p-4 border-t border-gray-100">
                  <button
                    onClick={guardarItem}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Guardar cambios
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer publicar */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {lista.filter(n => n.active).length} activas · {lista.length} total
          </p>
          <button
            onClick={publicar}
            className={`px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${saved
                ? 'bg-green-400 text-white cursor-default'
                : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
          >
            <Save className="w-4 h-4" />
            {saved ? '¡Publicado!' : 'Publicar cambios'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════
//  POPUP PRINCIPAL
//
//  Props:
//   - isVisible: muestra u oculta el popup
//   - onClose: se llama al cerrar
//   - showAdminButton: muestra el botón del panel admin
//   - onCumpleanosDetectados: (opcional) se llama UNA VEZ al día cuando
//     hoy cumple años alguien. Úsalo para poner isVisible en true.
// ════════════════════════════════════════════════════════════════
const ModernPopup = ({ isVisible, onClose, showAdminButton = false, onCumpleanosDetectados }) => {
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const [cumpleanosHoy, setCumpleanosHoy] = useState([]);

  // Cargar desde localStorage solo en el cliente (evita error SSR de Next.js)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('electrohuila_notificaciones');
      if (stored) setNotifications(JSON.parse(stored));
    } catch (e) { }
  }, []);

  // Leer el Excel de cumpleaños al cargar la página
  useEffect(() => {
    let cancelado = false;

    leerCumpleanosDeHoy()
      .then(lista => {
        if (cancelado || lista.length === 0) return;
        setCumpleanosHoy(lista);

        // Abrir sola una vez por día
        let yaVisto = false;
        try {
          yaVisto = localStorage.getItem('electrohuila_cumple_visto') === hoyClave();
        } catch (e) { }

        if (!yaVisto) {
          try {
            localStorage.setItem('electrohuila_cumple_visto', hoyClave());
          } catch (e) { }
          if (onCumpleanosDetectados) onCumpleanosDetectados();
        }
      })
      .catch(err => {
        console.warn('Cumpleaños no disponibles:', err.message);
      });

    return () => { cancelado = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const autoCloseRef = useRef(null);

  // Los cumpleaños de hoy van primero, luego las notificaciones activas
  const activeNotifications = [
    ...cumpleanosHoy,
    ...notifications.filter(n => n.active),
  ];

  useEffect(() => {
    if (isVisible && activeNotifications.length > 0) {
      setCurrentIndex(0);
      setIsEntering(true);
      setTimeout(() => setIsEntering(false), 700);

      // Cierre automático a los 8 segundos
      autoCloseRef.current = setTimeout(() => handleClose(), 8000);
      return () => clearTimeout(autoCloseRef.current);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => { setIsExiting(false); onClose(); }, 500);
  };

  const goTo = (idx) => setCurrentIndex(idx);
  const goPrev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex(i => Math.min(activeNotifications.length - 1, i + 1));

  const handleAdminClick = () => {
    if (autoCloseRef.current) clearTimeout(autoCloseRef.current);
    setShowPasswordModal(true);
  };
  const handlePasswordSuccess = () => { setShowPasswordModal(false); setShowAdmin(true); };

  if (!isVisible || activeNotifications.length === 0) return null;

  const current = activeNotifications[currentIndex] || {};
  const tipoInfo = TIPO_CONFIG[current.type] || TIPO_CONFIG.comunicado;
  const esCumple = !!current.isBirthday && !current.image;

  const getFallback = () =>
    'https://via.placeholder.com/400x300/1E40AF/ffffff?text=ELECTROHUILA';

  const getImageSrc = (n) =>
    n.image && n.image.trim() !== '' ? n.image : getFallback();

  return (
    <>
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div
          className="absolute inset-0 bg-black/10 pointer-events-auto"
          onClick={handleClose}
        />

        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <div
            className={`
              bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden w-80
              transform transition-all duration-700 ease-out
              ${isEntering ? 'opacity-0 -translate-x-8 scale-95' : ''}
              ${isExiting ? 'opacity-0 -translate-x-8 scale-95' : ''}
              ${!isEntering && !isExiting ? 'opacity-100 translate-x-0 scale-100' : ''}
              hover:shadow-3xl hover:scale-[1.015]
            `}
          >
            {/* Header */}
            <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">E</span>
                </div>
                <h3 className="text-white font-bold text-sm">ElectroHuila — Aviso</h3>
              </div>
              <div className="flex items-center gap-1">
                {showAdminButton && (
                  <button
                    onClick={handleAdminClick}
                    className="text-white/70 hover:text-white hover:bg-white/20 p-1 rounded-lg transition-all"
                    title="Panel administrador"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-lg transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Título */}
            <div className="px-6 pt-4 pb-2 text-center">
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                {current.title || 'Aviso importante'}
              </h2>
              {current.subtitle && (
                <p className="text-sm text-gray-600 mt-1">{current.subtitle}</p>
              )}
            </div>

            {/* Imagen */}
            <div className="px-6 mb-3">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                {esCumple ? (
                  <BirthdayVisual name={current.title} className="w-full h-48" />
                ) : (
                  <img
                    src={getImageSrc(current)}
                    alt={current.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={e => { e.target.src = getFallback(); }}
                  />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${tipoInfo.color}`}>
                    {tipoInfo.icon} {tipoInfo.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Ver imagen completa */}
            <div className="px-6 mb-3">
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" />
                <span>{esCumple ? 'Ver felicitación' : 'Ver imagen completa'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Descripción + navegación */}
            <div className="px-6 pb-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{current.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{current.date}</span>

                {activeNotifications.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={goPrev}
                      disabled={currentIndex === 0}
                      className="w-5 h-5 rounded-full bg-gray-200 hover:bg-blue-200 disabled:opacity-30 flex items-center justify-center transition-all"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-600 rotate-180" />
                    </button>
                    {activeNotifications.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                          }`}
                      />
                    ))}
                    <button
                      onClick={goNext}
                      disabled={currentIndex === activeNotifications.length - 1}
                      className="w-5 h-5 rounded-full bg-gray-200 hover:bg-blue-200 disabled:opacity-30 flex items-center justify-center transition-all"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                )}

                <span className="text-xs text-gray-400">
                  {currentIndex + 1} / {activeNotifications.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal imagen completa */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">E</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">ElectroHuila — Información Detallada</h3>
                  <p className="text-blue-100 text-xs">{tipoInfo.icon} {tipoInfo.label}</p>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-center bg-gray-50 rounded-2xl p-4 mb-6">
                {esCumple ? (
                  <BirthdayVisual name={current.title} className="w-full max-w-md h-64 rounded-xl shadow-2xl" />
                ) : (
                  <img
                    src={getImageSrc(current)}
                    alt={current.title}
                    className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl"
                    loading="lazy"
                    onError={e => { e.target.src = getFallback(); }}
                  />
                )}
              </div>
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{current.title}</h2>
                {current.subtitle && (
                  <p className="text-lg font-semibold text-gray-700">{current.subtitle}</p>
                )}
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${tipoInfo.color}`}>
                    {tipoInfo.icon} {tipoInfo.label}
                  </span>
                  <span className="text-gray-500 text-sm">{current.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{current.description}</p>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all mt-4"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal contraseña */}
      {showPasswordModal && (
        <PasswordModal
          onSuccess={handlePasswordSuccess}
          onClose={() => setShowPasswordModal(false)}
        />
      )}

      {/* Panel Admin */}
      {showAdmin && (
        <AdminPanel
          notifications={notifications}
          onSave={setNotifications}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </>
  );
};

export default ModernPopup;
