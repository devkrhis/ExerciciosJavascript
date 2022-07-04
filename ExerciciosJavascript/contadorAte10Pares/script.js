// Contando de 1 até 10 (marcando os pares)

let a = 0

function start(){
    for(i = 1; i <= 10; i++){
        document.getElementById("contador").innerHTML += (`<br>O numeros são: ${i}`);
        if (i <= 5){
            a = a + 2
            document.getElementById("pares").innerHTML += (`<br> Os Numeros pares são: ${a}`)
        }
       
    }
    
}
