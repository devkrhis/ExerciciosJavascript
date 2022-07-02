// Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.
function getDados (){
    let getNumber = Number(document.querySelector('#randomNumber').value);
    console.log(getNumber)

    receiveWhole(getNumber)
    
}

function receiveWhole(getNumber){
    let n = 0

    if(getNumber < 0){
        console.log('Por gentileza informe um numero positivo')
    } else if (getNumber > 1){
        for (n = 2; n < getNumber; n++){
            if(getNumber % n == 1){
                console.log("O numero é primo")
                break;
            } else {
                console.log("O numero não é primo")
                break;
            }

        }
    } else {
        console.log('Isto não é um numero!')
    }
    
}

// function showAll (){

// }

