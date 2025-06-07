let mat = [[],[],[]];   // inicializamos mat como um array que contém arrays

for(let i = 0; i < 3; i++){             // iteração sobre as 'linhas' do array
    for(let j = 0; j < 3; j++){         // iteração sobre os valores do array 
        const num = prompt('Digite o valor '+(j+1)+' da linha '+(i+1));
        mat[i][j] = parseInt(num);      // modificamos um elemento através dos indices:
                                        // [i] linhas [j] valores
    }
}

console.log(mat);

const matExemplo = [                    // exemplo de matriz preenchida
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

