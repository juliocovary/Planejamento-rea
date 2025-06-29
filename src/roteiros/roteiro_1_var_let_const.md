# Roteiro para apresentação: Tema 1 - "var, let e const"

Olá! Hoje vou falar um pouco sobre o que é uma variavel e como podemos declarar uma variavel em JavaScript.

1. O que é uma variável?  
   Imagine uma variável como uma caixinha onde você pode guardar informações, como números ou palavras. Você pode dar um nome para essa caixinha para lembrar o que está guardando.

2. var - a caixinha tradicional  
   A palavra "var" é usada para criar uma variável que pode mudar de valor. Por exemplo, você pode guardar o número 0 e depois trocar para 15. Mas atenção: variáveis declaradas com var têm um escopo especial chamado "escopo de função", o que significa que elas funcionam dentro de uma parte específica do código.

3. let - a caixinha moderna  
   "let" também cria variáveis que podem mudar de valor, mas com uma diferença importante: elas têm "escopo de bloco". Isso quer dizer que elas funcionam dentro de um bloco de código, como dentro de chaves { }, e não fora dele. Isso ajuda a evitar confusões no código.

4. const - a caixinha que não muda  
   Já "const" cria uma variável que não pode mudar de valor depois de criada. É como uma caixinha com um cadeado! Se você tentar mudar o valor, o programa vai dar um erro. Use const quando você sabe que o valor não deve ser alterado.

5. Por que usar let em vez de var?  
   Hoje em dia, é recomendado usar "let" para declarar variáveis, porque o escopo de bloco ajuda a evitar erros e deixa o código mais fácil de entender.

Aqui está um exemplo simples mostrando algumas diferenças:

```javascript
function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // funciona, x = 10 (escopo de função)
}

function exemploLet() {
  if (true) {
    let y = 10;
  }
  console.log(y); // ERRO: y is not defined (escopo de bloco)
}
```

```javascript
var a = 1;
var a = 2; // OK

let b = 1;
let b = 2; // ERRO: Identifier 'b' has already been declared
```

```javascript
console.log(c); // undefined
var c = 5;

console.log(d); // ERRO: Cannot access 'd' before initialization
let d = 5;
```

6. Recapitulando

- var: variável que pode mudar, escopo de função.
- let: variável que pode mudar, escopo de bloco.
- const: variável que não muda, escopo de bloco.

7. Tipos de variáveis  
   Em JavaScript, as variáveis podem guardar diferentes tipos de informações. Vamos conhecer alguns tipos básicos, um por um, de forma simples:

- Número: guarda valores numéricos, como 10 ou 3.14.
- Texto (String): guarda palavras ou frases, como "Olá".
- Verdadeiro ou falso (Boolean): guarda valores de verdadeiro (true) ou falso (false).
- Objeto: guarda coleções de informações, como uma caixinha com várias coisas dentro.
- Função: guarda um pedaço de código que pode ser executado.

Aqui está um exemplo simples mostrando alguns desses tipos:

```javascript
let numero = 10; // número
let texto = "Olá"; // texto
let booleano = true; // verdadeiro ou falso
let objeto = { nome: "Ana" }; // objeto
let funcao = function () {
  // função
  console.log("Função chamada");
};

console.log(numero);
console.log(texto);
console.log(booleano);
console.log(objeto.nome);
funcao();
```

Isso ajuda a entender que as variáveis podem guardar diferentes tipos de dados, e cada tipo tem sua utilidade.

Obrigado por assistir e até a próxima!
