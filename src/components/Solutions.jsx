import { motion } from 'motion/react';
import { Store, Coffee, UtensilsCrossed, Shirt, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const industries = [
  {
    icon: Store,
    name: '便利店',
    pain: '商品多、库存乱、临期难盯。',
    solution: '扫码录入商品，库存和保质期自动提醒，会员积分自动累积。',
  },
  {
    icon: Coffee,
    name: '茶饮',
    pain: '高峰期排队流失顾客，外卖平台多管理混乱。',
    solution: '在线点单减少排队，外卖平台一键对接统一管理，口味自定义提升满意度。',
  },
  {
    icon: UtensilsCrossed,
    name: '餐饮',
    pain: '堂食外卖切换频繁，漏单错单让顾客不满意。',
    solution: '扫码点餐减少服务员压力，后厨即时接单出餐更准，堂食外卖统一管理。',
  },
  {
    icon: Shirt,
    name: '服装',
    pain: '尺码颜色管理复杂，复购率低。',
    solution: '按尺码颜色分库存不混乱，穿搭推荐提升客单价，会员上新自动推送。',
  },
  {
    icon: Leaf,
    name: '生鲜',
    pain: '价格每天变，损耗控制难。',
    solution: '每日价格一键更新，临期商品自动提醒减损耗，社区团购快速成团。',
  },
];

export default function Solutions() {
  const [ref, isInView] = useInView();

  return (
    <section id="solutions" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">覆盖5大热门行业</h2>
          <p className="mt-3 text-muted">按需选择行业模板，一键启用专属方案</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-bg-secondary rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-border/30 hover:border-primary/20 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-rose-500/80 mb-2 leading-relaxed">{item.pain}</p>
                <p className="text-sm text-muted leading-relaxed">{item.solution}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
