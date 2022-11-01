// //1

// const fruits = ["morango", "banana", "mamao"];

// if (fruits.includes("abacaxi")) {
//   console.log("A String 'abacaxi' existe no array fruits");
// } else if (fruits.includes("pera")) {
//   console.log(" n tem abacaxi mas tem pera");
// } else {
//   console.log("n tem pera nem abacaxi");
// }

// //2

// function horaCerta() {
//   const horaExercicio = new Date();
//   const hours = horaExercicio.getHours();
//   if (hours > 6 && hours <= 11.59) {
//     console.log("bom dia");
//   } else if (hours > 12 && hours <= 17.59) {
//     console.log("boa tarde");
//   } else {
//     console.log("boa noite");
//   }
// }

// horaCerta();

// // 3

// const idade = 27;

// if (idade <= 7 || idade >= 65) {
//   console.log("entrada gratis");
// } else {
//   console.log("entrada por R$ 30 real");
// }

// //4
// const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];
// let numbers2 = [];

// for (let i = 0; i < numbers.length; i++) {
//   const numberIterado = numbers[i];
//   console.log(numberIterado);
//   if (numberIterado >= 11 && numberIterado <= 90) {
//     numbers2.push(numbers[i]);
//   }
// }

// console.log(numbers2);

//5

const crazyArray = [
  true,
  869,
  "oi",
  71,
  false,
  83,
  "35",
  true,
  397,
  "js",
  false,
];

let qtdStrings = 0;
let qtdBool = 0;
let qtdNumbers = 0;

for (let i = 0; i < crazyArray.length; i++) {
  if (typeof crazyArray[i] === "number") {
    qtdNumbers += 1;
  } else if (typeof crazyArray[i] === "boolean") {
    qtdBool += 1;
  } else {
    qtdStrings += 1;
  }
}

console.log(
  `a qtd de string é ${qtdStrings}, de boolean é ${qtdBool} e de numeros é ${qtdNumbers}`
);

//6

const randomNumbers = [73, 4, 67, 10, 31, 58];

let parNumbers = [];
let impaNumbers = [];

for (let i = 0; i < randomNumbers.length; i++) {
  console.log(randomNumbers[i]);
  // if (randomNumbers[i] % 2 === 0) {
  //   parNumbers.push(randomNumbers[i]);
  // } else {
  //   impaNumbers.push(randomNumbers[i]);
  // }
}

// console.log(parNumbers, impaNumbers);
