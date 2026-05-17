/* ========================================
 * 行业解决方案 - Tab 切换逻辑
 * ======================================== */

export function initSolutions() {
  var tabs = document.querySelectorAll('.solutions__tab');
  var panels = document.querySelectorAll('.solutions__panel');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-tab');

      // 切换Tab激活状态
      tabs.forEach(function(t) { t.classList.remove('solutions__tab--active'); });
      tab.classList.add('solutions__tab--active');

      // 切换面板内容
      panels.forEach(function(panel) {
        if (panel.getAttribute('data-panel') === target) {
          panel.classList.add('solutions__panel--active');
        } else {
          panel.classList.remove('solutions__panel--active');
        }
      });
    });
  });
}