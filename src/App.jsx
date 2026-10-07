import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/main.css';

// Vistas Placeholder temporales
const Home = () => <div><h1>🎮 Portada del Equipo (Grupo 10)</h1><p>En desarrollo...</p></div>;
const Perfiles = () => <div><h1>👥 Perfiles de Integrantes</h1><p>En desarrollo...</p></div>;
const Catalogo = () => <div><h1>🕹️ Catálogo Arcade (JSON Local)</h1><p>En desarrollo...</p></div>;
const ApiCine = () => <div><h1>🎬 API Pública de Cine y Shows</h1><p>En desarrollo...</p></div>;
const Arbol = () => <div><h1>🌳 Árbol de Renderizado de Componentes</h1><p>En desarrollo...</p></div>;
const Bitacora = () => <div><h1>📜 Bitácora del Proyecto</h1><p>En desarrollo...</p></div>;
const NotFound = () => <div><h1>404 - Página No Encontrada</h1></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfiles" element={<Perfiles />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/api" element={<ApiCine />} />
          <Route path="/arbol" element={<Arbol />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}