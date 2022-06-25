// Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.
// Conversão Celsius e Fahrenheit

// O que fazer? Primeiro pegar os dados da box e salvar esse dados, depois ter outra function dentro da function que pegou os dados e valida se é verdadeiro ou não os dados
// caso o graus seja verdadeiro ele joga para uma function que faz a conta e devolve o resultado.

function start(){ // tenho que colocar uma função quando é chamada
    let oneBox = pegandoDadosOneBox()
    let secondBox = pegandoDadosSecondBox()

    transformCelsiusemFarenheit()

    let pegandoFarenheit = document.querySelector('#farenheitInput').value;

    transformFarenheitemCelsium(pegandoFarenheit);
    console.log(oneBox, secondBox)

    calcCelsius(pegandoFarenheit)
    calcFarenheitOne()
}

function pegandoDadosOneBox (){// a function só guarda 
    return document.querySelector('#farenheitbox').checked;
}

function pegandoDadosSecondBox (){
    return document.querySelector('#grausbox').checked;
}


function transformCelsiusemFarenheit(){
    let pegandoCelsius = document.querySelector('#grausInput').value;
    console.log(pegandoCelsius) 

}

function transformFarenheitemCelsium(valorFarenheit){
    console.log(valorFarenheit) // function com parametro de fora.
}

function calcCelsius (valorFarenheit){
    console.log(valorFarenheit)

    let oneBox = pegandoDadosOneBox()
    console.log(oneBox)

    let calcFarenheit = (valorFarenheit - 32)/1.8 // transformando em celsius

    if (oneBox == true){
        console.log(`Transformando Farenheit em Graus ${calcFarenheit}`)
    } else {
        console.log(`Opção invalida!`)
    }
}

function calcFarenheitOne (){

    let secondBox = pegandoDadosSecondBox()
    let valorFanheitFunction = document.querySelector('#farenheitInput').value;

    let calcGraus = ( valorFanheitFunction * 1.8)+32 // transformando em fahrenheit

    if (secondBox == true){
        console.log(`Transformando Graus em Farenheit ${calcGraus}`)
    } else {
        console.log(`Opção invalida!`)
    }
}


/*
Duvidas
1 - Não consigo desenvolver sozinho, tenho que ver meus outros codigos de html, css e javascript.
2 - como pegar uma valor de uma box?
3 - como pegar um valor de uma function
*/