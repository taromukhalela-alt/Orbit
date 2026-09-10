import LinkButton from '../Buttons/Links/LinkButton';
import { Home, Layers, Activity } from 'lucide-react';

export default function Sidebar() {
  return (
    <header className="flex flex-col bg-sidebar w-64 rounded-xl z-[1030] h-[97vh] p-1">
      <div className="flex flex-row gap-1 p-1">
        <h1 className="font-space font-bold text-xl text-text-sidebar"><span>Orbit</span></h1>
      </div>
      <nav aria-label="Main">
        <ul className="flex flex-col gap-1 p-1 list-none">
          <LinkButton text='Home' to="/" icon={<Home size={18} />} />
          <LinkButton text='Integrations' to="/integrations" icon={<Layers size={18} />} />
          <LinkButton text='Activity' to="/activity" icon={<Activity size={18} />} />
        </ul>
      </nav>
    </header>
  );
}