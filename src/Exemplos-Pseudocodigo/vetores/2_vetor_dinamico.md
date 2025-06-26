## Demonstração de um vetor dinâmico

>Os vetores em JS sao dinâmicos e suportam o armazenamento de diferentes tipos de dados

**variavel** *vet* = [10, 'str', true, { *obj*: "objeto" }, function(){ console.log('funcao'); }];

>Acessa conteúdos dos índices 0, 1 e 2

**console.escreva**\(*vet*[0]);<br>
**console.escreva**\(*vet*[1]);<br>
**console.escreva**\(*vet*[2]);

>Acessa a propriedade do obj no índice 3

**console.escreva**(*vet*[3].*obj*);

>Acessa e chama a função no índice 4 

*vet*\[4\]\(\);

>Imprime todo o vetor

**console.escreva**(*vet*);