import { Link } from 'react-router-dom';
import { playSFX } from '../utils/sfx';

export default function NotFound() {
    return (
        <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{
                backgroundColor: '#0d041a',
                border: '3px dashed var(--neon-pink)',
                borderRadius: '12px',
                padding: '4rem 2rem',
                boxShadow: '0 0 25px rgba(255, 0, 127, 0.3)'
            }}>
                <h1 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-pink)',
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    margin: '0',
                    lineHeight: '1',
                    textShadow: '0 0 20px var(--neon-pink)'
                }}>
                    404
                </h1>

                <h2 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: 'var(--neon-cyan)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    marginTop: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    GAME OVER
                </h2>

                <p style={{
                    color: 'var(--text-color)',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    maxWidth: '500px',
                    margin: '0 auto 2.5rem auto'
                }}>
                    La ruta a la que intentás acceder no existe, fue eliminada o te perdiste en el laberinto. ¡Insertá una moneda para continuar!
                </p>

                <Link
                    to="/"
                    onClick={() => playSFX('coin')}
                    style={{
                        display: 'inline-block',
                        padding: '0.8rem 1.5rem',
                        backgroundColor: 'var(--neon-cyan)',
                        color: '#000',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-arcade)',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        boxShadow: '0 0 10px var(--neon-cyan)',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    🕹️ VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
}