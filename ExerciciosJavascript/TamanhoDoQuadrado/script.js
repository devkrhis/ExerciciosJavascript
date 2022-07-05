// 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

function start (){
    let getLado = Number(document.querySelector('#getArea').value)

    console.log(getLado)

    getPerimetro(getLado)
    getArea(getLado)
}

function getPerimetro(perimetro){
    let calcPerimetro = 4 * perimetro
    document.getElementById("setPerimetro").innerHTML = (`O calculo do perimetro é: 4 x ${perimetro} = ${calcPerimetro}`) 
}

function getArea(perimetro){
    let calcArea = perimetro * perimetro
    document.getElementById("setArea").innerHTML = (`O calculo do perimetro é: ${perimetro} x ${perimetro} = ${calcArea}`) 
}