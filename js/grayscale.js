(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // formato ANNO MESE GIORNO
  $('#clock').countdown('2019/10/5').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> G</div>'
      + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> H</div>'
      + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> M</div>'
      + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> S</div>'));
  });

  // playtrailer
  $('#playtrailer').click(function(){
    $(this).replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe src="https://streamable.com/s/panbq/ojhgev" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');
});

})(jQuery); // End of use strict