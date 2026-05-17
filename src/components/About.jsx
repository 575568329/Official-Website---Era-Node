import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            为什么做这件事
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            我们相信，中小门店不应该因为技术门槛被挡在数字化之外。时代节点想做的是一套老板和店员都愿意每天打开的工具：简单、清楚、有人支持，真正服务日常经营。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
