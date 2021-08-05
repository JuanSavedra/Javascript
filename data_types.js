// String.

//Diferença entre Aspas Duplas e Aspas Simples.

/* Usamos aspas duplas quando queremos colocar uma aspas 
simples dentro do texto de forma que não irá atrapalhar o 
código e vice-versa*/

//Exemplo:

console.log("Meu nome é 'Juan'");
console.log('Meu nome é "Juan"');

//Crases.

/* Permite usar Aspas Dupĺas e Simples quando quiser dentro
delas, além de permitir expressões (interpolação) e 
multi-linhas. */

//Exemplo:

console.log(`Permite eu usar "Aspas Duplas" e "Aspas 
Simples, além de cortar as linhas e usar expressões como
1 + 1 = ${1 + 1}"`);

//Number.

/* Permite usar números reais, inteiros, calcular expressões
dentro dela, usar não números (NaN) e infinito (Infinity) */

//Exemplo:

//Número Inteiro (int).
console.log(12);

//Números Reais (float).
console.log(12.5);

//Cálculos.
console.log((15 + 5) / 2);

//Não Número (NaN).
console.log(25 / "Juan");

//Infinito (Infinity).
console.log(12 == Infinity);
console.log(Infinity == Infinity);
console.log(Infinity);

//Boolean.

/* Informa somente dois valores: verdadeiro (true) ou falso (false). */

//Exemplo:
console.log("Verdadeiro", true);
console.log("Falso", false);
console.log("12 é Maior que 11?", 12 > 11);
console.log("12 é Maior que 13?", 12 > 13);