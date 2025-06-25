// função com retorno da soma de dois elementos
function soma(x, y){                // a função retorna um valor que pode ser atribuido a uma variável
    let soma = 0;                   // declara e inicializa uma variável local dentro da função
    soma = x + y;

    return soma;                    // retorna o resultado da soma e encerra a função
}

let res = 0;
res = soma(5, 4);       // chama a função e atribui o valor de retorno à variável res

console.log(res);