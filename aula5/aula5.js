function teste(){
    var texto = document.forms.form1.texto.value;
    if(texto == "")
        alert("campo vazio");
    else 
        alert("campo preenchido");
}

function pintar(obj){
    obj.style.backgroundColor = "yellow";
}

function teste2(){
    var texto = document.querySelector("#t1");
    if(texto.value == ""){
        alert("campo vazio");
        texto.style.backgroundColor = "red";
    }else 
        alert("campo preenchido");
}