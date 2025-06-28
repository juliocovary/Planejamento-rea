// imprime alerta de habilitacao
let entrada = prompt("Digite sua idade:");

let idade = 0;
idade = parseInt(entrada);

// verifica SE a idade fornecida eh maior que 18
if(idade >= 18){   // se a condição for verdadeira, a mensagem eh impressa
    console.log("Parabens! Voce pode possuir uma habilitacao!");
}

console.log("Sua idade eh: "+idade);