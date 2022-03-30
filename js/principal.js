//alterando título do header
const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//alterando IMC
const paciente = document.querySelector("#primeiro-paciente");
const peso = paciente.querySelector(".info-peso").textContent;
const altura= paciente.querySelector(".info-altura").textContent;
const tdImc = paciente.querySelector(".info-imc");

// valida const que calculam o IMC
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 500){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida){
    const imc = peso/(altura * altura);
    tdImc.textContent = imc;
}

