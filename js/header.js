//alterando título do header
const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
titulo.addEventListener("click", () => ( alert("Bem-Vindo ao melhor site de nutrição do BRASIL")))


const validaPeso = (peso) => {
    if (peso <= 0 || peso >= 500){
        return false
    }else{
        return true
    }
}

const validaAltura = (altura) => {
    if (altura <= 0 || altura >= 3){
        return false
    }else{
        return true
    }
}
