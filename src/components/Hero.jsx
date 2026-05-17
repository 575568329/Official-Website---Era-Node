import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-16">
      {/* 渐变光晕装饰 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案 */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              开好一家店，{' '}
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                不需要那么累
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-slate-300 max-w-lg mx-auto lg:mx-0"
            >
              行业模板一键启用，智能客服自动应答，数据看板一目了然
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-dark font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                免费体验
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                立即了解 →
              </a>
            </motion.div>
          </div>

          {/* 右侧装饰插图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="/hero-illustration.svg"
              alt="时代节点产品示意图"
              className="w-full max-w-lg"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#stats" onClick={(e) => { e.preventDefault(); document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <span className="text-xs">向下滚动</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
