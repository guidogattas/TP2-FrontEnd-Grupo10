import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INTEGRANTES_DATA } from '../data/integrantesData';
import { playSFX } from '../utils/sfx';

export default function PerfilDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const integrante = INTEGRANTES_DATA.find((item) => item.id === id);

    // Estados locales para las interacciones de cada integrante
    const [termLogs, setTermLogs] = useState(['$ sys.init_module()', 'Guido Shell v2.6 Ready.']);
    const [cmdInput, setCmdInput] = useState('');
    const [score, setScore] = useState(100);
    const [activeThemeColor, setActiveThemeColor] = useState('var(--neon-pink)');
    const [stats, setStats] = useState({ HP: 100, MP: 50, STR: 18, DEF: 12 });

    if (!integrante) {
        return (
            <div className="section-container" style={{ textAlign: 'center', padding: '3rem' }}>
                <h2 style={{ color: 'var(--neon-pink)', fontFamily: 'var(--font-arcade)' }}>
                    ⚠️ PERFIL NO ENCONTRADO
                </h2>
                <button
                    onClick={() => navigate('/perfiles')}
                    style={{
                        marginTop: '1.5rem',
                        padding: '0.6rem 1.2rem',
                        backgroundColor: 'var(--neon-cyan)',
                        color: '#000',
                        border: 'none',
                        fontFamily: 'var(--font-arcade)',
                        cursor: 'pointer'
                    }}
                >
                    ⬅ VOLVER A PERFILES
                </button>
            </div>
        );
    }

    // Lógicas JS
    const handleTerminalSubmit = (e) => {
        e.preventDefault();
        if (!cmdInput.trim()) return;
        playSFX('click');
        setTermLogs((prev) => [...prev, `$ ${cmdInput}`, `> Executed: ${cmdInput.toUpperCase()}`]);
        setCmdInput('');
    };

    const handleRngRoll = () => {
        playSFX('coin');
        setStats({
            HP: Math.floor(Math.random() * 50) + 80,
            MP: Math.floor(Math.random() * 40) + 30,
            STR: Math.floor(Math.random() * 10) + 15,
            DEF: Math.floor(Math.random() * 10) + 10
        });
    };

    // En el perfil de Belén, usaremos el color dinámico activo
    const borderColor = integrante.id === 'belen' ? activeThemeColor : 'var(--neon-pink)';
    const glowShadow = integrante.id === 'belen' ? `0 0 20px ${activeThemeColor}` : '0 0 15px rgba(255, 0, 127, 0.25)';

    return (
        <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
                to="/perfiles"
                onClick={() => playSFX('click')}
                style={{
                    display: 'inline-block',
                    marginBottom: '1.5rem',
                    color: 'var(--neon-cyan)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-arcade)',
                    fontSize: '0.8rem'
                }}
            >
                ⬅ VOLVER AL EQUIPO
            </Link>

            <article
                style={{
                    backgroundColor: 'var(--card-bg)',
                    border: `3px solid ${borderColor}`,
                    borderRadius: '12px',
                    padding: '2.5rem 2rem',
                    boxShadow: glowShadow,
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* Avatar centrado */}
                <div style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 1.5rem auto',
                    border: `3px solid ${integrante.id === 'belen' ? activeThemeColor : 'var(--neon-cyan)'}`,
                    boxShadow: `0 0 15px ${integrante.id === 'belen' ? activeThemeColor : 'var(--neon-cyan)'}`
                }}>
                    <img
                        src={integrante.avatar}
                        alt={integrante.nombre}
                        onError={(e) => { e.target.src = 'https://placehold.co/150x150/190a35/00f0ff?text=AVATAR'; }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Encabezado e Info Principal */}
                <h1 style={{
                    fontFamily: 'var(--font-arcade)',
                    color: integrante.id === 'belen' ? activeThemeColor : 'var(--neon-cyan)',
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    transition: 'color 0.3s ease'
                }}>
                    {integrante.nombre}
                </h1>

                <p style={{ color: 'var(--neon-yellow)', fontSize: '1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-arcade)' }}>
                    {integrante.rol}
                </p>

                <p style={{ color: 'var(--text-color)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
                    {integrante.bio}
                </p>

                {/* Tarjetas de Juego y SFX alineadas al centro */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                    <div style={{
                        backgroundColor: '#0d041a',
                        padding: '1.2rem',
                        borderRadius: '8px',
                        border: '1px solid var(--card-hover)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ color: 'var(--neon-pink)', marginBottom: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-retro)' }}>🎮 Juego Favorito</h3>
                        <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>{integrante.juegoFavorito}</p>
                    </div>

                    <div style={{
                        backgroundColor: '#0d041a',
                        padding: '1.2rem',
                        borderRadius: '8px',
                        border: '1px solid var(--card-hover)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ color: 'var(--neon-pink)', marginBottom: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-retro)' }}>🔊 Efecto Asignado</h3>
                        <button
                            onClick={() => playSFX(integrante.sfx)}
                            style={{
                                backgroundColor: 'var(--neon-pink)',
                                color: '#000',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                fontFamily: 'var(--font-arcade)',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                fontWeight: 'bold'
                            }}
                        >
                            🔊 REPRODUCIR SFX
                        </button>
                    </div>
                </div>

                {/* Tech Stack Centrado */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: 'var(--neon-yellow)', marginBottom: '1rem', fontSize: '1rem', fontFamily: 'var(--font-retro)' }}>
                        🛠️ Tech Stack / Habilidades
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
                        {integrante.habilidades.map((hab, idx) => (
                            <span
                                key={idx}
                                style={{
                                    backgroundColor: '#110826',
                                    color: 'var(--neon-cyan)',
                                    border: '1px solid var(--neon-pink)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                {hab}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Módulo de Interatividad JS del TP1 Centrado */}
                <div style={{
                    backgroundColor: '#0d041a',
                    border: `2px dashed ${borderColor}`,
                    borderRadius: '8px',
                    padding: '1.8rem',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{
                        color: integrante.id === 'belen' ? activeThemeColor : 'var(--neon-cyan)',
                        fontFamily: 'var(--font-arcade)',
                        fontSize: '1rem',
                        marginBottom: '1.2rem'
                    }}>
                        {integrante.jsFeature.titulo}
                    </h3>

                    {/* Guido: Terminal JS */}
                    {integrante.jsFeature.tipo === 'terminal' && (
                        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <div style={{
                                backgroundColor: '#000',
                                border: '1px solid var(--neon-cyan)',
                                padding: '0.8rem',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                color: 'var(--neon-green)',
                                height: '110px',
                                overflowY: 'auto',
                                marginBottom: '0.8rem',
                                textAlign: 'left'
                            }}>
                                {termLogs.map((log, i) => <div key={i}>{log}</div>)}
                            </div>
                            <form onSubmit={handleTerminalSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    value={cmdInput}
                                    onChange={(e) => setCmdInput(e.target.value)}
                                    placeholder="Escribí un comando JS..."
                                    style={{ flex: 1, padding: '0.5rem', backgroundColor: '#110826', border: '1px solid var(--neon-pink)', color: '#fff' }}
                                />
                                <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--neon-pink)', color: '#000', border: 'none', fontWeight: 'bold' }}>ENVIAR</button>
                            </form>
                        </div>
                    )}

                    {/* Lucas: Contador/Score */}
                    {integrante.jsFeature.tipo === 'counter' && (
                        <div>
                            <div style={{ fontSize: '2.2rem', color: 'var(--neon-yellow)', fontFamily: 'var(--font-arcade)', marginBottom: '1.2rem' }}>
                                SCORE: {score}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <button onClick={() => { setScore(s => s + 50); playSFX('coin'); }} style={{ padding: '0.6rem 1.2rem', backgroundColor: 'var(--neon-green)', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>+50 DAMAGE</button>
                                <button onClick={() => { setScore(100); playSFX('click'); }} style={{ padding: '0.6rem 1.2rem', backgroundColor: 'var(--neon-pink)', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>RESET</button>
                            </div>
                        </div>
                    )}

                    {/* Belén: Selector de Luces y Colores Neón Dinámico */}
                    {integrante.jsFeature.tipo === 'theme' && (
                        <div>
                            <p style={{ color: activeThemeColor, fontWeight: 'bold', marginBottom: '1rem', fontSize: '1rem' }}>
                                ¡Hacé clic en las gemas neón para cambiar la iluminación del perfil!
                            </p>
                            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center' }}>
                                {[
                                    { name: 'Pink', hex: '#ff007f' },
                                    { name: 'Cyan', hex: '#00f0ff' },
                                    { name: 'Yellow', hex: '#ffe600' },
                                    { name: 'Green', hex: '#39ff14' },
                                    { name: 'Purple', hex: '#a100ff' }
                                ].map((col, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setActiveThemeColor(col.hex); playSFX('click'); }}
                                        title={col.name}
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            backgroundColor: col.hex,
                                            border: activeThemeColor === col.hex ? '3px solid #fff' : '2px solid transparent',
                                            boxShadow: `0 0 12px ${col.hex}`,
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s ease'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gonzalo: RNG Stats */}
                    {integrante.jsFeature.tipo === 'rng' && (
                        <div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                                {Object.entries(stats).map(([k, v]) => (
                                    <div key={k} style={{ backgroundColor: '#110826', padding: '0.6rem 1.2rem', borderRadius: '4px', border: '1px solid var(--neon-cyan)' }}>
                                        <span style={{ color: 'var(--neon-yellow)', fontFamily: 'var(--font-retro)' }}>{k}: </span>
                                        <strong style={{ color: '#fff', fontSize: '1.1rem' }}>{v}</strong>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleRngRoll}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    backgroundColor: 'var(--neon-cyan)',
                                    color: '#000',
                                    border: 'none',
                                    fontFamily: 'var(--font-arcade)',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                🎲 REROLL STATS
                            </button>
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
}