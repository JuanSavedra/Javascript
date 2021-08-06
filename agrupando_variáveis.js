/* As variáveis em si podem ser agrupadas, 
para não ter que separá-las uma por uma
e no final acabar declarando 20 coisas 
diferentes sendo que poderia ter sido tudo
feito em uma linha. */

//Exemplo sem Agrupar:

{
    let nome = "Daniel";
    let nome_1 = "Pedro";
    let nome_2 = "Juan";
    let nome_3 = "Carlos";

    console.log("Nomes: ", nome, nome_1, nome_2, nome_3);
}

//Exemplo com Agrupamento:

{
    let nome = "Daniel"; nome_1 = "Pedro"; 
    nome_2 = "Juan"; nome_3 = "Carlos";
    
    console.log("Nomes: ", nome, nome_1, nome_2, nome_3);
}