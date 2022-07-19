// Especificamente para a function dessa forma, existe uma expressão chamada arguments que eu consigo ver todos os argumentos passado para a function.
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);