function salarios(obj) {
  var aux = "";
    for (var k = 0; k < obj.length; k++) {
    aux = aux + "Funcionario: " + obj[k].nome + " - " + "Salario: R$" + obj[k].salarioHora*obj[k].qtHoras + "<br>";
  }
  document.write(aux);
}



function teste() {
  salarios([
    {"nome":"NOMEFUNC0","salarioHora":25.60,"qtHoras":25},
    {"nome":"NOMEFUNC1","salarioHora":15.99,"qtHoras":80},
    {"nome":"NOMEFUNC2","salarioHora":5.60,"qtHoras":100},
    {"nome":"NOMEFUNC3","salarioHora":78.50,"qtHoras":50},
    {"nome":"NOMEFUNC4","salarioHora":25.60,"qtHoras":70},
    {"nome":"NOMEFUNC5","salarioHora":58.44,"qtHoras":20},
    {"nome":"NOMEFUNC6","salarioHora":17,"qtHoras":80},
    {"nome":"NOMEFUNC7","salarioHora":9.99,"qtHoras":70},
    {"nome":"NOMEFUNC8","salarioHora":40,"qtHoras":100}
  ]);
}



    


// 1. Um funcionário é representado por {"nome":"NOMEFUNC","salarioHora":25.60,"qtHoras":25}, por exemplo. Faça funções que:

// a) Mostre todos os salários (e os nomes) (salarioHora*qtHoras) de um vetor de funcionários.
// b) O nome dos funcionários de maior e menor salário.
// c) A media de horas trabalhadas
// d) A media dos salários