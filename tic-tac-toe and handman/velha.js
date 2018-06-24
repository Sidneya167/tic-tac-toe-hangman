var i;
var PjogadorX = 0;
var PjogadorO = 0;
var jogo;
var v = new Array(9);
var vez = 1;
var jogadas = 0;
var gameOver = false;
var vencedor;
var empates = 0;


function jogar(jogo) {
    if(v[jogo] != 1 && v[jogo] != 2) {
        v[jogo] = vez;
        if(vez == 1) {
            document.getElementById("jogo" + jogo).innerHTML = "X";
            vez = 2;
        }
        else if(vez == 2) {
            document.getElementById("jogo" + jogo).innerHTML = 'O';
            vez = 1;
        }
        jogadas++;
    }
    verifvit();
}

function verifvit() {
	if(v[0] == 1 && v[1] == 1 && v[2] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[3] == 1 && v[4] == 1 && v[5] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[6] == 1 && v[7] == 1 && v[8] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[0] == 1 && v[3] == 1 && v[6] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[1] == 1 && v[4] == 1 && v[7] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[2] == 1 && v[5] == 1 && v[8] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[0] == 1 && v[4] == 1 && v[8] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	else if(v[2] == 1 && v[4] == 1 && v[6] == 1) {
		vencedor = 1;
		gameOver = true;
	}
	//jogador 2
	if (v[0] == 2 && v[1] == 2 && v[2] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if (v[3] == 2 && v[4] == 2 && v[5] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if (v[6] == 2 && v[7] == 2 && v[8] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if(v[0] == 2 && v[3] == 2 && v[6] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if(v[1] == 2 && v[4] == 2 && v[7] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if(v[2] == 2 && v[5] == 2 && v[8] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if(v[0] == 2 && v[4] == 2 && v[8] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if(v[2] == 2 && v[4] == 2 && v[6] == 2) {
		vencedor = 2;
		gameOver = true;
	}
	else if (jogadas == 9 && gameOver == false) {
		vencedor = 3;
		gameOver = true;
	}
	if (gameOver == true) {
		if (vencedor == 1) {
			PjogadorX++;
			document.getElementById("PlacarX").innerHTML = PjogadorX;
			alert("O jogador X venceu o jogo!");
		}
		else if(vencedor == 2) {
			PjogadorO++;
			document.getElementById("PlacarO").innerHTML = PjogadorO;
			alert("O jogador O venceu o jogo!");
		}
		else if (vencedor == 3) {
			empates++;
			document.getElementById("PlacarEmp").innerHTML = empates;
		}
	}
	return gameOver;
}
function jogardnv() {
	for(i = 0; i < 9; i++) {
		document.getElementById("jogo" + i).innerHTML = "";
		v[i] = 0;
	}
	gameOver = 0;
	vencedor = 0;
	jogadas = 0;
	vez = 1;
}