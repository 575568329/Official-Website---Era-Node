import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useScrollShadow } from '../hooks/useScrollShadow';

// 导航菜单项
const menuItems = [
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '优势', href: '#advantages' },
  { label: '关于', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const showShadow = useScrollShadow(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 点击菜单项后关闭移动端菜单
  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (showShadow ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo />
          </a>

          {/* 桌面菜单 */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
              className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-blue-800 transition-colors"
            >
              免费体验
            </a>
          </div>

          {/* 移动端汉堡按钮 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端侧滑面板 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-16 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                  className="text-lg font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                className="bg-primary text-white text-center font-medium px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors mt-4"
              >
                免费体验
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
