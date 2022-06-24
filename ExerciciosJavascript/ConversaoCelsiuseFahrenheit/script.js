// Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.
// Conversão Celsius e Fahrenheit

// O que fazer? Primeiro pegar os dados da box e salvar esse dados, depois ter outra function dentro da function que pegou os dados e valida se é verdadeiro ou não os dados
// caso o graus seja verdadeiro ele joga para uma function que faz a conta e devolve o resultado.

function pegandoDadosBox (){
    const oneBox = document.querySelector('#farenheitbox').checked;
    const secondBox = document.querySelector('#grausbox').checked;

    console.log(oneBox)
    console.log(secondBox)

    function pegandoValores(){
        const grausValue = document.querySelector('#graus');
        const farenheitValue = document.querySelector('#farenheit');
    
        const grausnumber = new Number(grausValue.value);
        console.log(grausnumber)
        const farenheitnumber = new Number(farenheitValue.value);
        console.log(farenheitnumber)
    }

    console.log(pegandoValores(30, 90))
}




pegandoDadosBox();
console.log(pegandoDadosBox());
pegandoDadosBox(pegandoValores());

/*
Duvidas
1 - Não consigo desenvolver sozinho, tenho que ver meus outros codigos de html, css e javascript.
2 - como pegar uma valor de uma box?
3 - como pegar um valor de uma function
*/