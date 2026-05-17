/* ========================================
 * 导航栏 - 滚动变化 + 移动端菜单
 * ======================================== */

export function initNavbar() {
  var navbar = document.querySelector('.navbar');
  var hamburger = document.querySelector('.navbar__hamburger');
  var mobileMenu = document.querySelector('.navbar__mobile-menu');
  var navLinks = document.querySelectorAll('.navbar__link');

  // ---- 滚动检测：切换透明/毛玻璃 ----
  var lastScroll = 0;
  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
      navbar.classList.remove('navbar--transparent');
    } else {
      navbar.classList.remove('navbar--scrolled');
      navbar.classList.add('navbar--transparent');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // 初始化

  // ---- 移动端菜单开关 ----
  function toggleMobileMenu() {
    hamburger.classList.toggle('navbar__hamburger--active');
    mobileMenu.classList.toggle('navbar__mobile-menu--open');
    document.body.style.overflow = mobileMenu.classList.contains('navbar__mobile-menu--open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('navbar__hamburger--active');
    mobileMenu.classList.remove('navbar__mobile-menu--open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  // ---- 菜单项点击：平滑滚动并关闭菜单 ----
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var offsetTop = target.offsetTop - 72; // 导航栏高度
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
      closeMobileMenu();
    });
  });

  // ---- 滚动时高亮当前区块对应的导航项 ----
  var sections = document.querySelectorAll('section[id]');
  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function(link) {
          link.classList.remove('navbar__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('navbar__link--active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}