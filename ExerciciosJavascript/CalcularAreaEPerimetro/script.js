// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

function start(){
    let GetPrimaryValue = Number(document.querySelector('#primaryValue').value);
    let GetSecondValue = Number(document.querySelector('#secondValue').value);
    console.log(GetPrimaryValue, GetSecondValue);

    calcBase(GetPrimaryValue, GetSecondValue);
}

function calcBase(getBase, getAltura){

    let altura = getBase * getAltura
    document.getElementById("returnAltura").innerHTML = (`<br>A aréa do retangulo é: ${getBase} x ${getAltura} = ${altura}`)

    let perimetro = 2 * (getBase + getAltura)
    document.getElementById("returnPerimetro").innerHTML = (`<br>O perimetro do retangulo é: 2 * (${getBase} + ${getAltura}) = ${perimetro}`)

}