let num = 2;            // variável de escopo global

function alteraNum(){   // utilizamos a função para modificar a variável diretamente (não recomendado)
    num = 5;            // num recebe uma atribuição do valor 5
    console.log('Variável num foi alterada!');
}

console.log('Valor de num: '+num);      // valor de num: 2

alteraNum();                            // alteraNum() modifica o valor de num para 5

console.log('Valor de num: '+num);      // valor de num: 5