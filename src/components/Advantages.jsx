import { motion } from 'motion/react';
import { UserCheck, Smartphone, RefreshCw, LifeBuoy } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const guarantees = [
  {
    icon: UserCheck,
    title: '上线陪跑',
    description: '从模板选择到商品配置，提供一对一协助，不把复杂问题丢给老板。',
  },
  {
    icon: Smartphone,
    title: '操作简单',
    description: '老板和店员都能在手机上完成日常操作，不用学复杂系统。',
  },
  {
    icon: RefreshCw,
    title: '持续优化',
    description: '根据门店反馈持续迭代功能和行业模板，工具跟着你的生意一起变好。',
  },
  {
    icon: LifeBuoy,
    title: '售后响应',
    description: '遇到问题有人接，不用在论坛找答案，不用等工单排队。',
  },
];

export default function Advantages() {
  const [ref, isInView] = useInView();

  return (
    <section id="advantages" ref={ref} className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            不只是工具，也有人陪你跑起来
          </h2>
          <p className="mt-3 text-muted">从上线到运营，全程有人支持</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 lg:p-8 hover:shadow-lg transition-all duration-300 group border border-border/30 hover:border-primary/20"
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
