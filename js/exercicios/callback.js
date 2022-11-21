// // const $button = document.querySelector("button");

// // const handleClick = () => {
// //   console.log("botão foi clicado");
// // };

// // $button.addEventListener("click", handleClick);

// // criando botão via js

// //criando função para criar mais butões

// function newButton(text, callback) {
//   //selecionando onde vamos incluir o botao
//   const body = document.querySelector("body");

//   //criando o elemento (botão)
//   const button = document.createElement("button");

//   //passando o valor para o botão
//   button.textContent = text;

//   callback();

//   //adicionando o botão no html
//   body.insertAdjacentElement("beforeend", button);
// }

// newButton("Login", () => {
//   console.log("deu bom, estamos dentro da função newbutton");
// });
// newButton("Signup", () => {
//   console.log("deu bom, estamos dentro da função newbutton - sigup");
// });

const fabricantes = ["mercedees", "bmw", "fox", "treta"];

fabricantes.forEach((a, b) => {
  console.log(a, b);
});

const midia = ["yt", "face", "insta", "google"];

midia.forEach((nome, index, array) => {
  console.log(nome, index, array);
});

//1 parametro = item(nome) (obrigatorio)
//2 parametro = indice de cada item
//3 parametro = array onde esta sendo iterado

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback

let notasBaixas = [];

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

//com callback

let notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasBaixas2);
