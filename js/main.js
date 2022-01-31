
$(document).ready(function () {
    $('.carousel-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.carousel-back',
    nextArrow: '.carousel-next'
    });
});

$(document).ready(function () {
    $('.blog-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '',
    nextArrow: ''
    });
});