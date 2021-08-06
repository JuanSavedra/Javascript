/* As funções permitem você poupar linhas de código
e fazer uma certa repetição de escrita no seu script. */

//Exemplo.

{
    function criarFrases() {
        console.log("Criando a primeira frase...");
        console.log("Criando a segunda frase...");
        console.log("Criando a terceira frase...");
    }

    /* A função foi criada, mas como pode ver, ela não
    pode ser executada em um console.log, pois não é 
    aceito funções dentro dele. 
    Então para executar fazemos assim: */

    criarFrases(); //Criou as três frases uma só vez.
    criarFrases(); //Criou as três frases duas vezes.
    criarFrases(); //Criou as três frases três vezes.

    //Resultado total de frases criadas: 3.
    //Resultado total de console.log(): 9.

    /* Cada vez que eu chamo a função no código, ela executa
    tudo que está dentro dela e termina, então se eu chamar
    ela 3 vezes, ela faz todo o código dentro dela 3 vezes 
    também. */
}

/* Podemos criar funções anônimas também, ou seja, funções
dentro de uma variável. */

//Exemplo:

{
    let somar = function(número_1, número_2) { //Parâmetros
        console.log(número_1 + número_2);
    }

    somar(17, 29); //Argumentos

    /* Aqui nesse caso, a função recebeu dois parâmetros, que
    foram as variáveis: "número_1" e "número_2" */
    
    /* Na parte de chamar a função, passamos dois argumentos,
    que foi os dois números que foram guardados nas variáveis
    declaradas como parâmetro de uma função.  */
}

//Retornando Valores dentro de uma Função.

/* Podemos retornar valores dentro de uma função utilizando o 
return. */

//Exemplo.

{
    let somar = function(número_1, número_2) {
        let total = número_1 + número_2;
        return total;
    }

    let número_1 = 24, número_2 = 16;

    console.log(somar(número_1, número_2));

    /* Dúvidas:
    1- Porque as variáveis de nomes iguais não interferiram
    no resultado? 
    R: As variáveis eram do tipo "let", então as primeiras
    que foram declaradas na função ficaram lá por conta do 
    escopo que foi fechado. 
    2- Porque fazer outras variáveis ao invés de mudá-las 
    como argumentos da função? 
    R: Porque assim temos uma variável mais acessível e 
    possível de alterar valores facilmente. */
}

//Hositing Function (Elevação de Funções).

/* O hoisting de uma função nada mais é que você chamar uma 
função antes mesmo dela ser declarada no script, em outras 
linguagens como C por exemplo, considera isso uma declaração
de função. */

//Exemplo.

{
    faleUmaFruta("Maçã");

    function faleUmaFruta(nome) {
        console.log(nome);
    }
}

//Arrow Function (Função por Setas).

/* Uma arrow function, é uma função mais organizada, mais
encolhida digamos assim, ela funciona como uma função 
normal e continua com todas funções de uma função comum,
tendo de diferença apenas sua aparência. Ela é mais usada
normalmente em uma "const". */

{
    const faleUmAnimal = (nome) => {
        console.log(nome);
    }

    faleUmAnimal("Leão");
}

//Callback Function (Função de Retorno de Chamada).

/* É uma função que chama de volta uma outra função dentro
de si mesma. */

//Exemplo:

{
    function faleUmNome(name) {
        name();
    }

    faleUmNome(
        () => {
            console.log("Callback Function");
        }
    )

    /* A função de retorno utilizou a variável nome para escrever
    uma função dentro dessa variável, e por não mostrar a função
    por inteiro, ela pegou apenas o console.log() que era a linha
    de comando pra ser executada. */
}

//Funções Construtoras.

/* Funções Construtoras usam parâmetros como this para especificar
o elemento que vai ser citado como variável embaixo da função.
Elas tem como intuito boa parte das vezes criar um novo objeto e
podem receber funções dentro de si mesma. */

//Exemplo.

{
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.andar = function(país) {
            return `${this.nome} está indo para ${país}`;
        }
    }

    const juan = new Pessoa("Juan", 15);
    const carlos = new Pessoa("Carlos", 18);

    console.log("Pessoa 1: ", juan);
    console.log("Pessoa 2: ", carlos);
    console.log(juan.andar("Paris."));
    console.log(carlos.andar("Roma."));
}