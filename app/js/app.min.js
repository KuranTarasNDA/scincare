$(window).on("load" , function () {
    $('.payment__payment').each(function () {
        $(this).on('click', () => {
            $('.payment__payment').removeClass('payment__payment_active')
            $(this).addClass('payment__payment_active')
        })
    })
    $('.header__burger').on('click', () => {
        $('.header').toggleClass('header_active')
        if ($('.header').hasClass('header_active')) {
            $('.header__mob').slideDown()
            $('.header__top').slideUp()
            $('body').addClass('scroll')
        } else {
            $('.header__mob').slideUp()
            $('.header__top').slideDown()
            $('body').removeClass('scroll')
        }
    })

    $(window).on('scroll', () => {
        if ($('.header').offset().top > 0) {
            $('.header').addClass('header_border')
        } else {
            $('.header').removeClass('header_border')
        }
    })
    if ($('.header').offset().top > 0) {
        $('.header').addClass('header_border')
    } else {
        $('.header').removeClass('header_border')
    }
})



