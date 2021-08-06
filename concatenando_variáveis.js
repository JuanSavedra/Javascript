/* Concatenar uma variável é basicamente
agrupá-la junto de algo. */

//Exemplo:

{
    let nome, idade;
    nome = "Juan";
    idade = "15";
    console.log("Nome: " + nome + " Idade: " + idade);
}

/* Para deixar de um jeito menos feio para o
código, podemos usar a interpolação. */

//Exemplo.

{
    let nome, idade;
    nome = "Juan";
    idade = "15";
    console.log(`Nome: ${nome} Idade: ${idade}`);
}