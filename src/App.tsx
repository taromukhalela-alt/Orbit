import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import StarterPage from './pages/StarterPage';
import Home from './pages/Home';
import Integrations from './pages/Integrations';
import Activities from './pages/Activities';

function AppLayout() {
    return (
        <div className="flex items-start gap-6 h-screen p-6 bg-app box-border">
            <Sidebar />
            <main className="flex-1 bg-surface border-[2px] border-border-strong rounded-lg p-8 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/activity" element={<Activities />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/starter" element={<StarterPage />} />
                <Route path="*" element={<AppLayout />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
