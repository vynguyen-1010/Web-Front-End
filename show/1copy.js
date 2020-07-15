$(function() {
    $('.noidung .big-content .content').slideUp();
    $('.noidung .big-content:nth-child(1)').click(function (e){
        e.preventDefault();
        $('html').animate({scrollTop: 56});
        a = $(this).offset().top;
        console.log(a);
    });
    $('.noidung .big-content:nth-child(2)').click(function (e){
        e.preventDefault();
        $('html').animate({scrollTop: 400});
        a = $(this).offset().top;
        console.log(a);
    });
    $('.noidung .big-content:nth-child(3)').click(function (e){
        e.preventDefault();
        $('html').animate({scrollTop: 700});
    });
    $('.noidung .big-content:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(1) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(1) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(1) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(2) .title').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(2) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(2) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(2) .title strong').addClass('abc');
        $('html').animate({scrollTop: $('.noidung .big-content:nth-child(2) .title').offset().top}, 1000);
    });
    $('.noidung .big-content:nth-child(3) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.noidung .big-content:nth-child(3)').offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(3) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(3) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(3) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(4) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $(this).offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(4) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(4) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(4) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(5) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $(this).offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(5) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(5) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(5) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(6) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $(this).offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(6) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(6) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(6) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(7) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $(this).offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(7) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(7) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(7) .title strong').addClass('abc');
    });
    $('.noidung .big-content:nth-child(8) .title').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $(this).offset().top}, 1000);
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(8) .content').slideToggle(800);
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content:nth-child(8) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content .title strong').removeClass('abc');
        $('.noidung .big-content:nth-child(8) .title strong').addClass('abc');
    });
    $('.noidung .big-content .content .img img:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('zoom');
    });

})