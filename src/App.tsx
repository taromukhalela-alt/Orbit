import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import StarterPage from './pages/StarterPage';
import Home from './pages/Home';
import Integrations from './pages/Integrations';
import Activities from './pages/Activities';
import ProjectWorkspace from './pages/ProjectWorkspace';

function AppLayout() {
    return (
        <div className="flex min-h-screen items-stretch gap-4 bg-app p-4 md:gap-6 md:p-6">
            <Sidebar />
            <main className="min-w-0 flex-1 overflow-y-auto border-2 border-border-strong bg-surface p-5 shadow-[4px_4px_0_#000] md:p-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:projectId" element={<ProjectWorkspace />} />
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
