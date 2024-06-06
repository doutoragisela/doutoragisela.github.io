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

      $("#schedule_appointment").click((e) => {
        e.preventDefault();
        window.location.href = "/contato";
      });
    });
  });
}(jQuery));
