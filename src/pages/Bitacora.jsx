import { useState } from 'react';
import { bitacoraData } from '../data/bitacoraData';
import { playSFX } from '../utils/sfx';

export default function Bitacora() {
    const [etapaFiltro, setEtapaFiltro] = useState('TODAS');
    const [idExpandido, setIdExpandido] = useState(null);

    // Extraemos las etapas únicas para los botones de filtrado
    const etapas = ['TODAS', ...new Set(bitacoraData.map(e => e.fase))];

    // Filtramos las entradas de la bitácora según la etapa seleccionada
    const entradasFiltradas = etapaFiltro === 'TODAS'
        ? bitacoraData
        : bitacoraData.filter(e => e.fase === etapaFiltro);

    const toggleExpander = (id) => {
        playSFX('click');
        setIdExpandido(prevId => prevId === id ? null : id);
    };

    const handleFiltroClick = (etapa) => {
        playSFX('click');
        setEtapaFiltro(etapa);
        setIdExpandido(null); // Reseteamos el acordeón al cambiar de filtro
    };

    return (
        <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

            {/* Encabezado */}
            <header style={{ textAlign: 'center', marginBottom: '2.5rem', width: '100%' }}>
                <h1 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-cyan)',
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.8rem)',
                    marginBottom: '0.8rem',
                    textShadow: '0 0 10px var(--neon-cyan)',
                    letterSpacing: '1px'
                }}>
                    📝 BITÁCORA DE DESARROLLO
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    Registro cronológico de reuniones, arquitectura, dificultades y evoluciones del proyecto.
                </p>
            </header>

            {/* Botonera de Filtros Retro */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '3rem',
                padding: '1rem',
                backgroundColor: '#0d041a',
                borderRadius: '8px',
                border: '1px solid #2a144e'
            }}>
                <span style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-yellow)',
                    fontSize: '0.75rem',
                    marginRight: '0.5rem'
                }}>
                    Filtrar por etapa:
                </span>
                {etapas.map((etapa) => (
                    <button
                        key={etapa}
                        onClick={() => handleFiltroClick(etapa)}
                        style={{
                            padding: '0.5rem 0.8rem',
                            backgroundColor: etapaFiltro === etapa ? 'var(--neon-pink)' : 'transparent',
                            color: etapaFiltro === etapa ? '#000' : 'var(--text-color)',
                            border: `1px solid ${etapaFiltro === etapa ? 'var(--neon-pink)' : 'var(--border)'}`,
                            borderRadius: '4px',
                            fontFamily: 'var(--sans)',
                            fontSize: '0.8rem',
                            fontWeight: etapaFiltro === etapa ? 'bold' : 'normal',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: etapaFiltro === etapa ? '0 0 8px var(--neon-pink)' : 'none'
                        }}
                    >
                        {etapa}
                    </button>
                ))}
            </div>

            {/* Contenedor Timeline */}
            <div style={{ position: 'relative', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>

                {/* Línea vertical de tiempo */}
                <div style={{
                    position: 'absolute',
                    left: '0.1rem',
                    top: '0.5rem',
                    bottom: '1rem',
                    width: '2px',
                    background: 'dashed rgba(255, 0, 127, 0.3)',
                    borderLeft: '2px dashed var(--neon-pink)',
                    opacity: 0.5
                }} />

                {/* Mapeo de Entradas */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {entradasFiltradas.map((entrada) => {
                        const isExpanded = idExpandido === entrada.id;

                        return (
                            <article
                                key={entrada.id}
                                style={{
                                    position: 'relative',
                                    backgroundColor: '#0d041a',
                                    border: `2px solid ${isExpanded ? 'var(--neon-cyan)' : 'var(--neon-pink)'}`,
                                    borderRadius: '8px',
                                    padding: '1.2rem 1.5rem',
                                    boxShadow: isExpanded
                                        ? '0 0 15px rgba(0, 240, 255, 0.2)'
                                        : '0 4px 10px rgba(0, 0, 0, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    userSelect: 'none'
                                }}
                                onClick={() => toggleExpander(entrada.id)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    if (!isExpanded) e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    if (!isExpanded) e.currentTarget.style.borderColor = 'var(--neon-pink)';
                                }}
                            >

                                {/* Indicador de Línea de Tiempo (Dot) */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.95rem',
                                    top: '1.5rem',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: isExpanded ? 'var(--neon-cyan)' : 'var(--neon-pink)',
                                    border: '3px solid #05010f',
                                    boxShadow: `0 0 8px ${isExpanded ? 'var(--neon-cyan)' : 'var(--neon-pink)'}`,
                                    transition: 'all 0.2s ease'
                                }} />

                                {/* Encabezado de la Tarjeta */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '0.8rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                                        <span style={{
                                            color: 'var(--neon-yellow)',
                                            fontFamily: 'var(--font-arcade)',
                                            fontSize: '0.7rem',
                                            backgroundColor: 'rgba(255, 242, 0, 0.1)',
                                            padding: '2px 6px',
                                            borderRadius: '4px'
                                        }}>
                                            [{entrada.fecha}]
                                        </span>
                                        <span style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase'
                                        }}>
                                            {entrada.fase}
                                        </span>
                                    </div>

                                    {/* Flecha de Expansión */}
                                    <span style={{
                                        color: isExpanded ? 'var(--neon-cyan)' : 'var(--neon-pink)',
                                        fontSize: '1rem',
                                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s ease',
                                        fontFamily: 'monospace'
                                    }}>
                                        ▼
                                    </span>
                                </div>

                                {/* Título Principal */}
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: '1.15rem',
                                    margin: '0.6rem 0 0.8rem 0',
                                    fontFamily: 'var(--sans)',
                                    lineHeight: '1.4'
                                }}>
                                    {entrada.titulo}
                                </h3>

                                {/* Resumen siempre visible */}
                                <p style={{
                                    color: 'var(--text-color)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>
                                    <strong style={{ color: 'var(--neon-pink)', fontSize: '0.85rem' }}>RESUMEN: </strong>
                                    {entrada.resumen}
                                </p>

                                {/* Detalle Desplegable (Acordeón) */}
                                <div style={{
                                    maxHeight: isExpanded ? '400px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0, 1, 0.5, 1)',
                                    opacity: isExpanded ? 1 : 0,
                                    marginTop: isExpanded ? '1rem' : '0',
                                    paddingTop: isExpanded ? '1rem' : '0',
                                    borderTop: isExpanded ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                                }}>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        margin: 0,
                                        whiteSpace: 'pre-line'
                                    }}>
                                        {entrada.detalle}
                                    </p>
                                </div>

                            </article>
                        );
                    })}
                </div>

            </div>

        </div>
    );
}