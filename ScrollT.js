$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });
});


ScrollReveal({
    reset:false,
    distance: '60px',
    duration:2500,
    delay:400
    });
    
    ScrollReveal().reveal('.advline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.adv-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.headline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.head-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.sline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.stm-container',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jline',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container1',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container2',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container3',{delay:300,origin:'bottom'});
    ScrollReveal().reveal('.jtm-container4',{delay:300,origin:'bottom'});

    ScrollReveal().reveal('.media-icons i',{delay:300,origin:'bottom',interval:80});


    
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navTabs = document.getElementById('nav-tabs');
      
        mobileMenu.addEventListener('click', function() {
          navTabs.classList.toggle('active');
        });
      });
