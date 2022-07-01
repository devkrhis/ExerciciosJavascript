// A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.
function returnDice(){
    let takingPossibilities = Number(document.querySelector('#blueDice').value);
    console.log(takingPossibilities);

    diceMath(takingPossibilities);
    document.createElement('table')
}

function diceMath(takingPossibilities){

    let guardandoPrimeiraVariavel = 0
    
    for(let i = 1; i <= takingPossibilities; i++){
        let aleatory = Math.floor(Math.random() * 6 + 1)
        if (aleatory == 1){
           guardandoPrimeiraVariavel += 1 
        } else {
            console.log("Alguma coisa deu errado para cair aqui!")
        }
    }

    let calc1 = (1/6) * 100;

    total1 = calc1.toFixed(2)

    console.log(takingPossibilities)
    console.log('A primeira variavel:',guardandoPrimeiraVariavel)

    document.getElementById("retorno").innerHTML += (`A provabilidade do numero é: ${total1}%<br><br>`)

    document.getElementById("retorno").innerHTML += (`O total da porcentagem é: ${total1}%`)

}