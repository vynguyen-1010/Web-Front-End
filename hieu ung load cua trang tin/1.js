$(function() {
    $('html').scrollTop(0);
    $(window).scroll(function () { 
        var vitri = $('html').scrollTop();
        console.log(vitri);
        $('header').addClass('bienmat');
        $('.container-fluid').addClass('xuathien');
        if(vitri < 100){
            $('header').removeClass('bienmat');
            $('.container-fluid').removeClass('xuathien');
        }
    });  
})