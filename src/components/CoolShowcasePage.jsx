import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  DatabaseZap,
  Headphones,
  PackageCheck,
  ScanLine,
  ShoppingBag,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Logo from './Logo';

const operations = [
  {
    label: '08:30',
    title: '开店前',
    desc: '库存预警、热销商品和昨日复盘先摆在老板面前。',
    icon: PackageCheck,
  },
  {
    label: '12:10',
    title: '高峰期',
    desc: '顾客扫码下单，店员只处理确认、出餐和配送。',
    icon: ShoppingBag,
  },
  {
    label: '22:40',
    title: '打烊后',
    desc: 'AI 客服继续接待咨询，老板第二天再统一跟进。',
    icon: Bot,
  },
];

const industries = ['便利店', '茶饮', '餐饮', '服装', '生鲜'];

const reasons = [
  {
    icon: ScanLine,
    title: '从门店场景出发',
    desc: '围绕扫码下单、商品管理、会员复购和库存预警设计，不让老板适应复杂系统。',
  },
  {
    icon: DatabaseZap,
    title: '数据集中到一个后台',
    desc: '订单、库存、会员和客服状态统一查看，减少重复记录和来回切换。',
  },
  {
    icon: Headphones,
    title: '上线后有人支持',
    desc: '从行业模板配置到日常使用，遇到问题有人协助，不把复杂问题丢给门店。',
  },
];

const metrics = [
  { label: '今日订单', value: '126', hint: '+18 单待处理' },
  { label: '待回复咨询', value: '9', hint: 'AI 已接待 7 条' },
  { label: '库存预警', value: '4', hint: '建议今天补货' },
  { label: '会员复购', value: '32%', hint: '本周持续提升' },
];

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="cool-float relative mx-auto w-full max-w-[560px]"
    >
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-orange-500/25 via-teal-400/10 to-amber-300/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-stone-950/75 p-4 shadow-2xl shadow-orange-950/40 backdrop-blur-xl">
        <div className="cool-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-orange-300/15 to-transparent" />

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-orange-200/70">EraNode OS</div>
            <div className="mt-1 text-lg font-semibold text-white">门店经营驾驶舱</div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.9)]" />
            AI 在线
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
            >
              <div className="text-xs text-stone-400">{item.label}</div>
              <div className="mt-2 text-3xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-xs text-orange-100/70">{item.hint}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-white">订单流转</div>
              <div className="text-xs text-stone-400">实时同步</div>
            </div>
            {['扫码下单', '店员确认', '库存扣减', '会员积分'].map((step, index) => (
              <div key={step} className="flex items-center gap-3 py-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-400/15 text-xs font-semibold text-orange-200">
                  {index + 1}
                </div>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: '15%' }}
                    animate={{ width: `${88 - index * 12}%` }}
                    transition={{ duration: 1, delay: 0.65 + index * 0.12 }}
                    className="h-full rounded-full bg-gradient-to-r from-orange-300 to-teal-300"
                  />
                </div>
                <div className="w-20 text-right text-xs text-stone-300">{step}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-400/15 to-teal-300/10 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Headphones size={16} />
              AI 客服接待
            </div>
            <div className="mt-4 space-y-3">
              <div className="w-4/5 rounded-2xl rounded-tl-sm bg-white/10 p-3 text-xs text-stone-200">
                顾客询问：今天还有草莓吗？
              </div>
              <div className="ml-auto w-5/6 rounded-2xl rounded-tr-sm bg-orange-300 p-3 text-xs font-medium text-stone-950">
                已自动回复库存和到店自提时间。
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CoolNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-stone-950/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="[&_span]:text-white">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-stone-300 md:flex">
          <a href="#story" className="transition-colors hover:text-white">经营路径</a>
          <a href="#industries" className="transition-colors hover:text-white">适用门店</a>
          <a href="#relief" className="transition-colors hover:text-white">经营减负</a>
        </nav>
        <a href="#contact-cool" className="rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-stone-950 transition-transform hover:-translate-y-0.5">
          预约演示
        </a>
      </div>
    </header>
  );
}

export default function CoolShowcasePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#130f0b] text-white">
      <CoolNav />

      <main>
        <section id="top" className="relative flex min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="cool-grid absolute inset-0 opacity-45" />
          <div className="absolute left-[-10%] top-24 h-80 w-80 rounded-full bg-orange-500/30 blur-[120px]" />
          <div className="absolute bottom-0 right-[-8%] h-96 w-96 rounded-full bg-teal-400/20 blur-[130px]" />
          <div className="absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-amber-300/15 blur-[90px]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/15 bg-orange-200/10 px-4 py-2 text-sm text-orange-100">
                <Sparkles size={16} />
                门店数字化经营系统
              </div>
              <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[1.03] tracking-tight text-white md:text-7xl">
                把一家小店，
                <span className="block bg-gradient-to-r from-orange-200 via-orange-400 to-teal-200 bg-clip-text text-transparent">
                  管得更清楚。
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                时代节点把小程序商城、订单处理、库存预警、会员管理和 AI 客服集中到一个经营后台里。顾客下单更方便，店员处理更顺手，老板每天看得清楚。
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-cool"
                  className="cool-shimmer inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-400 px-7 py-4 font-semibold text-stone-950 shadow-2xl shadow-orange-500/25 transition-transform hover:-translate-y-0.5"
                >
                  预约免费演示
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  了解怎么帮门店省心
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-400">
                <span>先演示再决定</span>
                <span className="text-stone-600">/</span>
                <span>不懂技术也能用</span>
                <span className="text-stone-600">/</span>
                <span>上线后持续支持</span>
              </div>
            </motion.div>

            <DashboardMockup />
          </div>
        </section>

        <section id="story" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">Operating Flow</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">从开店到打烊，经营状态都在一处</h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                不再在多个工具之间来回切换，订单、库存、会员和客服围绕一天的经营节奏自动串联。
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {operations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.12 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                      <Icon size={22} />
                    </div>
                    <div className="mt-8 text-sm font-semibold text-orange-200">{item.label}</div>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-stone-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="industries" className="relative border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Industries</div>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">适合这些每天都很忙的门店</h2>
              </div>
              <p className="max-w-xl text-stone-400">
                先从行业模板开始，再按你的商品、配送、会员和服务方式调整，让系统贴近日常经营。
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-white/10 bg-stone-950/60 p-5 transition-all hover:-translate-y-1 hover:border-orange-200/40 hover:bg-white/[0.08]"
                >
                  <ScanLine className="text-orange-200" size={22} />
                  <div className="mt-8 text-xl font-bold">{industry}</div>
                  <div className="mt-2 text-sm leading-6 text-stone-400">商品、订单、会员和库存都能按行业习惯快速配置。</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="relief" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">Why EraNode</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">不是多一套软件，而是少一点经营负担</h2>
              <p className="mt-4 text-lg leading-8 text-stone-400">
                时代节点想解决的不是“有没有系统”，而是门店每天真正麻烦的事：漏单、库存不清、会员难维护、咨询没人回。
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-300/10 text-teal-200">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-stone-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact-cool" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-orange-500/10" />
          <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-stone-950 p-8 shadow-2xl shadow-orange-950/30 md:grid-cols-[1fr_.8fr] md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-orange-100">
                <TrendingUp size={16} />
                先看方案，再决定是否上线
              </div>
              <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">让你的门店先跑起来，再谈复杂功能。</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-400">
                留下你的行业和需求，我们会先用接近你门店的模板演示一遍：顾客怎么下单、店员怎么处理、老板怎么看数据。
              </p>
              <div className="mt-8 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
                {['无需绑卡', '先看演示', '有人协助配置'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:mt-0">
              <div className="flex items-center gap-3">
                <Clock3 className="text-orange-200" />
                  <div>
                    <div className="font-semibold text-white">预约一次产品演示</div>
                  <div className="text-sm text-stone-400">我们会按你的行业准备演示方案</div>
                </div>
              </div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5"
                >
                  <div className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">已记录你的演示预约</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    我们会根据你选择的行业准备演示方案。正式上线前，这里需要接入真实表单提交服务。
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    再填一次
                  </button>
                </motion.div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-white outline-none transition-colors placeholder:text-stone-500 focus:border-orange-300"
                    placeholder="电话"
                    required
                    type="tel"
                    aria-label="电话"
                  />
                  <select
                    className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-white outline-none transition-colors focus:border-orange-300"
                    required
                    defaultValue=""
                    aria-label="选择行业"
                  >
                    <option value="" disabled>选择行业</option>
                    {industries.map((industry) => <option key={industry}>{industry}</option>)}
                    <option>其他</option>
                  </select>
                  <textarea
                    className="min-h-28 w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-white outline-none transition-colors placeholder:text-stone-500 focus:border-orange-300"
                    placeholder="你想解决什么经营问题？"
                    aria-label="经营问题"
                  />
                  <button type="submit" className="w-full rounded-2xl bg-orange-300 px-5 py-4 font-bold text-stone-950 transition-colors hover:bg-orange-200">
                    预约免费演示
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
