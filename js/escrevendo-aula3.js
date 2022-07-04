var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("comando para listar todas as branchs?")
    if (nome == "git branch --list"){
        alert("O " + nome + ", serve para listar as branshs. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta = prompt("Qual é o comando para verificar o status do repositório local?")
    if (pergunta == "git status"){
        alert("O " + pergunta + ", serve para verificar o status do repositório local. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta2 = prompt("Qual comando  para iniciar o versionamento")
    if (pergunta2 == "git add"){
        alert("O " + pergunta2 + ", serve para iniciar o versionamento. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }

    var pergunta3 = prompt("Qual comando para criar um commit?")
    if (pergunta3 == "git commit -m"+"'comentário'"){
        alert("O " + pergunta2 + ", serve para criar um commit. Parabéns você acertou!!!")
    }
    else{
        alert("Resposta incorreta.")
    }
}