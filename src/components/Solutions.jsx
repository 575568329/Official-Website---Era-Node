import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from '../hooks/useInView';

// 行业方案数据
const solutions = [
  {
    id: 'cvs',
    label: '便利店',
    features: [
      { title: '商品扫码录入', desc: '手机扫一扫，商品信息自动填充，告别手动录入' },
      { title: '库存智能预警', desc: '库存不足自动提醒，保质期到期提前预警' },
      { title: '会员积分自动累积', desc: '消费自动积分，积分抵现，提升复购率' },
    ],
    mockupColor: 'from-blue-500 to-blue-600',
    mockupItems: ['蒙牛纯牛奶', '农夫山泉', '乐事薯片', '康师傅'],
  },
  {
    id: 'tea',
    label: '茶饮',
    features: [
      { title: '在线点单', desc: '顾客手机下单，到店自取或外送，减少排队' },
      { title: '口味自定义', desc: '糖度、冰度、加料自由选择，满足个性需求' },
      { title: '外卖平台一键对接', desc: '美团/饿了么订单同步，统一管理不遗漏' },
    ],
    mockupColor: 'from-cyan-500 to-teal-500',
    mockupItems: ['杨枝甘露', '珍珠奶茶', '冰美式', '柠檬茶'],
  },
  {
    id: 'food',
    label: '餐饮',
    features: [
      { title: '扫码点餐', desc: '顾客自助扫码点餐，服务员效率提升200%' },
      { title: '后厨接单', desc: '前台下单后厨即时接收，出餐更快更准' },
      { title: '堂食外卖统一管理', desc: '堂食、外卖、自提多渠道订单一站式管理' },
    ],
    mockupColor: 'from-orange-500 to-red-500',
    mockupItems: ['红烧排骨', '宫保鸡丁', '鱼香肉丝', '麻婆豆腐'],
  },
  {
    id: 'clothing',
    label: '服装',
    features: [
      { title: '尺码颜色管理', desc: '按尺码颜色分库存，精细化管理不混乱' },
      { title: '穿搭推荐', desc: '智能搭配推荐，提升客单价和连带率' },
      { title: '会员复购触达', desc: '新货上架、会员专享自动推送，提升复购' },
    ],
    mockupColor: 'from-pink-500 to-purple-500',
    mockupItems: ['春季新款', '运动T恤', '牛仔裤', '连衣裙'],
  },
  {
    id: 'fresh',
    label: '生鲜',
    features: [
      { title: '每日价格更新', desc: '生鲜价格波动大，一键更新今日价格' },
      { title: '保质期预警', desc: '临期商品自动提醒，减少损耗' },
      { title: '社区团购一键发起', desc: '微信社群快速成团，带动社区消费' },
    ],
    mockupColor: 'from-green-500 to-emerald-500',
    mockupItems: ['新鲜草莓', '有机蔬菜', '进口牛肉', '鲜活龙虾'],
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('cvs');
  const [ref, isInView] = useInView();
  const current = solutions.find((s) => s.id === activeTab);

  return (
    <section id="solutions" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">覆盖5大热门行业</h2>
          <p className="mt-3 text-lg text-muted">按需选择行业模板，一键启用专属方案</p>
        </motion.div>

        {/* Tab 切换 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={'px-5 py-2.5 rounded-xl text-sm font-medium transition-all ' + (
                activeTab === s.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Tab 内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* 左侧特性列表 */}
            <div className="space-y-6">
              {current.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={'w-10 h-10 rounded-xl bg-gradient-to-br ' + current.mockupColor + ' flex items-center justify-center flex-shrink-0'}>
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 右侧手机 Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64">
                {/* 手机外壳 */}
                <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
                  {/* 手机屏幕 */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* 状态栏 */}
                    <div className={'h-32 bg-gradient-to-br ' + current.mockupColor + ' p-4 flex flex-col justify-end'}>
                      <div className="text-white text-lg font-bold">{current.label}小程序</div>
                      <div className="text-white/80 text-xs mt-1">时代节点</div>
                    </div>
                    {/* 商品列表模拟 */}
                    <div className="p-3 space-y-2">
                      {current.mockupItems.map((item) => (
                        <div key={item} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                          <div className={'w-10 h-10 rounded-lg bg-gradient-to-br ' + current.mockupColor + ' opacity-20'} />
                          <div>
                            <div className="text-xs font-medium text-slate-800">{item}</div>
                            <div className="text-xs text-muted">热销</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* 手机底部指示条 */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
