import { langArr } from "./dictionary";

let langSelect = document.querySelector("[data-lang-selector]"); 
let allLang = ["en", "ru"];
let defLang = "#en";

const selectedLang = document.querySelector('.lang-selected'),
    langListItems = document.querySelectorAll('.lang-list__item')

let observer = new MutationObserver(mutationRecords => {
    if (mutationRecords[0].attributeName === 'lang-value'){
        changeUrlLang();
    }    
  });
observer.observe(langSelect, {attributes:true});

langListItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        const links = item.querySelector('a');
        const lang = window.location.hash.substring(1);

        selectedLang.className = '';
        selectedLang.classList.add(target.className)
        selectedLang.textContent = target.textContent
        langSelect.setAttribute("lang-value", target.getAttribute('data-lang-pick'));

        if(!links.classList.contains(lang)) {
            selectedLang.textContent = item.textContent;
            item.remove();
            return
        }
    })
})

function changeUrlLang() {
    location.href = window.location.pathname + "#" + langSelect.getAttribute('lang-value');
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

const selectLang = () => {
    let lang = window.location.hash.substring(1);
    
    selectedLang.className = '';
    selectedLang.classList.add(lang);

    langListItems.forEach(item => {
        const links = item.querySelector('a')
        if(links.classList.contains(lang)) {
            selectedLang.textContent = item.textContent;
            item.remove();
            return
        }
    })
}

changeLang();
selectLang();