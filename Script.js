let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

// Essa função é responsável por fazer o cálculo das moedas
async function ConverterMoedas(){

    let Moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
       return resposta.json()
    })

    let dolar = Moedas.USDBRL.high
    let euro = Moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")

    if(select.value === "US$ Dólar Americano"){
        let ValorEmDolares = inputValorReais / dolar 
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'}) 
    } 
    if(select.value === "€ Euro"){
        let valorEmEuros = inputValorReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'})
    }
   
    inputReal.innerHTML = inputValorReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

// Essa função é responsável por trocar a bandeira e o nome das moedas
function trocaDeMoeda(){
let textoMoedas = document.getElementById("texto-moedas")
let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if(select.value === "US$ Dólar Americano"){
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./Imagem/estados-unidos (1) 1.png"
    }
    if(select.value === "€ Euro"){
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./Imagem/Euro.png"
    }

    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)







