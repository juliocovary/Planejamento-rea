// verifica se valor é par
let entrada = prompt("Digite um valor inteiro:");
let x = parseInt(entrada);

// verifica SE o resto da divisao eh 0 (par)
if((x % 2) == 0){
    console.log(x + " eh um valor Par");
}

else{ // SE NAO for par, executa outro print
    console.log(x + " eh um valor Impar");;
}