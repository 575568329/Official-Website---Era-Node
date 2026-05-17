# 时代节点 EraNode - 企业官网

面向品牌商/经销商/门店的供应链数字化解决方案提供商。

## 技术栈

- 纯 HTML5 + CSS3 + JavaScript（ES Module）
- 零框架依赖，无构建步骤
- 响应式设计，移动端优先
- CSS 变量统一管理主题

## 项目结构

`
├── index.html          # 主页面
├── css/
│   ├── variables.css   # CSS 变量（颜色、字体、间距等）
│   ├── reset.css       # 浏览器样式重置
│   ├── layout.css      # 通用布局、按钮、容器
│   ├── navbar.css      # 导航栏（毛玻璃效果）
│   ├── hero.css        # 首屏（粒子动画、渐变背景）
│   ├── stats.css       # 信任数字（count-up）
│   ├── products.css    # 产品展示（hover 展开）
│   ├── solutions.css   # 行业方案（Tab 切换）
│   ├── advantages.css  # 核心优势（滚动渐入）
│   ├── architecture.css # 技术架构（CSS 架构图）
│   ├── about.css       # 关于我们
│   ├── contact.css     # 联系表单（内联成功消息）
│   └── animations.css  # 通用动画定义
├── js/
│   ├── main.js         # 主入口
│   ├── navbar.js       # 导航栏逻辑
│   ├── scroll-observer.js # IntersectionObserver 工具
│   ├── counter.js      # 数字计数动画
│   ├── solutions.js    # Tab 切换
│   ├── products.js     # 产品卡片交互
│   ├── contact.js      # 表单验证 + 提交
│   └── animations.js   # 额外动画（架构详情等）
├── assets/
│   └── favicon.svg     # 网站图标
└── README.md           # 本文件
`

## 快速预览

直接用浏览器打开 index.html 即可查看。

如需本地服务器：

`ash
# Python
python -m http.server 8080

# Node.js
npx serve .
`

## 设计规范

- **主色**: 深蓝 #0A1628 → 靛蓝 #1E40AF
- **辅助色**: 亮青 #06B6D4
- **字体**: 中文系统字体栈 + Inter（英文）
- **动画**: CSS @keyframes + IntersectionObserver
- **风格**: 深色科技感，Apple 级动画细节