# algoritimos-logicaDeProgramacao

repositório criado para desenvolvimento de atividades da matéria de Algoritmos .

# JavaScript

# Dados Primitivos

Dados primitivos são os tipo básico de cada linguagem, no Js temos os seguintes:

- Strings
- Numbers
- Boolean
- Undefined
- Null
- BigInt

# Declaração de váriavel

Podemos declarar váriaveis atualmente (boas praticas) de duas formas.

- const

Uma váriavel constante, significa que não pode ser mudada ou seja, uma vez declarada o valor, vai continuar o mesmo valor.
Diferente da outra maneira,const sempre precisa ser inicializada , caso contrario teremos um erro.

- let

declaramos váriaveis com let tudo aquilo que possa muda, é possivel fazer sua redeclaração de valor e não precisa de um valor atribuido em um primeiro momento (undefined).

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

# Tipos de Operadores

- atribuição
- comparação
- aritméticos
- logicos
- condicional

# Operadores condicionais

No js temos os operadores condicionais if e else;

if(idade > 18) {
se a condição (idade > 18) for verdadeira, executa algo
} else {
caso a condição seja falsa,executa outra ação.

}

variaveis criadas dentro de um bloco de codigo não pode ser acessada de fora dele.

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
