import { langArr } from "./dictionary";

// data-lang-selector - select , data-lang="x" x - key for translate)
let langSelect = document.querySelector("[data-lang-selector]"); 
let allLang = ["en", "ru"];
let defLang = "#en";

langSelect.addEventListener("change", changeUrlLang);

function changeUrlLang() {
    let lang = langSelect.value.toLowerCase();
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + defLang;
        location.reload();
    }
    langSelect.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector("[data-lang=" + key + "]");
        if (elem && langArr[key][hash]) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLang();
