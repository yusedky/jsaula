// nextSibling > antes do depois -Q

function inserir(){
    var p = document.createElement("p");
    p.innerHTML = "P CRIADO!";
    p.style.backgroundColor = "pink";
    var div1 = document.querySelector("div");
    var div = document.querySelector("#div2");
    var btn = document.querySelector("button");
    document.body.insertBefore(p, div.nextSibling);
    var span = document.createElement("span");
    span.innerHTML = "SPAN AQUI";
    document.body.replaceChild(span, div);
    document.body.removeChild(div1);
}