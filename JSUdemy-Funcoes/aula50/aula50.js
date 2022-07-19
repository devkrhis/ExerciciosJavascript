// Especificamente para a function dessa forma, existe uma expressão chamada arguments que eu consigo ver todos os argumentos passado para a function.
// function funcao(){
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

function conta (operador, acumulador, ...numeros) /* esse ...numeros ou qualquer outra coisa com ... se chama rest operator, ele pega qualquer argumento passado exemplo: */{
for (let numero of numeros) /* lembrando que o of pega os valores e o in os indice */ {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    }

console.log(acumulador);
};
conta('/', 1, 20, 30, 40, 50); // podemos ver que temos apenas 3 parametros, mas aqui temos vários valores, sendo assim o ...numeros ele pega todos apos o indice 1, isso por causa do REST OPERATOR ...numeros

function conta1 (){

};

const conta = function teste (){
};

const conta3 = () => {
    // as 3 são as mesma coisa a unica coisa que altera é a forma de escrita.
    // também muda essa que é a arrow function utilizado com this, porém ainda não foi explicado.
};