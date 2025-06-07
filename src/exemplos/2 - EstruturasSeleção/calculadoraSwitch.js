    const operador = '*';
    const operandox = 5;
    const operandoy = 2;

    let res = 0;
    switch(operador){       // o switch escolhe um case de acordo com o valor da variável/expressão
        case '+':           // ex: se o valor for '+', a operação de soma é selecionada
            res = operandox + operandoy;
            break;         // palavra chave 'break' para finalizar o bloco de código

        case '-':
            res = operandox - operandoy;
            break;

        case '*':
            res = operandox * operandoy;
            break;

        case '/':
            res = operandox / operandoy;
            break;

        case '%':
            res = operandox % operandoy;
            break;
            
        default:            // default é escolhido caso o valor não corresponda a nenhum case
            console.log('Operador inexistente.');
            res = 0;
    }

    console.log(res);