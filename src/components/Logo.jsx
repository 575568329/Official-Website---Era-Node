export default function Logo({ className = "", size = 36 }) {
  return (
    <div className={"flex items-center gap-2.5 " + className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--logo-from, #EA580C)" />
            <stop offset="100%" stopColor="var(--logo-to, #FB923C)" />
          </linearGradient>
        </defs>
        {/* Background */}
        <rect width="40" height="36" rx="8" fill="url(#logoGrad)" />
        {/* Letter E - stroke-based for consistent weight */}
        <g
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* E: vertical bar + 3 horizontal strokes */}
          <line x1="10" y1="10" x2="10" y2="26" />
          <line x1="10" y1="10" x2="21" y2="10" />
          <line x1="10" y1="18" x2="19" y2="18" />
          <line x1="10" y1="26" x2="21" y2="26" />
        </g>
        {/* Letter N - stroke-based */}
        <g
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* N: left vertical + diagonal + right vertical */}
          <line x1="25" y1="10" x2="25" y2="26" />
          <line x1="25" y1="10" x2="31" y2="26" />
          <line x1="31" y1="10" x2="31" y2="26" />
        </g>
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">时代节点</span>
    </div>
  );
}