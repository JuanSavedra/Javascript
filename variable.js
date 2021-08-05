//Variáveis.

/* Variáveis tem como função armazenar um certo tipo de 
dado correspondente a sua utilização. 

Existem 3 Tipos de Variáveis. 
- var (É uma variável que armazena seus dados globalmente, onde 
você pode colocar ela em qualquer lugar e ela aparece em
qualquer coisa, desde funções, classes e etc, ela pode ser 
alterada).
- let (É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de sua própria classe ou função e
que pode ser alterada)
- const (É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de sua própria classe ou função e
que NÃO pode ser alterada)
*/

//Exemplo 1: var.
var str_clima = "Quente";
console.log(str_clima);

//Também pode ser.
var str_clima2;
str_clima2 = "Quente"; //Reatribuindo um valor.
console.log(str_clima2);

/* Essa é uma variável armazenada do tipo string pois está em 
Aspas Duplas. */

var bool_verdadeiro;
bool_verdadeiro = true;
console.log(bool_verdadeiro);

/* Essa é uma variável armazenada do tipo boolean pois está em 
true (verdadeiro) ou false (falso). */

var int_numero;
int_numero = 12;
console.log(int_numero);

/* Essa é uma variável armazenada do tipo int pois está o número
do tipo inteiro armazenado. */

var float_numero2;
float_numero2 = 12.5;
console.log(float_numero2);

/* Essa é uma variável armazenada do tipo float pois está o nú
mero do tipo real armazenado */

//Exemplo 2: let

let str_comida = "Estrogonofe";
console.log(str_comida); 

/* Funciona da mesma forma que a variável do tipo "var", 
conforme especificado lá em cima nos tipos de variáveis. */

//Exemplo 3: const

const str_comida2 = "Pizza";
console.log(str_comida2);

/* Funciona da mesma forma que a variável do tipo "var", 
conforme especificado lá em cima nos tipos de variáveis. */