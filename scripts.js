$(function() {
    console.log('ready');
    $('.gallery').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
    });


    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200);
        return false;
    });
});