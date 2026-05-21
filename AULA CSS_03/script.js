/*document.writeln("Olá, mundo!")*/

/*window.alert("Essa é uma mensagem de Alerta!")*/

/* exemplo */
/*document.getElementById("title").
innerHTML = "Aprendendo JavaScipt com o Fabrício"*/


document.getElementById("submit").addEventListener("click", function() {
    const nascimento = new Date(document.getElementById("data_nascimento").value);
    const hoje = new Date();

    const idade = hoje.getFullYear() - nascimento.getFullYear();

    document.getElementById("calculadora_de_idade").textContent = idade + "anos";
});


function exibirMensagem() {
    let nome = document.getElementById("nome"). value
    document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem-vindo ao Javascript"; 
    document.getElementById("novafrase").style.color = "green";
    document.getElementById("novafrase").style.fontsize="50px"
}