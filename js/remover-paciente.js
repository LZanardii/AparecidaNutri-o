//js direcionado a remover pacientes
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", ()=>{
    alert(`Cuidado! Você acabou de apagar o paciente ${event.target.parentNode.querySelector(".info-nome").textContent.toUpperCase()} da tabela...`)
    event.target.parentNode.remove();
})



// pacientes.forEach((paciente)=>{
//     paciente.addEventListener("dblclick", () => (paciente.remove()))
// });