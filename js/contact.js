/* ========================================
 * 联系表单 - 验证 + 内联成功消息
 * ======================================== */

export function initContact() {
  var form = document.querySelector('.contact__form');
  var successEl = document.querySelector('.form__success');
  var resetBtn = document.querySelector('.form__reset-btn');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 简单表单验证
    var inputs = form.querySelectorAll('[required]');
    var valid = true;

    inputs.forEach(function(input) {
      // 移除旧的错误样式
      input.style.borderColor = '';

      if (!input.value.trim()) {
        input.style.borderColor = '#EF4444';
        valid = false;
      }
    });

    // 邮箱格式校验
    var emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#EF4444';
        valid = false;
      }
    }

    if (!valid) return;

    // 模拟提交（显示成功消息）
    form.style.display = 'none';
    if (successEl) {
      successEl.classList.add('form__success--visible');
    }
  });

  // 输入时清除错误样式
  form.querySelectorAll('input, textarea').forEach(function(el) {
    el.addEventListener('input', function() {
      el.style.borderColor = '';
    });
  });

  // 重新提交按钮
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      form.reset();
      form.style.display = '';
      if (successEl) {
        successEl.classList.remove('form__success--visible');
      }
    });
  }
}