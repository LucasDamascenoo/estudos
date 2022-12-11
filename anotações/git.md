# Git e Github

No mundo do desenvolvimento precisamos de maneiras para "monitar" nosso código, maneiras de salvar nossos progressos e caso der errado voltar uma passo atrás e como fazemos isso? graças aos "Deus"( Linus) da tecnlogia temos uma ferramenta chamada git que é sistema de controle de versões, que nos permite fazer tudo que citamos acima e muito mais.

## Diferença entre Git e Github

- Git é uma ferramenta local(em nosso computador) que faz o controle de versionamento das nossa aplicações, faz o controle dos nossos repositorios.

- GitHUb

É uma host (cloud) de repositorios que criamos via git, ou seja atraves do github nossos projetos podem ficar disponiveis para outras pessoas e para que possamos ter um "backup".

Antes de nos aprofundarmos em git e github, precisamos entender alguns conceitos de cli(comand line interface) que nos ajuda a ser mais praticos e rapidos seja usando o git quanto em outras tarefas.

**_CLI (LINUX)_**

- PWD

Usamos PWD para saber as informações de qual pasta estamos, e o usuario.

- ls (list itens)

Mostra as pastas que temos em um certo local.

- cd (Change direction)

muda a pasta local para alguma que selecionarmos. cd dev (entra na pasta dev).

- ~

Ao usarmos o ~ vamos para nossa diretorio (home).

- cd ..

Cd .. volta uma nivel. (se tivermos em um pasta dentro de home / pasta) ao usarmos cd.. sair de pasta < e volta para home.

- mkdir

Quer criar uma pasta? podemos usarmo o mkdir (make direction). mkdir estudos

- touch

Como criar um arquivo na pasta que acabamos de criar? com o comando touch podemos criar um arquivo com qualquer extenção que preferirmos. touch index.html

- rm

Podemos deletar arquivos criados ou que estão em alguma pasta usando o comando rm nome do arquivo (rm index.html)

- rmdir

Tambem podemos excluir pastas (não pode estar dentro da pasta que queremos deletar) com o comando rmdir arquivos

# Git

Agora que aprendemos a diferença entre git e gihub, alguns comando básicos de Linux, vamos nos aprofundar em git.

Quando estamos trabalhando em algum projetos temos 2 cénarios.

- Diretorio de trabalho

É onde todos nosso arquivos, pastas estão para que o desenvolvimento sejá possivel.

- Repositorio

Quando utilizamos git passamos a "trackrear" as mudanças do diretorio de trabalho em que estamos trabalhando.

## Comando Git

- git init = inicia o rastramento dos nosso arquivos / pasta

- git status - mostra o status do nosso projeto atual (se tem algo que ainda não foi rastreado, se tem algo que foi modificado e ainda não foi adicionado)

- git add - git add transformar um arquivo que não estava trackeado e "joga" para uma área que habilita o commit daquele certo arquivo.Podemos add de duas formas:

- git add + nome do arquivo,
- git add . (adiciona tudo que está sem rastreio ou modificado)

- git branch

Verifica em qual ramificação estamos (main/master)

- git branch -m teste

Com o comando acima podemos renomear uma branch

- git chechout -b

com o git chechout podemos criar uma nova branch

Como um desenvolvedor iremos trabalhar em um projeto com diversas pessoas, por isso criamos branchs para que cada desenvolvedor faça uma parte do código e no fim do dia/semana una todas as modificações em um unico local/branch, mas como podemos fazer isso?

- Merge

Uni todas as mudanças de diferentas branchs.

![git-stages](/anota%C3%A7%C3%B5es/imagens/git%20status.png)
