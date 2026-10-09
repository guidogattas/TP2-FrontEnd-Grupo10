import PerfilCard from '../components/layout/PerfilCard.jsx';

export default function Perfiles() {
  const integrantes = [
    {
      id: 1,
      nombre: 'Guido Gattás',
      rol: 'Front-End / SPA Architecture',
      bio: 'Enfocado en la arquitectura SPA con React, gestión de estado y modularización de componentes.',
      avatar: '/img/guido-avatar.png',
      sfx: 'tmnt-turtles-in-time-ost-cowabunga',
      juegoFavorito: 'TMNT: Turtles in Time',
      habilidades: ['React', 'Vite', 'JavaScript', 'CSS Grid']
    },
    {
      id: 2,
      nombre: 'Lucas Katz',
      rol: 'Front-End / Responsive & Styles',
      bio: 'Enfocado en la experiencia de usuario, maquetado responsivo y animaciones CSS neón.',
      avatar: '/img/lucas-avatar.png',
      sfx: 'coin',
      juegoFavorito: 'Street Fighter II',
      habilidades: ['React', 'CSS Flexbox/Grid', 'UX/UI']
    },
    {
      id: 3,
      nombre: 'Belén Gatto',
      rol: 'Front-End / UI & Layout Design',
      bio: 'Enfocada en el diseño visual de la interfaz, paleta de colores, componentes y wireframes.',
      avatar: '/img/belen-avatar.png',
      sfx: 'pacman',
      juegoFavorito: 'Pac-Man',
      habilidades: ['React UI', 'Figma', 'Diseño Responsivo']
    },
    {
      id: 4,
      nombre: 'Gonzalo Santini',
      rol: 'Front-End / Routing & Data',
      bio: 'Enfocado en la lógica de navegación con React Router, consumo de APIs y manejo de datos JSON.',
      avatar: '/img/gonzalo-avatar.png',
      sfx: 'radar-scan',
      juegoFavorito: 'Metal Slug',
      habilidades: ['React Router', 'Fetch API', 'JSON Data']
    }
  ];

  return (
    <div className="section-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          👥 PERFILES DEL GRUPO 10
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Conocé a los integrantes del equipo, sus áreas de enfoque y efectos de sonido asignados.
        </p>
      </header>

      <div className="cards-grid">
        {integrantes.map((persona) => (
          <PerfilCard key={persona.id} {...persona} />
        ))}
      </div>
    </div>
  );
}