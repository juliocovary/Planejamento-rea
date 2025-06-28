// diferentes formas de se declarar uma variável

var y = 0;      // pode ser reatríbuida. Tem escopo de função
y = 15;

let x = 0;      // pode ser reatríbuida. Tem escopo de bloco {}
x = 10;

const z = 8;    // valor imutável. Tem escopo de bloco {}
// z = 50; <-- incorreto (resulta em um erro)

/* por questoes de simplicidade
utilizaremos a palavra-chave let
para declarar as variáveis */