# JavaScript

repositório criado anotações dos estudos de JavaScript

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

# Objetos

é uma coleção de propriedades atribuidas por propriedades/chaves : valor, que nos possibilita criar estruturas de dados onde poderemos utilizar em nossas aplicações.

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

## Como acessamos os valores de um objetos?

Nos objetos tem a sintaxe de ponto(.), onde passamos o nome do objeto.propriedade que queremos ter acesso.

```javascript:
const produto = { nome: "monitor 27", preco: 1900, estoque: true };
console.log(produto.nome) // trazendo/acessando somento o nome do produto

```

## adicionando e removendo propriedades de um objeto

## Spread operator

Podemos unir dois objetos em um só usando o ... (spread operador).

```javascript:
const user1 = {  name: "lucas",  age: 27,  peso: 90,};

const complemento = {  cor: "negro",  olhos: "castanhos",  tamanho: 1.7,};

const fullUser = { ...user1, ...complemento };

console.log(fullUser);

/*
 name: 'lucas',
  age: 27,
  peso: 90,
  cor: 'negro',
  olhos: 'castanhos',
  tamanho: 1.7

  */

```

## This

Em objetos, podemos utilizar a palava referenciada <b>This</b>, mas o que ela faz?

This: é o contexto atual onde evidencia que o método(Proprieades que são uma função) que estamos chamando na função é daquele objeto.

**_ Note que não precisamos passar para o parametro o ano de nascimento, e dentro da função usamos o this.calcAge, para "evidenciar" que o calcAge que estamos usando é referente ao objeto "Lucas" . _**

```javascript:
const lucas = {
  name: "lucas",
  anoNascimento: 1995,
  role: "Student and datascience",
  status: "need more practice",
  calcAge: function () {
    return 2023 - this.anoNascimento;
  },
};

console.log(lucas.calcAge());

```

**_ Já no exemplo abaixo, precisamos criar um parametro e ele não consegue ler o ano de nascimento que está dentro do objeto "Lucas", fazendo com que precisemos passar o ano como argumento, o que faz com que o código se repita. _**

```javascript:
const lucas = {
  name: "lucas",
  anoNascimento: 1995,
  role: "Student and datascience",
  status: "need more practice",
  calcAge: function (anoNascimento) {
    return 2023 - anoNascimento;
  },
};

console.log(lucas.calcAge(1995));

```

# Arrays

Arrays são listas de dados que podem conter qualquer tipo de dados (Por padrão, devemos manter o array com o mesmo tipo de dados).

Sintaxe:

```javascript:
let heroes = ["Batman", "Mulher gato", "iron main"];;
```

Tambem podemos criar arrays usando **new array**

```javascript:
let idade = new Array(90,786,123,245)
```

<b>Como os arrays são "acessados"?</b>

No Array, assim como vimos em strings, usamos indices para acessar cada elemento de um array.

No nosso exemplo acima,temos um array com 3 valores que vão do 0 - 2, mas como assim? não são 3 valores?

No Js nossos indices começam do 0 em diante.

## Adicionando/removendo elementos em um array

Podemos fazer alterações em nossos arrays, seja adicionando ou removendo informações dele atráves de métodos.

## Adicionando

- push()

O Método push() adiciona elementos no fim do array.

```javascript:
const familia = ["Bruce", "Tati", "Lucas", "Dona Lucia"];

familia.push("seu  mazinho", "Mariele", "nana", "Matheus", "Mãe", "Thiago");
```

- unshift()

Já o Método unshift() adiciona elementos no inicio do array.

```javascript:
const familia = ["Bruce", "Tati", "Lucas", "Dona Lucia"];

familia.unshift("Estrelinha");
```

- Spread Operator

Tambem podemos adicionar um array em outro array de forma **declarativa** usando o spread operator(...)

```javascript:
const familiaOliveira = [...familia, "Zé", "Maria"];

console.log(familiaOliveira);


```

No exemplo acima, "copiamos" o array familia para o novo array, e adicionamos mais valores.

- slice()

**Não Altera o array original**

O Método slice() seleciona elementos atráves de dois parametros.

- 1º parametro :

indica qual o inicio (qual o indice eu quero pegar do array).

- 2º parametro:

indica até qual indice eu quero que pare meu array.

```javascript:
const n = ["maria", "joana", "teste", "tati"];;

numeros.slice(1, 3);

//return joana , teste

```

**Explicação:** No exemplo acima, no primeiro parametro falamos que queremos selecionar o indice 1(Joana), em seguida no segundo parametro informamos que queremos que pare no elemento 3 (teste)

## Removendo

- pop()

O Método pop() remove elementos no fim do array.

```javascript:
const familia = ["Bruce", "Tati", "Lucas", "Dona Lucia"];

familia.pop();
```

- shift()

O Método shift() remove elementos no fim do array.

```javascript:
const familia = ["Bruce", "Tati", "Lucas", "Dona Lucia"];

familia.shift();
```

## Desestruturação de Arrays

Podemos atribuir os valores do array em váriaveis individuais.

- Sintáxe

```javascript:
const heroes = ["Batman", "Mulher gato", "Pinguin", "coringa"];

// desestruturação

const [homemMorcego, gata] = heroes;

// homemMorcego = "Batman"
//gata = "Mulher gata"

```

atribuimos váriaveis de apenas dois valores do nosso array, respeitando o indice 0 para primeira váriavel e o indice 1 para a segunda váriavel.

- Pulando valores do arrays

Tambem é possivel criar váriaveis, pulando algum determinado valor do array.

```javascript:
const heroes = ["Batman", "Mulher gato", "Pinguin", "coringa"];

// desestruturação

const [, , homemPinguim] = heroes;

// homemPinguim = "Pinguin"

```

No exemplo acima, pulamos os valores "Batman" e "Mulher gato" e atribuimos a váriavel apenas o terceiro valor.

- splice()

**Altera o array original**

O Método splice() remove elementos atráves de dois parametros.

- 1º parametro :

indica qual o elemento quero remover primeiro

- 2º parametro:

indica quantos elementos quero remover com base no primeiro parametro.

```javascript:
const numeros = [10, 20, 30, 40, 50, 60, 70];

numeros.slice(0, 4);

// numeros excluidos : [10, 20, 30, 40]


// array atualmente: [(50, 60, 70)]

```

**Explicação:** No exemplo acima, no primeiro parametro falamos que queremos selecionar a partir do indice 0(10), em seguida no segundo parametro informamos quantos indices queremos deletar a partir do primeiro index , com isso deletamos os numeros [10,20,30,40] , e ficou apenas os valors [50,60,70]

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

## forEach e Callbacks

foreach é um metodo de array que faz com que a iteração do array seja mais "facil".

```javascript:

const array = ['a','b','c']

array.forEach((a,b,c) =>){
  console.log(a,b,c)
}

```

**_O que esta acontecendo nesse exemplo?_**

com o Metodo foreach, estamos iterando cada item do array e imprimindo no console.

Vamos a sinxtaxe :

array.forEach () <= estamos chamando o metodo para o array / variavel que queremos iterar

(function(a,b,c) {}) <= estamos criando uma função dentro do metodo, com 3 parametros.

- a : é para trazer o item/nome que queremos trazer (obrigatorio)
- b : é o indice de cada item iterado [1,2,3]
- c : é a estrutura do array que estamos iterando ['a','b','c']

# Callbacks.

Callbacks são funções que são passadas para outra função ou metodos como parametro.

```javascript:

const array = ['a','b','c']

const callbackDoForEach = function (a,b,c){
  console.log(a,b,c)
}

array.forEach((callbackDoForEach) =>){
  console.log(callbackDoForEach)
}

```

Como vemos no exemplo acima, criamos um função callbackForEach que recebe 3 parametros e imprime eles, simplificando a leitura da chamada do forEach, em seguida passamos essa função como parametro para o metodo **forEach**
isso é um callback.

# Closures

Clusures em js, são funções que idenpendente da onde for chamada, vai respeitar o valor passado para essas funções.

# Manipulação da Dom

## O que é a DOM?

a sigla DOM (Document objet model) é a estrutura/representação do HTML como conhemos, e usamos o Javascript para manipular, criar e estilizar esse elementos.

A estrutura da DOM é feita como se fosse uma arvore (onde cada elemento do html) é um nó(node).

<b>Importante!</b>Os métodos e as propriedades da DOM não é Javascript, mas usamos o Javascipt para acessar essas propriedades e métodos através da WEB API.

## Como selecionar os elementos do HTML.

Podemos selecionar os elementos do HTML via Js de algumas formas.

- Via Tags

```javascript:

 const tag = document.getElementsByTagName("h5");

```

- Via Id / classes

```javascript:

 const h1 = document.getElementById("text");
 const h2 = document.getElementsByClassName("texto");

```

Tambem podemos fazer essa seleção de forma mais "moderna", usando querySelector e querySelectorAll, vamos entender as diferenças entre eles.

- document.querySelector()

Com o querySelector podemos pegar qualquer tipo de elementos do HTML, seja por nome da tag, id e classes.

**retorna somente o primeiro elemento**: caso tenha mais de uma class igual, vai retornar somente o primeiro elemento (top - down), caso não encontre nenhuma informação o retorno será **null**

```javascript:

const result = document.querySelector("#result");

result.style.backgroundColor = "blue";

```

- document.querySelectorAll()

QuerySelectorAll pega todos os elementos apontado , seja ele tag, id ou classe.

**retorna um array** : como querySelectorAll podemos fazer iterações de array como o forEach fazendo com que possamos modificar diversos elementos.

```javascript:

const list = document.querySelectorAll(".special");

list.forEach((item) => {
  console.log(item);
  item.style.color = "red";
});

```

## Como criar elementos com o DOM

Atráves do Js podemos criar elementos/atributos dinamicamente utilizando o método CreateElement() .

```javascript:
const div = document.createElement("div");

div.innerHTML = "eae";

document.body.appendChild(div);


```

**Explicação:** Usamos o creatElement para criar uma div, atribuimos com o innerHTML uma string e por ultímo atribuimos a div sendo filho do body com o método appendChild().

Criar um elemento não garante que ele vai de cara aparecer em nosso HTML, somente na "memória" para isso precisamos usar outro método para que nossa página receba esse elemento.

- appendChild()

Adiciona elementos criados atráves do createElement e faz com que possamos incluir o conteudo em um "pai", seja ele o body, uma div já existente.

- innerHtml

Adiciona texto nas nossas pagimas mas aceita elementos html.

```javascript:
const div = document.createElement("div");

div.innerHTML = "<strong>eae</strong>";
```

- innerText

Adiciona texto nas nossas pagimas mas não aceita elementos html, somente texto.

```javascript:
const div = document.createElement("div");

div.innerText = "eae";
```

- textContent

semelhante ao innerText, o textContent retorna apenas textos em nosso HTML.

```javascript:
const div = document.createElement("div");

div.textContent = "eae";
```

## Selecionando e modificando/adicionando atributos

Podemos selecionar um atributo existente (src,href,class,ids) ou cria-los atraves do javascript utilizando **getAttribute** e o **setAttribute()**

- Selecionando atributos

```Javascript:

   const classValue = links.getAttribute('class')
   const showLink = link.getAttribute('href')

    console.log(classValue); // first
    console.log(ShowLink); // first.html

```

- Atribuindo elementos

quando utilizamos o setAttibute, passamos dois parametros:

1 - o tipo de elementos que vamos criar
2 - o nome que vamos atribuir a esse elemento

```html:

  <ul>
    <li class="first">i have class of first</li>
    <a href="first.html" id="link">random link</a>
    <li> i have no attribute</li>
  </ul>

```

```Javascript:

   const link = document.querySelector('#link')

   const last = link.nextElementSibling;

   last.setAttribute("class",'fisrt')

```

## Manipulando Classes

Podemos adicionar, remover, substituir e verificar se existem classes atráves de duas funções className e classList.

- className

```Javascript:

   const second = document.querySelector('.second')

    const verificaClasse = second.className;

    console.log(verificaClasse); //second
```

No código acima estamos trazendo a o nome da classe que está atribuido em nosso elemento HTML.

```Javascript:

   const second = document.querySelector('.second')

    second.className = 'pink';

    console.log(verificaClasse);
    // era second e agora pink
```

Tambem é possivel modificar o valor de uma class com className.
**caso tenha classe atribuida em um determinado elemento, essa classe é substituida**

- ClassList

Utilizando o classList temos parametros que nos ajudam a manipular essas listas com mais facilidade.

- classList.add
  adicionar uma classe em um determinado elemento

  - classList.remove
    remove uma classe de um determinado elemento

- classList.contains
  verifica se o determinado elemento contem aquela class.

## como remover elementos do HTML com o DOM

1º vamos selecionar o elemento.

```Javascript:

   const second = document.querySelector('.second')


```

2º em seguida podemos remover o elemento que foi selecionado.

```Javascript:

   second.remove()


```

## Eventos

Eventos são maneiras de que o DOM "escuta" uma determinada ação do usuario, como click, scroll entre outras.

## Evento de click

Eventos de click ocorre quando clicamos em algum elemento da pagina.

```Javascript:

    const btn = document.querySelector('.btn');
    const heading = document.querySelector('h1')



    //qual evento // o que vamos fazer (callback function)
    btn.addEventListener('click', () => {
      heading.classList.add('red')

    })


```

**Explicação:**

1º precisamos selecionar o elemento que vamos adicionar o evento, no caso acima, o botão.
2º em seguida passamos o parametro addEventListener para o elemento selecionado.
3º por padrão o evento recebem 2 parametros, primeiro o tipo de evento que vamos "ouvir" e em seguida o que queremos fazer quando o determinado evento for chamado **o segundo parametro é uma callback function**.
