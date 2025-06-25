// função que verifica se (num > 0 && num < 100). Retornando um boolean
function verificaValor(num){
    if(num > 0){
        if(num < 100){
            return true; // retorna true e finaliza a função
        }
    }

    return false;        // retorna false caso as condições não sejam atendidas e finaliza a função
}

// Passando o inteiro 64 como parâmetro
let x = 64;
if(verificaValor(x)){   // o IF avalia o retorno da função (true)
    console.log("Valor x eh valido.\n");
}
else{
    console.log("Valor x eh invalido.\n");
}

// Passando o inteiro 105 como parâmetro
let y = 105;
if(verificaValor(y)){   // o IF avalia o retorno da função (false)
    console.log("Valor y eh valido.\n");
}
else{
    console.log("Valor y eh invalido.\n");
}