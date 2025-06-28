## Somatório com função recursiva

**funcao** *somatorio*(*num*)<br>
&emsp;&emsp;**se** (*num* == 1)<br>
&emsp;&emsp;&emsp;&emsp;**retorne** 1;<br>
&emsp;&emsp;**fim-se**

>&emsp;&emsp;A função chama a si mesma

&emsp;&emsp;**variavel** *soma* = *num* + *somatorio*(*num*-1);<br>

&emsp;&emsp;**retorne** *soma*;<br>
**fim-somatorio**

> Chamada da função

**console.escreva**(*somatorio*(6));