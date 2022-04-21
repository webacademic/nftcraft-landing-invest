const popupBtn = document.querySelector(".popup-btn.serv"),
  popup = document.querySelector(".popup.serv"),
  form = document.querySelector("form");

popupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("active");
  document.body.style.overflow = "hidden";
});

popup.addEventListener("click", (e) => {
  const target = e.target;

  if (
    target.classList.contains("popup") ||
    target.classList.contains("popup-close")
  ) {
    popup.classList.remove("active");
    document.body.style.overflow = "visible";
  }
});
