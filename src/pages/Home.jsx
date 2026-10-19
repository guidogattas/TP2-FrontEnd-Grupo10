import { Link } from 'react-router-dom';
import { playSFX } from '../utils/sfx';

export default function Home() {
    const integrantes = [
        { id: 'guido', nombre: 'Guido Gattás', rol: 'Front-End / SPA Architecture', avatar: '/img/avatar-guido2.jpeg' },
        { id: 'lucas', nombre: 'Lucas Katz', rol: 'Front-End / Responsive & Styles', avatar: '/img/avatar-lucas.png' },
        { id: 'belen', nombre: 'Belén Gatto', rol: 'Front-End / UI & Layout Design', avatar: '/img/avatar-belen.jpeg' },
        { id: 'gonzalo', nombre: 'Gonzalo Santini', rol: 'Front-End / Routing & Data', avatar: '/img/avatar-gonzalo.jpg' },
    ];

    return (
        <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Banner Principal & Presentación del Equipo */}
            <section style={{
                backgroundColor: 'var(--card-bg)',
                border: '3px solid var(--neon-pink)',
                borderRadius: '8px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                marginBottom: '2.5rem',
                boxShadow: '0 0 15px rgba(255, 0, 127, 0.3)'
            }}>
                <p style={{ color: 'var(--neon-yellow)', fontFamily: 'var(--font-arcade)', fontSize: '0.75rem', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                    IFTS N° 29 — DESARROLLO DE SISTEMAS WEB 2026
                </p>

                <h1 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-cyan)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    marginBottom: '1.2rem',
                    lineHeight: '1.5',
                    textShadow: '0 0 10px var(--neon-cyan)'
                }}>
                    🕹️ GRUPO 10 <br /> RETRO ARCADE SPA
                </h1>

                <div style={{
                    backgroundColor: '#0d041a',
                    border: '1px solid var(--neon-cyan)',
                    borderRadius: '6px',
                    padding: '1.2rem',
                    maxWidth: '850px',
                    margin: '0 auto 1.5rem auto',
                    textAlign: 'left',
                    lineHeight: '1.6'
                }}>
                    <h2 style={{ color: 'var(--neon-yellow)', fontFamily: 'var(--font-arcade)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                        👾 SOBRE NOSOTROS Y EL PROYECTO
                    </h2>
                    <p style={{ color: 'var(--text-color)', marginBottom: '0.8rem', fontSize: '1rem' }}>
                        Somos el <strong>Grupo 10</strong>. Cursamos la carrera de Desarrollo de Software y armamos este proyecto combinando dos cosas que nos gustan: la tecnología web moderna y la estética retro de fichines/arcades.
                    </p>
                    <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                        En esta app vas a encontrar un catálogo interactivo con filtro de juegos retro, un buscador de pelis en tiempo real consumiendo la OMDb API, la bitácora donde registramos nuestro avance y los perfiles de cada uno de nosotros.
                    </p>
                </div>

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

            {/* Tarjetas de Integrantes */}
            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-yellow)', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                    👾 INTEGRANTES DEL EQUIPO
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }}>
                    {integrantes.map((persona) => (
                        <div
                            key={persona.id}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '2px solid var(--neon-cyan)',
                                borderRadius: '6px',
                                padding: '1.5rem 1.2rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                boxSizing: 'border-box'
                            }}
                        >
                            <img
                                src={persona.avatar}
                                alt={persona.nombre}
                                onError={(e) => { e.target.src = 'https://placehold.co/120x120/190a35/00f0ff?text=Avatar'; }}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--neon-pink)',
                                    objectFit: 'cover',
                                    marginBottom: '1rem'
                                }}
                            />
                            <h3 style={{ color: 'var(--text-color)', fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                                {persona.nombre}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                {persona.rol}
                            </p>
                            <Link
                                to={`/perfiles/${persona.id}`}
                                onClick={() => playSFX('coin')}
                                style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1rem',
                                    backgroundColor: 'var(--card-hover)',
                                    color: 'var(--neon-yellow)',
                                    border: '1px solid var(--neon-yellow)',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    borderRadius: '4px',
                                    marginTop: 'auto'
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