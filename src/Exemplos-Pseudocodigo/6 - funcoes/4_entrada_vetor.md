## Função para entrada de dados de vetor. Retorna um vetor preenchido
**função** *entraVetor* ()

>&emsp;&emsp;Requisita o número de elementos do vetor

&emsp;&emsp;**variavel** *entrada* = **ler**("Digite o numero de elementos desejado:");<br>
&emsp;&emsp;**variavel** *num* = **converteInteiro**(*entrada*);

>&emsp;&emsp;Realiza a entrada de dados

&emsp;&emsp;**variavel** *vet* = [];<br>
&emsp;&emsp;**para** (**variavel** *i* = 0; *i* < *num*; *i*++)<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *entrada* = **ler**("Digite um valor inteiro (i+1)o elemento do vetor):");<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *elemento* = **converteInteiro**(*entrada*);<br>
&emsp;&emsp;&emsp;&emsp;***vet*.empurre**(*elemento*);<br>
&emsp;&emsp;**fim-para**

>&emsp;&emsp;Retorna o vetor preenchido e finaliza a função

&emsp;&emsp;**retorne** *vet*;<br>
**fim-entraVetor**

**variavel** *vet* = [];

>Chama a função e atribui o retorno à variável vet

*vet* = *entraVetor*();

*tam* = *vet*.*length*;<br>
**para** (**variavel** *i* = 0; *i* < *tam*; *i*++)<br>
&emsp;&emsp;**console.escreva**("Indice: *i* | Valor: *vet*[*i*]");<br>
**fim-para**
