// $(function() {
//     $('.menu ul li:nth-child(1) a').click(function (e) { 
//         e.preventDefault();   
//         $('html').animate({scrollTop: 700}, 500);
//     });
//     $('.menu ul li:nth-child(2) a').click(function (e) { 
//         e.preventDefault();   
//         $('html').animate({scrollTop: 1400}, 500);
//     });
//     $('.menu ul li:nth-child(3) a').click(function (e) { 
//         e.preventDefault();   
//         $('html').animate({scrollTop: 2000}, 500);
//     });
//     $('.menu ul li:nth-child(4) a').click(function (e) { 
//         e.preventDefault();   
//         $('html').animate({scrollTop: 2700}, 500);
//     });
//     $('.menu ul li:nth-child(5) a').click(function (e) { 
//         e.preventDefault();   
//         $('html').animate({scrollTop: 3700}, 500);
//     });
// })
$(function () {
    $('.menu ul li:nth-child(1) a').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.chapter1').offset().top}, 1000, 'easeOutBounce');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(1)').addClass('xanh');          
    });
    $('.menu ul li:nth-child(2) a').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.chapter2').offset().top}, 1000, 'easeOutBounce');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(2)').addClass('xanh');       
    });
    $('.menu ul li:nth-child(3) a').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.chapter3').offset().top}, 1000, 'easeOutBounce');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(3)').addClass('xanh');   
    });
    $('.menu ul li:nth-child(4) a').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.chapter4').offset().top}, 1000, 'easeOutBounce');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(4)').addClass('xanh');        
    });
    $('.menu ul li:nth-child(5) a').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: $('.chapter5').offset().top}, 1000, 'easeOutBounce');
        $('.menu ul li').removeClass('xanh');
        $('.menu ul li:nth-child(5)').addClass('xanh');        
    });
    $('button.top').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: 0},500,'easeOutExpo');
        $('.menu ul li').removeClass('xanh');
    });   
    
});