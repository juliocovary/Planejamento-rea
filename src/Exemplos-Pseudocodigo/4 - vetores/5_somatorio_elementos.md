## Somatório de elementos de um vetor

**variavel** *vet* = [1, 2, 3, 4, 5];<br>
**variavel** *tamanho* = *vet*.*comprimento*;<br>
**variavel** *soma* = 0;

>Soma elementos a atribui à variavel soma

**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;*soma* = *soma* + *vet*[*i*];<br>
**fim-para**

**console.escreva**("Resultado do somatorio: *soma*");