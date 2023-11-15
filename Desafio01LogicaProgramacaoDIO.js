/* Desafio Clasfificador do Nivel de Heroi */

/* Definição das Variaveis */
let heroiNome = "MarioB";
let heroiNivel = 5001;
var contador = 1000;

/* Bucle  de Repetição, uso de Codicioanis e Operadores logicos */
for (i = contador; i <= heroiNivel; i += contador) {
 
    if (heroiNivel <= 1000){
        heroiXP = "Ferro";
    } else if(heroiNivel >1000 && heroiNivel <= 2000){
        heroiXP = "Bronze";
    } else if(heroiNivel > 2000 && heroiNivel <= 5000){
        heroiXP = "Prata";
    } else if(heroiNivel > 5000 && heroiNivel <= 7000){
        heroiXP = "Ouro";
    } else if(heroiNivel > 7000 && heroiNivel <= 8000){
        heroiXP = "Platina";        
    } else if(heroiNivel > 8000 && heroiNivel <= 9000){
        heroiXP = "Ascendente";        
    } else if(heroiNivel > 9000 && heroiNivel <= 10000){
        heroiXP = "Imortal";        
    } else {
        xp = "Radiante"; 
    }   
}   
/* Saida dos Resultados e uso de concatenação. */
console.log("======================================================================= ")
console.log("                      Resultado da Clasificação                         ")
console.log("======================================================================= ");
console.log("O Heroi " + heroiNome + " Tem um Nivel " + heroiNivel + " Para um XP de " + heroiXP);
console.log("======================================================================= ");