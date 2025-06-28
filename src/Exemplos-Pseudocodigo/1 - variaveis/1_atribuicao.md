## Atribuição de variáveis

>Utilizamos o operador '=' para realizar atribuições e inicializar variáveis

### Declarando e inicializando uma variável com 0:

>Para se declarar uma variável utilizamos uma palavra-chave (var, let ou const)
seguido pelo nome da *variável*.<br>É recomendado que se faça a inicialização da variável logo após sua declaração, assim como no exemplo a seguir:

**variavel** *nome*;

**variavel** *numero* = 0;

>Podemos reatribuir um valor à variável com o operador de atribuição '**=**'

*numero* = 60;

### Constantes

>Podemos declarar uma variável utilizando a palavra-chave de constante(const). Constantes contém valores imutáveis, ou seja,<br> não podem ser alterados, então, ao tentar reatribuir uma variável declarada como uma constante seremos alertados com um erro.

**constante** *nome*;

**constante** *numero* = 3.14;<br>

*numero* = 30; <-- Incorreto, causaria erro
