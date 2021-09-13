
$(document).ready(function() {
  $(".navbar a").click(function() {
    $('body,html').animate({
      scrollTop:$("#" + $(this).data('value')).offset().top - $("#header").height()}, 700);
  });

    
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });

  $(function(){
    var mixer = mixitup('.gallery__inner');
  })
  
});