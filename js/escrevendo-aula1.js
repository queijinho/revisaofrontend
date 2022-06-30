//O que é uma variável?
/*
    A variável é um espaço reservado na memória do computador
    Vamos declarar variáveis no JavaScript.
*/

var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando para iniciar o git?")
    if (nome == "git init"){
        alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta = prompt("Qual é o comando para listar as pastas?")
    if (pergunta == "ls"){
        alert("O " + pergunta + ", serve para listar as pastas. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
        window.location="modulo1aula2.html";
    }
    
}