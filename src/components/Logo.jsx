// Logo组件 - 渐变圆角方块 + 居中的"EN"字母
export default function Logo({ className = '' }) {
  return (
    <div className={'flex items-center gap-2.5 ' + className}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
        <text
          x="18" y="18"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.5"
        >
          EN
        </text>
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">时代节点</span>
    </div>
  );
}
