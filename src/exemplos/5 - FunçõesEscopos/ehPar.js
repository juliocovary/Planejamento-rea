function ehPar(numParam){               // definição da função e parametros(numParam)
    let resultado;
    if((numParam % 2) == 0){
        resultado = 'par';
    }
    else{
        resultado = 'impar';
    }

    return resultado;                   // return retorna os dados de resultado
}

let num = 5; 
let result = ehPar(num);                // chamamos a função ehPar() passamos num como parâmetro
                                        // numParam em ehPar passa a ser equivalente a num
                                        // ehPar retorna o resultado que é atribuido a result

console.log('O valor', num, 'é', result);