import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Perfiles from './pages/Perfiles';
import CatalogoJSON from './pages/CatalogoJSON';
import Bitacora from './pages/Bitacora';
import './styles/main.css';

// Placeholders restantes para los próximos días
const ApiCine = () => <div><h1>🎬 API Pública de Cine y Shows</h1><p>En desarrollo...</p></div>;
const Arbol = () => <div><h1>🌳 Árbol de Renderizado de Componentes</h1><p>En desarrollo...</p></div>;
const NotFound = () => <div><h1>404 - Página No Encontrada</h1></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfiles" element={<Perfiles />} />
          <Route path="/catalogo" element={<CatalogoJSON />} />
          <Route path="/api" element={<ApiCine />} />
          <Route path="/arbol" element={<Arbol />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}