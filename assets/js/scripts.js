

const key = "d2a6b98b05695c701846ecfdb107b691"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".sensacao-termica").innerHTML = "Sensação Térmica: " + Math.floor (dados.main.feels_like) + "°C"
    document.querySelector(".vento").innerHTML = "Ventos: " + dados.wind.speed + "KM/h"
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json())
    colocarDadosNaTela(dados)
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}