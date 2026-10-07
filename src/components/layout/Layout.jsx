import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="app-layout">
            <button className="mobile-toggle" onClick={toggleSidebar}>
                {sidebarOpen ? '✖ CERRAR' : '☰ MENÚ'}
            </button>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}