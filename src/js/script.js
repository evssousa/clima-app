// Guardando as chaves e api do Open Weather Map
const apiKey = '914165f84154fce7f294fd0f805e37ca'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore'

async function checarClima() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    document.querySelector('.cidade').innerHTML = data.name
    document.querySelector('.temperatura').innerHTML = data.main.temp
    document.querySelector('.umidade').innerHTML = data.main.humidity
    document.querySelector('.vento').innerHTML = data.wind.speed
}