// uniao de vetores com push
let vetor1 = [1, 3, 5, 2];
let vetor2 = [2, 4, 6, 5];

let tam = vetor2.length;

// itera sobre o vetor 1
console.log("...... Vetor 1 ......");
for(let i = 0; i < tam; i++){
    console.log("Indice: "+i+" | Valor: "+vetor1[i]);
}

// itera sobre o vetor 2
console.log("\n...... Vetor 2 ......");
for(let i = 0; i < tam; i++){
    console.log("Indice: "+i+" | Valor: "+vetor2[i]);
}

// adiciona os elementos de vetor2 ao vetor1
for(let i = 0; i < tam; i++){
    vetor1.push(vetor2[i]);
}

// impressao do vetor 1 apos a uniao
tam = vetor1.length;    // atualiza o tamanho do vetor para o novo tamanho
console.log("\n.Vetor 1 (apos uniao)");
for(let i = 0; i < tam; i++){
    console.log("Indice: "+i+" | Valor: "+vetor1[i]);
}