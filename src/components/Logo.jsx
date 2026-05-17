export default function Logo({ className = "", size = 36 }) {
  return (
    <div className={"flex items-center gap-2.5 " + className}>
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
        {/* E - left half, x: 5~18 */}
        <path d="M7 12h11v2.5H10v3h6v2.5h-6v4h8.5V24H7V12z" fill="white" />
        {/* N - right half, x: 19~31 */}
        <path d="M20 12v12h-2.5l-5-7V24h-2.5V12h2.5l5 7V12H20z" fill="white" opacity="0.9" />
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">时代节点</span>
    </div>
  );
}
