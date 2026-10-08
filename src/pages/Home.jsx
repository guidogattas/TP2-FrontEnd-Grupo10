import { Link } from 'react-router-dom';
import { playSFX } from '../utils/sfx';

export default function Home() {
    const integrantes = [
        { id: 'guido', nombre: 'Guido Gattás', rol: 'Lead Dev / Repo Owner', avatar: '/img/guido-avatar.png' },
        { id: 'lucas', nombre: 'Lucas Katz', rol: 'Front-End Dev', avatar: '/img/lucas-avatar.png' },
        { id: 'belen', nombre: 'Belén Gatto', rol: 'UI/UX & Front-End', avatar: '/img/belen-avatar.png' },
        { id: 'gonzalo', nombre: 'Gonzalo Santini', rol: 'Front-End Dev', avatar: '/img/gonzalo-avatar.png' },
    ];

    return (
        <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Banner Principal */}
            <section style={{
                backgroundColor: 'var(--card-bg)',
                border: '3px solid var(--neon-pink)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '2rem',
                boxShadow: '0 0 15px rgba(255, 0, 127, 0.3)'
            }}>
                <p style={{ color: 'var(--neon-yellow)', fontFamily: 'var(--font-arcade)', fontSize: '0.75rem', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                    IFTS N° 29 — DESARROLLO DE SISTEMAS WEB 2026
                </p>

                <h1 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-cyan)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
                    marginBottom: '1.2rem',
                    lineHeight: '1.5',
                    textShadow: '0 0 10px var(--neon-cyan)'
                }}>
                    🕹️ GRUPO 10 <br /> RETRO ARCADE SPA
                </h1>

                <p style={{ color: 'var(--text-color)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem auto', lineHeight: '1.4' }}>
                    Bienvenid@s a nuestra Single Page Application en <strong>React + Vite</strong>. Fusionamos la estética neón de los 80s/90s con arquitectura de componentes dinámicos.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        to="/catalogo"
                        onClick={() => playSFX('coin')}
                        style={{
                            padding: '0.8rem 1.2rem',
                            backgroundColor: 'var(--neon-pink)',
                            color: '#000',
                            fontFamily: 'var(--font-arcade)',
                            fontSize: '0.75rem',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold'
                        }}
                    >
                        🕹️ EXPLORAR CATÁLOGO
                    </Link>
                    <Link
                        to="/api"
                        onClick={() => playSFX('coin')}
                        style={{
                            padding: '0.8rem 1.2rem',
                            backgroundColor: 'transparent',
                            color: 'var(--neon-cyan)',
                            border: '2px solid var(--neon-cyan)',
                            fontFamily: 'var(--font-arcade)',
                            fontSize: '0.75rem',
                            textDecoration: 'none',
                            borderRadius: '4px'
                        }}
                    >
                        🎬 PROBAR API CINE
                    </Link>
                </div>
            </section>

            {/* Integrantes */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-yellow)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                    👾 INTEGRANTES DEL EQUIPO
                </h2>

                <div className="cards-grid">
                    {integrantes.map((persona) => (
                        <div
                            key={persona.id}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '2px solid var(--neon-cyan)',
                                borderRadius: '6px',
                                padding: '1.2rem',
                                textAlign: 'center'
                            }}
                        >
                            <img
                                src={persona.avatar}
                                alt={persona.nombre}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/120?text=Avatar'; }}
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--neon-pink)',
                                    objectFit: 'cover',
                                    marginBottom: '1rem'
                                }}
                            />
                            <h3 style={{ color: 'var(--text-color)', fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                                {persona.nombre}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                {persona.rol}
                            </p>
                            <Link
                                to="/perfiles"
                                onClick={() => playSFX('coin')}
                                style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: 'var(--card-hover)',
                                    color: 'var(--neon-yellow)',
                                    border: '1px solid var(--neon-yellow)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    borderRadius: '4px'
                                }}
                            >
                                VER PERFIL →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}