import { useState } from 'react';
import { bitacoraData } from '../data/bitacoraData';

export default function Bitacora() {
    const [faseFiltro, setFaseFiltro] = useState('TODAS');
    const [abiertoId, setAbiertoId] = useState(null);

    const fases = [
        'TODAS',
        'Planificación',
        'Infraestructura',
        'Maquetado Base',
        'Recursos y SFX',
        'Portada y Responsive',
        'Catálogo y Perfiles'
    ];

    const entradasFiltradas = faseFiltro === 'TODAS'
        ? bitacoraData
        : bitacoraData.filter(item => item.fase === faseFiltro);

    const toggleAcordeon = (id) => {
        setAbiertoId(abiertoId === id ? null : id);
    };

    return (
        <div className="section-container">
            <header className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    📜 BITÁCORA DE DESARROLLO
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    Registro cronológico de reuniones, arquitectura, dificultades y evoluciones del proyecto.
                </p>
            </header>

            {/* Filtro por Fase */}
            <div className="filter-bar" style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <label style={{ color: 'var(--neon-yellow)' }}>Filtrar por etapa:</label>
                {fases.map(fase => (
                    <button
                        key={fase}
                        onClick={() => setFaseFiltro(fase)}
                        style={{
                            padding: '0.4rem 0.8rem',
                            backgroundColor: faseFiltro === fase ? 'var(--neon-pink)' : 'var(--card-bg)',
                            color: faseFiltro === fase ? '#000' : 'var(--text-color)',
                            border: '1px solid var(--neon-pink)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-retro)',
                            fontSize: '1.1rem'
                        }}
                    >
                        {fase}
                    </button>
                ))}
            </div>

            {/* Listado con Acordeón / Desplegables */}
            <div className="bitacora-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {entradasFiltradas.map(item => {
                    const isOpen = abiertoId === item.id;
                    return (
                        <article
                            key={item.id}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '2px solid var(--neon-pink)',
                                borderRadius: '6px',
                                overflow: 'hidden'
                            }}
                        >
                            <header
                                onClick={() => toggleAcordeon(item.id)}
                                style={{
                                    padding: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: isOpen ? 'var(--card-hover)' : 'transparent',
                                    transition: 'background-color 0.2s ease'
                                }}
                            >
                                <div>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--neon-yellow)', marginRight: '1rem' }}>
                                        [{item.fecha}] — {item.fase}
                                    </span>
                                    <h3 style={{ margin: '0.3rem 0 0 0', color: 'var(--text-color)' }}>{item.titulo}</h3>
                                </div>
                                <span style={{ fontSize: '1.5rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-arcade)' }}>
                                    {isOpen ? '▲' : '▼'}
                                </span>
                            </header>

                            {isOpen && (
                                <div style={{ padding: '1rem', borderTop: '1px solid var(--neon-pink)', backgroundColor: 'var(--bg-color)' }}>
                                    <p style={{ color: 'var(--text-color)', lineHeight: '1.4' }}>
                                        {item.detalle}
                                    </p>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </div>
    );
}