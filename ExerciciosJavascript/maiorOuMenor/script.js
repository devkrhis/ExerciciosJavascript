// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.


function start(){
    let GetPrimaryValue = Number(document.querySelector('#primaryValue').value);
    let GetSecondValue = Number(document.querySelector('#secondValue').value);
    let GetTreeValue = Number(document.querySelector('#treeValue').value);

    console.log(GetPrimaryValue, GetSecondValue, GetTreeValue)

    returnDiceLager(GetPrimaryValue, GetSecondValue, GetTreeValue);
    returnDiceSmall(GetPrimaryValue, GetSecondValue, GetTreeValue);

}

function returnDiceLager(primaryValue, secondValue, treeValue){
    console.log("Retorno do maior numero")
    if(primaryValue > secondValue && primaryValue > treeValue){
        document.getElementById("retornoMaior").innerHTML = primaryValue;
    } else if (secondValue > primaryValue && secondValue > treeValue){
        document.getElementById("retornoMaior").innerHTML = secondValue;
    } else if (treeValue > primaryValue && treeValue > secondValue){
        document.getElementById("retornoMaior").innerHTML = treeValue;
    }
    console.log(primaryValue, secondValue, treeValue);

}

function returnDiceSmall(primaryValue, secondValue, treeValue){
    console.log("Retorno do numero menor")
    if(primaryValue < secondValue && primaryValue < treeValue){
        document.getElementById("retornoMenor").innerHTML = primaryValue;
    } else if (secondValue < primaryValue && secondValue < treeValue){
        document.getElementById("retornoMenor").innerHTML = secondValue;
    } else if (treeValue < primaryValue && treeValue < secondValue){
        document.getElementById("retornoMenor").innerHTML = treeValue;
    }
    console.log(primaryValue, secondValue, treeValue);

}