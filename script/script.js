$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        dots: true
    });
});

$('.mini-menu').click(function () {
    if ($('nav ul').hasClass('active')) {
        $('nav ul').removeClass('active');
    } else {
        $('nav ul').addClass('active');
    }
});

$('nav a').click(function () {
    $('nav ul').removeClass('active');
})
$('.back').click(function () {
    $('nav ul').removeClass('active');
})