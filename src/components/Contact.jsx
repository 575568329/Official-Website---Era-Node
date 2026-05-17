import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import Logo from './Logo';

// 联系方式配置
const CONTACT_INFO = {
  name: '余凤杰',
  phone: '13129937969',
};

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
            预约免费演示，看清楚再决定
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <Logo className="[&_span]:text-hero-title" />
            <div>
              <div className="text-sm text-muted mb-1">联系</div>
              <div className="text-lg font-medium text-hero-title">{CONTACT_INFO.name}</div>
            </div>
            <div>
              <div className="text-sm text-muted mb-1">电话</div>
              <div className="text-lg font-medium text-hero-title">{CONTACT_INFO.phone}</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-hero-badge backdrop-blur-sm rounded-2xl p-8 text-center">
                <CheckCircle size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold text-hero-title">已记录你的咨询信息</h3>
                <p className="mt-2 text-sm text-muted">当前为前端演示提交，正式上线前需要接入表单提交服务。</p>
                <button onClick={handleReset} className="mt-6 px-6 py-2.5 bg-hero-badge text-hero-title rounded-xl hover:bg-hero-outline-hover transition-colors text-sm font-medium">再次提交</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="tel" placeholder="电话（必填）" required aria-label="电话" className={inputClass} />
                <select className={inputClass} required defaultValue="" aria-label="选择行业">
                  <option value="" disabled>选择行业</option>
                  <option value="convenience">便利店</option>
                  <option value="tea">茶饮</option>
                  <option value="restaurant">餐饮</option>
                  <option value="clothing">服装</option>
                  <option value="fresh">生鲜</option>
                  <option value="other">其他</option>
                </select>
                <textarea rows={3} placeholder="你的需求或问题（选填）" aria-label="需求或问题" className={inputClass} />
                <button type="submit" className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Send size={16} />
                  预约免费演示
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-hero-outline">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-sm">
            <span>© 2026 时代节点 EraNode</span>
            <div className="flex gap-6">
              {/* TODO: 上线前补充真实备案号和链接 */}
              <span className="cursor-default">隐私政策（待补充）</span>
              <span className="cursor-default">服务协议（待补充）</span>
              <span className="cursor-default">ICP备案号（待补充）</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
