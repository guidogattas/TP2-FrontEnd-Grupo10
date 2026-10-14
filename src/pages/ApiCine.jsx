import { useState, useEffect } from 'react';
import { playSFX } from '../utils/sfx';

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'c9def052';

export default function ApiCine() {
    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [expandedPlots, setExpandedPlots] = useState({});

    const togglePlot = (id) => {
        setExpandedPlots((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const buscarPeliculasOMDb = async (termino) => {
        // Si no hay término, busca producciones masivas directo en la API
        const terminoBusqueda = termino.trim() || 'batman';

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(terminoBusqueda)}&type=movie&apikey=${OMDB_API_KEY}`);
            const data = await res.json();

            if (data.Response === 'False') {
                setShows([]);
                throw new Error(data.Error === 'Movie not found!' ? 'No se encontraron películas o series.' : data.Error);
            }

            // Detalle completo desde la API
            const promesasDetalles = data.Search.slice(0, 10).map(async (item) => {
                const resDetail = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&plot=full&apikey=${OMDB_API_KEY}`);
                return await resDetail.json();
            });

            const listaDetallada = await Promise.all(promesasDetalles);

            // Ordenar por popularidad en IMDb (votos)
            listaDetallada.sort((a, b) => {
                const votosA = parseInt((a.imdbVotes || '0').replace(/,/g, ''), 10);
                const votosB = parseInt((b.imdbVotes || '0').replace(/,/g, ''), 10);
                return votosB - votosA;
            });

            setShows(listaDetallada);
        } catch (err) {
            setError(err.message || 'Error al conectar con la API de cine.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarPeliculasOMDb('');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        playSFX('coin');
        buscarPeliculasOMDb(query);
    };

    return (
        <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                    🎬 BUSCADOR DE CINE Y SERIES (OMDb API)
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    Catálogo mundial devuelto en tiempo real por la API, ordenado por popularidad y rating.
                </p>
            </header>

            <form onSubmit={handleSubmit} style={{
                display: 'flex', gap: '1rem', marginBottom: '2rem',
                backgroundColor: 'var(--card-bg)', padding: '1rem',
                borderRadius: '6px', border: '1px solid var(--neon-pink)', flexWrap: 'wrap'
            }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscá películas o series (ej: Batman, Matrix, Spider-Man)..."
                    style={{
                        flex: '1 1 250px', padding: '0.7rem',
                        backgroundColor: 'var(--bg-color)', border: '1px solid var(--neon-cyan)',
                        color: 'var(--text-color)', fontFamily: 'var(--font-retro)', fontSize: '1.2rem', borderRadius: '4px'
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '0.7rem 1.5rem', backgroundColor: 'var(--neon-pink)', color: '#000',
                        border: 'none', fontFamily: 'var(--font-arcade)', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px'
                    }}
                >
                    🔍 BUSCAR CINE
                </button>
            </form>

            {loading && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--neon-yellow)', fontFamily: 'var(--font-arcade)' }}>
                    ⏳ CONSULTANDO CATÁLOGO EN TIEMPO REAL...
                </div>
            )}

            {error && (
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--card-bg)', border: '2px solid red', borderRadius: '6px', color: '#ff4d4d' }}>
                    ⚠️ {error}
                </div>
            )}

            {!loading && !error && shows.length > 0 && (
                <div className="cards-grid">
                    {shows.map((peli) => {
                        const posterGenerico = `https://placehold.co/400x600/190a35/00f0ff?text=POSTER+NO+DISPONIBLE`;
                        const posterInicial = (peli.Poster && peli.Poster !== 'N/A') ? peli.Poster : posterGenerico;
                        const isExpanded = !!expandedPlots[peli.imdbID];
                        const hasPlot = peli.Plot && peli.Plot !== 'N/A';

                        return (
                            <article
                                key={peli.imdbID}
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    border: '2px solid var(--neon-cyan)',
                                    borderRadius: '6px',
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div>
                                    <div style={{ width: '100%', aspectRatio: '2 / 3', overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem', border: '1px solid var(--neon-pink)' }}>
                                        <img
                                            src={posterInicial}
                                            alt={peli.Title}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = posterGenerico;
                                            }}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <h3 style={{ color: 'var(--text-color)', fontSize: '1.3rem', margin: '0.2rem 0 0.4rem 0', textAlign: 'center' }}>
                                        {peli.Title}
                                    </h3>

                                    <span style={{ fontSize: '0.85rem', color: 'var(--neon-yellow)', display: 'block', textAlign: 'center', marginBottom: '0.4rem' }}>
                                        {peli.Year} — {peli.Genre}
                                    </span>

                                    {peli.Actors && peli.Actors !== 'N/A' && (
                                        <div style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)', marginBottom: '0.8rem', textAlign: 'center' }}>
                                            🎭 <strong>Cast:</strong> {peli.Actors}
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                                        <a
                                            href={`https://www.justwatch.com/ar/buscar?q=${encodeURIComponent(peli.Title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                backgroundColor: '#110826',
                                                color: '#00f0ff',
                                                padding: '0.45rem 0.9rem',
                                                borderRadius: '20px',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                fontSize: '0.78rem',
                                                fontWeight: 'bold',
                                                textDecoration: 'none',
                                                border: '1.5px solid var(--neon-cyan)',
                                                boxShadow: '0 0 8px rgba(0, 240, 255, 0.25)',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            📺 Consultar Streaming en Argentina ↗
                                        </a>
                                    </div>

                                    <p style={{
                                        color: '#e0e0e0',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.4',
                                        fontFamily: 'system-ui, -apple-system, sans-serif',
                                        marginTop: '0.6rem',
                                        textAlign: 'justify',
                                        display: isExpanded ? 'block' : '-webkit-box',
                                        WebkitLineClamp: isExpanded ? 'none' : 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {hasPlot ? peli.Plot : 'No description available.'}
                                    </p>

                                    {hasPlot && peli.Plot.length > 120 && (
                                        <button
                                            onClick={() => togglePlot(peli.imdbID)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'var(--neon-pink)',
                                                cursor: 'pointer',
                                                fontSize: '0.8rem',
                                                fontWeight: 'bold',
                                                marginTop: '0.3rem',
                                                padding: 0,
                                                textDecoration: 'underline'
                                            }}
                                        >
                                            {isExpanded ? '▲ Leer menos' : '▼ Leer más...'}
                                        </button>
                                    )}
                                </div>

                                <div style={{ marginTop: '1.2rem', borderTop: '1px solid var(--card-hover)', paddingTop: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--neon-green)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                                        ⭐ {peli.imdbRating !== 'N/A' ? peli.imdbRating : 'N/A'}
                                    </span>
                                    <a
                                        href={`https://www.imdb.com/title/${peli.imdbID}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 'bold' }}
                                    >
                                        VER FICHA ↗
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}