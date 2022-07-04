console.log('Fatorial de um número')

function setFatorial(){
    let valueFatorial = Number(document.querySelector('#fatorial').value);

    calcFatorial(valueFatorial)
}

function calcFatorial (Fatorial){
    let getFatorial = Fatorial
    // exemplo: 4! = 4. 3 . 2 . 1 = 24
    for(n = (Fatorial-1); n> 0; n--){    
        getFatorial = ( getFatorial* n)
    }
    
   document.getElementById("retorno").innerHTML += (`<br>O fatorial de ${Fatorial}! = ${getFatorial} <br>`)

}