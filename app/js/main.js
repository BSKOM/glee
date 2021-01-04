$(function () {
  var mixer = mixitup('.week__content');
  // function initFilters() {
  //   $('.week__content').mixItUp({
  //     selectors: {
  //       filter: '.filter1',
  //     }
  //   });
  //   $('.category__content').mixItUp({
  //     selectors: {
  //       filter: '.filter2',
  //      }
  //   });
  // }
  // $initFilters();
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000
  });
});