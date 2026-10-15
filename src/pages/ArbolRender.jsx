import { useState } from 'react';
import { playSFX } from '../utils/sfx';

const arbolData = {
    name: 'App',
    type: 'component',
    descripcion: 'Punto de entrada de la SPA',
    children: [
        {
            name: 'BrowserRouter',
            type: 'router',
            descripcion: 'Enrutador principal (React Router)',
            children: [
                {
                    name: 'Layout',
                    type: 'component',
                    descripcion: 'Estructura general de la página',
                    children: [
                        {
                            name: 'Sidebar',
                            type: 'component',
                            descripcion: 'Navegación lateral compartida',
                            children: []
                        },
                        {
                            name: 'Routes (Main Content)',
                            type: 'router',
                            descripcion: 'Contenedor de vistas dinámicas',
                            children: [
                                { name: 'Home ( / )', type: 'page', descripcion: 'Portada y presentación del equipo', children: [] },
                                {
                                    name: 'Catalogo ( /catalogo )',
                                    type: 'page',
                                    descripcion: 'Grilla interactiva de juegos',
                                    children: [
                                        { name: 'juegos.json', type: 'data', descripcion: 'Módulo de datos locales', children: [] }
                                    ]
                                },
                                {
                                    name: 'ApiCine ( /api )',
                                    type: 'page',
                                    descripcion: 'Buscador de cine/series',
                                    children: [
                                        { name: 'OMDb API', type: 'api', descripcion: 'Consumo externo vía fetch', children: [] }
                                    ]
                                },
                                {
                                    name: 'Perfiles ( /perfiles )',
                                    type: 'page',
                                    descripcion: 'Lista general del equipo',
                                    children: []
                                },
                                {
                                    name: 'PerfilDetalle ( /perfiles/:id )',
                                    type: 'page',
                                    descripcion: 'Ruta dinámica individual',
                                    children: [
                                        { name: 'integrantesData.js', type: 'data', descripcion: 'Datos locales de los miembros', children: [] }
                                    ]
                                },
                                { name: 'ArbolRender ( /arbol )', type: 'page', descripcion: 'Vista actual (Jerarquía)', children: [] },
                                {
                                    name: 'Bitacora ( /bitacora )',
                                    type: 'page',
                                    descripcion: 'Registro del proceso',
                                    children: [
                                        { name: 'bitacoraData.js', type: 'data', descripcion: 'Historial de avances', children: [] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

function TreeNode({ node, level = 0, isLastChild = false }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const hasChildren = node.children && node.children.length > 0;

    const handleToggle = () => {
        if (hasChildren) {
            playSFX('click');
            setIsExpanded(!isExpanded);
        }
    };

    const getBadgeColor = (type) => {
        switch (type) {
            case 'component': return 'var(--neon-cyan)';
            case 'router': return 'var(--neon-pink)';
            case 'page': return 'var(--neon-yellow)';
            case 'data': return 'var(--neon-green)';
            case 'api': return '#a100ff';
            default: return '#fff';
        }
    };

    const color = getBadgeColor(node.type);

    return (
        <div style={{ position: 'relative', marginTop: '0.4rem', marginBottom: '0.4rem' }}>

            {/* Contenedor del nodo y conectores */}
            <div style={{ display: 'flex', alignItems: 'center' }}>

                {/* Conector horizontal/codo que va al badge */}
                {level > 0 && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        left: `-${1.35 * level}rem`,
                        width: '1.25rem',
                        height: '1.8rem',
                    }}>
                        {/* Línea horizontal */}
                        <div style={{
                            width: '100%',
                            height: '0px',
                            borderTop: '2px dotted var(--text-muted)',
                            opacity: 0.4
                        }} />
                    </div>
                )}

                {/* El Badge/Bloque del Nodo */}
                <div
                    onClick={handleToggle}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        cursor: hasChildren ? 'pointer' : 'default',
                        backgroundColor: '#0d041a',
                        border: `1.5px solid ${color}`,
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        boxShadow: `0 0 8px ${color}25`,
                        transition: 'all 0.2s ease',
                        userSelect: 'none',
                        fontSize: '0.85rem'
                    }}
                >
                    {/* Símbolo de Expansión compacto */}
                    {hasChildren && (
                        <span style={{
                            color: 'var(--text-color)',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            marginRight: '0.2rem'
                        }}>
                            {isExpanded ? '[-]' : '[+]'}
                        </span>
                    )}

                    {/* Nombre */}
                    <span style={{
                        color: color,
                        fontFamily: 'var(--font-arcade)',
                        fontSize: '0.8rem',
                        textShadow: `0 0 4px ${color}50`
                    }}>
                        {node.name}
                    </span>

                    {/* Breve descripción en la misma fila para que no ocupe tanto espacio */}
                    <span style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        borderLeft: '1px solid #333',
                        paddingLeft: '0.6rem',
                        marginLeft: '0.4rem',
                        fontStyle: 'italic',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {node.descripcion}
                    </span>
                </div>
            </div>

            {/* Renderizado recursivo de los hijos si está expandido con margen izquierdo compacto */}
            {hasChildren && isExpanded && (
                <div style={{
                    position: 'relative',
                    paddingLeft: '1.4rem',
                    marginLeft: '0.4rem',
                    // Línea vertical punteada de nivel
                    borderLeft: '2px dotted rgba(255, 255, 255, 0.12)',
                    marginTop: '0.2rem'
                }}>
                    {node.children.map((childNode, index) => (
                        <TreeNode
                            key={index}
                            node={childNode}
                            level={level + 1}
                            isLastChild={index === node.children.length - 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ArbolRender() {
    return (
        <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'var(--font-arcade)', color: 'var(--neon-cyan)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    🌳 ÁRBOL DE COMPONENTES
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Jerarquía de componentes y rutas de nuestra SPA en tiempo real. <br />
                    Hacé clic en los nodos que tienen <strong>[+] / [-]</strong> para abrir o cerrar sus ramas.
                </p>
            </header>

            <article style={{
                backgroundColor: 'var(--card-bg)',
                border: '3px solid var(--neon-pink)',
                borderRadius: '12px',
                padding: '1.5rem 2rem',
                boxShadow: '0 0 20px rgba(255, 0, 127, 0.25)',
                overflowX: 'auto'
            }}>
                {/* Leyenda Compacta y Ordenada */}
                <div style={{
                    display: 'flex',
                    gap: '1.2rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.8rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #2a144e',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-retro)' }}>Leyenda:</span>
                    <span style={{ color: 'var(--neon-cyan)', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--neon-cyan)', borderRadius: '2px' }} /> Estructural
                    </span>
                    <span style={{ color: 'var(--neon-pink)', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--neon-pink)', borderRadius: '2px' }} /> Enrutamiento
                    </span>
                    <span style={{ color: 'var(--neon-yellow)', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--neon-yellow)', borderRadius: '2px' }} /> Vistas (Pages)
                    </span>
                    <span style={{ color: 'var(--neon-green)', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--neon-green)', borderRadius: '2px' }} /> Datos (JSON/JS)
                    </span>
                    <span style={{ color: '#a100ff', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: '#a100ff', borderRadius: '2px' }} /> API
                    </span>
                </div>

                {/* Raíz del Árbol */}
                <div style={{ paddingLeft: '0.5rem' }}>
                    <TreeNode node={arbolData} />
                </div>
            </article>
        </div>
    );
}