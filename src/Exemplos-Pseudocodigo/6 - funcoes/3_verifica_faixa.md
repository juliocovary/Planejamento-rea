## **Função** que verifica SE (*num* > 0 && *num* < 100). Retornando um  valor *booleano*(verdadeiro ou falso)

**funcao** *verificaValor* (*num*)<br>
&emsp;&emsp;**se** (*num* > 0)<br>
&emsp;&emsp;&emsp;&emsp;**se**(*num* < 100)

>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SE o número for maior que 0 E menor que 100 **retorna** *verdadeiro* e finaliza a função

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;**retorne** *verdadeiro*;

&emsp;&emsp;&emsp;&emsp;**fim-se**<br>
&emsp;&emsp;**fim-se**

>&emsp;&emsp;**retorna** *falso* caso as condições não sejam atendidas e finaliza a função

&emsp;&emsp;**retorne** *falso*;

**fim-verificaValor**

>Passando um valor *inteiro* (64) como **parâmetro** **retorno**: *verdadeiro*)

**variavel** *x* = 64;

>A estrutura de seleção avalia SE o retorno da função *verificaValor* é *verdadeiro* ou *falso*

**se** ( *verificaValor*(*x*) )<br>
&emsp;&emsp;**console.escreva**("Valor x eh valido.*\n*");<br>
**fim-se**

**se não**<br>
&emsp;&emsp;**console.escreva**("Valor x eh invalido.*\n*");<br>
**fim-se não**

>Passando um valor *inteiro* (105) como **parâmetro**

**variavel** *y* = 105;

>A estrutura de seleção avalia SE o retorno da função *verificaValor* é *verdadeiro* ou *falso*

**se** ( *verificaValor*(*y*) )<br>
&emsp;&emsp;**console.escreva**("Valor y eh valido.*\n*");
**fim-se**

**se não**
&emsp;&emsp;**console.escreva**("Valor y eh invalido.*\n*");
**fim-se não**