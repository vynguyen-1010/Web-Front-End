$(function() {
    $('.nutmo.l').click(function (e) { 
        e.preventDefault();
        $('.khoimenu').toggleClass('a');
    });
    $('.nutdongl').click(function (e) { 
        e.preventDefault();
        $('.khoimenu').removeClass('a');
    });

    $('.nutdongl, .nutdongr, .nutdongt, .nutdongb').click(function(e){
        e.preventDefault();
        $('.nutmo').removeClass('den');
    })

    $('.nutmo.r, .nutmo.t, .nutmo.l, .nutmo.b').click(function (e) { 
        e.preventDefault();
        $('.nutmo').toggleClass('den');
        $(this).removeClass('den');
    });

    $('.nutmo.r').click(function (e) { 
        e.preventDefault();
        $('.khoimenur').toggleClass('b');
    });
    $('.nutdongr').click(function (e) { 
        e.preventDefault();
        $('.khoimenur').removeClass('b');
    });

    $('.nutmo.t').click(function (e) { 
        e.preventDefault();
        $('.khoimenut').toggleClass('c');
    });
    $('.nutdongt').click(function (e) { 
        e.preventDefault();
        $('.khoimenut').removeClass('c');
    });
    $('.nutmo.b').click(function (e) { 
        e.preventDefault();
        $('.khoimenub').toggleClass('d');
    });
    $('.nutdongb').click(function (e) { 
        e.preventDefault();
        $('.khoimenub').removeClass('d');
    });
})