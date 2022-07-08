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

    let calcDivBinario = setBinario;
    console.log(calcDivBinario)
    let calcA = '';
    let calcB = '';

    for(i=0; calcDivBinario >= 1; i++){
        calcDivBinario = Math.floor(calcDivBinario / 2)
        console.log("Aqui está o calcDivBinario", calcDivBinario)

        
        if(calcDivBinario > 0 || calcDivBinario <= 2){
            console.log('cheguei aqui.')
            calcA += calcDivBinario
            console.log(calcA,'topzera do role')

        }

        let teste = Math.floor(calcDivBinario) % 2
        console.log('teste',teste)
        console.log("Valor do calcdivBinario = ", calcDivBinario)
        if(teste === 0 || teste === 1){
            calcB += teste
            console.log("Cheguei até aqui no CALcB:", calcB)
        }
        console.log("Aqui está o CalcA", Math.floor(calcA))
        
    }

}