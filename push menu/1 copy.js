$(function() {
    $('.nutmo.l').click(function (e) { 
        e.preventDefault();
        $('.khoimenu').toggleClass('a');
        $('.background').toggleClass('dichuyen');
    });
    $('.nutmo.r').click(function (e) { 
        e.preventDefault();
        $('.khoimenur').toggleClass('b');
        $('.background').toggleClass('dichuyen');
    });
    $('.nutmo.t').click(function (e) { 
        e.preventDefault();
        $('.khoimenut').toggleClass('c');
        $('.background').toggleClass('dichuyen');
    });
    $('.nutmo.b').click(function (e) { 
        e.preventDefault();
        $('.khoimenub').toggleClass('d');
        $('.background').toggleClass('dichuyen');
    });
})