// SLICK SLIDER CAROUSEL
$(document).ready(function () {
  $(".carousel").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    arrows: true,
    dots: true,
  });
});

// SLICK SLIDER SHOWING MOVIES
$(document).ready(function () {
  $(".showing-movie").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    // slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    arrows: true,
    rows: 2,
  });
});

// SLICK SLIDER APP
$(document).ready(function () {
  $(".app__content-mobile-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});
