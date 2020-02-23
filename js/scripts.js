/*!
 * Start Bootstrap - SB UI Pro v1.0.1 (https://shop.startbootstrap.com/product/sb-ui-pro)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under SEE_LICENSE (https://github.com/BlackrockDigital/sb-ui-pro/blob/master/LICENSE)
 */
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

  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
    target: "#stickyNav",
    offset: 82
  });

  // Scrolls to an offset anchor when a sticky nav link is clicked
  $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 81
          },
          200
        );
        return false;
      }
    }
  });

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
  $(window).scroll(navbarCollapse);
})(jQuery);

// CENOVNIK responsive fix
function addClassToCenovnik(cenovnikWidth) {
  if (cenovnikWidth.matches) {
    // If media query matches
    document.getElementById("cenovnik").classList.add("py-10");
    document.getElementById("cenovnikMargin").classList.remove("my-10");
    document.getElementById("cenovnikMargin").classList.add("mb-10");
    document.getElementById("sectionCenovnik").classList.remove("pt-10");
  } else {
    document.getElementById("cenovnik").classList.remove("py-10");
    document.getElementById("cenovnikMargin").classList.add("my-10");
    document.getElementById("cenovnikMargin").classList.remove("mb-10");
    document.getElementById("sectionCenovnik").classList.add("pt-10");
  }
}

const cenovnikWidth = window.matchMedia("(max-width: 768px)");
addClassToCenovnik(cenovnikWidth); // Call listener function at run time
cenovnikWidth.addListener(addClassToCenovnik); // Attach listener function on state changes

// Zasto Bas Mi responsive fix
function pullTitleUp(zastoWidth) {
  if (zastoWidth.matches) {
    // If media query matches
    document.getElementById("zastoCenter").prepend(document.getElementById("zastoBasMi"));
    document.getElementById("zastoBasMi").classList.add("mobile-text-center");
    document.getElementById("zastoImg").classList.add("col-md-6");
    document.getElementById("zastoImg").classList.remove("col-md-9");
    document.getElementById("zastoImg").classList.remove("col-lg-6");
    document.getElementById("zastoImg").classList.add("order-md-0");
    document.getElementById("zastoRight").classList.add("order-md-1");
  } else {
    document.getElementById("zastoRight").prepend(document.getElementById("zastoBasMi"));
    document.getElementById("zastoBasMi").classList.remove("mobile-text-center");
    document.getElementById("zastoImg").classList.remove("col-md-6");
    document.getElementById("zastoImg").classList.add("col-md-9");
    document.getElementById("zastoImg").classList.add("col-lg-6");
    document.getElementById("zastoImg").classList.remove("order-md-0");
    document.getElementById("zastoRight").classList.remove("order-md-1");
  }
}

const zastoWidth = window.matchMedia("(max-width: 992px)");
pullTitleUp(zastoWidth); // Call listener function at run time
zastoWidth.addListener(pullTitleUp); // Attach listener function on state changes
