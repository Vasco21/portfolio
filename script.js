$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
   // toggle menu/navbar script
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
   });
   // owl carousel script
   $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav : false
            },
            600:{
                item: 2,
                nav : false
            },
            1000:{
                item: 3,
                nav : false
            }
        }
   });
});
