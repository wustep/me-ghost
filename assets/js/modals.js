/* Modal buttons: https://bulma.io/documentation/components/modal/ */
$(document).ready(function() {
  let html = $("html");
  let modal = $(".subscribe-modal");

  $("a.subscribe-button").on("click", function(event) {
    event.preventDefault();
    modal.addClass("is-active");
    html.addClass("is-clipped");
    $(".subscribe-email").focus();

    $(".modal-background").on("click", function(event) {
      event.preventDefault();
      modal.removeClass("is-active");
    });
  });

  $(".modal-close-button").on("click", function(event) {
    event.preventDefault();
    modal.removeClass("is-active");
    html.removeClass("is-clipped");
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      modal.removeClass("is-active");
    }
  });
});
