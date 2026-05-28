function calculaIdade() {
    let anoNascimento = document.getElementById("anoNascimento").value
    let idade = 0;
    let anoAtual = new Date().getFullYear();

    if (anoNascimento === 0 || anoNascimento > anoAtual || anoNascimento < 1900) {
        alert("Digite um ano válido!");
        return;
    }

    idade = anoAtual - anoNascimento



    document.getElementById("resultado").innerHTML = "Sua idade é : " + idade
}

//              CALCULADORA 2

function calculaIdade2() {
    //conferindo ANO
    let anoNascimento2 = document.getElementById("anoNascimento2").value
    let idade2 = 0;
    let anoAtual2 = new Date().getFullYear();
    let mesAtual2 = new Date().getMonth()
    let diaAtual2 = new Date().getDate()

    if (anoNascimento2 === 0 || anoNascimento2 > anoAtual2 || anoNascimento2 < 1900) {
        alert("Digite um ano válido!");
        return;
    }

    idade2 = anoAtual2 - anoNascimento2

    //conferindo MÊS e DIA
    let mesNascimento2 = document.getElementById("mesNascimento2")

    if (mesNascimento2 > mesAtual2) { idade2 = idade2 - 1 }
    else if (mesNascimento2 === mesAtual2 && diaNascimento >= diaAtual) {idade2 = idade - 1};

document.getElementById("resultado2").innerHTML = "Sua idade é : " + idade2
}

