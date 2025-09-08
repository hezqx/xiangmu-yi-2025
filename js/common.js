// 公用脚本初始化
$(document).ready(function() {
    // 初始化所有模块
    initSwiper();
    initTabs();
    initMobileNav();
});

// Swiper轮播图模块
function initSwiper() {
    const swiper = new Swiper('.swiper-container', {
        // 基础配置
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // 导航按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 鼠标悬停暂停
        on: {
            init: function() {
                $('.swiper-container').hover(
                    function() {
                        swiper.autoplay.stop();
                    },
                    function() {
                        swiper.autoplay.start();
                    }
                );
            }
        }
    });
}

// Tab切换模块
function initTabs() {
    // 事件委托处理Tab点击
    $(document).on('click', '.tab__btn', function() {
        const $this = $(this);
        const targetTab = $this.data('tab');
        
        // 移除所有激活状态
        $('.tab__btn').removeClass('tab__btn--active');
        $('.tab__panel').removeClass('tab__panel--active');
        
        // 添加当前激活状态
        $this.addClass('tab__btn--active');
        $('#' + targetTab).addClass('tab__panel--active');
    });
}

// 移动端导航模块
function initMobileNav() {
    // 移动端菜单切换
    $(document).on('click', '.header__mobile-toggle', function() {
        $('.header__nav').slideToggle();
        $(this).toggleClass('active');
    });
    
    // 窗口大小改变时重置导航
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.header__nav').removeAttr('style');
            $('.header__mobile-toggle').removeClass('active');
        }
    });
}

// 平滑滚动到指定位置
function scrollToSection(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 70
    }, 800);
}

// 页面滚动时头部样式变化
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    
    if (scrollTop > 100) {
        $('.header').addClass('header--scrolled');
    } else {
        $('.header').removeClass('header--scrolled');
    }
});