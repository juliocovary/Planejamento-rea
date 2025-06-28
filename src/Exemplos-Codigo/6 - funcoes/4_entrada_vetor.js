// função para entrada de dados de vetor. Retorna um vetor preenchido
function entraVetor(){
    // requisita o número de elementos do vetor
    let entrada = prompt("Digite o numero de elementos desejado:");
    let num = parseInt(entrada);

    // realiza a entrada de dados
    let vet = [];
    for(let i = 0; i < num; i++){
        let entrada = prompt("Digite um valor inteiro ("+(i+1)+"o elemento do vetor):");
        let elemento = parseInt(entrada);
        vet.push(elemento);
    }

    return vet;     // retorna o vetor preenchido e finaliza a função
}

let vet = [];
vet = entraVetor(); // chama a função e atribui o retorno à variável vet

tam = vet.length;
for(let i = 0; i < tam; i++){
    console.log("Indice: "+i+" | Valor: "+vet[i]);
}
