$(function() {

    thoigian = setInterval(function(){
        var vitri = $('.xanh').index()+1;
      
        $('.nutslide ul li').removeClass('xanh');
        if(vitri==$('.nutslide ul li').length){
            vitri = 0;
        }
        $('.nutslide ul li:nth-child('+ (vitri+1) +')').addClass('xanh');
        


        var sau = $('.active').next();
        //console.log(sau.length);
       
        if(sau.length == 0){
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function (e) {
                $('.ra-trai').removeClass('ra-trai');
            });
            $('.anhslide ._1slide:first-child').addClass('vao-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.vao-phai').addClass('active').removeClass('vao-phai');
            });
        }   
        else{
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function (e) {
                $('.ra-trai').removeClass('ra-trai');
            });
            sau.addClass('vao-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                sau.addClass('active');               
                sau.removeClass('vao-phai');
            });
        }
    }, 3000)

    $('.next').click(function (e) { 
        clearInterval(thoigian);
        //xu ly cho phan nut
        var vitri = $('.xanh').index()+1;
      
        $('.nutslide ul li').removeClass('xanh');
        if(vitri==$('.nutslide ul li').length){
            vitri = 0;
        }
        $('.nutslide ul li:nth-child('+ (vitri+1) +')').addClass('xanh');
        


        var sau = $('.active').next();
        //console.log(sau.length);
        e.preventDefault();
        if(sau.length == 0){
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function (e) {
                $('.ra-trai').removeClass('ra-trai');
            });
            $('.anhslide ._1slide:first-child').addClass('vao-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.vao-phai').addClass('active').removeClass('vao-phai');
            });
        }   
        else{
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function (e) {
                $('.ra-trai').removeClass('ra-trai');
            });
            sau.addClass('vao-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                sau.addClass('active');               
                sau.removeClass('vao-phai');
            });
        }
    });
    
    $('.prev').click(function (e) { 
        clearInterval(thoigian);

        var truoc = $('.active').prev();
        var vitri = $('.xanh').index() + 1;
      console.log(vitri);
      console.log($('.nutslide ul li').length);
        $('.nutslide ul li').removeClass('xanh');
        if(vitri==1){
            vitri = $('.nutslide ul li').length+1;
        }
        $('.nutslide ul li:nth-child('+ (vitri-1) +')').addClass('xanh');
        // console.log(truoc.length);
        e.preventDefault();
        if(truoc.length == 0){
            $('.active').addClass('ra-phai').one('webkitAnimationEnd', function (e) {
                $('.ra-phai').removeClass('ra-phai');
            });
            $('.anhslide ._1slide:last-child').addClass('vao-trai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.vao-trai').addClass('active').removeClass('vao-trai');
            });
        }   
        else{
            $('.active').addClass('ra-phai').one('webkitAnimationEnd', function (e) {
                $('.ra-phai').removeClass('ra-phai');
            });
            truoc.addClass('vao-trai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                truoc.addClass('active');
                truoc.removeClass('vao-trai');
            });
        }
    });
    
   
    $('.nutslide ul li').click(function (e) { 
        e.preventDefault();
        $('.nutslide ul li').removeClass('xanh');
        $(this).addClass('xanh');
        // console.log($(this).index()+1);
        $('.active').addClass('ra-phai').one('webkitAnimationEnd', function (e) {
            $('.ra-phai').removeClass('ra-phai');
        });
        $('.anhslide ._1slide:nth-child('+($(this).index()+1)+')').addClass('vao-trai').one('webkitAnimationEnd', function (e) {
            $('.active').removeClass('active');
            $('.vao-trai').addClass('active').removeClass('vao-trai');
        });
    });
    
})