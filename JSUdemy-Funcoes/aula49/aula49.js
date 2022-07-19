// declaração de função (function hoisting)
// hoisting a engine do javascript elevar as declarações de funções e variaveis com a palavra para o topo do javascript.

// falaOi(); --> vai funcionar

function falaOi(){
    console.log('oie') // só quando você declara dessa meneira com esse tipo de function, ocorre o hoisting.
}

// sendo assim posso chamar a função antes ou depois.

// falaOi(); --> vai funcionar

// first-class objects (Objetos de primeira classe)

// function expression

const nome = 'Luiz';

const souUmDado = function (){ // minha váriavel recebeu uma função e se tornou uma função.
    console.log('Sou um dado.');
};

// souUmDado();

function executaFuncao(funcao){
    funcao()
}
executaFuncao(souUmDado) // sendo assim eu passo o dado que ele espera e vai exutar a função.

// Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// dentro de um objeto eu posso ter uma função.

const obj = {
    falar: function(){
        console.log('estou falando...');
    }
    // falar (){
      //  console.log('Estou falando...'); posso fazer deste jeito também
    //}
};
obj.falar();