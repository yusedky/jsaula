var rolagem = ['d4', 'd6', 'd8', 'd10', 'd12'];



// GERANDO BODY
window.onload = function(){
	
	
	
// CABEÇALHO	
	var body = document.getElementsByTagName("BODY")[0];
	var titulo = document.createElement("h1");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var input = document.createElement("input");
	input.id = "qtd"; 
	var p3 = document.createElement("p");
	
	titulo.innerHTML = "Gerador de Fichas";
	p1.innerHTML = "Gere automáticamente fichas de NPCs para sua mesa, escolha a baixo o tipo:";
	p2.innerHTML = "Insira a quantidade a ser gerada de NPCs do mesmo tipo: ";
	
	body.appendChild(titulo);
	body.appendChild(p1);
	body.appendChild(p2);
	p2.appendChild(input);


	
// CONTAINER DE BOTÕES	
	p3.classList.add("container");
	var bnt1 = document.createElement("button");
	var bnt2 = document.createElement("button");
	var bnt3 = document.createElement("button");
	var bnt4 = document.createElement("button");
	bnt4.classList.add("limpar");
	
	bnt1.innerHTML = "Comum"; 
	bnt1.setAttribute("onclick" , "inicCommon()");
	bnt2.innerHTML = "Inimigo"; 	
	bnt2.setAttribute("onclick" , "inicEnemy()");
	bnt3.innerHTML = "Aliado"; 
	bnt3.setAttribute("onclick" , "inicAlly()");
	bnt4.innerHTML = "Limpar"; 
	bnt4.setAttribute("onclick" , "limpar()");
	
	body.appendChild(p3);
	p3.appendChild(bnt1);
	p3.appendChild(bnt2);
	p3.appendChild(bnt3);
	p3.appendChild(bnt4);
	
	
	
// TOPO DA TABELA	
	var div = document.createElement("div");
	div.id = "ficha"; 
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var trowh = document.createElement("tr");
	var thtipo = document.createElement("th");
	var thpv = document.createElement("th");
	var thpm = document.createElement("th");
	var thconst = document.createElement("th");
	var thdano = document.createElement("th");
	
	thtipo.innerHTML = "TIPO";
	thpv.innerHTML = "PV";
	thpm.innerHTML = "PM";
	thconst.innerHTML = "CONSTITUIÇÃO";
	thdano.innerHTML = "DANO";
	var tbody = document.createElement("tbody");
	tbody.id = "topicos";
	
	body.appendChild(div);
	div.appendChild(table);
	table.appendChild(thead);
	thead.appendChild(trowh);
	thead.appendChild(thtipo);
	thead.appendChild(thpv);
	thead.appendChild(thpm);
	thead.appendChild(thconst);
	thead.appendChild(thdano);
	table.appendChild(tbody);
}



// TABELA
function montarTabela(resp){
	var qtd = document.getElementById("qtd").value;


	if (isNaN(qtd) || qtd == "") {
		alert("Digite um número válido!");
	} else {
		var ficha = document.getElementById("ficha");
		ficha.style.display= "block";
	

		var table = document.getElementById("topicos");	
		
		
		for (var j=0; j < qtd; j++ ) {
			var vetObj = resp.dados;
			var tr = document.createElement("tr");
			for (var i=0; i < vetObj.length; i++) {
				var tdTipo = document.createElement("td");
				var tdPV = document.createElement("td");
				var tdPM = document.createElement("td");
				var tdConst = document.createElement("td");
				var tdDano = document.createElement("td");
				tdTipo.innerHTML = vetObj[i].tipo;
				tdPV.innerHTML = Math.floor(Math.random() * 40) + 10;
				tdPM.innerHTML = Math.floor(Math.random() * 30);
				tdConst.innerHTML = Math.floor(Math.random() * 15) + 5;
				tdDano.innerHTML = (Math.floor(Math.random() * 3) + 1) + rolagem[Math.floor(Math.random() * 5)];
				tr.appendChild(tdTipo);
				tr.appendChild(tdPV);
				tr.appendChild(tdPM);
				tr.appendChild(tdConst);
				tr.appendChild(tdDano);
				tr.classList.add(tdTipo.innerHTML);
			}
			table.appendChild(tr);
			var div = document.querySelector("#topicos");
		} 
	}
}



// BOTÕES
function inicCommon(){
  	montarTabela({dados: [{tipo:"Comum", pv: "", pm:"", const:"", dano:""}]});
}

function inicEnemy(){
	montarTabela({dados: [{tipo:"Inimigo", pv: "", pm:"", const:"", dano:""}]});
}

function inicAlly(){
	montarTabela({dados: [{tipo:"Aliado", pv: "", pm:"", const:"", dano:""}]});
}

function limpar(){
	var table = document.getElementById("topicos");
	table.innerHTML = "";
	var ficha = document.getElementById("ficha");
	ficha.style.display= "none";
}