//5. Ler um número inteiro e exibir o seu sucessor.

function getNumber(){
    let valueNumber = Number(document.querySelector("#number").value)
    console.log(valueNumber)

    setNumberPredecessor(valueNumber)
    setNumberSucessor(valueNumber)

}

function setNumberPredecessor(predecessor){
    let getPredecessor = predecessor - 1
    document.getElementById("returnPredecessor").innerHTML = (`O numero digitado foi ${predecessor} e seu Antecessor é: ${getPredecessor}`)

}

function setNumberSucessor(sucessor){
    let getSucessor = sucessor + 1
    document.getElementById("returnSucessor ").innerHTML = (`O numero digitado foi ${sucessor} e seu Sucessor é: ${getSucessor}`)

}