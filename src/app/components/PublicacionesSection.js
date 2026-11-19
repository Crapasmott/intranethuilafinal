'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

const ADMIN_PASSWORD = 'ElectroAdmin2025';

const CATEGORIAS = [
    'General', 'PTEP', 'Gestión Jurídica', 'SIG',
    'Novedades', 'Comunicados', 'Capacitaciones', 'Talento Humano',
    'Galería de Eventos',
];

const formatDate = (iso) => {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('es-CO', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Bogota',
    });
};

const generateId = () => `pub_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

// ─── API helpers ──────────────────────────────────────────────────────────────
const API_URL = '/api/publicaciones';

const fetchPublicaciones = async () => {
    try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Error al cargar');
        return await res.json();
    } catch (err) {
        console.error('fetchPublicaciones:', err);
        // Si la API falla, intentar leer del localStorage como fallback
        try {
            const stored = localStorage.getItem('electrohuila_publicaciones');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    }
};

const persistPublicaciones = async (lista) => {
    // ── SIEMPRE guardar en localStorage primero (para el home) ──
    try {
        localStorage.setItem('electrohuila_publicaciones', JSON.stringify(lista));
    } catch (e) {
        console.error('Error guardando en localStorage:', e);
    }

    // ── Luego intentar guardar en la API ──
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lista),
        });
        if (!res.ok) throw new Error('Error al guardar en API');
        return true;
    } catch (err) {
        console.error('persistPublicaciones API:', err);
        // No retornamos false: localStorage ya quedó guardado, el home funcionará
        return true;
    }
};

// ─── ESTILOS COMUNES ──────────────────────────────────────────────────────────
const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition";
const inputStyle = { color: '#111827', background: '#fff' };

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
const Lightbox = ({ fotos, indiceInicial, onClose }) => {
    const [indice, setIndice] = useState(indiceInicial);

    const anterior = useCallback(() => setIndice((i) => (i - 1 + fotos.length) % fotos.length), [fotos.length]);
    const siguiente = useCallback(() => setIndice((i) => (i + 1) % fotos.length), [fotos.length]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'ArrowLeft') anterior();
            if (e.key === 'ArrowRight') siguiente();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [anterior, siguiente, onClose]);

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold transition hover:bg-white/20"
                style={{ zIndex: 70 }}
            >✕</button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium" style={{ zIndex: 70 }}>
                {indice + 1} / {fotos.length}
            </div>

            {fotos.length > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); anterior(); }}
                    className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition hover:bg-white/20"
                    style={{ zIndex: 70 }}
                >‹</button>
            )}

            <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                <img
                    src={fotos[indice]}
                    alt={`Foto ${indice + 1}`}
                    style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 8px 48px rgba(0,0,0,0.6)' }}
                />
            </div>

            {fotos.length > 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); siguiente(); }}
                    className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition hover:bg-white/20"
                    style={{ zIndex: 70 }}
                >›</button>
            )}

            {fotos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 70 }}>
                    {fotos.map((f, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setIndice(i); }}
                            style={{
                                width: 48, height: 36, borderRadius: 6, overflow: 'hidden',
                                border: i === indice ? '2px solid #c8a951' : '2px solid transparent',
                                opacity: i === indice ? 1 : 0.5, transition: 'all 0.2s',
                            }}
                        >
                            <img src={f} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// ─── MODAL ADMIN (CREAR / EDITAR) ─────────────────────────────────────────────
const AdminModal = ({ editItem, onClose, onSave }) => {
    const fileRef = useRef(null);
    const fotosRef = useRef(null);
    const [form, setForm] = useState({
        titulo: '', descripcion: '', contenido: '', categoria: 'General',
        imagen: '', autor: '', fecha: new Date().toISOString().slice(0, 10),
        fotos: [],
        ...editItem,
    });
    const [imgPreview, setImgPreview] = useState(editItem?.imagen || '');
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const esGaleria = form.categoria === 'Galería de Eventos';

    const handleField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 3 * 1024 * 1024) { setError('La imagen no debe superar 3 MB'); return; }
        const reader = new FileReader();
        reader.onload = (ev) => { setImgPreview(ev.target.result); handleField('imagen', ev.target.result); };
        reader.readAsDataURL(file);
    };

    const handleFotos = (e) => {
        const archivos = Array.from(e.target.files);
        const grandes = archivos.filter(f => f.size > 5 * 1024 * 1024);
        if (grandes.length) { setError('Cada foto no debe superar 5 MB'); return; }
        const readers = archivos.map(file => new Promise(res => {
            const r = new FileReader();
            r.onload = ev => res(ev.target.result);
            r.readAsDataURL(file);
        }));
        Promise.all(readers).then(results => {
            setForm(f => ({ ...f, fotos: [...(f.fotos || []), ...results] }));
        });
    };

    const eliminarFoto = (idx) => {
        setForm(f => ({ ...f, fotos: f.fotos.filter((_, i) => i !== idx) }));
    };

    const handleSubmit = () => {
        setError('');
        if (!form.titulo.trim()) { setError('El título es obligatorio'); return; }
        if (!form.descripcion.trim()) { setError('La descripción es obligatoria'); return; }
        if (esGaleria && (!form.fotos || form.fotos.length === 0)) {
            setError('Agrega al menos una foto al evento'); return;
        }
        setSaving(true);
        const imagenFinal = form.imagen || (esGaleria && form.fotos?.length ? form.fotos[0] : '');
        onSave({
            ...form,
            imagen: imagenFinal,
            id: editItem?.id || generateId(),
            fechaISO: form.fecha,
            updatedAt: new Date().toISOString(),
        });
        setSaving(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
            style={{ background: 'rgba(0,0,0,0.6)', paddingTop: '2rem', paddingBottom: '2rem' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full mx-4" style={{ maxWidth: 680 }}>

                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg" style={{ background: '#1a3a5c' }}>
                            {editItem ? '✏️' : '📝'}
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-800 text-lg leading-tight">{editItem ? 'Editar publicación' : 'Nueva publicación'}</h2>
                            <p className="text-xs text-gray-400">Panel de Administrador</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition">✕</button>
                </div>

                <div className="px-6 py-5 space-y-4">
                    {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg">⚠️ {error}</div>}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Categoría</label>
                        <select value={form.categoria} onChange={(e) => handleField('categoria', e.target.value)}
                            className={inputCls} style={inputStyle}>
                            {CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
                        </select>
                    </div>

                    {esGaleria ? (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Fotos del evento <span className="text-red-500">*</span>
                                <span className="text-gray-400 font-normal ml-1">(máx. 5 MB por foto)</span>
                            </label>
                            <div
                                className="border-2 border-dashed border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-400 transition text-center"
                                onClick={() => fotosRef.current?.click()}
                            >
                                <span className="text-3xl">🖼️</span>
                                <p className="text-sm text-gray-400 mt-1">Clic para agregar fotos</p>
                                <p className="text-xs text-gray-300">Puedes seleccionar varias a la vez</p>
                            </div>
                            <input ref={fotosRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFotos} />
                            {form.fotos && form.fotos.length > 0 && (
                                <div className="grid grid-cols-4 gap-2 mt-3">
                                    {form.fotos.map((f, i) => (
                                        <div key={i} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '1' }}>
                                            <img src={f} alt="" className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => eliminarFoto(i)}
                                                className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center rounded-full text-white text-xs font-bold"
                                                style={{ background: 'rgba(0,0,0,0.6)' }}
                                            >✕</button>
                                            {i === 0 && (
                                                <span className="absolute bottom-1 left-1 text-white text-[9px] font-bold px-1.5 py-0.5 rounded"
                                                    style={{ background: '#c8a951' }}>PORTADA</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen de portada</label>
                            <div className="relative border-2 border-dashed border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-blue-400 transition"
                                style={{ height: imgPreview ? 200 : 110 }}
                                onClick={() => fileRef.current?.click()}>
                                {imgPreview ? (
                                    <img src={imgPreview} alt="preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-1">
                                        <span className="text-3xl">🖼️</span>
                                        <span className="text-sm">Clic para subir imagen (máx. 3 MB)</span>
                                    </div>
                                )}
                                {imgPreview && (
                                    <button className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg hover:bg-black/70 transition"
                                        onClick={(e) => { e.stopPropagation(); setImgPreview(''); handleField('imagen', ''); }}>
                                        Cambiar
                                    </button>
                                )}
                            </div>
                            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImage} />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Título <span className="text-red-500">*</span></label>
                        <input type="text" value={form.titulo} onChange={(e) => handleField('titulo', e.target.value)}
                            placeholder={esGaleria ? 'Nombre del evento' : 'Escribe el título de la publicación'}
                            className={inputCls} style={inputStyle} />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción corta <span className="text-red-500">*</span></label>
                        <textarea value={form.descripcion} onChange={(e) => handleField('descripcion', e.target.value)}
                            placeholder={esGaleria ? 'Descripción breve del evento' : 'Resumen breve (máx. 200 caracteres recomendado)'}
                            rows={2} className={inputCls + " resize-none"} style={inputStyle} />
                    </div>

                    {!esGaleria && (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Contenido completo</label>
                            <textarea value={form.contenido} onChange={(e) => handleField('contenido', e.target.value)}
                                placeholder="Cuerpo de la publicación" rows={5}
                                className={inputCls + " resize-y"} style={inputStyle} />
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Autor</label>
                            <input type="text" value={form.autor} onChange={(e) => handleField('autor', e.target.value)}
                                placeholder="Nombre del autor" className={inputCls} style={inputStyle} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha</label>
                            <input type="date" value={form.fecha} onChange={(e) => handleField('fecha', e.target.value)}
                                className={inputCls} style={inputStyle} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
                    <button onClick={onClose} className="px-5 py-2.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition">Cancelar</button>
                    <button onClick={handleSubmit} disabled={saving}
                        className="px-6 py-2.5 text-sm text-white font-semibold rounded-xl transition flex items-center gap-2"
                        style={{ background: saving ? '#93c5fd' : '#1a3a5c' }}>
                        {saving ? '⏳ Guardando...' : (editItem ? '💾 Guardar cambios' : (esGaleria ? '🖼️ Publicar galería' : '🚀 Publicar'))}
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── MODAL LOGIN ──────────────────────────────────────────────────────────────
const LoginModal = ({ onClose, onSuccess }) => {
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (pass === ADMIN_PASSWORD) { onSuccess(); }
        else { setError('Contraseña incorrecta'); setPass(''); }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.6)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full mx-4" style={{ maxWidth: 380 }}>
                <div className="px-6 py-6">
                    <div className="flex flex-col items-center mb-5">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3" style={{ background: '#1a3a5c' }}>🔐</div>
                        <h2 className="font-bold text-gray-800 text-xl">Acceso Administrador</h2>
                        <p className="text-sm text-gray-400 mt-1">Ingresa la contraseña para publicar</p>
                    </div>
                    {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg mb-3 text-center">⚠️ {error}</div>}
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        placeholder="Contraseña de administrador"
                        style={inputStyle}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition mb-3"
                        autoFocus />
                    <div className="flex gap-3">
                        <button onClick={onClose} className="flex-1 py-2.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition">Cancelar</button>
                        <button onClick={handleLogin} className="flex-1 py-2.5 text-sm text-white font-semibold rounded-xl transition" style={{ background: '#1a3a5c' }}>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── MODAL VER GALERÍA ────────────────────────────────────────────────────────
const VerGaleriaModal = ({ pub, onClose, isAdmin, onEdit, onDelete }) => {
    const [lightboxIdx, setLightboxIdx] = useState(null);
    const fotos = pub.fotos || (pub.imagen ? [pub.imagen] : []);

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
                style={{ background: 'rgba(0,0,0,0.6)', paddingTop: '2rem', paddingBottom: '2rem' }}
                onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
                <div className="bg-white rounded-2xl shadow-2xl w-full mx-4 overflow-hidden" style={{ maxWidth: 760 }}>
                    <div style={{ background: 'linear-gradient(135deg, #1a3a5c, #1e40af)', padding: '24px 32px 20px' }}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: '#c8a951' }}>📸 Galería de Eventos</span>
                            <span className="text-xs text-blue-200">{formatDate(pub.fechaISO || pub.fecha)}</span>
                            {pub.autor && <span className="text-xs text-blue-200">· {pub.autor}</span>}
                        </div>
                        <h2 className="text-white text-2xl font-bold">{pub.titulo}</h2>
                        {pub.descripcion && <p className="text-blue-200 text-sm mt-1">{pub.descripcion}</p>}
                        <p className="text-blue-300 text-xs mt-2">{fotos.length} foto{fotos.length !== 1 ? 's' : ''}</p>
                    </div>

                    <div className="p-6">
                        {fotos.length === 0 ? (
                            <div className="text-center py-10 text-gray-400">No hay fotos en esta galería</div>
                        ) : (
                            <div className="grid gap-3"
                                style={{ gridTemplateColumns: fotos.length === 1 ? '1fr' : fotos.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)' }}>
                                {fotos.map((f, i) => (
                                    <div
                                        key={i}
                                        className="relative overflow-hidden rounded-xl cursor-zoom-in group"
                                        style={{
                                            aspectRatio: fotos.length === 1 ? '16/9' : '1',
                                            ...(fotos.length >= 4 && i === 0 ? { gridColumn: 'span 2', aspectRatio: '2/1' } : {}),
                                        }}
                                        onClick={() => setLightboxIdx(i)}
                                    >
                                        <img src={f} alt={`Foto ${i + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                                            <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition">🔍</span>
                                        </div>
                                        {i === 0 && (
                                            <span className="absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded"
                                                style={{ background: '#c8a951' }}>PORTADA</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex gap-2">
                                {isAdmin && (
                                    <>
                                        <button onClick={() => { onClose(); onEdit(pub); }}
                                            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition"
                                            style={{ background: '#fef3c7', color: '#92400e' }}>✏️ Editar</button>
                                        <button onClick={() => { onDelete(pub.id); onClose(); }}
                                            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition"
                                            style={{ background: '#fee2e2', color: '#991b1b' }}>🗑️ Eliminar</button>
                                    </>
                                )}
                            </div>
                            <button onClick={onClose} className="px-5 py-2 text-sm text-white font-medium rounded-xl transition" style={{ background: '#1a3a5c' }}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {lightboxIdx !== null && (
                <Lightbox fotos={fotos} indiceInicial={lightboxIdx} onClose={() => setLightboxIdx(null)} />
            )}
        </>
    );
};

// ─── MODAL VER PUBLICACIÓN NORMAL ─────────────────────────────────────────────
const VerModal = ({ pub, onClose, isAdmin, onEdit, onDelete }) => (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
        style={{ background: 'rgba(0,0,0,0.6)', paddingTop: '2rem', paddingBottom: '2rem' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="bg-white rounded-2xl shadow-2xl w-full mx-4 overflow-hidden" style={{ maxWidth: 700 }}>
            {pub.imagen && (
                <div style={{ background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={pub.imagen} alt={pub.titulo}
                        style={{ width: '100%', maxHeight: 420, objectFit: 'contain', display: 'block' }} />
                </div>
            )}
            <div className="px-8 py-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: '#1a3a5c' }}>{pub.categoria}</span>
                    <span className="text-xs text-gray-400">{formatDate(pub.fechaISO || pub.fecha)}</span>
                    {pub.autor && <span className="text-xs text-gray-400">· {pub.autor}</span>}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{pub.titulo}</h2>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed border-l-4 border-blue-200 pl-4">{pub.descripcion}</p>
                {pub.contenido && (
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{pub.contenido}</div>
                )}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-2">
                        {isAdmin && (
                            <>
                                <button onClick={() => { onClose(); onEdit(pub); }}
                                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition"
                                    style={{ background: '#fef3c7', color: '#92400e' }}>✏️ Editar</button>
                                <button onClick={() => { onDelete(pub.id); onClose(); }}
                                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition"
                                    style={{ background: '#fee2e2', color: '#991b1b' }}>🗑️ Eliminar</button>
                            </>
                        )}
                    </div>
                    <button onClick={onClose} className="px-5 py-2 text-sm text-white font-medium rounded-xl transition" style={{ background: '#1a3a5c' }}>Cerrar</button>
                </div>
            </div>
        </div>
    </div>
);

// ─── TARJETA GALERÍA ──────────────────────────────────────────────────────────
const TarjetaGaleria = ({ pub, isAdmin, onEdit, onDelete, onVer }) => {
    const fotos = pub.fotos || (pub.imagen ? [pub.imagen] : []);
    const preview = fotos.slice(0, 4);

    return (
        <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div className="relative cursor-pointer" style={{ height: 180 }} onClick={() => onVer(pub)}>
                {fotos.length === 0 ? (
                    <div className="w-full h-full flex items-center justify-center text-4xl"
                        style={{ background: 'linear-gradient(135deg, #1a3a5c, #2563eb)' }}>📸</div>
                ) : fotos.length === 1 ? (
                    <img src={fotos[0]} alt={pub.titulo} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full grid gap-0.5"
                        style={{ gridTemplateColumns: preview.length >= 3 ? '2fr 1fr' : '1fr 1fr' }}>
                        <img src={preview[0]} alt="" className="w-full h-full object-cover"
                            style={{ gridRow: preview.length >= 3 ? 'span 2' : 'span 1' }} />
                        <div className="flex flex-col gap-0.5">
                            {preview.slice(1, 3).map((f, i) => (
                                <div key={i} className="relative flex-1 overflow-hidden">
                                    <img src={f} alt="" className="w-full h-full object-cover" />
                                    {i === 1 && fotos.length > 3 && (
                                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm"
                                            style={{ background: 'rgba(0,0,0,0.55)' }}>
                                            +{fotos.length - 3} más
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1"
                    style={{ background: 'rgba(200,169,81,0.92)', backdropFilter: 'blur(4px)' }}>
                    📸 Galería · {fotos.length} foto{fotos.length !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2">{formatDate(pub.fechaISO || pub.fecha)}{pub.autor ? ` · ${pub.autor}` : ''}</p>
                <h3 className="font-bold text-gray-800 mb-2 leading-snug cursor-pointer hover:text-blue-700 transition line-clamp-2"
                    style={{ fontSize: '1rem' }} onClick={() => onVer(pub)}>
                    {pub.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{pub.descripcion}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                    <button onClick={() => onVer(pub)} className="text-sm font-semibold text-amber-600 hover:text-amber-800 transition flex items-center gap-1">
                        Ver galería <span>→</span>
                    </button>
                    {isAdmin && (
                        <div className="flex gap-2">
                            <button onClick={() => onEdit(pub)}
                                className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 font-medium transition">✏️ Editar</button>
                            <button onClick={() => onDelete(pub.id)}
                                className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition">🗑️</button>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

// ─── TARJETA NORMAL ───────────────────────────────────────────────────────────
const Tarjeta = ({ pub, isAdmin, onEdit, onDelete, onVer }) => (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div className="relative overflow-hidden cursor-pointer" style={{ height: 180 }} onClick={() => onVer(pub)}>
            {pub.imagen ? (
                <img src={pub.imagen} alt={pub.titulo} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl"
                    style={{ background: 'linear-gradient(135deg, #1a3a5c, #2563eb)' }}>📰</div>
            )}
            <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: 'rgba(26,58,92,0.85)', backdropFilter: 'blur(4px)' }}>
                {pub.categoria}
            </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
            <p className="text-xs text-gray-400 mb-2">{formatDate(pub.fechaISO || pub.fecha)}{pub.autor ? ` · ${pub.autor}` : ''}</p>
            <h3 className="font-bold text-gray-800 mb-2 leading-snug cursor-pointer hover:text-blue-700 transition line-clamp-2"
                style={{ fontSize: '1rem' }} onClick={() => onVer(pub)}>
                {pub.titulo}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{pub.descripcion}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                <button onClick={() => onVer(pub)} className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1">
                    Leer más <span>→</span>
                </button>
                {isAdmin && (
                    <div className="flex gap-2">
                        <button onClick={() => onEdit(pub)}
                            className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 font-medium transition">✏️ Editar</button>
                        <button onClick={() => onDelete(pub.id)}
                            className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition">🗑️</button>
                    </div>
                )}
            </div>
        </div>
    </article>
);

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
const PublicacionesSection = ({ onBack }) => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('Todas');
    const [busqueda, setBusqueda] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showEditor, setShowEditor] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [verPub, setVerPub] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saveError, setSaveError] = useState('');

    // ── Carga inicial: API primero, localStorage como fallback ──
    useEffect(() => {
        fetchPublicaciones().then((data) => {
            setPublicaciones(data);
            // Sincronizar localStorage con lo que devuelva la API
            try {
                localStorage.setItem('electrohuila_publicaciones', JSON.stringify(data));
            } catch (e) {
                console.error('Error sincronizando localStorage:', e);
            }
            setLoading(false);
        });
    }, []);

    // ── Escucha actualizaciones desde otros componentes ──
    useEffect(() => {
        const handler = () => fetchPublicaciones().then((data) => {
            setPublicaciones(data);
            try {
                localStorage.setItem('electrohuila_publicaciones', JSON.stringify(data));
            } catch (e) { }
        });
        window.addEventListener('publicaciones_actualizadas', handler);
        return () => window.removeEventListener('publicaciones_actualizadas', handler);
    }, []);

    // ── Guardar: localStorage + API + evento ──
    const guardar = async (nuevas) => {
        setPublicaciones(nuevas);

        // 1. Guardar en localStorage SIEMPRE (para que el home lo lea)
        try {
            localStorage.setItem('electrohuila_publicaciones', JSON.stringify(nuevas));
        } catch (e) {
            console.error('Error guardando en localStorage:', e);
        }

        // 2. Disparar evento para que el home se actualice en tiempo real
        window.dispatchEvent(new Event('publicaciones_actualizadas'));

        // 3. Intentar guardar en la API
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevas),
            });
            if (!res.ok) throw new Error('Error al guardar en API');
            setSaveError('');
        } catch (err) {
            console.warn('API no disponible, guardado solo en localStorage:', err);
            setSaveError('');  // No mostrar error: localStorage ya funcionó
        }
    };

    const handleSave = async (pub) => {
        const existe = publicaciones.find((p) => p.id === pub.id);
        const nuevas = existe
            ? publicaciones.map((p) => (p.id === pub.id ? pub : p))
            : [pub, ...publicaciones];
        await guardar(nuevas);
        setShowEditor(false);
        setEditItem(null);
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Eliminar esta publicación?')) return;
        await guardar(publicaciones.filter((p) => p.id !== id));
    };

    const handleEdit = (pub) => { setEditItem(pub); setShowEditor(true); };
    const handleNueva = () => { setEditItem(null); setShowEditor(true); };

    const listaMostrada = publicaciones.filter((p) => {
        const matchCat = filtroCategoria === 'Todas' || p.categoria === filtroCategoria;
        const q = busqueda.toLowerCase();
        const matchQ = !q || p.titulo?.toLowerCase().includes(q) || p.descripcion?.toLowerCase().includes(q);
        return matchCat && matchQ;
    });

    const hayGalerias = listaMostrada.some(p => p.categoria === 'Galería de Eventos');
    const hayNormales = listaMostrada.some(p => p.categoria !== 'Galería de Eventos');

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="flex flex-col items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
                    <p className="text-sm">Cargando publicaciones...</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: '100vh', background: '#f8fafc' }}>

            {/* Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #0f2a44 60%, #1e40af 100%)', padding: '48px 0 36px' }}>
                <div className="max-w-6xl mx-auto px-6">
                    {onBack && (
                        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition">
                            ← Volver al inicio
                        </button>
                    )}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-white font-bold text-3xl md:text-4xl mb-1">📰 Publicaciones</h1>
                            <p className="text-blue-200 text-sm">Noticias, comunicados, novedades y galerías de eventos de ElectroHuila</p>
                        </div>
                        <div className="flex gap-2">
                            {isAdmin ? (
                                <>
                                    <button onClick={handleNueva}
                                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl text-white transition"
                                        style={{ background: '#c8a951' }}>
                                        + Nueva publicación
                                    </button>
                                    <button onClick={() => setIsAdmin(false)}
                                        className="px-4 py-2.5 text-sm text-blue-200 hover:text-white border border-blue-400 hover:border-white rounded-xl transition">
                                        Salir
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => setShowLogin(true)}
                                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-blue-300 text-blue-100 hover:bg-white/10 transition">
                                    🔐 Administrador
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Buscador */}
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                            <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
                                placeholder="Buscar publicaciones o eventos..."
                                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }} />
                        </div>
                        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}
                            className="px-4 py-2.5 rounded-xl text-sm border border-transparent focus:outline-none transition cursor-pointer"
                            style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }}>
                            <option value="Todas" style={{ color: '#1a3a5c' }}>Todas las categorías</option>
                            {CATEGORIAS.map((c) => <option key={c} value={c} style={{ color: '#1a3a5c' }}>{c}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                {saveError && (
                    <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                        ⚠️ {saveError}
                    </div>
                )}

                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-gray-500">
                        {listaMostrada.length === 0 ? 'No hay publicaciones' : `${listaMostrada.length} publicación${listaMostrada.length !== 1 ? 'es' : ''}`}
                        {filtroCategoria !== 'Todas' && ` en "${filtroCategoria}"`}
                    </p>
                    {isAdmin && (
                        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-semibold">
                            👑 Modo Administrador activo
                        </span>
                    )}
                </div>

                {listaMostrada.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                        <span className="text-5xl mb-4">📭</span>
                        <p className="text-lg font-semibold text-gray-500 mb-1">
                            {busqueda || filtroCategoria !== 'Todas' ? 'No se encontraron publicaciones' : 'Aún no hay publicaciones'}
                        </p>
                        <p className="text-sm">{isAdmin ? 'Haz clic en "+ Nueva publicación" para comenzar' : 'Pronto habrá contenido aquí'}</p>
                    </div>
                ) : (
                    <>
                        {hayGalerias && (
                            <div className="mb-10">
                                {(hayNormales || filtroCategoria === 'Todas') && (
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-lg">📸</span>
                                        <h2 className="text-base font-bold text-gray-700">Galería de Eventos</h2>
                                        <div className="flex-1 h-px bg-gray-100" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {listaMostrada.filter(p => p.categoria === 'Galería de Eventos').map((pub) => (
                                        <TarjetaGaleria key={pub.id} pub={pub} isAdmin={isAdmin}
                                            onEdit={handleEdit} onDelete={handleDelete} onVer={setVerPub} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {hayNormales && (
                            <div>
                                {hayGalerias && filtroCategoria === 'Todas' && (
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-lg">📰</span>
                                        <h2 className="text-base font-bold text-gray-700">Publicaciones</h2>
                                        <div className="flex-1 h-px bg-gray-100" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {listaMostrada.filter(p => p.categoria !== 'Galería de Eventos').map((pub) => (
                                        <Tarjeta key={pub.id} pub={pub} isAdmin={isAdmin}
                                            onEdit={handleEdit} onDelete={handleDelete} onVer={setVerPub} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modales */}
            {showLogin && (
                <LoginModal onClose={() => setShowLogin(false)} onSuccess={() => { setIsAdmin(true); setShowLogin(false); }} />
            )}
            {showEditor && (
                <AdminModal editItem={editItem} onClose={() => { setShowEditor(false); setEditItem(null); }} onSave={handleSave} />
            )}
            {verPub && verPub.categoria === 'Galería de Eventos' ? (
                <VerGaleriaModal pub={verPub} onClose={() => setVerPub(null)} isAdmin={isAdmin} onEdit={handleEdit} onDelete={handleDelete} />
            ) : verPub ? (
                <VerModal pub={verPub} onClose={() => setVerPub(null)} isAdmin={isAdmin} onEdit={handleEdit} onDelete={handleDelete} />
            ) : null}

            <style>{`
                .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
            `}</style>
        </div>
    );
};

export default PublicacionesSection;