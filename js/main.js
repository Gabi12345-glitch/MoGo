

$(document).ready(function(){
    $(".hamburger__inner").click(function(){
        $(".hamburger__menu").toggleClass("active");
        $(".sidebar").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

   $('.slider__item').click(function () {
        $('.slider__item.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.collapse__icon-toggle').click(function () {
        $(this).toggleClass('active');
        $('.collapse__container-subtitle').not($(this).closest('.collapse__row').find('.collapse__container-subtitle')).removeClass('active');
        $(this).closest('.collapse__row').find('.collapse__container-subtitle').toggleClass('active');
    });
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 3000,
            // arrows: true,
        });
    });
});



