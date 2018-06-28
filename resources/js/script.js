$(document).ready(function() {
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
//    $('.js--section-features').waypoints(function(direction) {
//        if(direction == 'down') {
//            $('nav').addClass('sticky');
//        } else {
//            $('nav').removeClass('sticky');
//        }
//    });
});