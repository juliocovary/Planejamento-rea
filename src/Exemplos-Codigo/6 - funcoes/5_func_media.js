// função que retorna a média do vetor fornecido

// entrada de dados
function entraVetor(){
    let entrada = prompt("Digite o numero de elementos desejado:");
    let num = parseInt(entrada);
    let vet = [];

    for(let i = 0; i < num; i++){
        let entrada = prompt("Digite um valor inteiro ("+(i+1)+"o elemento do vetor):");
        let elemento = parseInt(entrada);
        vet.push(elemento);
    }

    return vet;
}

// calcula a média de um vetor e retorna o resultado
function media(vet){
    let media = 0;
    
    let tam = vet.length;
    for(let i = 0; i < tam; i++){
        media = media + vet[i];
    }

    media = media / tam;
    return media;
}

let vet = [];
vet = entraVetor();

let m = 0;
m = media(vet);

console.log(m);