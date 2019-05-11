/* Modal buttons: https://bulma.io/documentation/components/modal/ */
$(document).ready(function() {
  let html = $("html");
  let modal = $(".subscribe-modal");

  $(".subscribe-button").click(function(e) {
    e.preventDefault();
    modal.addClass("is-active");
    html.addClass("is-clipped");
    $(".subscribe-email").focus();
  });

  $(".modal-background").click(function(e) {
    e.preventDefault();
    modal.removeClass("is-active");
  });

  $(".modal-close-button").click(function(e) {
    e.preventDefault();
    modal.removeClass("is-active");
    html.removeClass("is-clipped");
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      modal.removeClass("is-active");
    }
  });
});
