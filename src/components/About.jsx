import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

const values = ['客户至上', '极致简洁', '持续进化', '务实创新'];

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              为中小门店而生的<br />数字化伙伴
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              时代节点专注于为便利店、茶饮、餐饮、服装、生鲜五大行业的中小门店提供一站式数字化解决方案。我们相信，好的工具应该是简单的——简单的操作、透明的价格、贴心的服务。不堆砌功能，只做真正有用的东西。
            </p>
            {/* 价值观标签 */}
            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value, i) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 右侧插图 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/about-illustration.svg"
              alt="关于时代节点"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
