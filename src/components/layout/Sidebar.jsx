import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const links = [
        { path: '/', label: '🎮 PORTADA' },
        { path: '/perfiles', label: '👥 PERFILES' },
        { path: '/catalogo', label: '🕹️ CATÁLOGO' },
        { path: '/api', label: '🎬 API CINE' },
        { path: '/arbol', label: '🌳 ÁRBOL COMP.' },
        { path: '/bitacora', label: '📜 BITÁCORA' },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-brand">
                <h2>&gt;&gt; GRUPO 10</h2>
                <small style={{ color: 'var(--neon-yellow)' }}>RETRO ARCADE SPA</small>
            </div>

            <nav className="sidebar-nav">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        onClick={toggleSidebar}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}