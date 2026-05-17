import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const menuItems = [
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '优势', href: '#advantages' },
  { label: '关于', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    backgroundColor: scrolled
      ? 'var(--nav-scrolled-bg, rgba(255,255,255,0.9))'
      : 'var(--nav-ontop-bg, transparent)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
    color: scrolled
      ? 'var(--nav-scrolled-text, #1e293b)'
      : 'var(--nav-text, #1e293b)',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo className={scrolled ? '' : '[&_span]:text-nav-text'} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                className="text-sm font-medium transition-colors hover:text-nav-text-hover"
                style={{ color: 'inherit' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
              className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-md hover:opacity-90 transition-opacity"
            >
              免费体验
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
            style={{ color: 'inherit' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-16 bg-white z-40 md:hidden text-slate-900"
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
                className="bg-primary text-white text-center font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity mt-4"
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