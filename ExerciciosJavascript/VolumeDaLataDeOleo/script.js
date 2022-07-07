// 9. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
// seu raio e sua altura.

function getValues(){
    let getRaio = Number(document.querySelector('#getValueRaio').value);
    let getAltura = Number(document.querySelector('#getValueAltura').value);
    console.log(getRaio,getAltura)


    script(getRaio,getAltura)
}

function script(setRaio, setAltura){
    // V = π · r² · h
    //exemplo: V = 3,14 · 0,6² · 5,4

    let calcAll = 3 * (setRaio ** 2) * setAltura * 1000
    let calcFomarted = Math.round(calcAll)
    document.getElementById('getValuesScript').innerHTML = (`O volume da lata de óleo é: ${calcFomarted}`);

}