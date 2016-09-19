$(document).ready(function () {
    $('.pageSlider').unslider({autoplay: true, arrows: false});
    $('.heroAnimationBus').addClass('moveBus');
    $('.navCloseBtn, .navToggle').click(function () {
        $('.navItems').find('a').toggleClass('navItemAnimation');
        $('.mainPage').toggleClass('scaleClass');
        $('.nextPage').toggleClass('scalenextPage');
        $('.lastPage').toggleClass('scalelastPage');
    })
})
