/* ========================================
 * 数字计数动画
 * 观察元素进入视口后执行 count-up
 * ======================================== */

/**
 * 数字计数动画函数
 * @param {HTMLElement} el - 目标元素
 * @param {number} target - 目标数字
 * @param {number} duration - 动画持续时间(ms)
 * @param {string} suffix - 后缀文字
 */
function animateCounter(el, target, duration, suffix) {
  if (!suffix) suffix = '';
  var start = 0;
  var startTime = null;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var current = Math.floor(easeOutQuart(progress) * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(step);
}

/**
 * 初始化数字计数器
 */
export function initCounters() {
  var counters = document.querySelectorAll('[data-count]');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 2000;
        animateCounter(el, target, duration, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function(el) { observer.observe(el); });
}