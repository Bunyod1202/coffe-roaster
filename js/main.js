var elModalOpenButton = document.querySelector(".menu-btn");
var elModalOpenlink = document.querySelector(".nav__list-link");
var elModal = document.querySelector(".nav");

elModalOpenButton.addEventListener("click", function () {
  elModal.classList.toggle("nav--active");
});

elModalOpenlink.addEventListener("click", function (evt) {
  setTimeout(() => {
    evt.preventDefault();
   },100)
  elModal.classList.remove("nav--active");
})


