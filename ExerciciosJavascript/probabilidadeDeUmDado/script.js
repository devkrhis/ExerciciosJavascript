// A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.



function returnDice(){
    let takingPossibilities = Number(document.querySelector('#blueDice').value);
    console.log(takingPossibilities);

    diceMath(takingPossibilities);
    document.createElement('table')
}

function diceMath(takingPossibilities){
    
    positionsArray = [0,1,2,3,4,5,6];

    let guardandoPrimeiraVariavel = 0
    let guardandoSegundaVariavel = 0
    let guardandoTerceiraVariavel = 0
    let guardandoQuartaVariavel = 0
    let guardandoQuintaVariavel = 0
    let guardandoSextaVariavel = 0


    
    for(let i = 1; i <= takingPossibilities; i++){
        //girandoDado += 6
        let aleatory = Math.floor(Math.random() * 6 + 1)
        if (aleatory == 1){
           guardandoPrimeiraVariavel += 1 

        } else if(aleatory == 2) {
            guardandoSegundaVariavel += 1

        } else if (aleatory == 3) {
            guardandoTerceiraVariavel += 1

        } else if (aleatory == 4) {
            guardandoQuartaVariavel += 1

        } else if (aleatory == 5){
            guardandoQuintaVariavel += 1

        } else if (aleatory == 6) {
            guardandoSextaVariavel += 1
        } else {
            console.log("Alguma coisa deu errado para cair aqui!")
        }


        
    }

    //console.log("meu daddo é:", girandoDado)
    let calc1 = (guardandoPrimeiraVariavel/takingPossibilities) * 100;
    let calc2 = (guardandoSegundaVariavel/takingPossibilities) * 100;
    let calc3 = (guardandoTerceiraVariavel/takingPossibilities) * 100;
    let calc4 = (guardandoQuartaVariavel/takingPossibilities) * 100;
    let calc5 = (guardandoQuintaVariavel/takingPossibilities) * 100;
    let calc6 = (guardandoSextaVariavel/takingPossibilities) * 100;
    total1 = calc1.toFixed(2)
    total2 = calc2.toFixed(2)
    total3 = calc3.toFixed(2)
    total4 = calc4.toFixed(2)
    total5 = calc5.toFixed(2)
    total6 = calc6.toFixed(2)

    totalpossibilidade = calc1+calc2+calc3+calc4+calc5+calc6
    console.log(takingPossibilities)
    console.log('A primeira variavel:',guardandoPrimeiraVariavel)

    document.getElementById("retorno").innerHTML += (`O numero 1, foi selecionado ${guardandoPrimeiraVariavel} vezes, A possibilidade do numero é: ${total1}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O numero 2, foi selecionado ${guardandoSegundaVariavel} vezes, A possibilidade do numero é: ${total2}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O numero 3, foi selecionado ${guardandoTerceiraVariavel} vezes, A possibilidade do numer é: ${total3}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O numero 4, foi selecionado ${guardandoQuartaVariavel} vezes, A possibilidade do numero é: ${total4}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O numero 5, foi selecionado ${guardandoQuintaVariavel} vezes, A possibilidade do numero é: ${total5}%<br><br>`)
        
    document.getElementById("retorno").innerHTML += (`O numero 6, foi selecionado ${guardandoSextaVariavel} vezes, A possibilidade do numero é: ${total6}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O total da porcentagem é: ${totalpossibilidade}%`)


}