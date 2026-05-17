import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, LayoutDashboard, Bot, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const products = [
  {
    icon: ShoppingCart,
    title: '小程序商城',
    description: '顾客扫码下单，库存自动扣减，支付物流一站打通',
    details: ['扫码下单，操作简单', '库存自动同步', '多种支付方式', '物流跟踪透明'],
  },
  {
    icon: LayoutDashboard,
    title: '门店管理后台',
    description: '订单/库存/员工/数据，一个后台全部搞定',
    details: ['实时订单管理', '智能库存预警', '员工权限管理', '可视化数据报表'],
  },
  {
    icon: Bot,
    title: 'AI 智能客服',
    description: '自动回答80%常见问题，让老板从客服中解放',
    details: ['7×24小时在线', '智能语义理解', '自动学习优化', '无缝转人工'],
  },
];

export default function Products() {
  const [ref, isInView] = useInView();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="products" ref={ref} className="py-16 md:py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">一站式数字化方案</h2>
          <p className="mt-3 text-lg text-muted">开店需要的，一个就够了</p>
        </motion.div>

        {/* 产品卡片 */}
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
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{product.description}</p>
                  
                  {/* 展开/收起按钮 */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="mt-4 flex items-center gap-1 text-sm text-primary-light font-medium hover:text-primary transition-colors"
                  >
                    {isExpanded ? '收起' : '了解更多'}
                    <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  {/* 展开详情 */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 border-t border-border pt-4">
                          {product.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
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
