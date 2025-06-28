## Vetores bidimensionais

>Define um vetor bidimensional/matriz (vetor de vetores)

**variavel** *mat* = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];<br>
**variavel** *tamanho* = *mat*.*comprimento*;

>Imprimindo cada linha da matriz

**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**(*mat*[*i*]);<br>
**fim-para**
**console.escreva**('*\n*');

>Percorrendo as "linhas"(*i*) e "colunas"(*j*) do vetor e imprimindo todos os seus elementos individualmente

**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**para** (**variavel** *j* = 0; *j* < *mat*[*i*].*comprimento*; *j*++)

>&emsp;&emsp;&emsp;&emsp;Acessa o elemento através dos indices de linhas(*i*) e colunas(*j*)

&emsp;&emsp;&emsp;&emsp;**console.escreva**("Indice: lin = *i*; col = *j* | Valor: *mat*[*i*][*j*]");<br>
&emsp;&emsp;**fim-para**<br>
**fim-para**