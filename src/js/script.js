// Guardando as chaves e api do Open Weather Map
const apiKey = '914165f84154fce7f294fd0f805e37ca'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const pesquisa = document.querySelector('.search input')
const pesquisaBtn = document.querySelector('.search button')

async function checarClima(cidade) {
    const response = await fetch(`${apiUrl}${cidade}&appid=${apiKey}`)
    var data = await response.json()
    
    // Conferir os caminho pelo do console
    console.log(data)

    // Percorrendo na API e encontrando os valores
    // data.main. > name/temp/humidity/wind
    document.querySelector('.cidade').innerHTML = data.name
    document.querySelector('.temperatura').innerHTML = `${Math.round(data.main.temp)}°c`
    document.querySelector('.umidade').innerHTML = `${data.main.humidity}%`
    document.querySelector('.vento').innerHTML = `${data.wind.speed} km/h`
}

pesquisaBtn.addEventListener('click', function() {
    checarClima(pesquisa.value)
})