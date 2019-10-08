$(document).ready(function () {
    //header
    $(window).scroll(function() {
        let page_scroll = $(window).scrollTop();
        if(page_scroll > 150) {
            $('header').addClass('fixed');
            $('.down_arrow').addClass('showed')
        } else {
            $('header').removeClass('fixed');
            $('.down_arrow').removeClass('showed')
        }
        if(page_scroll > $('.icons').offset().top - $(window).height() / 2) {
            $('.icons').addClass('showed')
        }
    })

    //down arrow
    $('.down_arrow').click(function() {
        if($(this).hasClass('showed')) {
            $("html, body").animate({ scrollTop: 0 }, 600);
        } else {
            $("html, body").animate({ scrollTop: $('.about').offset().top - 85 }, 600);
        }
    });

    $('.portfolio .slider_wrap').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.testimonials .testimonials_slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.banner .banner_slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
})