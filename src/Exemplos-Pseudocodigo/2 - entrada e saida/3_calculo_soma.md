## Soma valores da entrada de dados
**variavel** *x* = 0;<br>
**variavel** *y* = 0;

**variavel** *entrada1* = "";<br>
*entrada1* = **ler**("Digite um inteiro para x:");

>converte a entrada para um inteiro

*x* = **converterInteiro**(*entrada1*);

**variavel** *entrada2* = "";<br>
*entrada2* = **ler**("Digite um inteiro para y:");<br>
*y* = **converterInteiro**(*entrada2*);

>atribui o resultado da soma diretamente

**variavel** *soma* = x + y;

**console.escreva**("A soma de *valorx* com *valory* resulta em: *soma*");