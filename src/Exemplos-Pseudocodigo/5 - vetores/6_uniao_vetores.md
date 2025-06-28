## União de vetores com empurre() (push)

**variavel** *vetor1* = [1, 3, 5, 2];<br>
**variavel** *vetor2* = [2, 4, 6, 5];

**variavel** *tamanho* = *vetor2*.*comprimento*;

>Itera sobre o *vetor1*

**console.escreva**("...... Vetor 1 ......");<br>
**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**("Indice: *i* | Valor: *vetor1*[*i*]");<br>
**fim-para**

>Itera sobre o *vetor2*

**console.escreva**("\n...... Vetor 2 ......");<br>
**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**("Indice: *i* | Valor: *vetor2*[*i*]");<br>
**fim-para**

>Adiciona os elementos de *vetor2* ao *vetor1*

**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;***vetor1*.empurre**(*vetor2*[*i*]);<br>
**fim-para**

>Atualiza o tamanho do *vetor1* para o novo tamanho

*tamanho* = *vetor1*.*comprimento*;

>Impressao do *vetor1* após a união

**console.escreva**("*\n*.Vetor 1 (apos uniao)");<br>
**para**(**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**("Indice: *i* | Valor: *vetor1*[*i*]");<br>
**fim-para**