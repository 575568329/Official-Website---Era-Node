import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-16">
      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-primary-light/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧文案 */}
          <div className="text-center lg:text-left">
            {/* Badge标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">专为中小门店打造</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              开好一家店，
              <br />
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                不需要那么累
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
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
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-dark font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
              >
                免费体验
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white/90 font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-all"
              >
                立即了解
              </a>
            </motion.div>
          </div>

          {/* 右侧装饰插图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* 背景光圈 */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="/hero-illustration.svg"
                alt="时代节点产品示意图"
                className="relative w-full max-w-lg drop-shadow-2xl"
                loading="eager"
              />
            </div>
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
        <a href="#stats" onClick={(e) => { e.preventDefault(); document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs tracking-wider">向下滚动</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

