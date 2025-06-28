// somatório com função recursiva
function somatorio(num){
    if(num == 1){
        return 1;
    }
    let soma = num + somatorio(num-1);      // a função chama a si mesma

    return soma;
}

console.log(somatorio(6));