import { motion } from 'motion/react';
import { Zap, Target, Brain, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const advantages = [
  {
    icon: Zap,
    title: '极速上线',
    description: '3分钟搭建线上门店，不用懂技术，不用请人做',
  },
  {
    icon: Target,
    title: '一套系统多行业',
    description: '5大行业模板预置，选你的行业一键启用，告别从零开始',
  },
  {
    icon: Brain,
    title: 'AI 赋能运营',
    description: '24小时AI客服值守，夜间也不漏掉任何一笔生意',
  },
  {
    icon: Users,
    title: '极简管理',
    description: '老板在手机上就能看每天赚多少、亏在哪',
  },
];

export default function Advantages() {
  const [ref, isInView] = useInView();

  return (
    <section id="advantages" ref={ref} className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">为什么选择时代节点</h2>
          <p className="mt-3 text-muted">不堆砌功能，只做真正有用的</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 lg:p-8 hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-border"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon size={22} className="text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}