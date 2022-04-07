//js direcionado a calcular o imc de pacientes recém inseridos e de pacientes que já estão na lista
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

function getPeso(paciente){
    return paciente.querySelector(".info-peso").textContent;
}

function getAltura(paciente){
    return paciente.querySelector(".info-altura").textContent;
} 

const pacientes = document.querySelectorAll(".paciente"); 


for (i = 0; i < pacientes.length; i++){
    processaImc(pacientes[i])
}




