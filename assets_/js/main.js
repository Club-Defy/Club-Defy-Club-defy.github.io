// sidemenu 
$('.navBarBox').click(function(){
    $('.sidemenu').addClass('sidemenuActive');
});
$('.sidemenuColse').click(function(){
    $('.sidemenu').removeClass('sidemenuActive');
})

// bannerMainSlider
// $('.bannerMainSlider').owlCarousel({
//     loop: true,
//     margin: 0,
//     autoplay: true,
//     autoplaySpeed: 10000,
//     autoplayHoverPause: true,
//     slideTransition: 'linear',
//     responsive: {
//         0: {
//             items: 1.1,
//             nav: true,
//         },
//         768: {
//             items: 3,
//             nav: true,
//         },
//         1024: {
//             items: 4,
//             nav: true,
//         },
//         1440: {
//             items: 5,
//             nav: true,
//         },
//         2560: {
//             items: 5,
//             nav: true,
//         }
//     }
// });

// animation top   
// $(window).scroll(function() {     
//     $('.animTop').each(function(){
//         var imagePos = $(this).offset().top;

//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+500) {
//             $(this).css({
//                 marginTop: '50px',
//                 opacity: '1',
//             });
//         }
//         else{
//             $(this).css({
//                 marginTop: '80px',
//                 opacity: '0',
//             });
//         }
//     });

    // animation right            
    // $('.animRight').each(function(){
    //     var imagePos = $(this).offset().top;

    //     var topOfWindow = $(window).scrollTop();
    //     if (imagePos < topOfWindow+500) {
    //         $(this).addClass("animRightActive");
    //     }
    //     else{
    //         $(this).removeClass("animRightActive");
    //     }
    // });

    // animation left
//     $('.animLeft').each(function(){
//         var imagePos = $(this).offset().top;

//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+500) {
//             $(this).addClass("animLeftActive");
//         }
//         else{
//             $(this).removeClass("animLeftActive");
//         }
//     });
// });