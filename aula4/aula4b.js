//Exercício: Ao clicar novamente,
//voltar para a imagem original.
function nomeImagem(obj){
    var aux = obj.src.split("/");
    var nome = aux[aux.length-1];
    return nome;
}

function mudar(obj){
    if(nomeImagem(obj) == "botao.png")
        obj.src = "botaoap.png";
    else
        obj.src = "botao.png"
}