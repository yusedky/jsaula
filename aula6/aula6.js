function ola(){
    alert("oi");
}
    
function teste(){
    var btn1 = document.GetElementById("btn1");  // 
    btn1.setAttribute("onclick","ola()");   // ele esta dando ao OK1(onClick) uma função, e em seguida ao OK2 (ola()).
}
