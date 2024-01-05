const contentSidebar = document.getElementById("contentSidebar");
const sidebarDerecha = document.getElementById("sidebarDerecha");
const sidebarIzquierda = document.getElementById("sidebarIzquierda");
const $check = document.querySelector("#check")
const $ulNav = document.querySelector("#ul__nav")

sidebarDerecha.addEventListener("click", function (e) {
  contentSidebar.scrollTo({
    left: (contentSidebar.scrollLeft += 490),
    behavior: "cubic-bezier(0.1, 0.7, 1.0, 0.1)",
  });
});


sidebarIzquierda.addEventListener("click", function (e) {
  contentSidebar.scrollTo({
    left: (contentSidebar.scrollLeft -= 490),
    behavior: "cubic-bezier(0.1, 0.7, 1.0, 0.1)",
  });
});

console.log(contentSidebar);

const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLenguaje = async (lenguaje) => {
    const requestJson = await fetch(`/lenguajes/${lenguaje}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        if (section == "s7" && (value == "titulo"|| value == "texto")) {
            textToChange.innerHTML = texts[section][value]
        } else {
            if (section == "s7" && value != "boton") {
                textToChange.placeholder = texts[section][value]
            } else {
                textToChange.value = texts[section][value]
            }
        }

        if (section != "s7") {
            textToChange.innerHTML = texts[section][value];
        }
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLenguaje(e.target.parentElement.dataset.lenguaje);
});

$check.addEventListener('change', () => {
  if ($check.checked) {
    $ulNav.classList.add('left-[0]')
  } else {
    $ulNav.classList.remove('left-[0]')
  }
}) 
