import { playSFX } from '../../utils/sfx.js';

export default function PerfilCard({ nombre, rol, bio, avatar, sfx, juegoFavorito, habilidades }) {
    return (
        <article className="perfil-card" style={{
            backgroundColor: 'var(--card-bg)',
            border: '2px solid var(--neon-pink)',
            borderRadius: '8px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 0 12px rgba(255, 0, 127, 0.25)',
            transition: 'transform 0.2s ease, border-color 0.2s ease'
        }}>
            <div>
                <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
                    <img
                        src={avatar}
                        alt={nombre}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/120?text=Avatar'; }}
                        style={{
                            width: '110px',
                            height: '110px',
                            borderRadius: '50%',
                            border: '3px solid var(--neon-cyan)',
                            objectFit: 'cover',
                            marginBottom: '0.8rem',
                            boxShadow: '0 0 10px var(--neon-cyan)'
                        }}
                    />
                    <h2 style={{ color: 'var(--text-color)', fontSize: '1.4rem', marginBottom: '0.3rem' }}>
                        {nombre}
                    </h2>
                    <span style={{
                        color: 'var(--neon-yellow)',
                        fontFamily: 'var(--font-arcade)',
                        fontSize: '0.75rem',
                        display: 'block',
                        letterSpacing: '0.5px'
                    }}>
                        {rol}
                    </span>
                </div>

                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.05rem',
                    lineHeight: '1.4',
                    marginBottom: '1.2rem',
                    textAlign: 'center'
                }}>
                    {bio}
                </p>

                <div style={{
                    backgroundColor: 'var(--bg-color)',
                    padding: '0.9rem',
                    borderRadius: '6px',
                    border: '1px solid var(--card-hover)',
                    marginBottom: '1rem'
                }}>
                    <p style={{ color: 'var(--neon-green)', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                        🎮 <strong>Juego Favorito:</strong> <span style={{ color: '#fff' }}>{juegoFavorito}</span>
                    </p>

                    <p style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                        🛠️ <strong>Tech Stack / Habilidades:</strong>
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {habilidades.map((skill, index) => (
                            <span
                                key={index}
                                style={{
                                    padding: '0.2rem 0.6rem',
                                    backgroundColor: 'var(--card-bg)',
                                    border: '1px solid var(--neon-pink)',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-color)'
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={() => playSFX(sfx)}
                style={{
                    width: '100%',
                    padding: '0.7rem',
                    backgroundColor: 'var(--neon-pink)',
                    color: '#000',
                    border: 'none',
                    fontFamily: 'var(--font-arcade)',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    marginTop: '0.5rem',
                    boxShadow: '0 0 8px rgba(255, 0, 127, 0.4)'
                }}
            >
                🔊 REPRODUCIR SFX
            </button>
        </article>
    );
}