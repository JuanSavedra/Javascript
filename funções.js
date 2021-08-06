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