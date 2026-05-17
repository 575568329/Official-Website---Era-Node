import { motion } from 'motion/react';
import { Eye, Layers, Headphones } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const promises = [
  {
    icon: Eye,
    title: '先演示，再决定',
    description: '预约免费演示，看清楚再决定是否上线',
  },
  {
    icon: Layers,
    title: '按行业模板快速配置',
    description: '5大行业模板预置，选你的行业一键启用',
  },
  {
    icon: Headphones,
    title: '上线后持续支持',
    description: '专人协助从配置到运营，遇到问题有人接',
  },
];

export default function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section id="commitments" ref={ref} className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {promises.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
