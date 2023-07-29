const number = document.getElementById("number")
const number1 = document.getElementById("number1")

const resultado = document.getElementById("resultado")

function calcular(operação) {
    switch (operação) {
        case "somar":
            somar()
            break;

        case "subtrair":
            subtrair()
            break;
            
        case "dividir":
            dividir()
            break;
            
        case "multiplicar":
            multiplicar()
            break;
    }

    
}

function somar() {
    resultado.textContent = Number(number.value) + Number(number1.value)
}

function subtrair() {
    resultado.textContent = Number(number.value) - Number(number1.value)
}

function multiplicar() {
    resultado.textContent = Number(number.value) * Number(number1.value)
}

function dividir() {
    resultado.textContent = Number(number.value) / Number(number1.value)
}