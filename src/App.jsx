import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Perfiles from './pages/Perfiles';
import PerfilDetalle from './pages/PerfilDetalle';
import Catalogo from './pages/Catalogo';
import ApiCine from './pages/ApiCine';
import Bitacora from './pages/Bitacora';
import ArbolRender from './pages/ArbolRender';
import NotFound from './pages/NotFound';
import './styles/main.css';


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfiles" element={<Perfiles />} />
          <Route path="/perfiles/:id" element={<PerfilDetalle />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/api" element={<ApiCine />} />
          <Route path="/arbol" element={<ArbolRender />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}