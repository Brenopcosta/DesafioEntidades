# Solução do desafio
A solução consiste em uma função principal (factSchema()) que chama outras duas funções complementares.

## RetornaTodosOsFatosDoTipoOne(facts,entidade)
Função que recebe a lista de fatos e uma entidade, que será usada para checar qual fato será adicionado na lista a ser retornada. 
É criado um array vazio que guarda arrays de nomes e entidades que foram checados. A função percorre a lista de fatos de trás para frente, se o fato em questão não estiver na lista de fatos checados, possuir a entidade que esta sendo tratada e possuir o valor true, o nome e a entidade serão adicionados ao array de fatos checados e o fato é adicionado a lista de retorno da função. 
A função retorna uma lista com fatos atuais do tipo 'one' de uma dada entidade.

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## RetornaTodosOsFatosDoTipoMany(facts,entidade)
Função recebe a lista de fatos e uma entidade, que também será usada para checar qual fato será adicionado na lista a ser retornada. Novamente o array de fatos é percorrido de trás para frente e caso o fato em questão possua a entidade que se está procurando e possua o valor true, este é adicionado a lista de retorno da função. A função retorna uma lista com fatos do tipo 'many' de uma entidade dada que possuam valor true.

## ElementoEstaNoArray(elemento,arrayz)

Função responsável por checar se um fato se encontra em um array. Só são checados os dois primeiro itens do fato.

## FactSchema ( facts , schema) 
 Função principal do projeto. Cria um array de retorno da função vazio e percorre a lista de schemas. Se o schema possuir valor 'one', é chamada a função retornaTodosOsFatosDoTipoOne() passando como parâmetros o array de fatos e a entidade referente a posição do iterador. O retorno é adicionado ao array de retorno da função. Se o item do schema possuir qualquer valor diferente de 'one', é chamada a função etornaTodosOsFatosDoTipoMany() passando como parâmetros o array de fatos e a entidade referente a posição do iterador. O retorno é adicionado no array de retorno da função. Após percorrer o array schema, retorna o array que foi populado pelas funções
