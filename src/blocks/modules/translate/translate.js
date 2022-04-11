import { langArr } from "./dictionary";

let langSelect = document.querySelectorAll("[data-lang-selector]"); 
let allLang = ["en", "ru"];
let defLang = "#en";

const selectedLang = document.querySelectorAll('.lang-selected'),
    langListItems = document.querySelectorAll('.lang-list__item')

langListItems.forEach(item => {
    item.addEventListener('click', (e) => {
        changeUrlLang(item.querySelector('a'));
    })
})

function changeUrlLang(target) {
    location.href = window.location.pathname + "#" + target.getAttribute('data-lang-pick');
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + defLang;
        location.reload();
    }
    langSelect[0].value = hash;
    langSelect[1].value = hash;
    for (let key in langArr) {
        let elem = document.querySelector("[data-lang=" + key + "]");
        if (elem && langArr[key][hash]) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

const selectLang = () => {
    let lang = window.location.hash.substring(1);
    
    selectedLang[0].className = '';
    selectedLang[0].classList.add(lang);
    selectedLang[1].className = '';
    selectedLang[1].classList.add(lang);

    langListItems.forEach(item => {
        const links = item.querySelector('a')
        if(links.classList.contains(lang)) {
            selectedLang[0].textContent = item.textContent;
            selectedLang[1].textContent = item.textContent;
            item.remove();
            return
        }
    })
}

changeLang();
selectLang();