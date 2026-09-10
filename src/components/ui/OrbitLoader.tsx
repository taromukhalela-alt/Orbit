import './OrbitLoader.css';

interface OrbitLoaderProps {
  size?: number;
  className?: string;
  label?: string;
}

export default function OrbitLoader({
  size = 240,
  className = '',
  label = 'Orbit',
}: OrbitLoaderProps) {
  return (
    <div className={`orbit-loader ${className}`} role="status" aria-label={label}>
      <svg
        className="loader"
        width={size}
        height={size}
        viewBox="0 0 240 240"
        aria-hidden="true"
      >
        <circle
          className="loader-ring loader-ring-a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="20"
          strokeDasharray="0 660"
          strokeDashoffset="-330"
          strokeLinecap="round"
        />
        <circle
          className="loader-ring loader-ring-b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          stroke="var(--purple)"
          strokeWidth="20"
          strokeDasharray="0 220"
          strokeDashoffset="-110"
          strokeLinecap="round"
        />
        <circle
          className="loader-ring loader-ring-c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
        <circle
          className="loader-ring loader-ring-d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          stroke="var(--purple)"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}