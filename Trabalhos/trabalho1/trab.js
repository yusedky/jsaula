var rolagem = ['d4', 'd6', 'd8', 'd10', 'd12'];

function montarTabela(resp){
	var ficha = document.getElementById("ficha");
	ficha.style.display= "block";
	
	
	
	var table = document.getElementById("topicos");

//	var table = document.createElement("table");
	var vetObj = resp.dados;
//	var tBody = document.createElement("tbody");
	var tr = document.createElement("tr");
	for (var i=0; i < vetObj.length; i++) {
//		var tr = document.createElement("tr");
		var tdTipo = document.createElement("td");
		var tdPV = document.createElement("td");
		var tdPM = document.createElement("td");
		var tdConst = document.createElement("td");
		var tdDano = document.createElement("td");
		tdTipo.innerHTML = vetObj[i].tipo;
		tdPV.innerHTML = Math.floor(Math.random() * 40) + 10;
		tdPM.innerHTML = Math.floor(Math.random() * 30);
		tdConst.innerHTML = Math.floor(Math.random() * 15) + 5;
		tdDano.innerHTML = (Math.floor(Math.random() * 3) + 1) + rolagem[Math.floor(Math.random() * 4)];
		tr.appendChild(tdTipo);
		tr.appendChild(tdPV);
		tr.appendChild(tdPM);
		tr.appendChild(tdConst);
		tr.appendChild(tdDano);
	//	tBody.appendChild(tr);
	}
	table.appendChild(tr);
	var div = document.querySelector("#topicos");
	div.appendChild(table);
	

}



function inicCommon(){
  	montarTabela({dados: [{tipo:"Comum", pv: "", pm:"", const:"", dano:""}]});
}

function inicEnemy(){
	montarTabela({dados: [{tipo:"Inimigo", pv: "", pm:"", const:"", dano:""}]});
}

function inicAlly(){
	montarTabela({dados: [{tipo:"Aliado", pv: "", pm:"", const:"", dano:""}]});
}