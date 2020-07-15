$(function() {
    $('.noidung .big-content .content').slideUp();
    $('.noidung .big-content:nth-child(1) .title').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(1) .content').slideToggle();
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content .title .fa-angle-up').removeClass('icon-up');
        $('.noidung .big-content:nth-child(1) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content:nth-child(1) .title .fa-angle-up').addClass('icon-up');
    });
    $('.noidung .big-content:nth-child(2) .title').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(2) .content').slideToggle();
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content .title .fa-angle-up').removeClass('icon-up');
        $('.noidung .big-content:nth-child(2) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content:nth-child(2) .title .fa-angle-up').addClass('icon-up');
    });
    $('.noidung .big-content:nth-child(3) .title').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(3) .content').slideToggle();
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content .title .fa-angle-up').removeClass('icon-up');
        $('.noidung .big-content:nth-child(3) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content:nth-child(3) .title .fa-angle-up').addClass('icon-up');
    });
    $('.noidung .big-content:nth-child(4) .title').click(function (e) { 
        e.preventDefault();
        $('.noidung .big-content .content').slideUp();
        $('.noidung .big-content:nth-child(4) .content').slideToggle();
        $('.noidung .big-content .title .fa-angle-down').removeClass('none');
        $('.noidung .big-content .title .fa-angle-up').removeClass('icon-up');
        $('.noidung .big-content:nth-child(4) .title .fa-angle-down').addClass('none');
        $('.noidung .big-content:nth-child(4) .title .fa-angle-up').addClass('icon-up');
    });
    $('.noidung .big-content .content .img img:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('.container').addClass('none');
        $('.container1').addClass('b');
        $('.container1').click(function (e) { 
            e.preventDefault();
            $('.container').removeClass('none');
            $('.container1').removeClass('b');
        });
    });

})