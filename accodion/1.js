$(function() {
    $('.content').slideUp();
    $('.small-block h3').click(function (e) { 
       //$('.content').slideToggle();
        $('.content').slideUp();
        $(this).next().slideToggle();
        $(this).toggleClass('xanh');
    });
})