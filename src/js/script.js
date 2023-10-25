// Guardando as chaves e api do Open Weather Map
const apiKey = '914165f84154fce7f294fd0f805e37ca'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const pesquisa = document.querySelector('.search input')
const pesquisaBtn = document.querySelector('.search button')
const iconClima = document.querySelector('.icon-clima')

async function checarClima(cidade) {
    const response = await fetch(`${apiUrl}${cidade}&appid=${apiKey}`)

    var data = await response.json()
    
    // Conferir os caminho pelo do console
    console.log(data)

    if (response.status == 404) {
        document.querySelector('.cidade').innerHTML = '<h2 style="font-size:35px">Cidade não encontrada</h2>'
        document.querySelector('.temperatura').innerHTML = '-°c'
        document.querySelector('.umidade').innerHTML = '-%'
        document.querySelector('.vento').innerHTML = '- km/h'
        iconClima.src = './src/img/snow.png'
    } else {
        // Percorrendo na API e encontrando os valores
        // data.main. > name/temp/humidity/wind
        document.querySelector('.cidade').innerHTML = data.name
        document.querySelector('.temperatura').innerHTML = `${Math.round(data.main.temp)}°c`
        document.querySelector('.umidade').innerHTML = `${data.main.humidity}%`
        document.querySelector('.vento').innerHTML = `${data.wind.speed} km/h`

        // Comparando a imagem de tempo
        if (data.weather[0].main == 'Clear') {
            // Trocando a imagem
            iconClima.src = './src/img/clear.png'
        } else if (data.weather[0].main == 'Clouds') {
            iconClima.src = './src/img/clouds.png'
        } else if (data.weather[0].main == 'Drizzle') {
            iconClima.src = './src/img/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            iconClima.src = './src/img/mist.png'
        } else if (data.weather[0].main == 'Rain') {
            iconClima.src = './src/img/rain.png'
        } else if (data.weather[0].main == 'Snow') {
            iconClima.src = './src/img/snow.png'
        }
    }

}

pesquisaBtn.addEventListener('click', function() {
    checarClima(pesquisa.value)
})