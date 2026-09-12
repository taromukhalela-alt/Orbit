import { NavLink, useNavigate } from 'react-router-dom';
import { Activity, FolderKanban, Home, Layers3, Plus, Radio } from 'lucide-react';

const navItems = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Projects', to: '/projects/orbit', icon: FolderKanban },
    { label: 'Activity', to: '/activity', icon: Activity },
    { label: 'Integrations', to: '/integrations', icon: Layers3 },
];

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="flex w-60 shrink-0 flex-col border-2 border-border-strong bg-sidebar p-3 text-text-sidebar shadow-[4px_4px_0_#ff0066] max-md:w-16 max-md:p-2">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <button className="flex items-center gap-2 text-left" onClick={() => navigate('/')} type="button">
                    <span className="flex size-9 items-center justify-center border-2 border-white bg-primary font-space text-lg font-bold text-on-primary shadow-[2px_2px_0_#fff]">O</span>
                    <span className="font-space text-xl font-bold tracking-[0.14em] max-md:hidden">ORBIT</span>
                </button>
                <span className="font-mono text-[10px] text-white/50 max-md:hidden">v0.1</span>
            </div>

            <nav aria-label="Main navigation" className="mt-5 flex-1">
                <p className="mb-2 px-2 font-mono text-[10px] font-bold tracking-widest text-white/45 max-md:hidden">WORKSPACE</p>
                <ul className="flex flex-col gap-1">
                    {navItems.map(({ label, to, icon: Icon }) => (
                        <li key={label}>
                            <NavLink
                                to={to}
                                end={to === '/'}
                                className={({ isActive }) => `group flex items-center gap-3 border-2 px-3 py-2.5 font-space text-sm font-bold transition-colors max-md:justify-center max-md:px-2 ${isActive ? 'border-white bg-primary text-white' : 'border-transparent text-white/75 hover:border-white/30 hover:bg-sidebar-hover hover:text-white'}`}
                                title={label}
                            >
                                <Icon aria-hidden="true" size={17} />
                                <span className="max-md:hidden">{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 border-t border-white/20 pt-5 max-md:hidden">
                    <p className="mb-2 px-2 font-mono text-[10px] font-bold tracking-widest text-white/45">PROJECT</p>
                    <button onClick={() => navigate('/projects/orbit')} type="button" className="flex w-full items-center gap-3 border-2 border-transparent px-3 py-2.5 text-left font-space text-sm font-bold text-white/75 hover:border-white/30 hover:bg-sidebar-hover hover:text-white">
                        <span className="size-2 bg-green" aria-hidden="true" />
                        <span className="truncate">orbit-desktop</span>
                    </button>
                    <button onClick={() => navigate('/projects/new')} type="button" className="mt-1 flex w-full items-center gap-3 border-2 border-dashed border-white/25 px-3 py-2 font-space text-xs font-bold text-white/55 hover:border-primary hover:text-white">
                        <Plus aria-hidden="true" size={14} /> New project
                    </button>
                </div>
            </nav>

            <div className="border-t border-white/20 pt-3">
                <div className="flex items-center gap-2 px-2 font-mono text-[10px] text-white/55 max-md:justify-center">
                    <Radio aria-hidden="true" size={12} className="text-green" />
                    <span className="max-md:hidden">LOCAL WORKSPACE READY</span>
                </div>
            </div>
        </aside>
    );
}
