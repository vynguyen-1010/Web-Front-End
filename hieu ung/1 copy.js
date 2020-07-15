$(function() {
    TweenMax.staggerFrom($('.anh'), 0.5, {top: 100, opacity: 0}, 0.1);
    $('.noidungthem').slideUp(0);
    $('button.nutload').click(function (e) { 
        e.preventDefault();
        $('.noidungthem').slideDown();
        TweenMax.staggerFrom($('.noidungthem .anh'), 0.4, {top: 100, opacity: 0}, 0.3);
    });
});