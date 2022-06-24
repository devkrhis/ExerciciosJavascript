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
    calcFarenheit();

}

function transformFarenheitemCelsium(valorFarenheit){
    console.log(valorFarenheit) // function com parametro de fora.
    calcCelsius();
}

function calcCelsius (){

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

function calcFarenheit (){

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


/*
Duvidas
1 - Não consigo desenvolver sozinho, tenho que ver meus outros codigos de html, css e javascript.
2 - como pegar uma valor de uma box?
3 - como pegar um valor de uma function
*/