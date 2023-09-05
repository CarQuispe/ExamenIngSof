import sumar from "./sumador";

const frase = document.querySelector("#frase");
const form = document.querySelector("#contar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const contar = text.parseInt(frase.value);
  

  div.innerHTML = "<p>" + contar(frase) + "</p>";
});
