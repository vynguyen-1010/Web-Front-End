$(function() {
    $(window).scroll(function () { 
        var vitri = $('html').scrollTop();
        if(vitri>=200){
            $('.mtren').addClass('mautrang');
        }
        else{
            $('.mtren').removeClass('mautrang');
        }
    });
})