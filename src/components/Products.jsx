import { motion } from 'motion/react';
import { ShoppingCart, ClipboardList, Bot, BarChart3, Package, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const journeySteps = [
  {
    icon: ShoppingCart,
    time: '上午 9:00',
    title: '顾客下单',
    description: '小程序商城支持扫码下单、到店自提、外卖配送，顾客随时随地都能买。',
  },
  {
    icon: ClipboardList,
    time: '上午 9:05',
    title: '店员处理',
    description: '订单、库存、后厨或拣货状态同步，减少漏单和重复沟通。',
  },
  {
    icon: Bot,
    time: '全天候',
    title: 'AI 客服接待',
    description: '常见问题自动回答，夜间咨询不白白流失，新订单自动提醒。',
  },
  {
    icon: BarChart3,
    time: '晚上 10:00',
    title: '老板复盘',
    description: '手机查看收入、热销商品、库存风险和会员复购，一天经营心中有数。',
  },
];

// 右侧 mockup 演示数据
const mockupData = {
  todayRevenue: '¥3,280',
  todayOrders: 47,
  topProduct: '冰美式',
  pendingAlerts: 2,
  memberCount: 186,
};

export default function Products() {
  const [ref, isInView] = useInView();

  return (
    <section id="products" ref={ref} className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            从顾客下单到老板复盘，
            <br className="hidden sm:inline" />
            一套系统跑完整天经营
          </h2>
          <p className="mt-3 text-muted">不需要在多个工具之间切换，经营数据自动串联</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* 左侧时间线 */}
          <div className="lg:col-span-3 space-y-0">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* 时间线节点 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>

                  {/* 内容 */}
                  <div className="pb-2">
                    <span className="text-xs font-medium text-primary/60">{step.time}</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 右侧经营数据面板（演示数据） */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden sticky top-24">
              {/* 面板头 */}
              <div className="bg-gradient-to-r from-primary to-primary-light px-5 py-3 flex items-center justify-between">
                <span className="text-white text-sm font-semibold">门店经营概览（演示）</span>
              </div>

              {/* 数据行 */}
              <div className="divide-y divide-border/30">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 size={16} className="text-primary" />
                    <span className="text-sm text-muted">今日营业额</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{mockupData.todayRevenue}</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={16} className="text-primary" />
                    <span className="text-sm text-muted">今日订单</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">{mockupData.todayOrders} 单</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package size={16} className="text-rose-500" />
                    <span className="text-sm text-muted">库存预警</span>
                  </div>
                  <span className="text-lg font-bold text-rose-500">{mockupData.pendingAlerts} 项</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-teal-500" />
                    <span className="text-sm text-muted">热销商品</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">{mockupData.topProduct}</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-teal-500" />
                    <span className="text-sm text-muted">累计会员</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">{mockupData.memberCount} 人</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
