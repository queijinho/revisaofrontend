var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual Comando para entrar em um diretório?")
    if (nome == "cd"){
        alert("O " + nome + ", serve para lentrar em um diretório. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta = prompt("E para sair?")
    if (pergunta == "cd .."){
        alert("O " + pergunta + ", serve para sair. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta2 = prompt("Qual comando para crir uma pasta")
    if (pergunta2 == "mkdir"){
        alert("O " + pergunta2 + ", serve para crir uma pasta. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta3 = prompt("E para remover?")
    if (pergunta3 == "rmdir"){
        alert("O " + pergunta2 + ", serve para remover. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
        window.location="modulo1aula3.html";
    }
}