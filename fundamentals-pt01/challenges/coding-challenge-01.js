// calculo imc

let alturaMark = 1.69;
let pesoMark = 78;

let alturaJohn = 1.95;
let pesoJohn = 92;

let imcMark = pesoMark / alturaMark ** 2;
let imcJohn = pesoJohn / alturaJohn ** 2;

let markHigherBMI = imcMark > imcJohn ? "sim" : "não";

console.log(`O imc de Mark é de ${imcMark}`);
console.log(`O imc de John é de ${imcJohn}`);
console.log(`O imc de Mark é Maior que John? ${markHigherBMI}`);
