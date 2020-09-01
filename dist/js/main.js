$(function () {
  $('.my-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    arrows: false
  });

  $('.burger-menu').on('click', function(event){
    event.preventDefault();
    $('body,.burger-menu,.header-navigation__list').toggleClass('active');
  });
});
