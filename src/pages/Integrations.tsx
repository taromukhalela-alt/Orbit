import { ArrowUpRight, CircleHelp, Layers3, Plus, RefreshCw, Settings2 } from 'lucide-react';

const integrations = [
    { name: 'GitHub', description: 'Repositories, branches, pull requests, and issues.', status: 'CONNECTED', detail: 'github.com/orbit-labs', icon: Layers3, accent: 'bg-primary' },
    { name: 'VS Code', description: 'Open projects directly in your default IDE.', status: 'CONNECTED', detail: 'desktop bridge / local', icon: Layers3, accent: 'bg-purple' },
    { name: 'Jira', description: 'Link issues and project work to your workspace.', status: 'AVAILABLE', detail: 'Not connected', icon: Layers3, accent: 'bg-surface' },
    { name: 'Notion', description: 'Bring project documentation and notes into context.', status: 'AVAILABLE', detail: 'Not connected', icon: FileTextIcon, accent: 'bg-surface' },
];

function FileTextIcon(props: { size?: number }) { return <span {...props}>N</span>; }

export default function Integrations() {
    return <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex items-end justify-between gap-5 border-b-2 border-border-strong pb-6 max-md:flex-col max-md:items-start"><div><p className="mb-3 font-mono text-xs font-bold tracking-widest text-primary">SYSTEM / CONNECTIONS</p><h1 className="text-4xl tracking-tight">Integrations</h1><p className="mt-4 max-w-xl text-base leading-6 text-text-muted">Connect Orbit to the tools that hold your project context. Each connection is scoped to the workspace you choose.</p></div><button className="btn btn-secondary" type="button"><Plus data-icon="inline-start" size={16} /> Add integration</button></header>
        <div className="grid gap-4 md:grid-cols-2">{integrations.map(({ name, description, status, detail, icon: Icon, accent }) => <article className="card-compact flex min-h-52 flex-col" key={name}><div className="flex items-start justify-between"><span className={`flex size-10 items-center justify-center border-2 border-border-strong ${accent} font-space font-bold`}>{typeof Icon === 'function' && name === 'Notion' ? <Icon size={18} /> : <Icon size={18} />}</span><span className={`font-mono text-[10px] font-bold ${status === 'CONNECTED' ? 'text-green' : 'text-text-muted'}`}>{status}</span></div><h2 className="mt-6 font-space text-xl">{name}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-text-muted">{description}</p><div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-4"><span className="font-mono text-[10px] text-text-muted">{detail}</span>{status === 'CONNECTED' ? <button className="flex items-center gap-2 font-mono text-xs font-bold hover:text-primary" type="button"><Settings2 size={14} /> CONFIGURE</button> : <button className="flex items-center gap-2 font-mono text-xs font-bold text-primary hover:underline" type="button">CONNECT <ArrowUpRight size={14} /></button>}</div></article>)}</div>
        <section className="panel p-5"><div className="flex items-center gap-3"><CircleHelp size={18} className="text-primary" /><div><h2 className="font-space text-sm font-bold">Connection health</h2><p className="mt-1 font-mono text-xs text-text-muted">Last checked just now · 2 connected services responding</p></div><button className="ml-auto flex items-center gap-2 font-mono text-xs font-bold text-text-muted hover:text-text" type="button"><RefreshCw size={14} /> REFRESH</button></div></section>
    </div>;
}
