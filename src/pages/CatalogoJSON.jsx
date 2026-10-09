import { useState } from 'react';
import juegosData from '../data/juegos.json';
import { playSFX } from '../utils/sfx';

export default function CatalogoJSON() {
  const [busqueda, setBusqueda] = useState('');
  const [generoSeleccionado, setGeneroSeleccionado] = useState('TODOS');
  const [juegoModal, setJuegoModal] = useState(null);

  // Extraer géneros únicos dinámicamente
  const generos = ['TODOS', ...new Set(juegosData.map((j) => j.genero))];

  // Filtro combinado en tiempo real
  const juegosFiltrados = juegosData.filter((juego) => {
    const coincideTexto = juego.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          juego.desarrollador.toLowerCase().includes(busqueda.toLowerCase());
    const coincideGenero = generoSeleccionado === 'TODOS' || juego.genero === generoSeleccionado;
    return coincideTexto && coincideGenero;
  });

  const abrirModal = (juego) => {
    playSFX('coin');
    setJuegoModal(juego);
  };

  const cerrarModal = () => {
    setJuegoModal(null);
  };

  return (
    <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
          🕹️ CATÁLOGO ARCADE & RETRO
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Explorá nuestra base de datos local con {juegosData.length} clásicos de los 80s y 90s.
        </p>
      </header>

      {/* Barra de Filtros y Búsqueda */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem',
        backgroundColor: 'var(--card-bg)',
        padding: '1rem',
        borderRadius: '6px',
        border: '1px solid var(--neon-pink)'
      }}>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', color: 'var(--neon-yellow)', marginBottom: '0.4rem', fontSize: '1rem' }}>
            🔍 Buscar por nombre o desarrollador:
          </label>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ej: Pac-Man, Konami, LucasArts..."
            style={{
              width: '100%',
              padding: '0.6rem',
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--neon-cyan)',
              color: 'var(--text-color)',
              fontFamily: 'var(--font-retro)',
              fontSize: '1.1rem',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ flex: '1 1 180px' }}>
          <label style={{ display: 'block', color: 'var(--neon-yellow)', marginBottom: '0.4rem', fontSize: '1rem' }}>
            🎮 Filtrar por género:
          </label>
          <select
            value={generoSeleccionado}
            onChange={(e) => setGeneroSeleccionado(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem',
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--neon-cyan)',
              color: 'var(--text-color)',
              fontFamily: 'var(--font-retro)',
              fontSize: '1.1rem',
              borderRadius: '4px'
            }}
          >
            {generos.map((gen) => (
              <option key={gen} value={gen}>{gen}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Estado cuando no se encuentran resultados */}
      {juegosFiltrados.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: 'var(--card-bg)',
          border: '2px dashed var(--neon-pink)',
          borderRadius: '8px'
        }}>
          <h2 style={{ color: 'var(--neon-pink)', fontFamily: 'var(--font-arcade)', fontSize: '1rem', marginBottom: '1rem' }}>
            ⚠️ NO SE ENCONTRARON RESULTADOS
          </h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            Pruebe cambiando los términos de búsqueda o restableciendo los filtros.
          </p>
          <button
            onClick={() => { setBusqueda(''); setGeneroSeleccionado('TODOS'); }}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: 'var(--neon-cyan)',
              color: '#000',
              border: 'none',
              fontFamily: 'var(--font-arcade)',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            🔄 RESTABLECER FILTROS
          </button>
        </div>
      )}

      {/* Grilla de Tarjetas */}
      <div className="cards-grid">
        {juegosFiltrados.map((juego) => (
          <article
            key={juego.id}
            onClick={() => abrirModal(juego)}
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '2px solid var(--neon-pink)',
              borderRadius: '6px',
              padding: '1rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div>
              <img
                src={juego.imagen}
                alt={juego.titulo}
                onError={(e) => {
                  e.target.src = `https://placehold.co/400x300/190a35/00f0ff?text=${encodeURIComponent(juego.titulo)}`;
                }}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '0.8rem',
                  border: '1px solid var(--neon-cyan)'
                }}
              />
              <span style={{ fontSize: '0.85rem', color: 'var(--neon-yellow)' }}>
                {juego.anio} — {juego.genero}
              </span>
              <h3 style={{ color: 'var(--text-color)', fontSize: '1.4rem', margin: '0.3rem 0' }}>
                {juego.titulo}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.3', marginBottom: '1rem' }}>
                {juego.descripcion.substring(0, 70)}...
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--card-hover)', paddingTop: '0.6rem' }}>
              <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>
                ⭐ {juego.rating}
              </span>
              <span style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>
                VER MÁS →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Desplegable */}
      {juegoModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '1rem', zIndex: 2000
        }}>
          <div style={{
            backgroundColor: 'var(--card-bg)',
            border: '3px solid var(--neon-cyan)',
            borderRadius: '8px',
            maxWidth: '500px', width: '100%',
            padding: '1.5rem',
            position: 'relative',
            maxHeight: '90vh', overflowY: 'auto'
          }}>
            <button
              onClick={cerrarModal}
              style={{
                position: 'absolute', top: '0.8rem', right: '0.8rem',
                backgroundColor: 'var(--neon-pink)', color: '#000',
                border: 'none', fontFamily: 'var(--font-arcade)',
                padding: '0.4rem 0.8rem', cursor: 'pointer'
              }}
            >
              ✖
            </button>

            <h2 style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-arcade)', fontSize: '1.1rem', marginBottom: '1rem', paddingRight: '2rem' }}>
              {juegoModal.titulo}
            </h2>

            <img
              src={juegoModal.imagen}
              alt={juegoModal.titulo}
              onError={(e) => {
                e.target.src = `https://placehold.co/400x300/190a35/00f0ff?text=${encodeURIComponent(juegoModal.titulo)}`;
              }}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem', border: '1px solid var(--neon-pink)' }}
            />

            <p style={{ color: 'var(--text-color)', marginBottom: '1rem', lineHeight: '1.4' }}>
              {juegoModal.descripcion}
            </p>

            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <li><strong>Año:</strong> {juegoModal.anio}</li>
              <li><strong>Género:</strong> {juegoModal.genero}</li>
              <li><strong>Desarrollador:</strong> {juegoModal.desarrollador}</li>
              <li><strong>Plataforma:</strong> {juegoModal.plataforma}</li>
              <li><strong>Jugadores:</strong> {juegoModal.jugadores}</li>
              <li><strong>Rating:</strong> ⭐ {juegoModal.rating} / 10</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}