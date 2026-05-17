/* ========================================
 * 额外动画效果
 * ======================================== */

export function initAnimations() {
  // ---- 架构节点点击展开详情 ----
  var archNodes = document.querySelectorAll('.arch__node');
  var archDetail = document.querySelector('.arch__detail');
  var archDetailTitle = document.querySelector('.arch__detail-title');
  var archDetailGrid = document.querySelector('.arch__detail-grid');

  var archData = {
    app: {
      title: '应用层 - 用户触达',
      items: ['微信小程序商城', 'H5 移动端页面', 'PC 管理后台', 'AI 智能客服', '数据看板大屏']
    },
    biz: {
      title: '业务层 - 核心能力',
      items: ['商品管理 & SKU', '订单 & 支付流程', '会员 & 营销系统', '库存 & 供应链', '多门店管理']
    },
    data: {
      title: '数据层 - 基础设施',
      items: ['云数据库 MySQL', 'Redis 缓存加速', 'OSS 对象存储', '日志 & 监控系统', 'API Gateway']
    }
  };

  if (archDetail) {
    archNodes.forEach(function(node) {
      node.addEventListener('click', function() {
        var layer = node.getAttribute('data-layer');
        var data = archData[layer];
        if (!data) return;

        // 如果已展开同一个，收起
        if (archDetail.classList.contains('arch__detail--open') && archDetailTitle.textContent === data.title) {
          archDetail.classList.remove('arch__detail--open');
          return;
        }

        // 更新内容
        archDetailTitle.textContent = data.title;
        archDetailGrid.innerHTML = data.items.map(function(item) {
          return '<div class="arch__detail-item">' + item + '</div>';
        }).join('');

        archDetail.classList.add('arch__detail--open');
      });
    });

    // 点击页面其他区域收起
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.arch__node') && !e.target.closest('.arch__detail')) {
        archDetail.classList.remove('arch__detail--open');
      }
    });
  }

  // ---- 联系方式点击复制 ----
  var channels = document.querySelectorAll('.contact__channel');
  channels.forEach(function(channel) {
    channel.addEventListener('click', function() {
      var value = channel.querySelector('.contact__channel-value');
      if (value) {
        var text = value.textContent.trim();
        navigator.clipboard.writeText(text).then(function() {
          // 简单反馈：短暂改变颜色
          var orig = value.style.color;
          value.style.color = '#06B6D4';
          setTimeout(function() { value.style.color = orig; }, 800);
        }).catch(function() {
          // 降级处理
        });
      }
    });
  });
}