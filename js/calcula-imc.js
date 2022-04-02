//alterando IMC
function processaImc(paciente){
    var peso = getPeso(paciente);
    var altura = getAltura(paciente);

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (!validaPeso(peso)){
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Peso inválido";
    }


    else if (!validaAltura(altura)){
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Altura inválida";
    }

    else if (pesoEhValido && alturaEhValida){
        var imc = peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function getAltura(paciente){
    return paciente.querySelector(".info-altura").textContent;
} 

function getPeso(paciente){
    return paciente.querySelector(".info-peso").textContent;
}

function validaPeso(peso){
    if (peso <= 0 || peso >= 500){
        return false
    }else{
        return true
    }
}

function validaAltura(altura){
    if (altura <= 0 || altura >= 3){
        return false
    }else{
        return true
    }
}

//rotina para calcular imc dos pacientes quando recarrega o site
const pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){
    processaImc(pacientes[i])
}



