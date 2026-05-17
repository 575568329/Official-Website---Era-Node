import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

function AnimatedNumber({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const localRef = useRef(null);

  useEffect(() => {
    const element = localRef.current;
    if (!element || hasAnimated.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return <span ref={localRef}>{count}{suffix}</span>;
}

const stats = [
  { value: 5, suffix: '+', label: '行业模板', description: '便利店/茶饮/餐饮/服装/生鲜', icon: '行业' },
  { value: 30, suffix: 'min', label: '极速上线', description: '从选模板到正式运营', icon: '速度' },
  { value: 7, suffix: '×24', label: '全天候支持', description: '技术响应，售后无忧', icon: '保障' },
];

export default function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section id="stats" ref={ref} className="relative py-20 md:py-28 bg-white">
      {/* 顶部渐变线 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={'text-center py-8 md:py-0 md:px-8 ' + (index < 2 ? 'md:border-r md:border-border' : '')}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary font-bold">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-800">{stat.label}</div>
              <div className="mt-1 text-sm text-muted">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部渐变线 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

