deixe readlineSync = exigir('readline-sync');
var nomeEven, nomePart1, nomePart2,nomepartinte, nomePales, idade, capacidade = 0;

se (capacidade < 100){

nomeEven = readlineSync. pergunta("digite o nome do evento: ");

se (nomeEven.  comprimento < 4){
    
    console. log("Nome do evento invalido! Evento não cadastrado");

}mais{
    nomePart1 = readlineSync. pergunta("digite o primeiro nome do participante: ");
        nomePart2 = readlineSync. pergunta("digite o sobrenome do participante: ");
            nomepartint = nomePart1 + nomePart2;
               
se (nomePart1.  comprimento <= 0 , nomePart2. comprimento <= 0 ){
   
    console. log("Nome informado invalido! Participante não cadastrado");

}mais{
    idade = readlineSync. pergunta("Digite a idade do participante: ");
        se(idade <= 18){
            console. log("idade insuficiente para participar do evento. Participante não cadastrado");
        }mais{
            console. log("cadastro efetuado com sucesso");
            console. log("Evento cadastrado: " + nomeEven);
            console. log("Nome do participante: " + nomepartinte);
            console. log("Idade do participante cadastrado: " + idade);
            capacidade ++
            console. log(capacidade);
        }
    }
}
    }mais{
        console. log("limite de cadastro atingido")
    }