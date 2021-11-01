let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade;

nomePeca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("digite o peso da peça: ");

if(pesoPeca > 100){
                                  //condição verdadeira
    if(capacidade > 10){    
       //condição verdadeira
        console.log("não cadastrar, capacidade maxima atiginda!!!");
    }else if(nomePeca.lenght < 3){
            //condição falsa
        console.log("não cadastrar, nome invalido!")
    }else{
        console.log("Peça cadastrada com sucesso!!!");
    }
}else{
                                    //condição fals
    console.log("Não cadastra, peso insulficiente!!!");
}