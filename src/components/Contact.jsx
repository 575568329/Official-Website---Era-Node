import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import Logo from './Logo';

const inputClass = "w-full px-4 py-3 bg-hero-badge border border-hero-badge-border rounded-xl text-hero-title placeholder:text-muted focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => setSubmitted(false);

  return (
    <section id="contact" className="bg-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hero-title mb-4">联系我们</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            免费体验，专人一对一服务，让数字化升级更简单
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <Logo className="[&_span]:text-hero-title" />
            <div>
              <div className="text-sm text-muted mb-1">联系</div>
              <div className="text-lg font-medium text-hero-title">余凤杰</div>
            </div>
            <div>
              <div className="text-sm text-muted mb-1">电话</div>
              <div className="text-lg font-medium text-hero-title">13129937969</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-hero-badge backdrop-blur-sm rounded-2xl p-8 text-center">
                <CheckCircle size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold text-hero-title">收到您的咨询，我们会尽快联系您！</h3>
                <button onClick={handleReset} className="mt-6 px-6 py-2.5 bg-hero-badge text-hero-title rounded-xl hover:bg-hero-outline-hover transition-colors text-sm font-medium">再次提交</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="姓名" required className={inputClass} />
                  <input type="tel" placeholder="电话" required className={inputClass} />
                </div>
                <input type="text" placeholder="公司名称" className={inputClass} />
                <select className={inputClass}>
                  <option value="">选择行业</option>
                  <option value="convenience">便利店</option>
                  <option value="tea">茶饮</option>
                  <option value="restaurant">餐饮</option>
                  <option value="clothing">服装</option>
                  <option value="fresh">生鲜</option>
                  <option value="other">其他</option>
                </select>
                <textarea rows={4} placeholder="您的需求或留言" className={inputClass} />
                <button type="submit" className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary/90 transition-all transition-colors">提交咨询</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hero-outline text-center text-muted text-sm">
          © 2026 时代节点 EraNode
        </div>
      </div>
    </section>
  );
}