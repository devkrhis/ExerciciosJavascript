// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

function returnDice (){
    
    let getPrimaryValue = Number(document.querySelector('#oneValue').value);
    console.log(getPrimaryValue)
    let getSecondValue = Number(document.querySelector('#twoValue').value);
    console.log(getSecondValue)
    let getThirdValue = Number(document.querySelector('#treeValue').value);
    console.log(getThirdValue)

    allValue (getPrimaryValue, getSecondValue, getThirdValue)
}

function allValue (primarValue, secondValue, thirdValue){
    document.getElementById("retorno").innerHTML = (Number(primarValue + secondValue + thirdValue)) / 3
}