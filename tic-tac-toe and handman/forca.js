var biblioteca=["odio","demonio","suicidio","terceira","ponte","kamikaze","seppuku","vida","morte","budismo","satanismo"];
var quantidade = biblioteca.length - 1;
var pos = Math.round(Math.random() * quantidade);
var palavra = biblioteca[pos];
var tamanho = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 7;
var erros = 0;
var desenhos = [];
var acertou = false;
var jogando = false;
var jog;

function definirLetras(l) {
	var obj;
	for( var i = 0;i < 9; i++){
		obj = document.getElementById("letra" + i).value = "";
		obj = document.getElementById("letra" + i).style.display = "none";
	}
	for(var i = 0; i < l; i++){
		obj = document.getElementById("letra" + i).style.display = "inline-block";
	}
}

function jogar() {
	jog.focus();
	if(jog.value == ""){
		alert("Por favor insira uma letra!");
	}
	else
		if(jogando){
			var objeto;
			var letraTmp;
			var letra;
			var pesquisa;
			letra = jog.value;
			jog.value = "";
			acertou = false;
			pesquisa = palavra.match(letra);
			while(pesquisa != null){
				letraTmp = palavra.search(letra);
				objeto = document.getElementById("letra" + letraTmp).value = letra;
				palavra = palavra.replace(letra, '0');
				acertos++;
				pesquisa = palavra.match(letra);
				acertou = true;
			}
			if (!acertou){
				document.getElementById("letrasdig").innerHTML += letra.toUpperCase() + " ";
				erros++;
				if(erros < 7){
					desenhos[erros].style.display = "block";
				}
				else{
					document.getElementById("cabeca").src = "cabeca2.png";
					document.getElementById("msg").innerHTML = "Voce perdeu!";
					jogando = false;
				}
			}
			if(acertos == tamanho){
				document.getElementById("msg").innerHTML = "Voce ganhou!";
				jogando = false;
			}
		}
}

function inicia() {
	jogando = true;
	jog = document.getElementById("letraJ");
	jog.value = "";
	jog.focus();
	acertos = 0;
	erros = 0;
	acertou = false;
	document.getElementById("letrasdig").innerHTML = "Letras Digitadas:";
	pos = Math.round(Math.random()*quantidade);
	palavra = biblioteca[pos];
	tamanho = palavra.length;
	definirLetras(tamanho);
	document.getElementById("msg").innerHTML = "";
	desenhos[1] = document.getElementById("cabeca");
	desenhos[2] = document.getElementById("corpo");
	desenhos[3] = document.getElementById("bracoE");
	desenhos[4] = document.getElementById("bracoD");
	desenhos[5] = document.getElementById("pernaE");
	desenhos[6] = document.getElementById("pernaD");
	document.getElementById("cabeca").src = "cabeca1.png";
	for (var i = 1; i < 7; i++) {
		desenhos[i].style.display = "none";
	}
}

window.addEventListener("load", inicia);