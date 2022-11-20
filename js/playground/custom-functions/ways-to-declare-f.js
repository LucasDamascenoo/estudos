// //função anonima

// function (teste){
//   return `dr. ${teste}`
// }

// function expression
const doc = function (name) {
  return `dr. ${name}`;
};

let imprimeNOme = doc("lucas");

console.log(imprimeNOme);

//function declaration

function somar(a, b) {
  return a + b;
}

const sum = somar(10, 5);
console.log(sum);

//arrow function

const inchToCm = (inches) => {
  return inches * 2.54;
};
console.log(inchToCm(3));

//arrow function com retorno explito

const mult = (a, b) => a * b;

console.log(mult(10, 5));

//funções com parametros predeterminado.

// nesse caso estamos atribuindo ao parametro b um valor padrão,
// que caso não seja atribuido um argumento para Ele por padrao ele vai valer 3

function add(a, b = 3) {
  return a + b;
}

console.log(add(1));

//funções que retornam um objeto

function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

console.log(makeABaby("lucas", "oliveira"));

console.log(typeof makeABaby);

//callback function
//Click function

const button = document.querySelector(".teste");
console.log(button);

function cliquei() {
  console.log("TATIANE TE AMO");
}

button.addEventListener("click", cliquei);
