function teste(){
    var lis = document.querySelectorAll(".classe");
    for(var i=0 ; i < lis.length; i++){
        lis[i].style.backgroundColor = "yellow";
        lis[i].innerHTML = "ITERADO!";
    }
}