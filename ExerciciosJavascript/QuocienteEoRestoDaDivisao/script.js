// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

function getValue (){
    let getPrimaryNumber = Number(document.querySelector('#primaryNumber').value);
    let getSecondNumber = Number(document.querySelector('#secondNumber').value);

    console.log(getPrimaryNumber, getSecondNumber);
    calcValues(getPrimaryNumber, getSecondNumber)
}

function calcValues (setPrimaryNumber, setSecondNumber){
    let calcQuociente = setPrimaryNumber / setSecondNumber
    let calcRestoDivisao = setPrimaryNumber % setSecondNumber
    document.getElementById('returnValue').innerHTML = (`${setPrimaryNumber} / ${setSecondNumber}, o resto da divisão é: ${calcRestoDivisao}, o quociente da divisão é ${calcQuociente}.`)
    console.log(calcQuociente, calcRestoDivisao)
}