/* Os objetos são partes que armazenam
informações e podem ser chamada e até 
alteradas dependendo da variável. */

//Exemplo:

{
    let pessoa = {
        nome: "Juan",
        idade: 15
    }

    console.log("Nome: " + pessoa.nome + " Idade: "
    + pessoa.idade);
}

//Outro exemplo, só que alterando os valores.

{
    let pessoa = {
        nome: "",
        idade: 0
    }

    pessoa.nome = "Carlos";
    pessoa.idade = 37;

    console.log("Nome: " + pessoa.nome + " Idade: "
    + pessoa.idade);
}