import { langArr } from "./dictionary";

const selectedLang = document.querySelectorAll(".lang-selected"),
    langListItems = document.querySelectorAll(".lang-list__item"),
    allLang = { en: "English", ru: "Русский" },
    defLang = "en",
    navigatorLang = navigator.language.substring(0, 2);
    
let currentLang = localStorage.getItem("currentLang") || navigatorLang || defLang;

langListItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    let lang = item
      .querySelector("[data-lang-pick]")
      .getAttribute("data-lang-pick");
    setLangForAll(lang);
    localStorage.setItem("currentLang", lang);
  });
});

function updateSelectLang(lang) {
  selectedLang.forEach((item) => {
    item.innerHTML = getFullLang(lang);
  });
}

function setLangForAll(lang) {
  for (let key in langArr) {
    let elem = document.querySelector("[data-lang=" + key + "]");
    if (elem && langArr[key][lang]) {
      elem.innerHTML = langArr[key][lang];
    }
  }
  updateSelectLang(lang);
}
setLangForAll(currentLang);

function getFullLang(lang) {
  let fullLang = allLang[lang];
  return fullLang;
}
