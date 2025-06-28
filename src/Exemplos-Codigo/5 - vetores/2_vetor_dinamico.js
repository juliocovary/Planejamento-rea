// demonstração de vetor dinamico
let vet = [10, 'str', true, { obj: "objeto" }, function(){ console.log('funcao'); }];   // os vetores em JS sao dinamicos e suportam diferentes tipos de dados

console.log(vet[0]);		// acessando conteúdo do índice 0
console.log(vet[1]);		// acessando conteúdo do índice 1
console.log(vet[2]);		// acessando conteúdo do índice 2

console.log(vet[3].obj);    // acessa a propriedade do obj no índice 3
vet[4]();                   // acessa e chama a função no índice 4 

console.log(vet);       // imprime todo o vetor