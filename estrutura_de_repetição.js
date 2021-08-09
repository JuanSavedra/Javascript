//For (Para).

/* É um laço que se repete de acordo com o tamanho de 
uma variável atribuída. */

//Exemplo.

{
    for (let i = 0; i < 10; i++) { //0 ao 9.
        console.log(i);
    }

    /* Também funciona com arrays. */

    let animais = [
        "Leão", //0.
        "Girafa", //1.
        "Macaco", //2.
        "Burro", //3.
        "Camelo" //4.
    ]; //Total: 5

    for (let i = 0; i < animais.length; i++) {
        console.log(animais[i]);
    }
}

//While (Enquanto).

/* Realiza uma ação enquanto algo continuar com o mesmo valor. */

//Exemplo.

{
    let boolean = true;

    while (boolean) {
        console.log("Hello World!");
        boolean = false;

        /* Se não adicionar o boolean = false o código se torna
        infinito. */
    }
}

//For Of.

/* Serve para puxar itens de cada variável e array. */

//Exemplo.

{
    let nome = "Juan";
    let animais = [
        "Macaco",
        "Leão",
        "Urubu"
    ];

    for (let char of nome) {
        console.log(char);
    }

    for (let array of animais) {
        console.log(array);
    }
}

//For In.

/* Serve para pegar propriedades de objetos. */

//Exemplo.

{
    let animal = {
        nome: "Tubarão-Branco",
        idade: 12,
        comprimento: 2.5 + "m"
    }

    for (let propriedade in animal) {
        console.log(propriedade);
        console.log(animal[propriedade]);
    }
}