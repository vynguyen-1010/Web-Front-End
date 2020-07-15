$(function() {
    $('.to').addClass('g');
    $('.nen').addClass('k');
    $('.nd').addClass('a');
    var tb = setInterval(function() {
        $('.nen').removeClass('k');
        $('.nd').removeClass('a');
        $('.to').removeClass('g');
        clearInterval(tb);
    }, 5000);
    $('.to').addClass('g');
    $('.nen').addClass('k');
    $('.nd').addClass('a');
    $('.nut').click(function (e) { 
        e.preventDefault();
        $('.to').addClass('g');
        $('.nen').addClass('k');
        $('.nd').addClass('a');
    });
    $('.nutdong, .nen').click(function (e) { 
        e.preventDefault();
        $('.nen').removeClass('k');
        $('.nd').removeClass('a');
        $('.to').removeClass('g');
    });
})