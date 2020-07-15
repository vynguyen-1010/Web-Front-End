$(function() {
    $('.menu ul li:nth-child(2)').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.home').offset().top}, 1000,'easeOutCirc');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(2)').addClass('xanh');
    });
    $('.menu ul li:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.pro').offset().top}, 1000,'easeOutCirc');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(3)').addClass('xanh');
    });
    $('.menu ul li:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.contact').offset().top}, 1000,'easeOutCirc');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(4)').addClass('xanh');
    });
    $('.menu ul li:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000,'easeOutCirc');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(1)').addClass('xanh');
    });
    $('button.top').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000,'easeOutCirc');
        $('.menu ul li').removeClass('xanh');
    });
})