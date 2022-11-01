// 1 : Escreva um programa que recebe a velocidade de 2 carros e diga qual esta mais rapido ou se estão a mesma velocidade

let carroAzul = 76;
let carroVermelho = 76;

if (carroAzul > carroVermelho) {
  console.log(
    `Carro azul está mais rapido que o vermelho : azul ${carroAzul} vermelho ${carroVermelho} `
  );
} else if (carroVermelho > carroAzul) {
  console.log(
    `Carro vermelho está mais rapido que o azul : vermelho ${carroVermelho} azul ${carroAzul} `
  );
} else {
  console.log(`os 2 estão a mesma velocidade`);
}

// 2

//ataque
let personagem = prompt("Digite o nome de um personagem que vai atacar");
let poderAtaque = prompt("Digite o poder de 1 a 100");

//defesa

let defensor = prompt("Digite o nome do personagem");
let pontosDeVida = prompt("Digite quantos de vida ele tem");
let poderDeDefesa = prompt("qual o seu poder de defesa");
let possuiEscudo = prompt("Ele possui escudo? (sim/não)");

let danoCausado = 0;

if (poderAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderAtaque - poderDeDefesa;
} else if (poderAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(`${personagem}<br> ${poderAtaque} <br>
${defensor} <br> ${pontosDeVida} <br> ${poderDeDefesa} <br> ${possuiEscudo}`);
