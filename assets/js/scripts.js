(function($) {
  "use strict";

  // Enable Bootstrap tooltips via data-attributes globally
  $('[data-toggle="tooltip"]').tooltip();

  // Enable Bootstrap popovers via data-attributes globally
  $('[data-toggle="popover"]').popover();

  $(".popover-dismiss").popover({
    trigger: "focus"
  });

  // Activate Feather icons
  feather.replace();
/*
  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
    target: "#stickyNav",
    offset: 96
  });
*/
/*
// anchor on another page
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -120
    }, 500);
    return false;
}); */

/*
  // Smooth scrolling
  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/


  // Scrolls to an offset anchor when a sticky nav link is clicked
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120
          },
          200
        );
        return false;
      }
    }
  });

/*
  // Collapse Navbar
  // Add styling fallback for when a transparent background .navbar-marketing is scrolled
  var navbarCollapse = function() {
    if ($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
      return;
    }
    if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
      $(".navbar-marketing").addClass("navbar-scrolled");
    } else {
      $(".navbar-marketing").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse); */
})(jQuery);
