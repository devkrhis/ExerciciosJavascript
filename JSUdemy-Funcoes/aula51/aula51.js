function soma(){
    return a+b;
}

function soma2(){
    console.log(a + b)
}

soma(2,3) // aqui na soma, como está com return ele me retorna o valor, lembrando que qualquer coisa após o return não ira mostrar, o return tem que ser a ultima palavra pois é ele que dá o retorno.
soma2(2,3) // na soma 2 como está com console.log, mesmo somando o console.log ele me apenas me mostra o que está acontecendo ele não me retorna nada

document.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red'; // nessa função toda vez que eu clicar ele muda a cor para a red, porém ele não me retorna nada, nem sempre a função tem que retornar alguma coisa, mas ela faz alguma coisa e essa muda a cor do meu background.
});

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otavio'); // posso fazer dessa forma, pois entende que estou passando os valores
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira',
} // mesma coisa que o p1 só que de outra forma e sem fuction.


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto; // esse return é do escopo do falaResto, porém o return comeco eu estou pegando o parametro da função externa. 
    }
    return falaResto; // esse return é do escopo falaFrase. Porém esse return restorna a função falaResto e quando eu retorno uma função sem executar ela, eu estou retornando a função em si.
}

const olaMundo = falaFrase('Olá') // aqui eu estou jogando esse olá para dentro do (comeco), porém dessa forma ele retorna uma função.
//console.log(olaMundo)// dessa forma eu chamo uma função, pois meu ola mundo tá recebendo uma função, para eu chamar o olamundo eu tenho que fazer dessa forma.

console.log(olaMundo('Mundo!')); // dessa forma vai sair('Olá Mundo!')

// outro exemplo:

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2) // esse vai se tornar o multiplicador
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(2)) // esse vai se tornar o N
console.log(triplica(2))
console.log(quadruplica(2))