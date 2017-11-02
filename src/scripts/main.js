$(document).ready(function () {

    $(document).on('click', '.menu--mob', function (e) {
        $('.menu-desc').slideToggle();
        $(this).find('.hamburger').toggleClass('is-active');
        e.preventDefault();
    })
    $('.gal-main-top').slick({
        infinite: true,
        asNavFor: '.gal-main-bot',
        fade: true,
        draggable:false
    });
    $('.gal-main-bot').slick({
        infinite: true,
        slidesToShow: 10,
        asNavFor: '.gal-main-top',
        focusOnSelect: true,
        draggable:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 10
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            }
        ]
    });
});