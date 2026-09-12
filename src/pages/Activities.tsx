import { Activity as ActivityIcon, FilePlus2, Filter, GitBranch, Search, Terminal, UserRound } from 'lucide-react';

const events = [
    { day: 'TODAY', time: '09:30', title: 'Project opened', detail: 'orbit-desktop', meta: 'workspace / local', icon: Terminal, tone: 'bg-primary' },
    { day: 'TODAY', time: '09:12', title: 'Context added', detail: 'frontend-architecture.md', meta: 'orbit-desktop / docs / 4.2 KB', icon: FilePlus2, tone: 'bg-purple' },
    { day: 'TODAY', time: '08:44', title: 'Branch switched', detail: 'feat/workspace-shell', meta: 'orbit-desktop / git', icon: GitBranch, tone: 'bg-green' },
    { day: 'YESTERDAY', time: '16:20', title: 'Repository synchronized', detail: 'github.com/orbit-labs/orbit', meta: 'integration / github', icon: ActivityIcon, tone: 'bg-surface' },
    { day: 'YESTERDAY', time: '14:02', title: 'Project created', detail: 'client-portal', meta: 'workspace / local', icon: UserRound, tone: 'bg-pink' },
];

export default function Activities() {
    return <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="flex items-end justify-between gap-5 border-b-2 border-border-strong pb-6 max-md:flex-col max-md:items-start"><div><p className="mb-3 font-mono text-xs font-bold tracking-widest text-primary">EVENT STREAM / ALL PROJECTS</p><h1 className="text-4xl tracking-tight">Activity</h1><p className="mt-4 text-base leading-6 text-text-muted">A technical record of what changed across your Orbit workspace.</p></div><button className="btn btn-secondary" type="button"><Filter data-icon="inline-start" size={16} /> Filter events</button></header>
        <div className="flex items-center gap-3 border-2 border-border-strong bg-white px-4 py-3"><Search size={17} className="text-text-muted" /><input aria-label="Search activity" placeholder="Search events, projects, or metadata..." className="min-w-0 flex-1 bg-transparent font-mono text-xs outline-none placeholder:text-text-placeholder" /></div>
        <section className="panel p-5"><div className="mb-5 flex items-center gap-3"><ActivityIcon size={18} className="text-primary" /><h2 className="section-header mb-0">Workspace timeline</h2></div><div className="flex flex-col">{events.map(({ day, time, title, detail, meta, icon: Icon, tone }, index) => <div className="relative flex gap-4 border-t border-border-subtle py-5 first:border-t-0 first:pt-0 last:pb-0" key={`${day}-${time}-${title}`}>{index < events.length - 1 && <span className="absolute bottom-0 left-[17px] top-14 w-px bg-border-subtle" aria-hidden="true" />}<span className={`relative z-10 flex size-9 shrink-0 items-center justify-center border-2 border-border-strong ${tone}`}><Icon size={16} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-space text-sm font-bold">{title}</p><span className="font-mono text-[10px] text-text-muted">{day} / {time}</span></div><p className="mt-1 font-mono text-xs text-primary">{detail}</p><p className="mt-1 font-mono text-[10px] text-text-muted">{meta}</p></div></div>)}</div></section>
    </div>;
}
