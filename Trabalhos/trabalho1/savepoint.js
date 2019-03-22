function montarTabela(resp){
	var table = document.createElement("table");
	var tHead = document.createElement("thead");
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
	var vetObj = resp.dados;
	var tBody = document.createElement("tbody");
	for (var i=0; i < vetObj.length; i++) {
		var tr = document.createElement("tr");
		var tdTipo = document.createElement("td");
		var tdPV = document.createElement("td");
		var tdPM = document.createElement("td");
		var tdConst = document.createElement("td");
		var tdDano = document.createElement("td");
		tdTipo.innerHTML = vetObj[i].tipo;
		tdPV.innerHTML = vetObj[i].pv;
		tdPM.innerHTML = vetObj[i].pm;
		tdConst.innerHTML = vetObj[i].const;
		tdDano.innerHTML = vetObj[i].dano;
		tr.appendChild(tdTipo);
		tr.appendChild(tdPV);
		tr.appendChild(tdPM);
		tr.appendChild(tdConst);
		tr.appendChild(tdDano);
		tBody.appendChild(tr);
	}
	tHead.appendChild(thtipo);
	tHead.appendChild(thpv);
	tHead.appendChild(thpm);
	tHead.appendChild(thconst);
	tHead.appendChild(thdano);
	table.appendChild(tHead);
	table.appendChild(tBody);
	var div = document.querySelector(".tabela");
	div.appendChild(table);
}

function inicComum(){
	montarTabela({dados: [{tipo:"Comum",pv:12,pm:0,const:15,dano:"1d4"}
						 ,{tipo:"Comum",pv:7,pm:0,const:15,dano:"1d4"}
						 ,{tipo:"Comum",pv:9,pm:0,const:15,dano:"1d4"}]});
}

function inicEnemy(){
	montarTabela({dados: [{tipo:"Adversário",pv:12,pm:0,const:15,dano:"1d4"}
						 ,{tipo:"Adversário",pv:12,pm:0,const:15,dano:"1d4"}]});
}

function inicAlly(){
	montarTabela({dados: [{tipo:"Aliado",pv:12,pm:0,const:15,dano:"1d4"}
						 ,{tipo:"Aliado",pv:12,pm:0,const:15,dano:"1d4"}]});
}