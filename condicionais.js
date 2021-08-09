//If (Se) e (Se não) Else.

/* O if, else if e o else são condições que dependendo
do parâmetro executam tal ação.
O if recebe um parâmetro */

//Exemplo.

{
    let número = 2;

    if (número == 0) {
        console.log("Número igual á 0.");
    } else if (número == 1) {
        console.log("Número igual á 1.");
    } else if (número == 2) {
        console.log("Número igual á 2.");
    } else {
        console.log("Não reconheci o número.");
    }

    /* Se o número tivesse o valor armazenado como 3 ele 
    iria executar a ação dizendo: "Número igual á 3." 
    */
}

//Switch.

/* Uma alternativa bem mais bonita que os ifs passados
anteriormente seria o switch, mas, ele não pode ser usado
em qualquer situação pois ele executa somente a entrada
da mesma variável. */

//Exemplo.

{
    let número = 8;

    switch(número) {
        case 0:
            console.log("Número igual á 0.");
            break;
        case 1:
            console.log("Número igual á 1.");
            break;
        case 2:
            console.log("Número igual á 2.");
            break;
        default:
            console.log("Não reconheci o número.");
            break;
    }
}

/* Quando usar switch e if? */

/* O switch devemos utilizar quando queremos comparar a mesma variável 
ou expressão com várias opções.
- O if devemos utilizar quando queremos realizar uma série de 
verificações distintas. */

//Try e Catch.

/* Try (Tentar) e Catch (Capturar)
Essa condição tenta pegar uma certa coisa, sendo aberta a qualquer 
tipo de erro, diferente do if que você tem que fazer várias 
condições para conseguir  encontrá-lo.  */

//Exemplo.

function animal(nome = "") {
    if (nome === "") {
        throw "Nenhum nome encontrado." //Erro.
    }

    //Se não houver erros, entra na segunda parte da função
    console.log("Nenhum erro."); //Relatório.
    console.log("Nome do animal: ", nome); //Término da função.
}

try { //Tenta executar função.
    animal(); //Executa sem um nome contido no parâmetro (erro).
} catch(error) { //Pega o erro encontrado.
    console.log(error); //Apresenta no console: "Nenhum erro"
}

/* Nesse exemplo, se você colocar um nome como parâmetro
da função, não apresentará mais erros e o código continuará. */