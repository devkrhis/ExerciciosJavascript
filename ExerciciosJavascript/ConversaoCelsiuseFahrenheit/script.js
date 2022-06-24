// Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.
// Conversão Celsius e Fahrenheit

// O que fazer? Primeiro pegar os dados da box e salvar esse dados, depois ter outra function dentro da function que pegou os dados e valida se é verdadeiro ou não os dados
// caso o graus seja verdadeiro ele joga para uma function que faz a conta e devolve o resultado.

function pegandoDadosBox (){
    const oneBox = document.querySelector('#farenheitbox').checked;
    const secondBox = document.querySelector('#grausbox').checked;

    console.log(secondBox);
    console.log(oneBox); 
 
}

function pegandoValores(){
    const grausValue = document.querySelector('#graus');
    const farenheitValue = document.querySelector('#farenheit');

    const grausnumber = new Number(grausValue.value);
    console.log(grausnumber)
    const farenheitnumber = new Number(farenheitValue.value);
    console.log(farenheitnumber)
}

function calcGeral (){

    let calcFarenheit = (farenheitnumber - 32)/1.8 // transformando em celsius
    let calcGraus = (calcGraus * 1.8)+32 // transformando em fahrenheit

    if (oneBox == true){
        console.log(`Transformando Farenheit em Graus ${calcGraus}`)
    } else if (secondBox == true){
        console.log(`Transformando Graus em Farenheit ${calcFarenheit}`)
    } else {
        console.log(`Opção invalida!`)
    }
}



pegandoDadosBox();

/*
Duvidas
1 - Não consigo desenvolver sozinho, tenho que ver meus outros codigos de html, css e javascript.
2 - como pegar uma valor de uma box?
3 - como pegar um valor de uma function
*/