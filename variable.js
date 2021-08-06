//Variáveis.

/* Variáveis tem como função armazenar um certo tipo de 
dado correspondente a sua utilização. 

Existem 3 Tipos de Variáveis. 
- var (É uma variável que armazena seus dados globalmente, onde 
você pode colocar ela em qualquer lugar e ela aparece em
qualquer lugar, fora ou dentro de um escopo, ela pode ser 
alterada).
- let (É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de seu próprio escopo, ela pode ser 
alterada)
- const (É uma variável que armazena seus dados localmente, onde 
você só pode acessá-la dentro de seu próprio escopo, ela NÃO pode
ser alterada)
*/

//Tipos: String, Boolean e Number.
var str_clima = "Quente";
console.log(str_clima);

//Também pode ser.
var str_clima2;
str_clima2 = "Quente"; //Reatribuindo um valor.
console.log(str_clima2);

/* Essa é uma variável armazenada do tipo string pois está em 
Aspas Duplas. */

var bool_verdadeiro;
bool_verdadeiro = true; //Reatribuindo um valor.
console.log(bool_verdadeiro);

/* Essa é uma variável armazenada do tipo boolean pois está em 
true (verdadeiro) ou false (falso). */

var int_numero;
int_numero = 12; //Reatribuindo um valor.
console.log(int_numero);

/* Essa é uma variável armazenada do tipo number pois está o número
do tipo inteiro armazenado. */

var float_numero2;
float_numero2 = 12.5;
console.log(float_numero2);

/* Essa é uma variável armazenada do tipo number pois está o nú
mero do tipo real armazenado */

//Variável var em prática.
var str_comida = "Lasanha";
console.log(str_comida);

//Variável let em prática.

let str_comida2 = "Estrogonofe";
console.log(str_comida2); 

//Variável const em prática.

const str_comida3 = "Pizza";
console.log(str_comida3);

/* Funciona da mesma forma que a variável do tipo "var", 
conforme especificado lá em cima nos tipos de variáveis. */

//Tipos Dinâmicos.
/* Os tipos dinâmicos das variáveis são aquelas que precisam ou não
precisam de um fator para funcionarem ou não. O JavaScript é uma 
linguagem fracamente tipada e as variáveis não precisam ter um tipo 
predefinido, e podem ser alteradas depois. */

//Exemplo com typeof (tipo de dado da variável especificada): 

var clima; 
console.log(clima); //Resposta = Undefined.

var str_clima = "";
console.log(typeof str_clima); //Resposta = string.

var bool_clima = true;
console.log(typeof bool_clima); //Resposta = boolean.

var int_clima = 0;
console.log(typeof int_clima); //Resposta = number.

//Alterando o typeof;

var exemplo = true;
console.log(typeof exemplo); //Resposta = boolean.
var exemplo = "";
console.log(typeof exemplo); //Resposta = string;

//Scope com var.

//O que é Scope? (Escopo em Português)

/* Scope nada mais é que a abertura e o fechamento de parênteses. */

//Scope + variável "var".

/* Anteriormente dito, var é uma variável tanto local quanto global, 
então não importa onde ela esteja, ela é encontrada. */

//Exemplo.

var global_var = "global"; //Fora do escopo.
{
    console.log("Encontrei a variável: ", global_var); //Foi encontrada.
}
//=========================================
{
    var global_var_2 = "global 2"; //Dentro do escopo.
}
console.log("Encontrei a variável: ", global_var_2); //Foi encontrada.

//AVISO: A variável só pode ser encontrada se você declará-la antes.

//Scope + variável "let".

/* Anteriormente dito, let é uma variável somente local, então ela só 
é encontrada caso eu declare e chame ela dentro do escopo. */

//Exemplo:

{
    let local_let = "local let"; //Dentro do escopo.
    console.log("Encontrei a variável local: ", local_let); //Foi encontrada.
}
//=========================================
/* Nessa parte só tera exemplo comentado, pois não queremos erros no código 
para poder dar a continuação, então para a variável let não ser encontrada
ficaria mais ou menos assim: */

/* <------ Remova o trecho comentado aqui para ver o erro.
{
    let local_let_2 = "local let 2";
}
console.log("Não foi encontrada a variável: ", let_local_2);
*/ //<------ Remova o trecho comentado aqui para ver o erro.

//Nessa parte irá dar um erro, para ver basta tirar o comentário dessa parte.

//Scope + variável "const".

/* Anteriormente dito, const é uma variável somente local, então ela só 
é encontrada caso eu declare e chame ela dentro do escopo, com uma única
diferença da let que pode ser alterada, diferente da const que continua
com o mesmo valor até o fim. */

/* Seu exemplo acaba sendo o mesmo da variável "let", então vamos dar 
uma poupada nas linhas dos códigos pois você já sabe como funciona. */