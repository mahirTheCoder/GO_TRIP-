// ---------------- slider plugin 


$('.popularSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid both prr fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid both nrr fa-arrow-right"></i>',
  dots: true,
});


// ----------------counter plugin 

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});


// ------------aos animations 

 AOS.init();

