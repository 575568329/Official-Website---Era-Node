import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import Logo from './Logo';

export default function Contact() {
  const [ref, isInView] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });

  // 表单提交处理
  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟提交
    setSubmitted(true);
  };

  // 重新提交
  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', company: '', industry: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左侧信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <Logo className="[&_span]:text-white" />
            </div>
            <div className="space-y-4 text-slate-300">
              <div>
                <div className="text-sm text-slate-400 mb-1">联系人</div>
                <div className="text-lg font-medium text-white">余凤杰</div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">电话</div>
                <div className="text-lg font-medium text-white">13129937969</div>
              </div>
            </div>
            <p className="mt-8 text-slate-400 text-lg italic">
              "让每一家小店都能享受数字化红利"
            </p>
          </motion.div>

          {/* 右侧表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              /* 提交成功消息 */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-white">收到！我们会尽快联系您</h3>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  再次提交
                </button>
              </motion.div>
            ) : (
              /* 咨询表单 */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="您的姓名"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="联系电话"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="公司名称"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-800 text-slate-400">选择行业</option>
                      <option value="cvs" className="bg-slate-800">便利店</option>
                      <option value="tea" className="bg-slate-800">茶饮</option>
                      <option value="food" className="bg-slate-800">餐饮</option>
                      <option value="clothing" className="bg-slate-800">服装</option>
                      <option value="fresh" className="bg-slate-800">生鲜</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="您的留言"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
                >
                  提交咨询
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* 底部版权 */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
          © 2026 时代节点 EraNode
        </div>
      </div>
    </section>
  );
}
