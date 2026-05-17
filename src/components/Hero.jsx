import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, TrendingUp, MessageSquare, AlertTriangle, Flame, Bot } from 'lucide-react';

// 演示数据仪表盘卡片
const dashboardCards = [
  { icon: ShoppingCart, label: '今日订单', value: '23', color: 'text-primary' },
  { icon: TrendingUp, label: '今日营业额', value: '¥1,280', color: 'text-primary' },
  { icon: MessageSquare, label: '待处理咨询', value: '3', color: 'text-accent' },
  { icon: AlertTriangle, label: '库存预警', value: '2项', color: 'text-amber-500' },
  { icon: Flame, label: '热销商品', value: '冰美式', color: 'text-rose-500' },
  { icon: Bot, label: 'AI 客服', value: '值守中', color: 'text-teal-500' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-16">
      {/* 网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--hero-grid, rgba(0,0,0,.06)) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid, rgba(0,0,0,.06)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'var(--hero-glow-1)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'var(--hero-glow-2)' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'var(--hero-glow-3)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 左侧文案 */}
          <div className="text-center lg:text-left">
            {/* Badge标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hero-badge border border-hero-badge-border mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-hero-badge-text">专为中小门店打造的一站式经营工具</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-title leading-tight"
            >
              让小店也能像
              <br />
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                连锁品牌一样经营
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              3分钟搭建线上门店，订单、库存、会员和客服统一管理。你负责把店开好，系统帮你少漏单、少耗时、少走弯路。
            </motion.p>

            {/* 风险逆转 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-3 text-sm text-light"
            >
              无需绑卡 · 先看方案 · 适合再上线
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-hero-cta text-hero-cta-text font-semibold rounded-xl hover:bg-hero-cta-hover transition-all shadow-lg shadow-hero-cta-shadow"
              >
                预约免费演示
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-hero-outline text-hero-outline-text font-medium rounded-xl hover:bg-hero-outline-hover hover:border-hero-outline-hover-border transition-all"
              >
                看看怎么开始
              </a>
            </motion.div>
          </div>

          {/* 右侧经营仪表盘 Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* 背景光圈 */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />

              {/* 仪表盘容器 */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                {/* 顶部状态栏 */}
                <div className="bg-gradient-to-r from-primary to-primary-light px-5 py-3 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold">经营驾驶舱（演示数据）</span>
                  <span className="text-white/70 text-xs">今日</span>
                </div>

                {/* 数据卡片网格 */}
                <div className="grid grid-cols-3 gap-px bg-border/30">
                  {dashboardCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.label} className="bg-white p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={16} className={card.color} />
                          <span className="text-xs text-muted">{card.label}</span>
                        </div>
                        <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* 底部模拟图表区 */}
                <div className="p-4 border-t border-border/30">
                  <div className="text-xs text-muted mb-2">近7日趋势（演示）</div>
                  <div className="flex items-end gap-1 h-12">
                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/20 rounded-sm hover:bg-primary/40 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
