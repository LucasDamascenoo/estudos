# css-only

# O que é o css?

Css é a estilização de uma pagina css, ou seja! ele atua sobre o HTML dando vida em "simples" tags com cores, tamanho e deixando ela dinamica.

# Css básico

Como incluir css em nossas paginas HTML?

Temos 3 formas de adicionar css em nossas paginas HTML.

- inline
- interno (dentro da tag style)
- externo (importando)

Qual devemos usar?

Para termos uma usabilidade melhor e para poder reaproveitar os códigos usamos o externo.

<b>style.css</b>

# Seletores

Seletores são a forma como selecionamos os elementos do html para modificar.

- Seletores de Tipo: onde marcamos diretamente as tags que queremos selecionar, exemplo p para selecionar todo <p>.

- Pseudo-elementos: como o nome sugere, eles não são elementos em si, mas servem para selecionar parte do html relativo a outro seletor. Por exemplo, p::first-letter.

- Seletores de Classe: um dos que mais utilizamos, podemos atribuir classes para diferentes elementos e então selecionar essas classes. Exemplo: <p class="text"> pode ser selecionado com .text.

- Seletores de atributo: selecionamos elementos com um tipo específico de atributo. Por exemplo, input[type='number']. Aqui estamos selecionando todos os inputs que tiverem type=number como atributo.
- Pseudo-classes: selecionamos elementos baseados em seus estados CSS. Por exemplo :hover, :active, :checked e outros.

- Seletores de Id: selecionamos um elemento pela sua Id única. Só pode existir um único elemento para cada id. Exemplo: <h1 id="header"> seria selecionado com #header.

- Estilos inline: são estilos aplicados diretamente ao elemento, através do atributo style. Por exemplo, <h1 style="font-size: 16px">

## especificidade

Os pesos de cada seletor

- Peso mais baixo: seletores de tipo e pseudo-elementos
- Peso baixo: classe, atributo e pseudo-classes
- Peso médio: seletores de id
- Peso alto: estilos inline

1. Se estilos de diferentes pesos são aplicados a um mesmo elemento, o estilo que tiver o maior peso será o aplicado. Se os estilos tiverem o mesmo peso, os estilos que vierem mais abaixo, serão os aplicados. Isso é devido ao "efeito cascata" que dá exatamente o nome do CSS (Cascading Style Sheets).

```css:
// <h1 class="foo bar">

.foo {
  color: green;
}

.bar {
  color: red; // essa será a cor aplicada
}
```

2. Quando dois seletores de mesmo peso são aplicados a um elemento, é contado como 2x o peso. Por exemplo, elementos com duas classes aplicadas terão um peso maior do que um elemento com só uma classe.

```css:
.foo.bar {
  color: blue; // essa será a cor aplicada
}

.bar {
  color: red;
}
```

3. Estilos de peso maior sempre irão prevalecer, não importa quantos elementos você colocar.

Exemplo com id:

```css:

#footer {
background: red; // essa será a cor aplicada
}

div.class1.class2.class3.class4 {
background: blue;
}

```

# Combinando seletores

No css podemos combinar multiplos seletores para que ele fique mais especifico e modifique apenas aquela seleção.

1. irmão adjacentes

- São irmãos proximos (um abaixo do outro) que compartilham o mesmo pai.
- Apenas o segundo elemento (após o sinal de +) será modificado

h2 + p {

}

![exemplo-irmaos-adjacentes](./img/Captura%20de%20tela%20de%202022-11-20%2010-57-38.png)

2. Irmão geral

- Modifica o irmão mesmo que tenha outros elementos proximos
- Apenas o segundo elemento (após o sinal de +) será modificado

h2 ~ p {

}

![exemplo-irmaos-geral](./img/Captura%20de%20tela%20de%202022-11-20%2011-04-40.png)

3. Filho

- Modifica o segundo elemento somente se for um filho direto (que está dentro do pai)

div > p {

}

![exemplo-filho-direto](./img/Captura%20de%20tela%20de%202022-11-20%2011-08-52.png)

4. Decendentes

- Modifica o segundo elemento mesmo que não não seja um filho direto

div p {

}

![exemplo-filho-direto](./img/Captura%20de%20tela%20de%202022-11-20%2011-12-46.png)

# Propriedades e Valores CSS

No css temos propriedades que alteram de alguma forma a estilização dos nossos sites.

Exemplos:

- color
- margin
- display

Todas essas propriedades são especificas do css e que recebem um determinado valor, alterando as caracteristicas quando aplicadas.

Já os valores complementam as propriedades de forma especifica.

- red
- 10px
- block

# Box-Model

Tudo que escrevemos no HTML são "caixas" e vamos aprender como modificar a altura, largura e como essas caixas se comportam quando alteradas pelo css.

Nossas "caixas" são compostas pelas seguintes caracteristicas.

- Content (conteudo)
  Content é o conteudo que incluimos dentro de alguma tag, seja um texto , uma imagem ou um audio por exemplo.

- Padding
  Padding é o espaçamento interno entre a conteudo e a borda

- Border
  Borda como o nome já diz é a borda que envolve o conteudo, toda caixa tem borda, mas só vemos se atribuirmos valores para ela.

- Margin
  Já a Margin é a distancia entre uma caixa e outra.

<b>As propriedades Padding e Borda ao serem atribuidas, aumentam o tamanho da caixa</b>

Como arrumamos isso?

No css temos uma propriedade que ajusta o tamanho da caixa para que a largura + altura + padding + borda tenha o tamanho setado para aquela caixa.

```css:

#body {
box-sizing: border-box;
}

```

# Displays

Essa propriedade modifica o direcionamento dos elementos HTML, no css temos elementos inlines e block.

- Display Inline

Transforma os elementos em inline ou seja um do lado do outro e a largura do seu elemento é determinada pelo tamanho do conteudo.

Obs: Propriedades inline não aceita modificação de altura/largura do elemento e só aceita alteração de margin/padding para os lados (direita e esquerda).

- Display block

Transforma os elementos em block, ocupam a largura total e joga os outros elementos para baixo.

Obs: Aceita altura e largura

- Display inline-block

Une os dos display anterior, mantem os elementos um ao lado do outro mas agora aceitando as caracteristicas de block, onde podemos setar altura e largura.

# Flex-box

O que é?

Flexbox é um metodo que nos ajuda organizar elementos em uma unica direção (horizontal ou vertical), controlar suas dimensões, alinhamentos, ordem de aparecimento e muito mais, para isso precisamos ao menos de 2 elementos, um pai chamando **_flex container_** e por ultimo o filho chamado **_flex item_**.

**_obs:_** Apenas os filhos diretos do container são afetados. Filhos dos flex-itens não são afetados.

## Terminologia

Quando usamos flex transformamos esses elementos de algumas formas.

- Flex-container

A partir do momento que usamos o flex-box o elemento principal vira um Flex-container (pai dos demais itens)

- Flex-items

São os filhos diretos do flex-container, os flex itens são bases em flex-diretions (linhas e colunas) que são nomeados como : main axis (eixo-principal : horizontal) e temos o cross axis (eixo-secundario: vertical).

![terminologia-flexbox](/anota%C3%A7%C3%B5es/imagens/terminologia-flex.png).

## Grid substitui o Flex-box?

A resposta é NÃO, cada um dessas funcionalinadides fazer umn layout diferente do outro.

- 1: Grid faz coisas que com o flex não é possivel
- 2: Flexbox faz coisas que com o grid não é possivel
- 3: Podem (e devem) ser usadas juntas!

O que podemos fazer com grid e com Flex não?

**Flexbox**

- Flexbox é unidimensional (coluna ou linha).
- O contéudo que dita o compartamento.
- Distribuição dos espaços via conteudo
- Melhor para movimentação de elementos UI.

**Grid**

- Grid é bidimensional (coluna e linha)
- A definição do Grid que dita o layout
- O espaço é determinado (porções)
- Uso para Layouts Mais completos
- Requer menos media queries

- Display:flex

Seta que a elementos aplicada podera receber as caracteristicas do flexbox.

## Flex-direction

Flex direction nos permite mudar a direção dos itens conforme o eixo.

- row

Por padrão ao setarmos flex já trabalhamos com no main axis (horinzontal) que por trás do panos é o row.

```css:

.container {
display:flex;
flex-diretion:row;
flex-diretion:row-reverse;

}

```

- Column

Ao utilizarmos o colummns mudamos o eixo que iremos trabalhar (cross axis) e passamos a dispor os elementos como colunas (um embaixo do outro) como já estamos acostumados trabalhando com elementos blocks.

```css:

.container {
display:flex;
flex-diretion:column;
flex-diretion:column-reverse;

}

```

![flex-direction](/anota%C3%A7%C3%B5es/imagens/flex-direction.svg)

## O que acontece quando o espaço dos itens for maior que o container?

Utilizando flex temos uma propriedade que nos permite controle em situações como a da pergunta.

- Flex-wrap

Flex wrap (quebra) a linha quando os itens começa a ultrapassar a largura do container(pai)

```css:

.container {
display:flex;
flex-wrap:wrap;
flex-wrap:wrap-reverse;
flex-wrap:nowrap;
}

```

**_obs:_** Por padrão essa propriedade é nowrap, ou seja, vai permitir o overflow (quando os elementos passam da largura definida/padrão, gerando um scroll lateral).

- flex-flow

Flex-direction e flex-wrap quando estamos falando em manipulação do flexcontainer são as mais importantes, por isso elas tem uma forma abreviada, onde podemos manipular tanto a direção quanto o wrap em uma unica linha.

```css:
.container {
display:flex;
flex-flow:row wrap
/* primeiro definimos a direção e em seguida o wrap */
}
```

![flex-wrap](/anota%C3%A7%C3%B5es/imagens/flex-wrap.svg)

# Alinhamento com Flexbox

Flexbox é uma maneira poderosa de alinhar nossos elementos na tela, com isso temos algumas formas de fazer isso.

- Justify-content

Alinha os alementos no main axis (horizontal) quando estamos usando row como flex-diretion.

![justify-content](/anota%C3%A7%C3%B5es/imagens/justify-content.png)

- Align Itens

Alinha os elementos no cross axis (vertical) quando estamos usando column como flex-diretion.

![justify-content](/anota%C3%A7%C3%B5es/imagens/align-items.svg)

- Align-content

Usamos mais quando nosso layout tem mais de uma linha.

![align-content](/anota%C3%A7%C3%B5es/imagens/align-content.svg)

- Order

Com a propriedade orderm, conseguimos mudar a ordem do item(filho).

![order](/anota%C3%A7%C3%B5es/imagens/order.svg)

- Align-self

Com o align-self conseguimos mudar o posicionamento invidual de cada filho.

![align-self](/anota%C3%A7%C3%B5es/imagens/align-self.svg)

- Flex-grow

Com o flex-grow podemos distruibuir o espaço que sobrou do container para os demais itens.

Por padrão a propriedade é 0 (não tem a distribuição) ao incluirmos flex:1, ele divide igualmente o espaço que sobrou para todos os itens.

Podemos usar essa propriedade para criar colunas iguais, mesmo com conteudos diferentes.

![flex-grow](/anota%C3%A7%C3%B5es/imagens/flex-grow.svg)

- Flex-shrink

É a capacidade dos itens diminuirem quando não tem espaço disponivel.

O valor padrão do Shrink é 1 (já diminui/adapta por padrão).

Se nosso container tiver 400px e nada item tiver 150px (4x150 = 600px), com o shrink 1, os itens vão se adpatar dentro do container e não vai haver o overflow.

- Flex-basics

  Define o tamanho inicial de um flex-itens .
  É a melhor maneira de definir largura e altura para um flex-item.

  Por padrão o basics é auto, ou seja, o tamanho é definido pelo conteudo.

- Flex

Esta é a propriedade shorthand para flex-grow, flex-shrink e flex-basis, combinadas. O segundo e terceiro parâmetros (flex-shrink e flex-basis) são opcionais.

Por padrão o flex é definido da seguinte forma: 0 1 auto (0 para grow 1 para shrink e auto para basics).

## Content e Items

As propriedades que aprendemos acima,modificam o content (pai) e os items(items) abaixo segue as propriedades "exclusivas" para o content e para os items.

**_content_**

- Justify-content (main axis)
- Flex-direction
- Flex-Wrap
- Flex-flow (flex-direction e flex-wrap)
- Align-Items (cross axis)
- Gap (espaçamento entre os items)

**_Items_**

- flex-basics
- flex-grow
- flex-shrink
- flex (grow shrink basics)
- order

# Unidades de medidas

unidades de medidas no css, é como setamos tamanhos, seja de font, de altura, largura e essas medidas ajudam ou atrapalham na hora de deixa um site responsivo e vamos conhecer seus tipos e unidades.

- Unidades Absolutas

Unidades absolutas são unidades que ao serem setadas elas não se adaptam ou mudam pois são fixas, a mais usada e que precisamos saber é o pixel (não representa o pixel exato de uma tela).

**px**

- Unidades em porcetagem

Unidades de medidas em % são referente ao pai(comum usarmos para definirmos a larguras das coisas)

**50%**

- Unidade relativas

Temos dois tipos de unidades relativas, relativa ao font-size e ao view port (tela).

**em**
**rem**
**vh**
**vw**

## em e rem

Ambas são unidades de medidas relativas ao font-size.

- em

é uma unidade relacionado ao elemento pai, uma vez mudada o em começa a valer a unidade relacionado ao pai.

- rem

é uma uniade relacionado ao root (por padrão 16px), se mudarmos esse valor o rem será o tamanho definido no root.

## min e max-widght

max e min-width define o "limite" que um determinado elemento vai crescer ou diminuir.

- max

Se a largura for de 0 até 350px por exemplo a regra aplicada sera definida.

- min

Enquanto a largura definida for maior maior o conteudo cresce, ao chegar no determinada para.

## Qual unidade de medida usar?

- font-size : rem
- padding e margins : rem
- width : em ou %

# Pensando responsividamente

## Media Queries

Podemos dizer que Media Queries são o IF do JavaScript, enquanto a condição aplicada for verdadeira o estilo será aplicado.

```css:
@media (max-width: 350px) {
  .small-only {
    color: red;
  }
}
```

## max-width e min-width

São propriedades usada para determinar a regra para telas maiores (min-width) ou para telas menores (max-width).

## Arquitetura Css

# Padrão BEM

BEM é uma convenção de nomes na estilização de CSS, que usa como regra, bloco,elemento e modificador(BEM).

- bloco

Os blocos no padrão BEM é a estrutura da nossa aplicação, como por exemplo:

header , menu , container

- .menu
- .container

<hr>

- elementos
  Já os elementos são os "filhos" desses blocos,omo por exemplo:

- .menu\_\_item
- .menu\_\_link

imagem, lista, titulo.

<hr>

- modificador

é uma variação do elemento, ou seja caso eu tenha uma estilização espefifica de um link comparado aos demais.

verificar a necessidade de ter um modificador caso seja algo simples/unico

- menu--dark
- menu\_\_link--dark

<hr>
## :bulb: dicas

```html:

<article class="card">
  <div class="card__header">
    <h1 class="card__header__titulo"></h1>
    </div>

</article>

```

não precisa ser um padrão tão verboso, caso o elemento não seja filho diretamente , podemos aplicar somente o bloco inicial e especificar o elemento.

```html:

<article class="card">
  <div class="card">
    <h1 class="card__titulo"></h1>
    </div>

</article>

```
