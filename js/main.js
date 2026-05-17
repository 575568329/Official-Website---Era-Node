/* ========================================
 * 主入口 - 初始化所有模块
 * 时代节点 EraNode 官网
 * ======================================== */

import { initNavbar } from './navbar.js';
import { initAllScrollAnimations } from './scroll-observer.js';
import { initCounters } from './counter.js';
import { initSolutions } from './solutions.js';
import { initProducts } from './products.js';
import { initContact } from './contact.js';
import { initAnimations } from './animations.js';

/**
 * 页面加载完成后初始化所有功能
 */
document.addEventListener('DOMContentLoaded', function() {
  // 1. 导航栏（滚动效果 + 移动端菜单）
  initNavbar();

  // 2. 滚动渐入动画
  initAllScrollAnimations();

  // 3. 数字计数器
  initCounters();

  // 4. 行业解决方案 Tab 切换
  initSolutions();

  // 5. 产品展示交互
  initProducts();

  // 6. 联系表单
  initContact();

  // 7. 额外动画效果（架构详情等）
  initAnimations();

  console.log('%c时代节点 EraNode', 'color: #06B6D4; font-size: 24px; font-weight: bold;');
  console.log('%c供应链数字化解决方案', 'color: #94A3B8; font-size: 14px;');
});