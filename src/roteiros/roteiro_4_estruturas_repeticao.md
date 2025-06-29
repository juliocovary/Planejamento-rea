# Roteiro para apresentação: Tema 4 - "Estruturas de Repetição"

Olá! Hoje vamos aprender sobre estruturas de repetição, que são formas de o computador repetir ações várias vezes.

1. O que é uma estrutura de repetição?  
   Imagine que você quer que o computador faça algo várias vezes, como contar de 0 a 10. Em vez de escrever o mesmo código várias vezes, usamos estruturas de repetição.

2. while - verificação no início  
   O **while** verifica uma condição antes de começar o laço. Se a condição for verdadeira, ele executa o código dentro do laço. Por exemplo, contar de 0 a 10:

```javascript
let n = 0;
while (n <= 10) {
  console.log(n);
  n++;
}
console.log("Valor final de n: " + n);
```

3. do while - verificação no final  
   O **do while** executa o código pelo menos uma vez e depois verifica a condição. Se a condição for verdadeira, ele repete o laço. Por exemplo, contar de 0 a 10:

```javascript
let n = 0;
do {
  console.log(n);
  n++;
} while (n <= 10);
console.log("Valor final de n: " + n);
```

4. for - laço controlado  
   O **for** é usado quando sabemos quantas vezes queremos repetir algo. Por exemplo, contar de 1 a 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

5. Por que usar estruturas de repetição?  
   Elas ajudam a evitar código repetido e tornam o programa mais eficiente.

6. Recapitulando

- while: repete enquanto a condição for verdadeira.
- do while: executa pelo menos uma vez e repete enquanto a condição for verdadeira.
- for: repete um número definido de vezes.

Além dessas, existe também o laço **foreach**, que é usado para percorrer elementos de uma lista ou array. Vamos mencionar ele aqui como uma forma diferente de repetição, mas não entraremos em detalhes para manter o foco no básico.

E aí, gostou? Agora você sabe como fazer o computador repetir tarefas para você!

Obrigado por assistir e até a próxima!
