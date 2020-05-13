$(function() {
    console.log('ready');
    $('.gallery').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
    });
});