const menuBtn = document.getElementById("menu-btn");
const closeButtons = document.querySelectorAll(".close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
