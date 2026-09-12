import { ArrowUpRight, ChevronRight, Clock3, FolderKanban, GitBranch, Layers3, Plus, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
    { name: 'orbit-desktop', path: '~/Code/orbit', branch: 'main', status: 'ACTIVE', updated: '12 min ago', color: 'bg-primary' },
    { name: 'signal-api', path: '~/Code/signal-api', branch: 'feat/webhooks', status: 'IDLE', updated: '2 days ago', color: 'bg-purple' },
    { name: 'client-portal', path: '~/Work/client-portal', branch: 'develop', status: 'IDLE', updated: '7 days ago', color: 'bg-green' },
];

const activity = [
    { type: 'PROJECT OPENED', detail: 'orbit-desktop', meta: 'workspace initialized', time: '12 min ago', icon: Terminal },
    { type: 'CONTEXT ADDED', detail: 'frontend-architecture.md', meta: 'orbit-desktop / docs', time: '28 min ago', icon: FolderKanban },
    { type: 'BRANCH SWITCHED', detail: 'feat/workspace-shell', meta: 'orbit-desktop / git', time: '1 hr ago', icon: GitBranch },
];

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <header className="flex items-end justify-between gap-5 border-b-2 border-border-strong pb-6 max-md:flex-col max-md:items-start">
                <div>
                    <p className="mb-3 font-mono text-xs font-bold tracking-widest text-primary">MONDAY / 09:42:17 LOCAL</p>
                    <h1 className="text-4xl leading-none tracking-tight md:text-5xl">Good morning, developer.</h1>
                    <p className="mt-4 max-w-xl text-base leading-6 text-text-muted">Your projects, context, and connected tools — in one workspace that stays out of the way.</p>
                </div>
                <button className="btn btn-primary shrink-0" onClick={() => navigate('/projects/new')} type="button"><Plus data-icon="inline-start" size={17} /> New project</button>
            </header>

            <section aria-labelledby="recent-projects-title">
                <div className="mb-4 flex items-center justify-between">
                    <h2 id="recent-projects-title" className="section-header mb-0">Recent workspaces</h2>
                    <button className="flex items-center gap-1 font-mono text-xs font-bold text-text-muted hover:text-primary" onClick={() => navigate('/projects/orbit')} type="button">VIEW ALL <ArrowUpRight size={14} /></button>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                    {projects.map((project) => (
                        <button key={project.name} type="button" onClick={() => navigate('/projects/orbit')} className="group card-compact text-left transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]">
                            <div className="mb-6 flex items-start justify-between"><span className={`size-3 ${project.color} border border-border-strong`} /><span className="font-mono text-[10px] font-bold text-text-muted">{project.status}</span></div>
                            <h3 className="font-space text-lg font-bold tracking-tight">{project.name}</h3>
                            <p className="mt-2 truncate font-mono text-xs text-text-muted">{project.path}</p>
                            <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-3 font-mono text-[10px] text-text-muted"><span>{project.branch}</span><span>{project.updated}</span></div>
                        </button>
                    ))}
                </div>
            </section>

            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                <section className="panel p-5" aria-labelledby="activity-title">
                    <div className="mb-5 flex items-center justify-between"><h2 id="activity-title" className="section-header mb-0">Latest activity</h2><Clock3 size={17} className="text-text-muted" /></div>
                    <div className="flex flex-col divide-y divide-border-subtle">
                        {activity.map(({ type, detail, meta, time, icon: Icon }) => <div key={type} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"><span className="flex size-9 shrink-0 items-center justify-center border-2 border-border-strong bg-white"><Icon size={16} /></span><div className="min-w-0 flex-1"><p className="font-mono text-[10px] font-bold tracking-wide text-primary">{type}</p><p className="truncate font-space text-sm font-bold">{detail}</p><p className="font-mono text-[10px] text-text-muted">{meta}</p></div><span className="shrink-0 font-mono text-[10px] text-text-muted">{time}</span></div>)}
                    </div>
                    <button className="mt-5 flex items-center gap-2 border-t border-border-subtle pt-4 font-mono text-xs font-bold text-text-muted hover:text-primary" onClick={() => navigate('/activity')} type="button">OPEN ACTIVITY LOG <ChevronRight size={14} /></button>
                </section>

                <section className="flex flex-col gap-4" aria-labelledby="system-title">
                    <div className="card-compact bg-primary text-on-primary shadow-[4px_4px_0_#000]"><div className="flex items-start justify-between"><Layers3 size={22} /><span className="font-mono text-[10px] font-bold">02 / 04 READY</span></div><h2 className="mt-8 text-xl">Your context layer is growing.</h2><p className="mt-2 text-sm leading-6 text-white/80">Connect the tools you already use to make every project session more useful.</p><button type="button" onClick={() => navigate('/integrations')} className="mt-5 flex items-center gap-2 font-mono text-xs font-bold text-white hover:underline">MANAGE INTEGRATIONS <ArrowUpRight size={14} /></button></div>
                    <div className="card-compact"><div className="flex items-center gap-3"><span className="size-2 bg-green" /><h2 className="font-space text-sm font-bold">LOCAL RUNTIME</h2></div><p className="mt-3 font-mono text-xs text-text-muted">Electron bridge connected. Filesystem access is ready through IPC.</p></div>
                </section>
            </div>
        </div>
    );
}
