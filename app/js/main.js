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
        } else {
            $('.header__mob').slideUp()
        }
    })

})



