const caradado = {
    1: "./Dado imagens/Dado1.png",
    2: "./Dado imagens/Dado2.png",
    3: "./Dado imagens/Dado3.png",
    4: "./Dado imagens/Dado4.png",
    5: "./Dado imagens/Dado5.png",
    6: "./Dado imagens/Dado6.png"
}
var numero = 0;
function Dado(){
    numero = Math.floor(Math.random() * 6);
    document.getElementById("dado").src = caradado[numero];}