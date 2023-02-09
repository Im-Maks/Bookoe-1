$(document).ready(function() {
    var owl = $("#slider-carousel");
    owl.owlCarousel({
      items: 3,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [900, 2],
      itemsTablet: [600, 1],
      itemsMobile: false,
      pagination: false
    });
    $(".next").click(function() {
      owl.trigger('owl.next');
    })
    $(".prev").click(function() {
      owl.trigger('owl.prev');
    })
  });