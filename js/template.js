(function ($) {
    $(document).ready(function () {

    });
    const stickyHeader = (scroll, targetHeight) => {
        if (scroll > targetHeight) {
            $('.main-header').removeClass('middle-state').addClass('sticky');
        }
        else if (scroll < targetHeight && scroll > 120) {
            $('.main-header').addClass('middle-state');
        }
        else {
            $('.main-header').removeClass('middle-state sticky');
        }
    }

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let heroHeight = $('.hero-section').outerHeight();
        if (heroHeight) {
            stickyHeader(scroll, heroHeight)
        }
    });

    $(window).resize(function () {

    });

    $(window).load(function () {

    });
})(jQuery);