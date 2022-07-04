console.log("Ex021: Contando de 1 até 10")

function start(){
    for(i = 1; i <= 10; i++){
        document.getElementById('contador').innerHTML += (`<br>Contador: ${i}`)
    }
}
