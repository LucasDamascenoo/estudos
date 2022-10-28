//1

const fruits = ["morango", "banana", "mamao"];

if (fruits.includes("abacaxi")) {
  console.log("A String 'abacaxi' existe no array fruits");
} else if (fruits.includes("pera")) {
  console.log(" n tem abacaxi mas tem pera");
} else {
  console.log("n tem pera nem abacaxi");
}

//2

function horaCerta() {
  const horaExercicio = new Date();
  const hours = horaExercicio.getHours();
  if (hours > 6 && hours <= 11.59) {
    console.log("bom dia");
  } else if (hours > 12 && hours <= 17.59) {
    console.log("boa tarde");
  } else {
    console.log("boa noite");
  }
}

horaCerta();

// 3

const idade = 27;

if (idade <= 7 || idade >= 65) {
  console.log("entrada gratis");
} else {
  console.log("entrada por R$ 30 real");
}

//4
const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];
let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  const numberIterado = numbers[i];
  console.log(numberIterado);
  if (numberIterado >= 11 && numberIterado <= 90) {
    numbers2.push(numbers[i]);
  }
}

console.log(numbers2);
