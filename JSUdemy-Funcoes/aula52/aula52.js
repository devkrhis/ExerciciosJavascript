const nome = 'Krhistopher';

function falaNome(){
    console.log(nome)
}
falaNome();

// expressão lexica, de dentro da função eu posso acessar qualquer variavel, nos vizinhos até no parte global
// Caso não esteja definido ai ira apresentar erro.
// mesmo que eu tenha outra function e declare o nome dentro dela, ela busca do vizinho exemplo:

function chamaNome(){
    const nome = 'Fredo';
    falaNome()
}

chamaNome() // vai chamar o nome krhistopher, mas caso eu declaro dentro da function ele vai chamar o que está dentro da primeira function, se eu declarar nesta como eu fiz ele está chamando a outra function.