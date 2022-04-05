import { langArr } from "./dictionary";

// data-lang-selector - select , data-lang="x" x - key for translate)
let langSelect = document.querySelector("[data-lang-selector]"); 
let langPickEn = document.querySelector("[data-lang-pick='en']");
let langPickRu = document.querySelector("[data-lang-pick='ru']");
let allLang = ["en", "ru"];
let defLang = "#en";

let observer = new MutationObserver(mutationRecords => {
    if (mutationRecords[0].attributeName === 'lang-value'){
        changeUrlLang();
    }    
  });
observer.observe(langSelect, {attributes:true});

// langSelectAttr.addEventListener("change", changeUrlLang);
langPickEn.addEventListener("click", langSelectToggle);
langPickRu.addEventListener("click", langSelectToggle);

function changeUrlLang() {
    location.href = window.location.pathname + "#" + langSelect.getAttribute('lang-value');
    location.reload();
}

function langSelectToggle(e) {
    langSelect.setAttribute("lang-value", e.srcElement.getAttribute('data-lang-pick'));
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
