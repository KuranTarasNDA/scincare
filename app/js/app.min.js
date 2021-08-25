$(window).on("load" , function () {

    const daySwiper = new Swiper('.day__customer-slider', {
        // Optional parameters
        spaceBetween: 10,
    });
    const productSwiper = new Swiper('.product__customer-slider', {
        // Optional parameters
        spaceBetween: 10,
    });




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




    $('.product__quantity-top').on('click', () => {
        let number = parseInt($('.product__quantity-number').attr('data-quantity-product'))
        number += 1
        $('.product__quantity-number').attr('data-quantity-product', number)
        $('.product__quantity-number').text(number)
    })
    $('.product__quantity-bottom').on('click', () => {
        if ($('.product__quantity-number').attr('data-quantity-product') > 1) {
            let number = parseInt($('.product__quantity-number').attr('data-quantity-product'))
            number -= 1
            $('.product__quantity-number').attr('data-quantity-product', number)
            $('.product__quantity-number').text(number)
        }
    })




    $('.product__calculate-next').on('click', () => {
        let number = parseInt($('.product__calculate-quantity').attr('data-quantity-product'))
        number += 1
        $('.product__calculate-quantity').attr('data-quantity-product', number)
        $('.product__calculate-quantity').text(number)
    })
    $('.product__calculate-prev').on('click', () => {
        if ($('.product__calculate-quantity').attr('data-quantity-product') > 1) {
            let number = parseInt($('.product__calculate-quantity').attr('data-quantity-product'))
            number -= 1
            $('.product__calculate-quantity').attr('data-quantity-product', number)
            $('.product__calculate-quantity').text(number)
        }
    })




    $('.cart__quantity-next').each(function (index) {
        $(this).on('click', () => {
            let number = parseInt($('.cart__quantity-product').eq(index).attr('data-quantity-product'))
            number += 1
            $('.cart__quantity-product').eq(index).attr('data-quantity-product', number)
            $('.cart__quantity-product').eq(index).text(number)
        })
    })
    $('.cart__quantity-prev').each(function (index) {
        $(this).on('click', () => {
            if ($('.cart__quantity-product').eq(index).attr('data-quantity-product') > 1) {
                let number = parseInt($('.cart__quantity-product').eq(index).attr('data-quantity-product'))
                number -= 1
                $('.cart__quantity-product').eq(index).attr('data-quantity-product', number)
                $('.cart__quantity-product').eq(index).text(number)
            }
        })
    })




    $('.completing__banner-rectangle').each(function () {
        $(this).on('click', () => {
            $(this).toggleClass('completing__banner-rectangle_active')
        })
    })

})



