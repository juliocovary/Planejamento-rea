// somatório de elementos de um vetor
let vet = [1, 2, 3, 4, 5];
let tam = vet.length;
let soma = 0;

// soma elementos a atribui à variavel soma
for(let i = 0; i < tam; i++){
    soma = soma + vet[i];
}

console.log("Resultado do somatorio: " + soma);