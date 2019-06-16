(function($){
  "use strict"; 

    $(window).on("load", function(){
      $("#preloader").delay(300).animate({
        "opacity" : "0"
        }, 300, function() {
        $("#preloader").css("display","none");
      });  
    });

    // menu options custom affix
    var fixed_top = $(".header-section");
    $(window).on("scroll", function(){
        if( $(window).scrollTop() > 50){  
            fixed_top.addClass("animated fadeInDown menu-fixed");
        }
        else{
            fixed_top.removeClass("animated fadeInDown menu-fixed");
        }
    });

    // tab active init
    $('.card').on('click', function () {
        var notthis = $('.is_active').not(this);
        notthis.toggleClass('is_active');
        $(this).toggleClass('is_active').next();
    });

   //js code for mobile menu 
   $(".menu-toggle").on("click", function() {
        $(this).toggleClass("is-active");
   });

    // responsive menu slideing
      $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
        var element = $(this).parent("li");
        if (element.hasClass("open")) {
          element.removeClass("open");
          element.find("li").removeClass("open");
          element.find("ul").slideUp(500,"linear");
        }
        else {
          element.addClass("open");
          element.children("ul").slideDown();
          element.siblings("li").children("ul").slideUp();
          element.siblings("li").removeClass("open");
          element.siblings("li").find("li").removeClass("open");
          element.siblings("li").find("ul").slideUp();
        }
      });

  // lightcase plugin init
  $('a[data-rel^=lightcase]').lightcase();

  // counter 
  $('.counter').countUp({
      'time': 1500,
      'delay': 15
  });

  // testimonial-slider
   $('.testimonial-slider').owlCarousel({
    items:2,
    loop:true,
    margin: 30,
    dots: false,
    smartSpeed: 800,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        },
        600:{
            items:2,
            nav:false,
            dots: true
        },
        1000:{
            items:2,
            nav:false,
            loop:false,
            dots: true
        }
    }
});

$(window).on("load", function() {
        
  // isotope
  $(".grid").isotope({
    // options
    itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
  });
  var $gallery = $(".grid").isotope({
    
  });
  // filter items on button click
  $(".gallery-item-button").on( "click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      $gallery.isotope({ filter: filterValue });
  });
  $(".gallery-item-button").on( "click", "button", function() {
      $(this).addClass("active").siblings().removeClass("active");
  });
});

  $('.team-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.team-slider-nav'
  });
  $('.team-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.team-slider-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false
  });
 
    // Show or hide the sticky footer button
  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".scroll-to-top").fadeIn(200);
      } else {
          $(".scroll-to-top").fadeOut(200);
      }
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, 300);
  });

})(jQuery); 