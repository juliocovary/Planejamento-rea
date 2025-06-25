// imprimindo um vetor utilizando for e a propriedade length
let vet = [1, 2, 3, 4, 5];

let tamanho = vet.length;       // a propriedade length contém o numero total de elementos no vetor
console.log("Tamanho do vetor: " + tamanho);

// iterando e imprimindo o vetor com laço for
for(let i = 0; i < tamanho; i++){
    console.log('Valor do indice: '+ i + "| Valor do elemento: " + vet[i]);
}