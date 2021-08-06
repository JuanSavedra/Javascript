/* O array conforme explicado antes, ele 
é uma lista de valores que agrupa dados.
Eles contém valores dentro dele como o seu
tamanho por exemplo.

Os arrays sempre começam seu valor no 0.
Então sua contagem acaba sendo assim: 
0 até o Tamanho - 1

Explicação: 0 = Valor Inicial
            Tamanho = Valores dados dentro dele. 

O -1 é necessário pois como o array pode ser de 5 
fatores e começamos no 0, ele ao chegar no número
4 já vai ter os 5 fatores dados. */
            

//Exemplo.

{
    let animais = [
        "Leão", //Posição 0.
        "Cachorro", //Posição 1.
        "Macaco" //Posição 2.
    ] //Tamanho: 3. 

    console.log(animais[0]); //Resposta = Leão.
    console.log(animais[1]); //Resposta = Cachorro.
    console.log(animais[2]); //Resposta = Macaco.
}

/* Dentro de um array, pode conter objetos, funções e
assim vai. */

//Exemplo.

{
    let animais = [
        "Leão", //Posição 0.
        "Cachorro", //Posição 1.
        "Macaco", //Posição 2.
        {
            nome: "Girafa" //Posição 3.
        }
    ] //Tamanho = 4.

    console.log(animais[3].nome); //Resposta = Girafa.
}

/* Eu também posso pedir pro console o taamnho do array. */

//Exemplo.

{
    let animais = [
        "Leão",
        "Cachorro",
        "Macaco",
        {
            nome: "Girafa"
        }
    ] //Tamanho = 4.

    console.log(animais.length); //Resposta = 4.
}