## Função que retorna a média do vetor fornecido

> Entrada de dados do vetor

**funcao** *entraVetor* ()<br>
&emsp;&emsp;**variavel** *entrada* = **ler**("Digite o numero de elementos desejado:");<br>
&emsp;&emsp;**variavel** *num* = **converteInteiro**(*entrada*);<br>
&emsp;&emsp;**variavel** *vet* = [];

&emsp;&emsp;**para** (**variavel** *i* = 0; *i* < *num*; *i*++)<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *entrada* = **ler**("Digite um valor inteiro (i+1)o elemento do vetor):");<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *elemento* = **converteInteiro**(*entrada*);<br>
&emsp;&emsp;&emsp;&emsp;***vet*.empurre**(*elemento*);<br>
&emsp;&emsp;**fim-para**

&emsp;&emsp;**retorne** *vet*;<br>
**fim-entraVetor**

>Calcula a média de um vetor e retorna o resultado

**funcao** *media* (*vet*)<br>
&emsp;&emsp;**variavel** *media* = 0;
    
&emsp;&emsp;**variavel** *tam* = *vet*.*length*;<br>
&emsp;&emsp;**para** (**variavel** *i* = 0; *i* < *tam*; *i*++)<br>
&emsp;&emsp;&emsp;&emsp;*media* = *media* + *vet*[*i*];<br>
&emsp;&emsp;**fim-para**

&emsp;&emsp;*media* = *media* / *tam*;<br>
&emsp;&emsp;**retorne** *media*;<br>
**fim-media**

>Chamada de funções

**variavel** *vet* = [];<br>
*vet* = *entraVetor*();

**variavel** *m* = 0;<br>
*m* = *media*(*vet*);

**console.escreva**(*m*);