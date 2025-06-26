## Entrada de dados com laços, propriedades e funções: para, comprimento, empurre()(for, length e push()) 

**variavel** *entrada* = **ler**("Digite o numero de elementos desejado:");<br>
**variavel** *tam* = **converteInteiro**(*entrada*);

>Inicializa-se um vetor vazio

**variavel** *vet* = [];

>Adição de elementos ao topo da pilha do vetor com **empurre**();

**para** (**variavel** *i* = 0; *i* < *tam*; *i*++)<br>
&emsp;&emsp;**variavel** *entrada* = **ler**("Digite um valor inteiro ((*i*+1)gésimo elemento do vetor):");<br>
&emsp;&emsp;**variavel** *elemento* = **converteInteiro**(*entrada*);<br>

>&emsp;&emsp;Adiciona um elemento ao topo da pilha do vetor

&emsp;&emsp;***vet*.push**(*elemento*);<br>
**fim-para**

>Impressao dos elementos do vetor

**para** (**variavel** *i* = 0; *i* < *tamanho*; *i*++)<br>
&emsp;&emsp;**console.escreva**('Valor do indice: *i* | Valor do elemento: *vet*[*i*]);<br>
**fim-para**