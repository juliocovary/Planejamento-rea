## Calculadora simples com estrutura de seleção multipla: opção (Switch-Case)

**variavel** *entrada1* = **ler**("Digite um valor para X:");<br>
**variavel** *entrada2* = **ler**("Digite um valor para Y:");

**variavel** *x* = **converterInteiro**(*entrada1*);<br>
**variavel** *y* = **converterInteiro**(*entrada2*);

>Imprime um menu de opcoes

**console.escreva**("Selecione um operador:");<br>
**console.escreva**("1. +       2. -");<br>
**console.escreva**("3. *       4. /");<br>
**console.escreva**("5. %");

>Solicita a selecao de uma **opcao**

**variavel** *op* = **ler**("Operador:");

>Verifica qual a **opcao** escolhida

**inicio-opção** (*op*)

>&emsp;&emsp;**CASO** a opcao seja "1" executa o bloco de codigo:

&emsp;&emsp;**caso** "1":<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *soma* = *x* + *y*;<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**(*soma*);<br>
&emsp;&emsp;&emsp;&emsp;**sair**;

&emsp;&emsp;**fim-caso**

>&emsp;&emsp;**CASO** a opcao seja "2" executa o bloco de codigo:

&emsp;&emsp;**caso** "2":<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *sub* = *x* - *y*;<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**(*sub*);<br>
&emsp;&emsp;&emsp;&emsp;**sair**;

&emsp;&emsp;**fim-caso**

>&emsp;&emsp;**CASO** a opcao seja "3" executa o bloco de codigo:

&emsp;&emsp;**caso** "3":<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *multi* = *x* * *y*;<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**(*multi*);<br>
&emsp;&emsp;&emsp;&emsp;**sair**;

&emsp;&emsp;**fim-caso**

>&emsp;&emsp;**CASO** a opcao seja "4" executa o bloco de codigo:

&emsp;&emsp;**caso** "4":<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *div* = *x* / *y*;<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**(*div*);<br>
&emsp;&emsp;&emsp;&emsp;**sair**;

&emsp;&emsp;**fim-caso**

>&emsp;&emsp;**CASO** a opcao seja "5" executa o bloco de codigo:

&emsp;&emsp;**caso** "5":<br>
&emsp;&emsp;&emsp;&emsp;**variavel** *resto* = *x* % *y*;<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**(*resto*);<br>
&emsp;&emsp;&emsp;&emsp;**sair**;

&emsp;&emsp;**fim-caso**

>Se nenhum **CASO** for satisfeito, executa o bloco de codigo **padrão**:

&emsp;&emsp;**padrão:**<br>
&emsp;&emsp;&emsp;&emsp;**console.escreva**("Entrada invalida");<br>
&emsp;&emsp;&emsp;&emsp;**sair;**

&emsp;&emsp;**fim-padrão**

**fim-opção**