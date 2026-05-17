import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, LayoutDashboard, Bot, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const products = [
  {
    icon: ShoppingCart,
    title: '小程序商城',
    subtitle: '让顾客随时随地都能买',
    description: '3分钟搭建专属门店，扫码下单、到店自提、外卖配送一站打通',
    details: ['扫码下单，到店自提', '库存实时同步', '支持多种支付方式', '订单状态实时追踪'],
    mockup: '🛒',
  },
  {
    icon: LayoutDashboard,
    title: '门店管理后台',
    subtitle: '一个后台管全部',
    description: '订单、库存、员工、利润，手机上实时掌握经营全貌',
    details: ['实时订单处理', '智能库存预警', '员工权限管理', '可视化数据报表'],
    mockup: '📊',
  },
  {
    icon: Bot,
    title: 'AI 智能客服',
    subtitle: '24小时替你接单',
    description: '自动回答80%常见问题，夜间也不漏掉任何一笔生意',
    details: ['7×24小时在线', '多轮对话能力', '自动学习优化', '无感转人工'],
    mockup: '🤖',
  },
];

export default function Products() {
  const [ref, isInView] = useInView();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="products" ref={ref} className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">一站式数字化方案</h2>
          <p className="mt-3 text-lg text-muted">开店需要的，一个就够了</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isExpanded = expanded === index;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Product mockup area */}
                <div className="h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon size={28} className="text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                <div className="p-7 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{product.subtitle}</p>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{product.description}</p>
                  
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="mt-5 flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-light transition-colors group/btn"
                  >
                    {isExpanded ? '收起' : '了解详情'}
                    <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                          {product.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2.5 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}