let count_num = 1, sec = 0, min = 0, at_least_one = false, firstTime = true;
//at_least_one = true significa que pelo menos um movimento é possivel

//Escrever uma função para mostrar os créditos
function credits(){
	alert("Criado por Inês Borges.\nTodos os direitos reservados.")
}
//escrever uma função para ver as instruções quando se clicar no botão instruções
function instructions(){
	alert("INSTRUÇÕES\n\nPara começar a jogar clique no botão jogar.\nO tempo vai começar a contar.\nO objetivo do jogo é preencher todas as células da tabela desde o número um até ao número 100.Em que cada célula só pode ter um número e o preenchimento faz-se de forma crecente de um em um.\nQuando preenche uma célula com um número os seus movimentos são limitados.Ou seja, se quiser mover para Norte, Sul, Este ou Oeste tem de de deixar duas células em branco e preencher a célula a seguir. Caso queira mover para Nordeste, Sudeste, Sudoeste ou Noroeste tem de deixar uma célula em branco e preencher a seguinte.\nNão pode preencher uma célula já preenchida.\nO jogo acaba quando preencher a tabela toda o que significa que preencheu até ao número 100, ou acaba quando não tiver mais movimentos possíveis.");	
}
//Função para limpar a tabela
function cleanTable(){
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			document.getElementById("table").rows[i].cells[j].innerHTML = "";
		}
	}
}
//Escrever função para eliminar os possiveis movimentos da posição anterior
function deletePossibleMovements(){
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			//atribui a cor de fundo a todas as células da tabela
			document.getElementById("table").rows[i].cells[j].style.background = "#aaa";
		}
	}
}
//escrever uma função para quando clicar no botão jogar começar a jogar
function play(){
	if(!firstTime){
		//Clear the table
		cleanTable();
		//Clear all the possible movements
		deletePossibleMovements();
		firstTime=false;
	}
	//Set counter to 1
	count_num = 1;
	if (document.getElementById("tableDisabled").id === "tableDisabled") {
		if (count_num == 1) {
			//mudar o texto da h5
			document.getElementsByTagName("h5")[0].innerHTML = "Clique numa célula válida para introduzir o número 1";
		}
		//mudar o id da table para poder ser utilizada
		document.getElementById("tableDisabled").id = "table";
	}
}

//Escrever uma função que determina se pode mover nessa posição
function move(r,c){
   var table = document.getElementById("table");
   var l = table.rows.length;
    if ( r >= 0 && r < l && c >= 0 && c < table.rows[r].cells.length ){
      if(table.rows[r].cells[c].innerHTML == count_num - 1) return true;
   }
   return false;
}
//Escrever uma função para verificar se a posição pretendida é válida
function checkPosition(row, col){
	var r, c;

    //Move para Sul
   r = row-3, c = col;
   if(move(r,c)) return true;

   //Move para Sudoeste
   r = row-2, c = col+2;
   if(move(r,c)) return true;

   //Move para Oeste
   r = row, c = col+3;
   if(move(r,c)) return true;

   //Move para Noroeste
   r = row+2, c = col+2;
   if(move(r,c)) return true;

   //Move para Norte
   r = row+3, c = col;
   if(move(r,c)) return true;

   //Move para Nordeste
   r = row+2, c = col-2;
   if(move(r,c)) return true;

   //Move para Este
   r = row, c = col-3;
   if(move(r,c)) return true;

   //Move para Sudeste
   r = row-2, c = col-2;
   if(move(r,c)) return true;

   return false;
}
//Escrever uma função para informar quais os movimentos possíveis a verde
function possibleMovements(row, col){
	//Norte
	if (row - 3 >= 0) {
		if (document.getElementById("table").rows[row - 3].cells[col].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row - 3].cells[col].style.background = "#79fc02";
		}
	}
	//Nordeste
	if (row - 2 >= 0 && col + 2 <= 9) {
		if (document.getElementById("table").rows[row - 2].cells[col + 2].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row - 2].cells[col + 2].style.background = "#79fc02";
		}
	}
	//Este
	if (col + 3 <= 9) {
		if (document.getElementById("table").rows[row].cells[col + 3].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row].cells[col + 3].style.background = "#79fc02";
		}
	}
	//Sudeste
	if (row + 2 <= 9 && col + 2 <= 9) {
		if (document.getElementById("table").rows[row + 2].cells[col + 2].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row + 2].cells[col + 2].style.background = "#79fc02";
		}
	}
	//Sul
	if (row + 3 <= 9) {
		if (document.getElementById("table").rows[row + 3].cells[col].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row + 3].cells[col].style.background = "#79fc02";
		}
	}
	//Sudoeste
	if (row + 2 <= 9 && col - 2 >= 0) {
		if (document.getElementById("table").rows[row + 2].cells[col - 2].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row + 2].cells[col - 2].style.background = "#79fc02";
		}
	}
	//Oeste
	if (col - 3 >= 0) {
		if (document.getElementById("table").rows[row].cells[col - 3].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row].cells[col - 3].style.background = "#79fc02";
		}
	}
	//Noroeste
	if (row - 2 >= 0 && col - 2 >= 0) {
		if (document.getElementById("table").rows[row - 2].cells[col - 2].innerHTML == "") {
			at_least_one = true;
			document.getElementById("table").rows[row - 2].cells[col - 2].style.background = "#79fc02";
		}
	}
}
//Escrever uma função para adicionar numeros as células
function printNumber(row, col){
	if (count_num == 1) {
		//introduz o primeira número na primeira célula escolhida
		document.getElementById("table").rows[row].cells[col].innerHTML = "" + count_num;
		//para que as celulas nao fiquem desproporcionais
		document.getElementById("table").rows[row].cells[col].style.width = "10%";
		document.getElementById("table").rows[row].cells[col].style.height = "10%";
		//incrementa o número
		count_num++;
		//muda o texto que está na h5
		document.getElementsByTagName("h5")[0].innerHTML = "Clique numa célula válida para introduzir o número " + count_num;
		//mostra os possíveis movimentos
		possibleMovements(row, col);
		at_least_one = false;
	}
	else if(document.getElementById("table").rows[row].cells[col].innerHTML == "" && checkPosition(row, col)) {
		//eliminar os possiveis movimentos do numero anterior
		deletePossibleMovements();
		//introduz o número atual na célula válida e escolhida
		document.getElementById("table").rows[row].cells[col].innerHTML = "" + count_num;
		//para que as celulas nao fiquem desproporcionais
		document.getElementById("table").rows[row].cells[col].style.width = "10%";
		document.getElementById("table").rows[row].cells[col].style.height = "10%";
		//Verificar se o jogador acabou o jogo
		if (count_num === 100) {
			alert("O jogo terminou. Você ganhou o jogo. Para jogar outra vez clique no botão jogar.");
			document.getElementsByTagName("h5")[0].innerHTML = "Clique no botão jogar para começar";
			document.getElementById("table").id = "tableDisabled";
		}
		//incrementa a contagem de números
		count_num++;
		//muda o texto da h5
		document.getElementsByTagName("h5")[0].innerHTML = "Clique numa célula válida para introduzir o número " + count_num;
		//mostra os possíveis movimentos
		possibleMovements(row, col);
		//verificar se o jogador não tem mais movimentos possiveis
		if (at_least_one === false) {
			//Clear the table
			cleanTable();
			//Clear all the possible movements
			deletePossibleMovements();
			document.getElementById("table").id = "tableDisabled";
			alert("O jogo terminou. A sua pontuação é " + (count_num-1) + ".Para jogar outra vez clique no botão jogar.");
			document.getElementById("jogar").innerHTML = "JOGAR";
			document.getElementsByTagName("h5")[0].innerHTML = "Clique no botão jogar para começar";
		}
		at_least_one = false;
	}
}