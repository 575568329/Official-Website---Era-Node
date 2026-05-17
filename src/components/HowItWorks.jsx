import { motion } from 'motion/react';
import { ClipboardCheck, Settings, Smartphone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: '选择行业模板',
    description: '便利店、茶饮、餐饮、服装、生鲜，先从接近你门店的模板开始。',
  },
  {
    icon: Settings,
    step: '02',
    title: '填入商品和门店信息',
    description: '商品、价格、营业时间、配送方式，一次配置，多端同步。',
  },
  {
    icon: Smartphone,
    step: '03',
    title: '开始接单和管理',
    description: '顾客扫码下单，老板在手机上看订单、库存、会员和利润。',
  },
];

export default function HowItWorks() {
  const [ref, isInView] = useInView();

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            不用懂技术，三步就能开始
          </h2>
          <p className="mt-3 text-muted">从注册到上线，全程有专人协助</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* 连接线（桌面端） */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="inline-flex flex-col items-center">
                  {/* 步骤编号+图标 */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 relative z-10 border-4 border-bg-secondary">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/50 mb-3">STEP {step.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
