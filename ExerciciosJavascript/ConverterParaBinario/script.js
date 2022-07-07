function startBinario(){
    let getBinario = document.querySelector('#getNumber').value

    scriptBinario(getBinario)
}
//Converter um inteiro informado menor que 32 para sua representação em binário
function scriptBinario(setBinario){
    if(setBinario > 32){
        console.log("Por gentileza informe um numero menor");
    } else if (setBinario < 2){
        console.log("Por gentileza informe um numero maior");
    }

    let calcDivBinario = setBinario / 2;
    let calcRestBinario = setBinario % 2;
    let calcA = '';
    let calcB = '';


    for(i=0; calcDivBinario / 2 === 1; i++){ // aqui tá errado
        console.log(calcDivBinario)
    }

}