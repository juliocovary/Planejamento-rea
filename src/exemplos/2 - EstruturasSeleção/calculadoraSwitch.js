    const operador = '*';
    const operandox = 5;
    const operandoy = 2;

    let res = 0;
    switch(operador){
        case '+':
            res = operandox + operandoy;
             break;

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
            
        default:
            console.log('Operador inexistente.');
            res = 0;
            break;
    }

    console.log(res);