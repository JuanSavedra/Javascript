//Type Conversion (Conversão de Tipo).

/* A conversão de tipo funciona como uma troca de tipos
de variáveis por exemplo. */

//Exemplo:

console.log("9" + 5);

/* Da forma acima, como vimos antes, tudo que está em aspas
vira uma string, ou seja, uma string não pode ser somada
com um tipo number, o que acaba deixando isso como uma Type
Coersion". */

//Transformando a Type Coersion em Type Conversion.

console.log(Number("9") + 5);

/* Dessa forma, o 9 que na verdade era uma string, se 
transformou no tipo number e assim tendo como resultado
o 9 + 5 = 14. */

//Type Conversion Strings E Numbers.

/* Conversão do tipo String para Number e tipo Number para
String. */

//Exemplo.

{
    let string = "15";
    console.log(Number(string)); // O "15" virou 15.
    let número = 15;
    console.log(String(número)); // O 15 virou "15".

    /* Também é possível fazer somas mudando os dados das 
    variáveis. */

    console.log(Number(string) + número);
}

//Contando Carácteres e Dígitos.

/* Função usada para contar a quantidade de carácteres e 
dígitos de uma string ou numbers. 
Os tipos numbers não podem ser contados no seu tipo de dado
padrão, eles têm que ser mudados para string, a mesma coisa 
para os booleans. */

//Exemplo.

{
    let palavra = "Onomatopeia";
    console.log(`Quantidade de carácteres da palavra ${palavra}:
    ${palavra.length}`);
    let number = 123456789;
    console.log(`Quantidade de dígitos do número ${number}:
    ${String(number).length}`);
}

//Mudando Casas Decimais.

/* Podemos mudar os dígitos em uma casa decimal, alterando de 
8 pra 2 por exemplo. 
Podemos mudar também a "," (vírgula), trocando ela por um "." (ponto). */

//Exemplo.

{
    let pi = 3.1416;
    console.log(pi.toFixed(2).replace(".", ","));
    
    /* toFixed = Número de casas para aparecer depois do ponto.
        replace = Trocar um caráctere por outro. */
}

//Alterando Maiúsculas e Minúsculas.

/* Podemos alterar as letras maiúsculas e minúsculas de uma string. */

//Exemplo.

{
    let palavra = "lOReM IPsuM";
    console.log(palavra.toLowerCase());
    let palavra2 = "frAsE aLeATóRiA";
    console.log(palavra2.toUpperCase());

    /* toLowerCase() = Tudo minúsculo.
       toUpperCase() = Tudo maiúsculo. */


    //Também pode mudar apenas algumas letras com o replace.

    let palavra3 = "lorem ipsum";
    console.log(palavra3.replace("l", "L").replace("i", "I"));
}

//Separando Strings.

/* Podemos separar certas coisas de uma string. */

//Exemplo.

{
    let frase = "Eu quero ir para Dubai";
    let fraseSeparada = frase.split("");
    console.log(fraseSeparada);

    //Dessa forma todas os carácteres são separados.

    fraseSeparada = frase.split("o");
    console.log(fraseSeparada);

    //Dessa forma todas os carácteres "o" são excluídos.

    fraseSeparada = frase.split(" ");
    console.log(fraseSeparada);

    //Dessa forma todas as palavras são separadas por espaços.

    /* Outra forma para separar strings. */

    let fraseSeparadaPorAlgo = fraseSeparada.join("_");
    console.log(fraseSeparadaPorAlgo);

    //Dessa forma os espaços são trocados por "_" (underlines).
}

//Verificando se contém palavras inclusas na frase.

/* Essa função verifica se contém certa palavra na sua frase. */

//Exemplo.

{
    let frase = "Lorem Ipsum";
    let palavraInclusa = "Ipsum";
    console.log(`A palavra ${palavraInclusa} está inclusa em 
    ${frase}? ${frase.includes(palavraInclusa)}`);

    //A função includes vê diferenças entre maiúsculas e minúsculas.
}

//Criando um Array junto de um Construtor.

//Exemplo.

{
    let arrayDeAnimais = new Array("Leão", "Macaco", "Guepardo");
    console.log(arrayDeAnimais);
}

//Contando Elementos de um Array.

/* Os elementos de um array nada mais são do que a lista que nós
construímos dentro deles. 
Isso pode ser tanto quanto variáveis, funções e assim vai. */

//Exemplo.

{
    let array = [
        "a", //String.
        {type: 1}, //Number
        {type: true}, //Boolean.
        (nome) => {
            return nome;
        }
    ];

    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]("Juan"));
}

//Strings para Arrays.

/* Transforma uma cadeia de carácteres em elementos de um array. */

//Exemplo.

{
    let palavra = "Paralelepípedo";
    console.log(Array.from(palavra));
}

//Manipulando Arrays.

/* Manipula uma lista de arrays. */

//Exemplo.

{
    let tecnologias = [
        "HTML",
        "SQL",
        "CSS",
        "JavaScript"
    ];

    //Adicionando um item no fim.
    tecnologias.push("Node.JS");

    //Adicionar no começo.
    tecnologias.unshift("Python");

    //Remove uma do fim.
    tecnologias.pop(); //Removeu Node.JS.

    //Remover do começo.
    tecnologias.shift(); //Removeu Python.

    //Pegar somente alguns elementos.
    //console.log(tecnologias.slice(3, 4)); //Número inicial / Número final.

    //Removendo 1 ou mais elementos.
    //Tecnologias.slice(3, 4); //Número inicial / Número final.
    
    //Encontrar a posição de um elemento em um array.
    let index = tecnologias.indexOf("HTML");
    tecnologias.splice(index, 1); //Número inicial / Número do tamanho de valores para remover.

    console.log(tecnologias);

    //OBS: Teste uma por uma para evitar erros.
}