let mat = [[],[],[]];

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        const num = prompt('Digite o valor '+(j+1)+' da linha '+(i+1));
        mat[i][j] = parseInt(num);
    }
}

console.log(mat);