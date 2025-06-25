// vetores bidimensionais
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];    // define um vetor bidimensional/matriz (vetor de vetores)
let tam = mat.length;

// imprimindo cada linha da matriz
for(let i = 0; i < tam; i++){
    console.log(mat[i]);
}
console.log('\n');

// imprimindo todos os elementos individualmente
for(let i = 0; i < tam; i++){                   // laço para percorrer as "LINHAS" da matriz
    for(let j = 0; j < mat[i].length; j++){     // laço para percorrer as "COLUNAS" da matriz
        console.log("Indice: lin = "+i+"; col = "+j+" | Valor: "+mat[i][j]);    // acessa o elemento através dos indices de "linha" e "coluna"
    }
}