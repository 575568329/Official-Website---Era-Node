// Logo组件 - 渐变圆角方块 + 精绘EN字母
export default function Logo({ className = '', size = 36 }) {
  return (
    <div className={'flex items-center gap-2.5 ' + className}>
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
        {/* E letter - precise SVG path, centered in 36x36 */}
        <path d="M10.5 11h15v3h-12v3.5h8.5v3h-8.5v4h12.5v3H10.5V11z" fill="white" />
        {/* N letter - right aligned */}
        <path d="M25.5 11v14h-3l-6.5-8.5V25h-3V11h3l6.5 8.5V11h3z" fill="white" opacity="0.85" />
      </svg>
      <span className="text-xl font-bold text-slate-900 tracking-tight">时代节点</span>
    </div>
  );
}
