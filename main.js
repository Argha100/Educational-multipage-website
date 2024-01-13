// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//faqs toggle

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //    change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else if ((icon.className = "fa-solid fa-minus")) {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show/hide nav menu
var menu = document.querySelector(".nav__menu");
var openmenu = document.querySelector(".open-menu-btn");
var closemenu = document.querySelector(".close-menu-btn");

openmenu.addEventListener("click", () => {
  menu.style.display = "flex";
  closemenu.style.display = "inline-block";
  openmenu.style.display = "none";
});
closemenu.addEventListener("click", () => {
  menu.style.display = "none";
  openmenu.style.display = "inline-block";
  closemenu.style.display = "none";
  // menu.classList.add("nav__items");
});
