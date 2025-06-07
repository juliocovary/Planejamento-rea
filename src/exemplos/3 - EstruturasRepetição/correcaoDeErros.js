let senhaCorreta = false;
do{
    const senha = prompt('Adivinhe a senha:');

    if(senha == '1234'){
        senhaCorreta = true;
    }
    else{
        alert('Senha incorreta. tente: 1234');
    }

} while(senhaCorreta != true);