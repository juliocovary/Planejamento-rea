## Imprimindo um vetor utilizando laços e propriedades: para e comprimento(for e length)

**variavel** *vet* = [1, 2, 3, 4, 5];

>A propriedade *comprimento* de *vet* contém o numero total de elementos no vetor (5).<br>
Acessamos seu valor a partir de um ponto, seguido pelo nome(chave) da propriedade

**let** *tamanho* = *vet*.*comprimento*;<br>
**console.escreva**("Tamanho do vetor: *tamanho*");

>Iterando e imprimindo o vetor com laço **para**

**para** (variavel *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**("Valor do indice: *i* | Valor do elemento: *vet*[*i*]");<br>
**fim-para**