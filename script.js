/*

Codificação:
Pedra -> 1, PAPEL->2, TESOURA->3

Jogador Wins:
P 1 3 IA
P 2 1 IA
P 3 2 IA

IA Wins:
P 3 1 IA
P 1 2 IA
P 2 3 IA

Qualquer outra coisa, EMPATE
*/
var playerscore = 0;
var iascore = 0;

function play(playerChoice){
  //pegar a jogada da IA
var iaChoice = Math.floor(Math.random()*3) + 1;//[1,3]

//verificar quem ganhou
if( 
      (playerChoice==1 && iaChoice==3) 
    || (playerChoice==2 && iaChoice==1)
    || (playerChoice==3 && iaChoice==2) 
    ){
  msg = "Você ganhou";
  playerscore++;
}
else if( 
      (playerChoice==3 && iaChoice==1) 
    || (playerChoice==2 && iaChoice==2)
    || (playerChoice==1 && iaChoice==3) 
  ){
  msg = "Você perdeu";
  iascore++;
}else{
  msg = "Empatou";
}

//exibir quem ganhou
var divResultado = document.getElementById("resultados").className = "show";
document.getElementById("lastRound").innerText = msg;


//Exibir Placar

var msgScore = "PLAYER " + playerscore + " X " + iascore + " IA ";
document.getElementById("score").innerText = msgScore;
}