var numeroSecreto=0;
var tentativas = 0;

function 
atualizar(){
numeroEncontrado = parseInt(Math.random()* 100) +1 ;
console.log (numeroSecreto)
}
function verificarNumero(){
var palpite = document.getElementById("palpite").value;    
var mensagem = document.getElementById ("mensagem");

if ( isNaN (palpite) || palpite > 100 || palpite < 1) {

mensagem.textContent = "👾Numero Invalida!!";
return;

}
mensagem.textContent = "numero valida"

if (palpite > numeroSecreto){
tentativas ++;
 mensagem.textContent = "O numero secreto e Menor!";

}
else if (palpite < numeroSecreto) {

tentativas ++;
 mensagem.textContent = "O numero secreto e Maior!";
 console.log ("O numero secreto e Maior!");
}
else{
    mensagem.textContent =  "✅Voce Acertou!! Com " +tentativas+ "erros!";
document.getElementById ("btnChutar").disabled =true;
document.getElementById("palpite").disabled = true;
}
document.getElementById("tentativas").textContent = "tentativas:" + tentativas;
}
atualizar();




