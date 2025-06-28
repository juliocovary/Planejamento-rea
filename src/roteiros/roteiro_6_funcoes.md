# Roteiro para apresentação: Tema 6 - "Funções"

Olá! Hoje vamos aprender sobre funções, que são blocos de código que podemos chamar para executar tarefas específicas.

1. O que é uma função?  
   Uma função é como uma receita que diz ao computador o que fazer. Podemos definir uma função e depois chamá-la quando quisermos.

2. Definindo e chamando uma função  
   Veja um exemplo simples que imprime "Hello World":

```javascript
function impMessage() {
  console.log("Hello World");
}

impMessage();
```

3. Funções com parâmetros e retorno  
   Funções podem receber informações (parâmetros) e devolver resultados (return). Por exemplo, uma função que verifica se um número é par ou ímpar:

```javascript
function ehPar(numParam) {
  let resultado;
  if (numParam % 2 == 0) {
    resultado = "par";
  } else {
    resultado = "impar";
  }
  return resultado;
}

let num = 5;
let result = ehPar(num);
console.log("O valor", num, "é", result);
```

4. Por que usar funções?  
   Elas ajudam a organizar o código, evitar repetições e facilitar a manutenção.

5. Recapitulando

- Função: bloco de código reutilizável.
- Parâmetros: informações que a função recebe.
- Return: valor que a função devolve.

E aí, gostou? Agora você sabe como criar e usar funções no seu código!

Obrigado por assistir e até a próxima!
