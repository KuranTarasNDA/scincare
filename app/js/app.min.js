$(window).on("load" , function () {
    $('.payment__payment').each(function () {
        $(this).on('click', () => {
            $('.payment__payment').removeClass('payment__payment_active')
            $(this).addClass('payment__payment_active')
        })
    })


})



