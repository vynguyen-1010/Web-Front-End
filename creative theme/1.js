$(function() {
    $(window).scroll(function () { 
        var vitribody = $('html').scrollTop();
        if(vitribody>=200){
            $('.menutren').addClass('mautrang');
        }
        else{
            $('.menutren').removeClass('mautrang');
        }
    });
    $('.menutren .collapse ul li:nth-child(1) a').click(function (e) { 
        e.preventDefault();
        var vitri = $('.about').offset().top-55.6;
        $('html').animate({
            scrollTop: vitri},
            1500);
    });
})