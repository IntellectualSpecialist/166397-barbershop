var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var map = document.querySelector(".modal-content-map");
var linkmap = document.querySelector(".js-open-map");
var closemap = map.querySelector(".modal-content-close");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-content-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-content-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-content-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-content-error");
    }
  }
});

linkmap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("modal-content-show");
});

closemap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.remove("modal-content-show");
});
