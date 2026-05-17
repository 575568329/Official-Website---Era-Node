import { motion } from 'motion/react';
import { Zap, Target, Brain, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const advantages = [
  {
    icon: Zap,
    title: '极速上线',
    description: '选模板→上商品→开店，不需要会代码，不需要懂技术',
    gradient: 'from-primary to-primary-light',
  },
  {
    icon: Target,
    title: '一套系统多行业',
    description: '5大行业模板预置500+常见商品，选你的行业，一键启用',
    gradient: 'from-accent to-primary-light',
  },
  {
    icon: Brain,
    title: 'AI 赋能运营',
    description: '智能客服降低80%人工客服量，数据分析告诉你什么好卖',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Users,
    title: '极简管理',
    description: '老板看得懂的经营数据、店员用得会的操作界面',
    gradient: 'from-primary-light to-accent',
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
                <div className={'w-12 h-12 rounded-2xl bg-gradient-to-br ' + item.gradient + ' flex items-center justify-center mb-5 shadow-lg shadow-slate-200/50'}>
                  <Icon size={22} className="text-white" />
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