(function ($) {
  $(document).ready(function(){
    const scrollToAnchor = (id) => {
      let elem = $(id);
      $('html,body').animate({scrollTop: elem.offset().top - 120}, 'slow');
    };

    $(function () {
      $(".health-clinic-1-wa").click((e) => {
        e.preventDefault();
        location.href = "https://wa.me/5511972042759";
      });

      $(".health-clinic-2-wa").click((e) => {
        e.preventDefault();
        location.href = "https://wa.me/551138490543";
      });

      $(".about-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#aboutSection");
      });

      $(".gallery-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#gallerySection");
      });

      $(".contact-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#contactSection");
      });

      $("#schedule_appointment").click((e) => {
        e.preventDefault();
        scrollToAnchor("#contactSection");
      });
    });
  });
}(jQuery));
