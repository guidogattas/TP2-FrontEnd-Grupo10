import { Link } from 'react-router-dom';
import { INTEGRANTES_DATA } from '../data/integrantesData';
import { playSFX } from '../utils/sfx';

export default function Perfiles() {
  return (
    <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          👥 PERFILES DEL GRUPO 10
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Seleccioná un integrante para explorar su ficha individual e interactividad JS.
        </p>
      </header>

      {/* Grilla 2x2 Responsiva */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {INTEGRANTES_DATA.map((persona) => (
          <article
            key={persona.id}
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '2px solid var(--neon-cyan)',
              borderRadius: '8px',
              padding: '1.5rem',
              textAlign: 'center'
            }}
          >
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 1rem auto',
              border: '2px solid var(--neon-pink)',
              boxShadow: '0 0 8px var(--neon-pink)'
            }}>
              <img
                src={persona.avatar}
                alt={persona.nombre}
                onError={(e) => { e.target.src = 'https://placehold.co/120x120/190a35/00f0ff?text=Avatar'; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h3 style={{ color: 'var(--text-color)', fontSize: '1.2rem', marginBottom: '0.3rem' }}>
              {persona.nombre}
            </h3>

            <p style={{ color: 'var(--neon-yellow)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {persona.rol}
            </p>

            <Link
              to={`/perfiles/${persona.id}`}
              onClick={() => playSFX('coin')}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--neon-pink)',
                color: '#000',
                textDecoration: 'none',
                fontFamily: 'var(--font-arcade)',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                borderRadius: '4px'
              }}
            >
              VER PERFIL COMPLETO →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}