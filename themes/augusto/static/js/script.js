(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Aggiunge la classe active ai tasti della navbar alla sezione corrispondente mentre si scorre
  // https://stackoverflow.com/questions/30348314/how-to-use-scrollspy-without-using-bootstrap
  $(window).bind('scroll', function() {
    let currentTop = $(window).scrollTop();
    let elems = $('.scrollspy');

    elems.each(function(index) {
      let elemTop = $(this).offset().top;
      let elemBottom = elemTop + $(this).height();

      if (currentTop >= elemTop && currentTop <= elemBottom) {
        let id = $(this).attr('id');
        let navElem = $('a[href="/#' + id+ '"]');
        navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })

    // fix per il tasto contatti
    // https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
    if (currentTop + $(window).height() > $(document).height() - 100) {
      let navElem = $('a[href="/#contatti"]');
      navElem.parent().addClass('active').siblings().removeClass( 'active' );
    }
  }); 

  // Collapse Navbar
  var navbarCollapse = function () {
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

  // Play film trailer
  $("#playtrailer").click(function () {
    $(this).replaceWith('<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/panbq?autoplay=1" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>');
  });
  
})(jQuery); // End of use strict
