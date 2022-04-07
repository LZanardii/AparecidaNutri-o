//js direcionado a alterar nome de título da página (criado para aprender a manipular querySelector)
const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
titulo.addEventListener("click", () => ( alert("Bem-Vindo ao melhor site de nutrição do BRASIL")));
