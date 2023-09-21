// add effect to nav links
const links = document.querySelectorAll("header nav a");
url = location.href;

links.forEach((link) => {
    if (url.includes(link.href)) link.classList.add("ativo");
});

// Activate the items in the buy page

params = new URLSearchParams(location.search);

params.forEach((param) => {
    const element = document.getElementById(param);
    if (element) {
        element.checked = true;
    }
});

// Perguntas frequentes

const questions = document.querySelectorAll(".perguntas button");

questions.forEach((question) => {
    question.addEventListener("click", (e) => {
        elem = e.currentTarget
        answer = document.getElementById(elem.getAttribute("aria-controls"))
        answer.classList.toggle("ativo")
        elem.setAttribute('aria-expanded', answer.classList.contains("ativo"))
    });
});
