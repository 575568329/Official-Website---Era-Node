/* ========================================
 * 滚动观察器 - IntersectionObserver 工具
 * 监听元素进入视口时添加可见类
 * ======================================== */

/**
 * 初始化滚动观察器
 * @param {string} selector - 目标元素选择器
 * @param {string} visibleClass - 进入视口时添加的类名
 * @param {Object} options - IntersectionObserver 配置
 */
export function initScrollObserver(selector, visibleClass, options) {
  if (!visibleClass) visibleClass = 'fade-in--visible';
  var defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  Object.assign(defaultOptions, options || {});

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  var elements = document.querySelectorAll(selector);
  elements.forEach(function(el) { observer.observe(el); });
  return observer;
}

/**
 * 初始化多种方向的渐入动画
 */
export function initAllScrollAnimations() {
  initScrollObserver('.fade-in');
  initScrollObserver('.fade-in-left', 'fade-in-left--visible');
  initScrollObserver('.fade-in-right', 'fade-in-right--visible');
  initScrollObserver('.scale-in', 'scale-in--visible');
}