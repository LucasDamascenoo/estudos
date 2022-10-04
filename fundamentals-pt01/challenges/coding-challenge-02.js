//imc com if else
let alturaMark = 1.69;
let pesoMark = 78;

let alturaJohn = 1.95;
let pesoJohn = 92;

let imcMark = pesoMark / alturaMark ** 2;
let imcJohn = pesoJohn / alturaJohn ** 2;

if (imcMark > imcJohn) {
  console.log(
    `Mark tem o imc de ${imcMark} e é maior que o de John ${imcJohn}`
  );
} else {
  console.log(
    `John tem o imc de ${imcJohn} e é maior que o de Mark ${imcMark}`
  );
}

console.log(18 == "18");
