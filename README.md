# algoritimos-logica-DeProgramacao

repositório criado para estudos e desenvolvimento de logica de programação.

# JavaScript

# Dados Primitivos

Dados primitivos são os tipo básico de cada linguagem, no Js temos os seguintes:

- Strings
- Numbers
- Boolean
- Null
- Undefined
- BigInt
- SYmbol

# Dados Objetos

- Arrays
- Functions
- Objetos

# Referencia vs Value

Qual a diferença entre valor e referencia?

no js temos os dados primitivos(strings,boolean) e os de objeto(array,objetos,funções)

os dados primitivos são imutaveis, pois são passados como valor, já nos objetos é por referencia, vamos aos exemplos.

- Valor

```javascript:
let a = 11;
let b = a;
console.log(b);

```

Passamos para a Variavel b o valor da variavel a,mas o que acontece com a variavel a se mudarmos o valor de b? <b>Nada</b>

Mas o mesmo não acontece com os tipos de dados objeto.

```javascript:
// já nos tipos de dados objetos  ao mudarmos um, altera a outra

let name = { person: "LUcas" };
let name2 = name;
name2.person = "tati";
console.log(name, name2);

```

# Declaração de váriavel

Podemos declarar váriaveis atualmente (boas praticas) de duas formas.

- const

Uma váriavel constante, significa que não pode ser mudada ou seja, uma vez declarada o valor, vai continuar o mesmo valor.
Diferente da outra maneira,const sempre precisa ser inicializada , caso contrario teremos um erro.

- let

declaramos váriaveis com let tudo aquilo que possa muda, é possivel fazer sua redeclaração de valor e não precisa de um valor atribuido em um primeiro momento (undefined).

# Escopos

Dentro do Js temos 4 tipos de escopo, o local, global,bloco e alinhado(nested).

Mas o que é escopo?

Escopo é como acessamos Variaveis,objetos,funções em diferentes partes do código.

<b>Global:</b>
Escopo Global no Js é uma como se fosse uma unica caixa que podemos ver e acessar de qualquer lugar.

<b>Bloco:</b>
Todo o tipo de bloco cria um novo escopo, e por bloco queremos dizer qualquer estrutura que utilize chaves, como if, for, while,funções e outras.

```javascript:
function foo () {
  var name = 'Lucas'

  if (name) {
    // Aqui temos outro escopo
    var age = 27
  }

  console.log(name) // Lucas
  console.log(age) // 23
}
```

por que quando criamos um escopo usando if não estamos sujeitos ao escopo da função superior?

Escopos criados por funções são chamados de function scopes, enquanto escopos criados por estruturas de controle são chamados de block scopes.

<b>Local:</b>

Para o Local, podemos entender que tudo que esteja declarado entre { } vira local.

Ou seja, uma vez declarado dentro de { } eu não consigo acessar fora dela.

Dentro de um escopo local, podemos incluir variaveis globais, mas caso tenhamos uma variavel local vs uma global com o mesmo nome, a variavel local irá ganhar.

<b>Local entendemos por funçõe</b>

# Conversao de tipos

Podemos converter strings em numeros e boolean, numeros em strings e boolean em string e numeros.

No js tambem ocorre a <b>coesão de dados</b>, que é "nativa" do js, que ele automaticamente converte um tipo de dado de acordo com a determinada operação que estamos fazendo.

```javascript:
let teste = "10" - "10" - "10";
console.log(teste, typeof teste);
```

No caso acima, escrevemos a variavel teste como string e estamos fazendo uma conta entre elas, o resultado é -10 e seu tipo foi "auto" convertido para number.

## Verdadeiro e falso

True ou false é um tipo de dado, assim como string e numbers podemos fazer a conversao de de um determinado valor para verdadeiro ou falso (o que não é muito usado), mas é bom sabermos, que alguns valores sempre serão falso.

- 0
- ''
- undefined
- NaN

Ou seja se usarmos um valor zero em uma condicional, ela cairia no bloco do else, pois 0 == false.

# Expressões e Operadores

- Lógicos
- Igualdade
- Atribuição
- Comparação
- Aritméticos
- Condicional-

# Operadores lógicos

Operadores lógicos retorman valores booleanos (true or false);

- and / &&
- ou / ||
- not / !

Como funcionam?

Na condição &&(and) todas comparação precisam ser true.

```javascript:
let verdadeiro = 10 > 2 && 10 < 20;
console.log(verdadeiro, typeof verdadeiro) //true;
```

```javascript:
let falso = 10 > 2 && 10 < 2;
console.log(falso, typeof falso) //false;
```

Na condição ||(ou) apenas uma das comparações precisam ser true.

```javascript:
let verdadeiro = 10 > 2 || 10 < 20;
console.log(verdadeiro, typeof verdadeiro) //true;
```

```javascript:
let falso = 10 > 2 || 10 < 2;
console.log(falso, typeof falso) //false;
```

Já o !(not) inverte a operação, se for true vira false e se for false vira true.

## operadores de igualdade

nos operadores de comparação, temos dois tipos de "iguais".

- ==
- ===

Mas qual a diferença entre eles?

o operador == faz a comparação apenas do valor.

```javascript:
console.log(18 == "18");
```

No exemplo acima o retorno vai ser <b>True</b>
pois foi comparado apenas os valores em si 18 é igual a 18.

Já o operador === faz a comparação entre valores e tipo de dados.

```javascript:
console.log(18 === "18");
```

Nesse caso o retorno seria <b>False</b> pois os tipos não batem (Number e string)

# Declarações e Expressões

No Js e em qualquer outra linguagem, precisamos enteder o conceito de
declarações e expressoes.

qual a diferença?

- Expressões

Expressoes no js é um pedaço de codigo que retorna algum valor.

```javascript:
console.log(18 == "18");
```

No caso esse pedaço de código produz um "valor" que é o true.

- Declarações

Já as declarações é um conjunto maior de código que sozinho não produz nenhum valor.

"Declarações é como se fossem um paragrafo em um texto e as expressões cada letra"

# Operadores condicionais

No js temos os operadores condicionais if e else;

if(idade > 18) {
se a condição (idade > 18) for verdadeira, executa algo
} else {
caso a condição seja falsa,executa outra ação.

}

<b>variaveis criadas dentro de um bloco de codigo não pode ser acessada de fora dele.</b>

## ternario

podemos trabalhar com condições utilizando o operador ternario.

<b>Sintaxe:</b>

```javascript:
let age = 18;
let podeBeber = age >=18 //condição ?
console.log("pode beber") : console.log("não pode beber") // else
```

mas como funciona esse ternario?

primeiros colocamos a condição ?
caso seja verdadeira cai no primeiro console : caso seja falso, cai no segundo
concole.

## Switch

Dentro dos operadores lógicos, tambem podemos usar o Switch que podemos usar para fazer "multiplas" condições,vamos ao exemplo.

```javascript:
let day = "monday";

switch(day){
  case "monday"
    Console.log("dia de planejamento");
    break
  case "friday"
    Console.log("dia de tomar  uma")
  }
```

O que mais temos dentro do case?

- Break
- default

O Break faz com que a execução pare no momento em que a condição for realizada,
no nosso caso "monday" que vai executar "dia de planejamento".

Já o Default, é um valor "padrão" que será apresentado caso nenhum das condição dentro do switch seja realizada.

# Loops

Loops são uma repetição de código atrelada a uma certa condição que enquanto verdadeira executa algo repetidamente.

<b>For</b>: Usamos for em casos que sabemos a quantidade de vezes que iremos repetir um certo código.

<b>Exemplo:</b>:

```javascript:
for(let i = 0; i<10; i++){
  console.log(i)
};
```

No exemplo acima temos 3 caracteristica.

- Inicializador
- Condição
- Incremento

<b>Inicializador:</b>: é uma variavel criada para indicarmos qual é o nosso numero inicial.

<b>Condição:</b>: é uma condição de parada, ou seja, enquanto essa condição for verdadeira ela roda o loop, assim que virar falsa, para o loop.

<b>Incremento:</b>: adiciona um valor na nossa variavel iniciadora, toda "rodada" em que a nossa condição ainda é verdadeira, cada vez que o valor é incrementado,ocorre uma interação,no nosso caso ele vai iterar 10x.

<b>While</b>: Usamos while em casos que não sabemos a quantidade de vezes que iremos repetir um certo código.

<b>Exemplo:</b>:

```javascript:
let i = 0
while(i<5){
  console.log(i)
  i++
};
```

# Tipos de Dados (Objetos):

# Arrays

Arrays são listas que podem conter qualquer tipo de dados.

Por padrão do JavaScript, arrays são objetos.

Sintaxe:

```javascript:
let heroes = ["Batman", "Mulher gato", "iron main"];;
```

<b>Como os arrays são "acessados"?</b>

No Array, assim como vimos em strings, usamos indices para acessar cada elemento de um array.

No nosso exemplo acima,temos um array com 3 valores que vão do 0 - 2, mas como assim? não são 3 valores?

No Js nossos indices começam do 0 em diante.

# Funções

<b> O que é uma função? </b>
Funçoes são um bloco de código que executa uma determinada "acão" e que podemos invocar(chamar)/usar quando quiser

## sintaxe de uma função

- (Function declaration)

```javascript:
function sayHI // criando a função () {
console.log("Oi") // bloco de código da função
}

sayHi() // chamando/invocando a função;
```

- (Function expression)

Function expression é quando declaramos uma função dentro de uma variavel.

```javascript:
 const showFood = function // criando a função () {
console.log("Pizza") // bloco de código da função
}

showFood() // chamando/invocando a função;
```

## Qual a diferença entre uma function declaration para uma function expression?

- Em uma function declaration, podemos chamar o função "antes" da função.

```javascript:
sayHi() // chamando/invocando a função;

function sayHI // criando a função () {
console.log("Oi") // bloco de código da função
}

```

- Já em uma Function expression, não podemos invocar antes da variavel criada, pois da erro no js.

```javascript:
showFood() // chamando/invocando a função;
 const showFood = function // criando a função () {
console.log("Pizza") // bloco de código da função

<b>ReferenceError: Cannot access 'showFood' before initialization</b>
}

```

## Porque isso acontece?

No JavaScript os Códigos são lidos de cima para baixo, e quando criamos uma função, ocorre o <b>Hoisting</b> que faz com que possamos invocar uma função antes que ela esteja declarada, que pos trás dos panos do JS, eleva nossa função para o topo da pagina (do código) e só depois le o que foi invocado (mesmo que a invocação esteja acima), o que não pode ser feito quando criamos uma variavel ou expression function.

## Parametros e Argumentos

- Parametros:
  Quando criamos uma função, podemos atribuir parametros (aqui), que são variaveis locais (só podem ser usada dentro do escopo de função)

- Argumentos
  São os valores atribuidos aos Parametros/variavel local.

## Return

Return no Js, primeiro que "encerra" o ciclo daquela função, e tambem serve para "guardar" um determinado dado que pode ser usado fora daquela função, se a gente não retornar nada em uma função, quando guardamos essa função em uma variavel por exemplo, o valor sera <b>undefined</b>

## Arrow Functions

Arrow functions é uma forma abreviada de incluirmos uma função com a seguintes sintaxe.

```javascript:
const getName = (name) => {
  return name
}
console.log(getname('Lucas'));

```

## Metodos

Metodos em Js são "funções", mas tem uma caracteristica diferente ,enquanto funções é chamada/executada sozinha, metodos são "aplicadas" em objetos e tipos de dados/strings/arrays.

- função

```javascript:

 const showFood = function // criando a função () {
console.log("Pizza") // bloco de código da função

}
showFood() // chamando/invocando a função;
```

- Metodo

```javascript:

 const text = "Lucas Damasceno"

const tamanho = text.toUpperCase() // metodo de string

 saida : //LUCAS DAMASCENO
```

## Objetos

é uma coleção de propriedades atribuidas por chave e valor.

- Sintaxe

```javascript:
const carro = {
  nome: 'gol',
  cor: 'azul',
  ano: 2009,
  fabricante: 'fiat'

}

console.log(carro);

```
