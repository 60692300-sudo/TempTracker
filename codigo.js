const apiKey = "500881f9d5df4d02a40191346261209"; // <- TU LLAVE REAL
const apiUrl = "https://api.weatherapi.com/v1/current.json?q=";

const inputCiudad = document.getElementById("input-ciudad");

async function obtenerClima() {
    const ciudad = inputCiudad.value;
    if(ciudad === "") {
        alert("Escribe una ciudad");
        return; 
    }

    try {
        const response = await fetch(apiUrl + ciudad + "&key=" + apiKey + "&lang=es");
        const data = await response.json();

        document.querySelector(".ciudad").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humedad").innerHTML = data.current.humidity + "%";
        document.querySelector(".viento").innerHTML = data.current.wind_kph + " km/h";
        document.querySelector(".clima-texto").innerHTML = data.current.condition.text;
    } 
    catch(error) {
        alert("Ciudad no encontrada :(");
    }
}