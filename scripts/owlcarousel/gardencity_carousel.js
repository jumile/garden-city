let w = window.innerWidth;
$(document).ready(function () {
  $('.explore .owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });

  $('.about .owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      799: {
        items: 2
      },
      800: {
        items: 4
      }
    }
  });

  // if(w<800) {
  //     $('.about .owl-carousel').owlCarousel({
  //         items: 2, 
  //         loop: true,
  //         dots: false,
  //         margin: 0
  //     });
  // } else {
  //     $('.about .owl-carousel').owlCarousel({
  //         items: 4, 
  //         loop: true,
  //         dots: false,
  //         margin: 0
  //     });
  // }
});