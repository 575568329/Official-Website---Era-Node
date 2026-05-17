/* ========================================
 * 产品展示 - 交互增强
 * ======================================== */

export function initProducts() {
  // 卡片点击跳转到产品详情锚点（可扩展）
  var cards = document.querySelectorAll('.product-card');

  cards.forEach(function(card) {
    // 点击卡片时的触觉反馈效果
    card.addEventListener('mouseenter', function() {
      card.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // 点击操作按钮
    var actionBtn = card.querySelector('.product-card__action');
    if (actionBtn) {
      actionBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        // 滚动到联系区域
        var contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });
}