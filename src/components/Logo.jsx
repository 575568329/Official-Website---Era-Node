export default function Logo({ className = "", size = 36 }) {
  return (
    <div className={"flex items-center gap-2.5 " + className}>
      <svg width={size} height={size} viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--logo-from, #E8590C)" />
            <stop offset="100%" stopColor="var(--logo-to, #FB923C)" />
          </linearGradient>
        </defs>
        <rect width="40" height="36" rx="10" fill="url(#logoGrad)" />
        {/* E */}
        <path d="M7 11h12v3H10.5v3.5h6.5v3h-6.5v4h9v3H7V11z" fill="white" />
        {/* N */}
        <path d="M22 11v14h-3l-6-8.5V25h-3V11h3l6 8.5V11h3z" fill="white" opacity="0.95" />
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">时代节点</span>
    </div>
  );
}