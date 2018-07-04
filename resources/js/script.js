$(document).ready(function() {
    
    /* for the sticky navigation */
    var waypoint = new Waypoint({
      element: $('.js--section-features'),
      handler: function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      },
        offset: 60 
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
    
    /* Animations on scroll */
    new Waypoint({
      element: $('.js--wp-1'),
      handler: function() {
        $('.js--wp-1').addClass('animated fadeIn');
      }, 
        offset: '50%'
    });
    
    new Waypoint({
      element: $('.js--wp-2'),
      handler: function() {
        $('.js--wp-2').addClass('animated fadeInUp');
      }, 
        offset: '50%'
    });
    
    new Waypoint({
      element: $('.js--wp-3'),
      handler: function() {
        $('.js--wp-3').addClass('animated fadeIn');
      }, 
        offset: '50%'
    });
    
    new Waypoint({
      element: $('.js--wp-4'),
      handler: function() {
        $('.js--wp-4').addClass('animated pulse');
      }, 
        offset: '50%'
    });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-md-menu')) {
            icon.removeClass('ion-md-menu');
            icon.addClass('ion-md-backspace');
        } else {
            icon.removeClass('ion-md-backspace');
            icon.addClass('ion-md-menu');
        }
    });
});