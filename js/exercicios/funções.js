/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function mult(a = 1, b = 2) {
  return a * b;
}

const result = mult(10, 5);

console.log(result);

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const divide = function (b = 2, c = 4) {
  return b / c;
};

const resultado = divide(8, 2);

console.log(resultado);

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// function mensagem(value) {
//   console.log(value);
// }

// function repeteMensagem() {
//   for (let i = 1; i <= 7; i++) {
//     mensagem(`essa é a ${i}ª que essa mensagem é exivida `);
//   }
// }

// repeteMensagem();

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = [
  "lol",
  "yolo",
  "troll",
  "stalkear",
  "selfie",
  "influencer",
  "crush",
  "fitness",
  "hater",
  "bae",
  "random",
  "kawaii",
  "outfit",
  "mood",
  "fail",
];

const arrayToUpperCase = (array = []) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  return newArray;
};

console.log(arrayToUpperCase(millennialWords));

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

let arrayPositivo = 0;
let arrayNegativo = 0;

const isPositive = (number = 0) => number >= 1;

for (let i = 0; i < randomNumbers.length; i++) {
  if (isPositive(randomNumbers[i])) {
    arrayPositivo++;
  } else {
    arrayNegativo++;
  }
}

console.log(
  `o array random possui ${randomNumbers.length} numeros, sendo ${arrayPositivo} positivos e ${arrayNegativo} negativos`
);

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// let arrayNovo = [];

// function isIMpar(numero) {
//   return numero % 2 == 1;
// }

// for (let i = 0; i < getOddNumbers.length; i++) {
//   if (isIMpar(getOddNumbers[i])) {
//     arrayNovo.push(getOddNumbers[i]);
//   }
// }

// console.log(arrayNovo);

const getOddNumbers = function (numero) {
  let arrayTeste = [];

  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 1) {
      arrayTeste.push(numero[i]);
    }
  }

  return arrayTeste;
};

console.log(
  getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
);
