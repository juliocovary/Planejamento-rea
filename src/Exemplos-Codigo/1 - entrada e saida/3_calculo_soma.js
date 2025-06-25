// soma valores da entrada de dados
let x = 0;
let y = 0;

let entrada1 = "";
entrada1 = prompt("Digite um inteiro para x:");
x = parseInt(entrada1);             // converte a resposta em texto(string) para um valor numerico inteiro

let entrada2 = "";
entrada2 = prompt("Digite um inteiro para y:");
y = parseInt(entrada2);

let soma = x + y;                   // atribui o resultado da soma diretamente

console.log("A soma de "+valorx+" com "+valory+" resulta em: "+soma);