// Modals from https://bulma.io/documentation/components/modal/

let html = document.querySelector("html");
let modal = document.querySelector(".subscribe-modal"); // assuming you have only 1

// Given a button of class .modal-button, open the modal from its data-target when clicked
let modalSubscribeButtons = document.querySelectorAll("a.subscribe-button");

for (subscribeButton of modalSubscribeButtons) {
  subscribeButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("is-active");
    html.classList.add("is-clipped");

    document.querySelector(".subscribe-email").focus();

    modal
      .querySelector(".modal-background")
      .addEventListener("click", function(e) {
        e.preventDefault();
        modal.classList.remove("is-active");
      });
  });
}

let modalCloseButtons = modal.querySelectorAll(".modal-close-button");

for (modalCloseButton of modalCloseButtons) {
  modalCloseButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("is-active");
    html.classList.remove("is-clipped");
  });
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    modal.classList.remove("is-active");
  }
};
