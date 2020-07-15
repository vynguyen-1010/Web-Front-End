$(function() {
    $('.nutmo .icon').click(function (e) { 
        e.preventDefault();
        $('.nutmo .icon.fa.fa-bars').toggleClass('mat');
        $('.nutmo .icon.fa.fa-window-close').toggleClass('hien');
        $('.nd-menu').toggleClass('dichuyen');
    });
    $('.nd-menu ul li:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('.icon.fa.fa-window-close').removeClass('hien');
        $('.icon.fa.fa-bars').removeClass('mat');
        $('.nd-menu').removeClass('dichuyen');
        $('html').animate({
            scrollTop: $('.background').offset().top},1500,'easeOutExpo');
    });
    $('.nd-menu ul li:nth-child(2)').click(function (e) { 
        e.preventDefault();
        $('.icon.fa.fa-window-close').removeClass('hien');
        $('.icon.fa.fa-bars').removeClass('mat');
        $('.nd-menu').removeClass('dichuyen');        
        $('html').animate({
            scrollTop: $('.body-home').offset().top},
            1500,'easeOutExpo');
    });
    $('.nd-menu ul li:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('.icon.fa.fa-window-close').removeClass('hien');
        $('.icon.fa.fa-bars').removeClass('mat');
        $('.nd-menu').removeClass('dichuyen');        
        $('html').animate({
            scrollTop: $('.body-offer').offset().top},
            1500,'easeOutExpo');
    });
    $('.nd-menu ul li:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('.icon.fa.fa-window-close').removeClass('hien');
        $('.icon.fa.fa-bars').removeClass('mat');
        $('.nd-menu').removeClass('dichuyen');        
        $('html').animate({
            scrollTop: $('.body-por').offset().top},
            1500, 'easeOutExpo');
    });
    $('.nd-menu ul li:nth-child(5)').click(function (e) { 
        e.preventDefault();
        $('.icon.fa.fa-window-close').removeClass('hien');
        $('.icon.fa.fa-bars').removeClass('mat');
        $('.nd-menu').removeClass('dichuyen');
        $('html').animate({
            scrollTop: $('.body-contact').offset().top},
            1500,'easeOutExpo');
    });
    $('.backtotop').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0},
            1500,'easeOutExpo');
    });
    $('.khoi .btn.btn-info').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.body-home').offset().top},
            1500,'easeOutExpo');
    });
    $('.body-home .btn.btn-secondary').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.body-offer').offset().top},
            1500,'easeOutExpo');
    });
})