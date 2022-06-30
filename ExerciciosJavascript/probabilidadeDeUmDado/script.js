// A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.



function returnDice(){
    let takingPossibilities = Number(document.querySelector('#blueDice').value);
    console.log(takingPossibilities);

    diceMath(takingPossibilities);
    document.createElement('table')
}

function diceMath(takingPossibilities){
    let aleatory = Math.floor(Math.random() * 6 + 1)
    // let calc = (takingPossibilities/6) * 100;
    let total = aleatory//calc.toFixed(2)
    console.log(takingPossibilities)
    console.log(total)

    guardandoPrimeiraVariavel 
    guardandoSegundaVariavel
    guardandoTerceiraVariavel
    guardandoQuartaVariavel
    guardandoQuintaVariavel
    guardandoSextaVariavel

    positionsArray = [0,1,2,3,4,5,6];
    
    for(let i = 1; i < positionsArray.length; i++){

        document.getElementById("retorno").innerHTML += (`A possibilidade do numero ${i} é: ${total}`)
        console.log(`A possibilidade do numero ${i} é: ${total}`)
    }
}