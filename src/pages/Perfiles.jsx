import PerfilCard from '../components/layout/PerfilCard.jsx';

export default function Perfiles() {
  const integrantes = [
    {
      id: 1,
      nombre: 'Guido Gattás',
      rol: 'Front-End / SPA Architecture',
      bio: 'Enfocado en la arquitectura SPA con React, gestión de estado y modularización de componentes.',
      avatar: '/img/avatar-guido2.jpeg',
      sfx: 'tmnt-turtles-in-time-ost-cowabunga',
      juegoFavorito: 'TMNT: Turtles in Time',
      habilidades: ['HTML5 Semantic', 'CSS3 / Flexbox', 'JavaScript ES6+', 'React & Vite', 'Git & GitHub']
    },
    {
      id: 2,
      nombre: 'Lucas Katz',
      rol: 'Front-End / Responsive & Styles',
      bio: 'Enfocado en la experiencia de usuario, maquetado responsivo y animaciones CSS neón.',
      avatar: '/img/avatar-lucas.png',
      sfx: 'coin',
      juegoFavorito: 'Doom',
      habilidades: ['HTML5', 'CSS Grid / Flexbox', 'Responsive Design', 'Media Queries', 'UI/UX Design']
    },
    {
      id: 3,
      nombre: 'Belén Gatto',
      rol: 'Front-End / UI & Layout Design',
      bio: 'Enfocada en el diseño visual de la interfaz, paleta de colores, componentes y wireframes.',
      avatar: '/img/avatar-belen.jpeg',
      sfx: 'pacman',
      juegoFavorito: 'Pac-Man',
      habilidades: ['HTML5 / CSS3', 'Figma Prototyping', 'Diseño Responsivo', 'Wireframing', 'Estilos Neón']
    },
    {
      id: 4,
      nombre: 'Gonzalo Santini',
      rol: 'Front-End / Routing & Data',
      bio: 'Enfocado en la lógica de navegación con React Router, consumo de APIs y manejo de datos JSON.',
      avatar: '/img/avatar-gonzalo.jpg',
      sfx: 'radar-scan',
      juegoFavorito: 'Heretic',
      habilidades: ['JavaScript ES6', 'Fetch API / Async', 'Estructura JSON', 'React Router', 'DOM Manipulation']
    }
  ];

  return (
    <div className="section-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          👥 PERFILES DEL GRUPO 10
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Conocé a los integrantes del equipo, sus áreas de enfoque y efectos de sonido asignados.
        </p>
      </header>

      {/* Grilla 2x2 Responsiva */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {integrantes.map((persona) => (
          <PerfilCard key={persona.id} {...persona} />
        ))}
      </div>
    </div>
  );
}