//js direcionado a adicionar pacientes com validação de campo no form
const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault()
    var form = document.querySelector("#form-adiciona");
    var paciente = getDadosPaciente(form);

    if (validaDadosForm(paciente) != true){
        alert(`OPS! Dados invalidos. Revise a inserção da informação: ${validaDadosForm(paciente)}`)
        return;
    }

    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

const getDadosPaciente = (form) => (
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
)

const montarTr= (paciente) => {
    var pacienteTr = document.createElement("tr")
    
    pacienteTr.classList.add("paciente")
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(null, "info-imc"));
    processaImc(pacienteTr);
    
    return pacienteTr;
}

const montaTd = (dado, classe) => {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

const validaDadosForm = (paciente) => {
    
    if(!validaNome(paciente.nome)){
        return "NOME";
    }else if (!validaPeso(paciente.peso) || paciente.peso.length == 0){
        return "PESO";
    }else if (!validaAltura(paciente.altura) || paciente.altura.length == 0){
        return "ALTURA";
    }else if(!validaGordura(paciente.gordura)){
        return "GORDURA CORPORAL"
    }else{
        return true;
    }
}

function validaNome(nome){
    if (nome.length == 0){
        return false
    }else{
        return true
    }
}

function validaGordura(gordura){
    if (gordura.length == 0){
        return false
    }else{
        return true
    }
}
