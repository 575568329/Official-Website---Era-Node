// Logo 组件：E 字母变形 + 渐变色
export default function Logo({ className = '' }) {
  return (
    <div className={'flex items-center gap-2 ' + className}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="8" fill="url(#logoGrad)" />
        <path d="M10 10h16v4H15v4h9v4h-9v4h12v4H10V10z" fill="white" />
      </svg>
      <span className="text-xl font-bold text-slate-900">时代节点</span>
    </div>
  );
}
