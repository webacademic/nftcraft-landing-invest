let e = document.querySelector(".mobile-menu__btn"),
  overlay = document.querySelector(".overlay"),
  t = document.querySelector(".header");

e.addEventListener("click", function () {
  t.classList.toggle("mobile");
  overlay.classList.toggle("active");
  if (t.classList.contains("mobile")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }
});

overlay.addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".mobile-menu__checkbox").checked = !1;
  t.classList.remove("mobile");
  if (t.classList.contains("mobile")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }
});