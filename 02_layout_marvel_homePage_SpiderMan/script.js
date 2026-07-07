let menu = document.querySelector(".navbar-menu");
let button = document.querySelector(".icon");
button.addEventListener("click", () => {
  if (button.classList.contains("ri-menu-3-line")) {
    button.classList.remove("ri-menu-3-line");
    button.classList.add("ri-close-line");
    menu.classList.add("active");
  } else {
    button.classList.remove("ri-close-line");
    button.classList.add("ri-menu-3-line");
    menu.classList.remove("active");
  }
});

let abtn = document.querySelectorAll(".navbar-menu li a");

abtn.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("active");
    button.classList.remove("ri-close-line");
    button.classList.add("ri-menu-3-line");
  });
});

const scrollrevealOptions = {
  distance: "30px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".main-content h1", {
  ...scrollrevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".main-content p", {
  ...scrollrevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".main-content .button", {
  ...scrollrevealOptions,
  delay: 1500,
});

ScrollReveal().reveal(".main-content .icons div", {
  ...scrollrevealOptions,
  delay: 2000,
  interval: 500,
});
