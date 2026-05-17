import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

function AnimatedNumber({ target, suffix = '', prefix = '', duration = 2000 }) {
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
  }, [target, suffix, prefix, duration]);

  return <span ref={localRef}>{prefix}{count}{suffix}</span>;
}

const stats = [
  { value: 10000, suffix: '+', label: '门店信赖', description: '遍布全国的中小门店正在使用' },
  { value: 60, suffix: '%', label: '运营提效', description: '平均节省日常运营时间' },
  { value: 7, suffix: '×24', label: '实时响应', description: '全天候技术支持，售后无忧' },
];

export default function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section id="stats" ref={ref} className="relative py-20 md:py-28 bg-white">
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
              <div className="text-5xl md:text-6xl font-bold text-primary">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-800">{stat.label}</div>
              <div className="mt-1 text-sm text-muted">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}