//strings

const name = "Lucas";
const sobrenome = "damasceno";

//numbers and floats

const idade = 27;
const peso = 87.5;

//objects

// tudo no js é um objeto

const person = {
  name: "lucas",
  idade: 27,
  peso: 87,
  cidade: "são paulo",
};

console.log(person.cidade, typeof person);

//null and undefined

// null é quando declaramos que aquela variavel será null

// já o undefined o js "auto declara" quando ele encontra a ausencia de valor. (const não podem ser undefined)

const age = null;

let no;

console.log(age, no);

//booleans and trulphy and falsy

// booleans são true e falso e usamos nas operações logicas

//trulphy and falsy são tipos de dados que são true and false

//false = ""(string vazia), 0 (zero)
let vazio = -10;

if (vazio) {
  console.log(true);
} else {
  console.log(false);
}

//
