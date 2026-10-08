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
        titulo: "Creación de catálogo JSON de 20 registros, Home e integración responsive",
        resumen: "Base de datos local, maquetado de Home y adaptación a celulares.",
        detalle: "Se creó la base local 'juegos.json' con 20 registros arcade, descargamos todas las imágenes. Maquetamos 'Home.jsx' ajustando tipografías neón e integrando media queries globales en CSS para una correcta visualización en móviles (400px), tablets (900px) y escritorio (1200px)."
    }
];

export const bitacoraData = bitacoraEntries;