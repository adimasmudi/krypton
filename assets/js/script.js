$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

    $('.lp-btn').on('click',function(){
        $('.learning-path').toggleClass('hidden');
        $('body').toggleClass('overflow-hidden');
        $('.bi-caret-down').toggleClass('rotate-180-deg');
    });

    $('.navbar-toggler').on('click',function(){
        $('.learning-path').addClass('hidden');
        if($('body').hasClass('overflow-hidden')){
            $('body').removeClass('overflow-hidden');
        }
        $('.bi-caret-down').toggleClass('rotate-180-deg');
    })

    $(window).on('scroll',function(){
        if($(window).width() >= 1080){
            if(scrollY > 1800 && scrollY <= 5000 ){
                for(item of $('.icon-path')){
                    $(`.${item.className.split(' ')[1]}`).css('filter','brightness(50%)')
                }
                if(scrollY > 1800 && scrollY <= 2458){
                    $('.web-icon-path').css('filter','brightness(100%)');
                }else if(scrollY >= 2460 && scrollY < 3300){
                    $('.android-icon-path').css('filter','brightness(100%)');
                }else if(scrollY >= 3300 && scrollY <= 4150){
                    $('.ui-ux-icon-path').css('filter','brightness(100%)');
                }else if(scrollY >= 4150 && scrollY <= 5000){
                    $('.data-science-icon-path').css('filter','brightness(100%)');
                }
            }
        }else{
            $('.icon-gradasi').css('visibility','hidden');
        }
        
    });

    //  TESTIMONIALS CAROUSEL
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});

const preloading = document.querySelector(".preloading");
if(preloading){
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    setTimeout(function(){
        body.style.overflow = 'visible';
        preloading.classList.add('hidden');
    },3000);
}





