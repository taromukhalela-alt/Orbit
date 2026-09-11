import { useNavigate } from 'react-router-dom';
import OrbitLoader from '../components/ui/OrbitLoader';

export default function StarterPage() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-full bg-app p-8">
            <div className="flex flex-col items-center gap-6 text-center max-w-[28rem]">
                <h1 className="font-space text-[30px] font-bold tracking-[0.2em] text-text m-0 leading-none uppercase">
                    ORBIT
                </h1>
                <OrbitLoader size={220} label="Orbit" />
                <p className="font-roboto text-base font-medium text-text-muted m-0 leading-relaxed max-w-[20rem]">
                    Your workspace. Structured. Fast. Unmistakable.
                </p>
                <button
                    className="relative inline-flex items-center justify-center px-8 py-4 font-space text-lg font-bold tracking-widest text-on-primary bg-primary border-[3px] border-border-strong rounded-none cursor-pointer shadow-[6px_6px_0_#000] transition-all duration-100 uppercase outline-none mt-2 hover:bg-primary-hover hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0_#000] active:bg-primary focus-visible:outline-[3px] focus-visible:outline-purple focus-visible:outline-offset-[3px]"
                    onClick={() => navigate('/integrations')}
                    type="button"
                >
                    ENTER ORBIT
                </button>
            </div>
        </div>
    );
}
