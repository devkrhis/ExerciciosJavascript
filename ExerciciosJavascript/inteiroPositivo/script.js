// Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.
function getDados (){
    let giveMeDados = Number(document.querySelector('#randomNumber').value);
    console.log(giveMeDados)

    receiveWhole(giveMeDados)
    
}

function receiveWhole(giveMeDados){
    let primo = 0;
    let primo1 = 0;

    if(giveMeDados < 0){
        console.log('Por gentileza informe um numero positivo')
    } else if (giveMeDados > 1){
        console.log("não dá pra fazer com divisão.")
    } else {
        console.log('Isto não é um numero!')
    }
    

}

// function showAll (){

// }

