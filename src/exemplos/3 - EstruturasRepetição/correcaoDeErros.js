let senhaCorreta = false;   // variável sentinela
do{                         // estrutura de repetição com verificação no final
    const senha = prompt('Adivinhe a senha:');

    if(senha == '1234'){        // se senha for equivalente a '1234'
        senhaCorreta = true;    // define o fim do loop/laço
    }
    else{
        alert('Senha incorreta. tente: 1234');
    }

} while(senhaCorreta != true);  // define a condição para o fim do loop/laço