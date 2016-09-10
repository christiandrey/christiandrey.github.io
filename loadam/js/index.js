$(document).ready(function () {
    $('.navCloseBtn, .navToggle').click(function () {
        $('.mainPage').toggleClass('scaleClass');
        $('.nextPage').toggleClass('scalenextPage');
        $('.lastPage').toggleClass('scalelastPage');
    })
})
