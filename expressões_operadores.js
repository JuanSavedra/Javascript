//Expressões e Operadores.

/* Expressões é uma forma devalores passados
que resolvem contas passadas. */

//Exemplo de Expressões.

{
    let número = 1;
    let número2 = 7;

    console.log(`A soma de ${número} + 
    ${número2} é igual à: ${número + número2}`);
}

//Operadores Unários (Unary).

/* Usam apenas um fator. */

{
    let número = 3;
    console.log(`Sucessor do número ${número} é:
    ${++número}`);
}

//Operadores Binários (Binary).

/* Usam dois fatores. */

{
    let número = 7;
    let número2 = 2;
    console.log(`A subtração de ${número} - 
    ${número2} é igual à: ${número - número2}`);
}

//Operadores Ternários (Ternary).

/* Usam três fatores. */

{
    let número = true;
    console.log(número ? "Verdadeiro" : "Falso");

    /* O que diz ali é: Se número for verdadeiro, diga: "Verdadeiro".
    Se não diga: "Falso" */
}

//Expressão new.

/* A expressão new é usada para criar um novo objeto. */

//Exemplo.

{
    let nome;
    let idade;
    let data;
    let vivo;

    nome = new String("Juan"); //Transformou em objeto.
    console.log("Nome: ", nome);
    idade = new Number(15);
    console.log("Idade: ", idade);
    data = new Date("2021-08-09");
    console.log("Data: ", data);
    vivo = new Boolean(true);
    console.log("Vivo: ", vivo);
}

//Typeof Delete.

/* O typeof e o delete são operadores unários. */

//Exemplo.

//Typeof.
{
    let variável = "";
    console.log(typeof variável); //String.
    variável = 0;
    console.log(typeof variável); //Number.
    variável = false;
    console.log(typeof variável); //Boolean.
}

//Delete.
{
    const pessoa = {
        nome: "Juan",
        idade: 15
    }

    console.log(`Nome: ${pessoa.nome}, Idade: 
    ${pessoa.idade}`);

    delete pessoa.idade;
    console.log(`Nome: ${pessoa.nome}, Idade: 
    ${pessoa.idade}`);

    delete pessoa.nome;
    console.log(`Nome: ${pessoa.nome}, Idade: 
    ${pessoa.idade}`);
}

//Operadores Aritméticos.

/* Os operadores são usados para realizar cálculos
nas linguagens, os cálculos são: Soma, subtração, 
multiplicação e divisão. */

//Exemplo.

{
    let número = 8;
    let número2 = 2;

    console.log(`Soma: ${número + número2}`); //10.
    console.log(`Subtração: ${número - número2}`); //6.
    console.log(`Multiplicação: ${número * número2}`); //16.
    console.log(`Divisão: ${número / número2}`); //4.

    //Resto da divisão.

    let restante;
    restante = 11 % 9;
    console.log(restante);

    //Incremento.

    console.log(`Número atual: ${número}. Incremento: 
    ${++número}`);

    //Decremento.

    console.log(`Número atual: ${número2}. Decremento: 
    ${--número2}`);

    //Exponencial.

    console.log(`Exponencial: ${2 ** 3}`); //2 elevado a 3.
}

//Grouping Operator.

/* Utilizando um certo parâmetro, você consegue agrupar
as operações que você deseja ir primeiro, com isso, por
exemplo, conseguimos fazer uma divisão ser feita depois
de uma soma. */

//Exemplo.

{
    let total = 8 + 4 * 2; //Sem agrupamento.
    console.log(total); //Resultado: 16.

    total = (8 + 4) * 2; //Com agrupamento.
    console.log(total); //Resultado: 24.
}

//Operadores de Comparação.

/* Operadores de comparação servem para comparar variáveis
retornando um valor booleano. */

//Exemplo.

{
    let um = 1;
    let dois = 2;
    let três = 3;

    //Igual.
    console.log(`${um} é igual à ${dois}? ${um == dois}`);
    console.log(`${dois} é igual à ${dois}? ${dois == dois}`);
    console.log(`${um} é igual à "1"? ${um == "1"}`);

    //Diferente.
    console.log(`${um} é diferente de ${dois}? ${um != dois}`);
    console.log(`${dois} é diferente de ${dois}? ${dois != dois}`);
    console.log(`${um} é diferente de "1"? ${um != "1"}`);

    //Maior que.
    console.log(`${um} é maior que ${dois}? ${um > dois}`);
    console.log(`${dois} é maior que ${dois}? ${dois > dois}`);
    console.log(`${três} é maior que ${dois}? ${três > dois}`);

    //Menor que.
    console.log(`${um} é menor que ${dois}? ${um < dois}`);
    console.log(`${dois} é menor que ${dois}? ${dois < dois}`);
    console.log(`${três} é menor que ${dois}? ${três < dois}`);

    //Maior/Igual que.
    console.log(`${um} é maior ou igual à ${dois}? 
    ${um >= dois}`);
    console.log(`${dois} é maior ou igual à ${dois}? 
    ${dois >= dois}`);
    console.log(`${três} é maior ou igual à ${dois}? 
    ${três >= dois}`);

    //Menor/Igual que.
    console.log(`${um} é menor ou igual à ${dois}? 
    ${um <= dois}`);
    console.log(`${dois} é menor ou igual à ${dois}? 
    ${dois <= dois}`);
    console.log(`${três} é menor ou igual à ${dois}? 
    ${três <= dois}`);

    //Estritamente igual.
    console.log(`${um} é igual à ${dois}? ${um === dois}`);
    console.log(`${dois} é igual à ${dois}? ${dois === dois}`);
    console.log(`${um} é igual à "1"? ${um === "1"}`);

    //Estritamente diferente.
    console.log(`${um} é diferente de ${dois}? ${um !== dois}`);
    console.log(`${dois} é diferente de ${dois}? ${dois !== dois}`);
    console.log(`${um} é diferente de "1"? ${um !== "1"}`);
}

//Operadores de Atribuição.

/* Operadores de atribuição adicionam mais números que
o variável++ por exemplo. */

//Exemplo.

{
    let x;
    console.log(x);

    //Seguimento.
     x = 1;
     console.log(x); //1.
    
     //Seguimento de adição.

     x += 2;
     console.log(x); //3.

     //Seguimento de subtração.

     x -= 2;
     console.log(x); //1.

     //Seguimento de multiplicação.

     x *= 2;
     console.log(x); //2.

     //Seguimento de divisão.

     x /= 2;
     console.log(x); //1.
}

//Operadores Lógicos.

/* Operadores lógicos são atribuídos junto com operadores
de condição que veremos mais pra frente.
Mas seus exemplos são: 
- AND (&&)
- OR (||) 
- NOT (!) */

//Operador Condicional Ternário.

/* Tem uma condição de si que dependendo do valor (true or 
false) ele tem uma resposta. */

//Exemplo.

{
    let comer = true;
    let irComer = comer ? "Ir comer." : "Não ir comer";
    //Se for verdadeiro: "Ir comer". Se for falso: "Não ir comer".
    console.log(irComer);

    comer = false;
    irComer = comer ? "Ir comer." : "Não ir comer";
    console.log(irComer);
}

//Ordem de Operadores mais Importantes (Maior Valor).

/* Lista.
- Grouping                   ()
- Negação e Imcremento     ! -- ++
- Multiplicação e Divisão    * /
- Adição e Subtração        + -
- Relacional              < <= > >=
- Igualdade             == != === !==
- Lógicos                  && ||
- Condicional               ?:
- Seguimento             = += -= *=              
*/