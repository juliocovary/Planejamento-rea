// entrada de dados com for e push
let entrada = prompt("Digite o numero de elementos desejado:");
let tam = parseInt(entrada);   // numero de elementos do vetor
let vet = [];                  // inicializacao do vetor

// adicao de elementos com push()
for(let i = 0; i < tam; i++){
    let entrada = prompt("Digite um valor inteiro ("+(i+1)+"o elemento do vetor):");
    let elemento = parseInt(entrada);
    vet.push(elemento);     // adiciona um elemento ao topo da pilha do vetor
}

// impressao dos elementos do vetor
for(let i = 0; i < tamanho; i++){
    console.log('Valor do indice: '+ i + "| Valor do elemento: " + vet[i]);
}