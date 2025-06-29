# Roteiro para apresentação: Tema 5 - "Vetores"

Olá! Hoje vamos aprender sobre vetores, que são como listas onde podemos guardar vários valores juntos.

1. O que é um vetor?  
   Imagine um vetor como uma fila de caixinhas, cada uma com um número, onde podemos guardar informações organizadas.

2. Acessando elementos do vetor  
   Cada caixinha tem um número chamado índice, que começa em 0. Podemos acessar o valor de cada caixinha pelo seu índice.

```javascript
let vet = [1, 2, 3, 4, 5];
console.log("Índice: 0 | Valor: " + vet[0]);
console.log("Índice: 1 | Valor: " + vet[1]);
console.log("Índice: 2 | Valor: " + vet[2]);
console.log(vet);
```

3. Percorrendo um vetor  
   Para olhar todos os valores do vetor, usamos um laço que passa por cada índice.

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

4. Por que usar vetores?  
   Vetores ajudam a organizar muitos dados de forma simples e eficiente.

5. Recapitulando

- Vetor: lista de valores organizados por índices.
- Acessar: usar o índice para pegar um valor.
- Percorrer: usar um laço para ver todos os valores.

E aí, gostou? Agora você sabe como guardar e trabalhar com listas de dados!

Obrigado por assistir e até a próxima!
