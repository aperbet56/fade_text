// Récupération de l'élément <p>
const paragraph = document.querySelector(".text__animation");

paragraph.innerHTML = paragraph.textContent.replace(/./g, "<span>$&</span>");

// Récupération des éléments <span> créés
let spans = document.querySelectorAll(".text__animation span");

for (let i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = i * 80 + "ms";
}
