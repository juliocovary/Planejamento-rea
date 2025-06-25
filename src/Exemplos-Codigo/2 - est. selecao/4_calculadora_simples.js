// calculadora simples com switch-case
let entrada1 = prompt("Digite um valor para X:");
let entrada2 = prompt("Digite um valor para Y:");

let x = parseInt(entrada1);
let y = parseInt(entrada2);

// imprime um menu de opcoes
console.log("Selecione um operador:");
console.log("1. +       2. -");
console.log("3. *       4. /");
console.log("5. %");
let op = prompt("Operador:");       // solicita a selecao de uma opcao

switch(op){     // verifica qual a opcao escolhida

    case "1":   // CASO a opcao seja "1" executa o bloco de codigo
        let soma = x + y;
        console.log(soma);
        break;       // termina o bloco de código

    case "2":   // CASO a opcao seja "2" executa o bloco de codigo
        let sub = x - y;
        console.log(sub);
        break;

    case "3":   // CASO a opcao seja "3" executa o bloco de codigo
        let multi = x * y;
        console.log(multi);
        break;

    case "4":   // CASO a opcao seja "4" executa o bloco de codigo
        let div = x / y;
        console.log(div);
        break;

    case "5":   // CASO a opcao seja "5" executa o bloco de codigo
        let modulo = x % y;
        console.log(modulo);
        break;

    default:   // se nenhum case for satisfeito, executa o bloco de codigo
        console.log("Entrada invalida");
        break;
        
}
