// verifica maior valor
let entrada1 = prompt("Digite um valor inteiro para x:");
let entrada2 = prompt("Digite um valor inteiro para y:");

let x = parseInt(entrada1);
let y = parseInt(entrada2);

if(x > y){          // verifica SE x eh maior que y
    console.log(x + " eh maior que " + y);
}
    
else if(x < y){     // SE NAO, verifica SE x eh menor que y 
    console.log(y + " eh maior que " + x);
}
    
else{               // SE NAO, imprime que sao valores iguais
    console.log("Os valores são iguais");
}