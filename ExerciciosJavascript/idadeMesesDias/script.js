function teste(){
    let getValueDias = Number(document.querySelector('#idade').value)
    setIdade(getValueDias)
}

function setIdade(transformDia){  
    let transformEmAno = transformDia / 365;
    let transformEmAnoFormatado = transformEmAno;
    Math.floor(transformEmAnoFormatado);

    let transformEmMes = (transformDia - 365) / 30
    let transforEmMesFomartado = transformEmMes
    Math.floor(transforEmMesFomartado)

    let teste = Math.floor(transformEmMes) * 30
    console.log('Aqui aparece o dia: ',teste)

    let transformEmDia = (transformDia - 365) - teste
    let transformEmDiaFormatado = transformEmDia
    Math.floor(transformEmDiaFormatado) 
    
    document.getElementById("returnValue").innerHTML = (`Você tem ${Math.floor(transformEmAnoFormatado)} Anos, ${Math.floor(transforEmMesFomartado)} Mês, ${Math.floor(transformEmDiaFormatado)} Dias`)
    console.log(`Você tem ${transformEmAnoFormatado} Ano, `)
    console.log(`Você tem ${transforEmMesFomartado} Mês, `)
    console.log(`Você tem ${transformEmDiaFormatado} Dias`)

}

// function get




