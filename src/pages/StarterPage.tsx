import { ArrowRight, Check, FolderOpen, Plus, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrbitLoader from '../components/ui/OrbitLoader';

const steps = [
    { label: 'Projects', detail: 'Keep every workspace close.' },
    { label: 'Context', detail: 'Bring docs and decisions along.' },
    { label: 'Momentum', detail: 'Pick up exactly where you left off.' },
];

export default function StarterPage() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    return (
        <main className="starter-page flex min-h-screen items-center justify-center bg-app p-4 md:p-8">
            <div className="w-full max-w-6xl border-2 border-border-strong bg-surface shadow-[8px_8px_0_#ff0066]">
                <div className="flex items-center justify-between border-b-2 border-border-strong px-5 py-4 md:px-8">
                    <div className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center border-2 border-border-strong bg-primary font-space text-lg font-bold text-on-primary">O</span>
                        <span className="font-space text-lg font-bold tracking-[0.16em]">ORBIT</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-text-muted">FIRST RUN / 01</span>
                </div>

                <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                    <section className="flex flex-col justify-center border-b-2 border-border-strong p-6 md:border-b-0 md:border-r-2 md:p-12">
                        <p className="mb-4 flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-primary"><Sparkles size={14} /> PROJECT CONTEXT / v0.1</p>
                        <h1 className="max-w-xl text-4xl leading-[0.98] tracking-tight md:text-6xl">A sharper place to start.</h1>
                        <p className="mt-6 max-w-md text-base leading-6 text-text-muted">Orbit gives your projects a home, then keeps the useful parts of your work in view.</p>

                        <div className="mt-9 flex flex-col gap-3" aria-label="Orbit onboarding steps">
                            {steps.map((step, index) => {
                                const isActive = index === activeStep;
                                const isComplete = index < activeStep;
                                return (
                                    <button
                                        key={step.label}
                                        type="button"
                                        onClick={() => setActiveStep(index)}
                                        className={`flex items-center gap-4 border-2 px-4 py-3 text-left transition-transform hover:-translate-x-1 ${isActive ? 'border-border-strong bg-primary text-on-primary shadow-[3px_3px_0_#000]' : 'border-border-subtle bg-panel text-text'}`}
                                        aria-current={isActive ? 'step' : undefined}
                                    >
                                        <span className={`flex size-7 shrink-0 items-center justify-center border-2 border-border-strong font-mono text-xs font-bold ${isActive ? 'bg-white text-text' : isComplete ? 'bg-green text-text' : 'bg-surface'}`}>
                                            {isComplete ? <Check size={14} /> : `0${index + 1}`}
                                        </span>
                                        <span className="min-w-0"><span className="block font-space text-sm font-bold">{step.label}</span><span className={`block font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-text-muted'}`}>{step.detail}</span></span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <button className="btn btn-primary" type="button" onClick={() => navigate('/')}><ArrowRight data-icon="inline-end" size={17} /> Enter Orbit</button>
                            <button className="btn btn-secondary" type="button" onClick={() => navigate('/projects/new')}><Plus data-icon="inline-start" size={17} /> Create project</button>
                        </div>
                    </section>

                    <section className="relative flex min-h-[28rem] flex-col items-center justify-center overflow-hidden bg-white p-6 md:min-h-[38rem] md:p-10">
                        <div className="starter-grid" aria-hidden="true" />
                        <div className="relative z-10 flex flex-col items-center">
                            <OrbitLoader size={245} label="Orbit is preparing your workspace" />
                            <div className="mt-1 flex items-center gap-2 font-mono text-[10px] font-bold text-text-muted"><FolderOpen size={13} /> LOCAL WORKSPACE READY</div>
                            <div className="mt-8 flex items-center gap-3 border-2 border-border-strong bg-surface px-4 py-3 font-mono text-[10px] font-bold shadow-[3px_3px_0_#000]"><span className="size-2 animate-pulse bg-green" /> {steps[activeStep].label.toUpperCase()} LAYER ARMED</div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
