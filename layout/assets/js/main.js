// SLICK
$(document).ready(function () {
  $(".carousel-slider").slick({
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
