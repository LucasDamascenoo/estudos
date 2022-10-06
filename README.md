# algoritimos-logicaDeProgramacao

repositório criado para desenvolvimento de atividades da matéria de Algoritmos .

# JavaScript

## Dados Primitivos

Dados primitivos são os tipo básico de cada linguagem, no Js temos os seguintes:

- Strings
- Numbers
- Boolean
- Undefined
- Null
- BigInt

## Declaração de váriavel

Podemos declarar váriaveis atualmente (boas praticas) de duas formas.

- const

Uma váriavel constante, significa que não pode ser mudada ou seja, uma vez declarada o valor, vai continuar o mesmo valor.
Diferente da outra maneira,const sempre precisa ser inicializada , caso contrario teremos um erro.

- let

declaramos váriaveis com let tudo aquilo que possa muda, é possivel fazer sua redeclaração de valor e não precisa de um valor atribuido em um primeiro momento (undefined).

## Tipos de Operadores

- atribuição
- comparação
- aritméticos
- logicos
- condicional

## operadores condicionais

No js temos os operadores condicionais if e else;

if(idade > 18) {
se a condição (idade > 18) for verdadeira, executa algo
} else {
caso a condição seja falsa,executa outra ação.
}

variaveis criadas dentro de um bloco de codigo não pode ser acessada de fora dele.

## conversao de tipos

Podemos converter strings em numeros e boolean, numeros em strings e boolean e boolean em string e numeros.

No js tambem ocorre a <b>coesão de dados</b>, que é "nativa" do js, que ele automaticamente converte um tipo de dado de acordo com a determinada operação que estamos fazendo.

```javascript:
let teste = "10" - "10" - "10";
console.log(teste, typeof teste);
```

No caso acima, escrevemos a variavel teste como string e estamos fazendo uma conta entre elas, o resultado é -10 e seu tipo foi "auto" convertido para number.

## verdadeiro e falso

True ou false é um tipo de dado, assim como string e numbers podemos fazer a conversao de de um determinado valor para verdadeiro ou falso (o que não é muito usado), mas é bom sabermos, que alguns valores sempre serão falso.

- 0
- ''
- undefined
- NaN

Ou seja se usarmos um valor zero em uma condicional, ela cairia no bloco do else, pois 0 == false.

# operadores de igualdade

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
