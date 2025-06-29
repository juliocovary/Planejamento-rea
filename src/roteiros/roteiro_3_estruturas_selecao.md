# Roteiro para apresentação: Tema 3 - "Estruturas de Seleção"

Olá! Hoje vamos aprender sobre estruturas de seleção, que são formas de o computador tomar decisões no código.

1. O que é uma estrutura de seleção?  
   Imagine que o computador precisa escolher entre diferentes caminhos, dependendo de uma condição. É como uma bifurcação na estrada!

2. if - a decisão simples  
   A estrutura **if** verifica se uma condição é verdadeira. Se for, executa um bloco de código. Por exemplo, se a sua idade for maior ou igual a 18, o computador pode dizer que você pode tirar habilitação.

Aqui está um exemplo simples mostrando como usar if, else if e else para tomar decisões múltiplas:

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("Parabéns! Você tirou A.");
} else if (nota >= 70) {
  console.log("Você tirou B.");
} else {
  console.log("Você precisa estudar mais.");
}
```

```javascript
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
  console.log("Parabéns! Você pode possuir uma habilitação!");
}
console.log("Sua idade é: " + idade);
```

3. switch - várias opções  
   O **switch** é usado quando temos várias opções para escolher. Por exemplo, uma calculadora que faz soma, subtração, multiplicação e divisão, dependendo do operador escolhido.

```javascript
let operador = "*";
let operandox = 5;
let operandoy = 2;
let res = 0;

switch (operador) {
  case "+":
    res = operandox + operandoy;
    break;
  case "-":
    res = operandox - operandoy;
    break;
  case "*":
    res = operandox * operandoy;
    break;
  case "/":
    res = operandox / operandoy;
    break;
  default:
    console.log("Operador inexistente.");
    res = 0;
}

console.log("O resultado é: " + res);
```

3.1 Exemplo simples de if/else if/else  
Aqui está um exemplo simples mostrando como usar if, else if e else para tomar decisões múltiplas:

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("Parabéns! Você tirou A.");
} else if (nota >= 70) {
  console.log("Você tirou B.");
} else {
  console.log("Você precisa estudar mais.");
}
```

4. Por que usar estruturas de seleção?  
   Elas permitem que o programa tome decisões e execute diferentes ações dependendo das situações.

5. Recapitulando

- if: executa código se a condição for verdadeira.
- switch: escolhe entre várias opções.

E aí, gostou? Agora você sabe como fazer o computador tomar decisões!

Obrigado por assistir e até a próxima!
