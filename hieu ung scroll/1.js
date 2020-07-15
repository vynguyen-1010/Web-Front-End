$(function() {
    $(window).scroll(function () { 
        console.log("Da cuon chuot");
        console.log($('html').scrollTop());
        var vitri = $('html').scrollTop();

        //bienhinh
        if(vitri >= 300 && vitri<600){
            $('.row.menucon').addClass('bienhinh');
        }
        else{
            $('.row.menucon').removeClass('bienhinh');
        }   

        //biendoi
        if(vitri >= 600 && vitri<2400){
            $('.row.menucon').addClass('biendoi');
            if(vitri >= 1200){
                $('.row.menucon').addClass('bienhinh1');
                $('.row.menucon1').addClass('xuathien');
            }
            else{
                $('.row.menucon').removeClass('bienhinh1');
                $('.row.menucon1').removeClass('xuathien');
            }  
        }
        else{
            $('.row.menucon').removeClass('biendoi');
        }

        //bienhinh1
              
    });
})