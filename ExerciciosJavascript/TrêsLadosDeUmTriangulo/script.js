function setValues (){
    let primaryValue = Number(document.querySelector('#firstSide').value);
    let secondValue = Number(document.querySelector('#secondSide').value);
    let thirdValue = Number(document.querySelector('#thirdSide').value);

    console.log(primaryValue,secondValue,thirdValue)

    getPerimeter(primaryValue,secondValue,thirdValue)
}

function getPerimeter(firstPerimeterValue, secondPerimeterValue, thirdPerimeterValue){
    let trianglePerimeter = Number(firstPerimeterValue+secondPerimeterValue+thirdPerimeterValue)
    document.getElementById("setPerimeter").innerHTML = (`O perimetro é: ${firstPerimeterValue} + ${secondPerimeterValue} + ${thirdPerimeterValue} = ${trianglePerimeter}`)
}

