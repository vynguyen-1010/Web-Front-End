$(function() {
    //viet cho nut
    $('.content ul').isotope({
        itemSelector: 'li'
    });
    
    $('.tukhoa').keypress(function (e) { 
        if(e.keyCode == "13"){
            tu1 = $('.tukhoa').val();// nhan tat ca ky tu dung truoc enter
            //console.log(tu1);
            $('.content ul').isotope({
                filter:'.'+ tu1
            });
        }
    });;

    var thoigian = setInterval(function() {
            tu1 = $('.tukhoa').val();// nhan tat ca ky tu dung truoc enter         
            $('.content ul').isotope({
                filter:'.'+ tu1
            });
    }, 200);

    $('nav ul li a').click(function (e) { 
        e.preventDefault();
        clearInterval(thoigian);
        var danhmuc = $(this).data('class');
        var ten = $(this).text();
        //console.log(ten);
        if (danhmuc == 'all'){
            $('section h1').text(ten);
            $('.content ul ').isotope({
            filter:'*'
        });
        }
        else{
            $('section h1').text(ten);
            $('.content ul ').isotope({
                filter:'.'+danhmuc
            });
        }
        
    });
})