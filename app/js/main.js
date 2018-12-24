$('.single-item').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [ {
        breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 910,
            settings: {
            slidesToShow: 2,
          }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
            }
          }
    ]
  });

 $('.single').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});