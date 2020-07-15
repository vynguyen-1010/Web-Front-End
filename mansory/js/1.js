$(function() {
    $('.content').isotope({
        itemSelector: 'li'
    });
    //Code cho filter
    $('.noidung ul li a').click(function (e) { 
        e.preventDefault();
        var cat = $(this).data('class'); // catergory
        var title = $(this).text();
        $('.jumbotron h4.display-4').text(title);
        if(cat == "all"){
            $('.content ul').isotope({
                filter: "*"
            })
        }else{
            $('.content ul').isotope({
                filter: "." + cat
            })
        }
    });
})