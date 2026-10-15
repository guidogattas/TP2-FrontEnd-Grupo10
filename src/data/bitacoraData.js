export const bitacoraEntries = [
    {
        id: 1,
        fecha: "05/10/2026",
        fase: "Planificación",
        titulo: "Reunión por Meet: Lectura de la consigna del TP2 y arquitectura",
        resumen: "Acuerdo del stack (React + Vite + Router) y elección de API.",
        detalle: "Nos juntamos por Meet a repasar los 15 puntos de la consigna. Acordamos migrar la web a React utilizando Vite y React Router. Definimos mantener la temática Retro Arcade con paleta neón, crear un JSON local de 20 juegos clásicos y consumir la API pública de TVMaze para cine/series sin exponer claves privadas."
    },
    {
        id: 2,
        fecha: "06/10/2026",
        fase: "Infraestructura",
        titulo: "Setup del repositorio, React Router y despliegue en Vercel",
        resumen: "Inicialización del proyecto Vite, resolución de rebase en Git y deploy.",
        detalle: "Se creó el repositorio 'TP2-FrontEnd-Grupo10' en GitHub y se enviaron las invitaciones al equipo. Inicializamos el proyecto en local con React + Vite e instalamos 'react-router-dom'. Al vincularlo con GitHub se resolvió un conflicto de rebase con el README remoto mediante git push --force. Conectamos el repo a Vercel para deploy continuo."
    },
    {
        id: 3,
        fecha: "07/10/2026",
        fase: "Maquetado Base",
        titulo: "Estructura del Layout, Sidebar compartida y migración de assets",
        resumen: "Estilos globales neón, Sidebar con estado activo y menú mobile.",
        detalle: "Migramos todas las imágenes y avatares del TP1 hacia la carpeta 'public/img/'. Definimos los estilos globales en 'main.css' con variables CSS neón. Creamos el componente Layout con la Sidebar compartida que resalta la sección activa y se colapsa en celulares."
    },
    {
        id: 4,
        fecha: "07/10/2026",
        fase: "Recursos y SFX",
        titulo: "Organización de efectos de sonido (SFX) y módulo helper de audio",
        resumen: "Migración de audios arcade a public/sounds/ y función centralizada.",
        detalle: "Organizamos los archivos de sonido del proyecto (coin, pacman, radar-scan, cowabunga) dentro de la carpeta 'public/sounds/'. Implementamos un módulo helper 'sfx.js' para controlar las reproducciones de audio de forma limpia en los eventos de React."
    },
    {
        id: 5,
        fecha: "08/10/2026",
        fase: "Portada y Responsive",
        titulo: "Creación de catálogo JSON de 26 registros, Home e integración responsive",
        resumen: "Base de datos local, maquetado de Home y adaptación a celulares.",
        detalle: "Se creó la base local 'juegos.json' con 26 registros arcade y retro. Maquetamos 'Home.jsx' ajustando tipografías neón e integrando media queries globales en CSS para una correcta visualización en móviles (400px), tablets (900px) y escritorio (1200px)."
    },
    {
        id: 6,
        fecha: "09/10/2026",
        fase: "Catálogo y Perfiles",
        titulo: "Desarrollo del catálogo dinámico, perfiles de integrantes y disparadores SFX",
        resumen: "Buscador en tiempo real, filtro por género, modales y tarjetas de perfil con audio.",
        detalle: "Desarrollamos 'CatalogoJSON.jsx' consumiendo la lista extendida de 26 videojuegos con búsqueda en tiempo real, select de género y modal. Creamos la sección 'Perfiles.jsx' con componentes reutilizables 'PerfilCard.jsx' parametrizados por props y botones disparadores de efectos de sonido."
    },
    {
        id: 7,
        fecha: "13/10/2026",
        fase: "Consumo de API",
        titulo: "Integración de la OMDb API con fetch, popularidad y consulta de streaming",
        resumen: "Buscador de cine/series en tiempo real ordenado por popularidad en IMDb y disponibilidad en streaming en Argentina.",
        detalle: "Implementamos 'ApiCine.jsx' consumiendo la OMDb API mediante peticiones asincrónicas con fetch y clave de entorno (VITE_OMDB_API_KEY). Se parametrizó la búsqueda para ordenar automáticamente los resultados por nivel de popularidad (votos acumulados en IMDb) y puntuación. Además, incorporamos enlaces dinámicos a JustWatch Argentina integrados en una cápsula neón oscura amigable, y sinopsis expandible con interacción 'Leer más / Leer menos'. Mejoramos también varios aspectos generales como imágenes de los perfiles y cambios de algunos textos."
    },
    {
        id: 8,
        fecha: "15/10/2026",
        fase: "Optimización y QA",
        titulo: "Rediseño responsive global, árbol de componentes y bitácora interactiva",
        resumen: "Corrección de desbordes en layout, creación de ArbolRender y optimización de Bitácora.",
        detalle: "Se solucionaron los problemas de desborde horizontal y centrado en el CSS global (#root y .main-content) para aprovechar toda la pantalla de escritorio junto a la Sidebar. Se desarrolló e integró la vista 'ArbolRender.jsx' con nodos recursivos colapsables para cumplir con los requisitos del TP2, y se rediseñó por completo la 'Bitácora' incorporando filtros por etapas y tarjetas desplegables con acordeón."
    }
];

export const bitacoraData = bitacoraEntries;