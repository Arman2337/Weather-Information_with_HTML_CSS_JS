// document.getElementById('weather-form').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const city = document.getElementById('city-input').value;
//     const apiKey = 'a5d91bc4a86998883bd2df4bd2c64d55'; // Replace with your OpenWeatherMap API key
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         console.log(response); // Log the response
//         if (!response.ok) throw new Error('City not found');
//         const data = await response.json();
//         console.log(data); // Log the data for verification
    
//         // Rest of your code...
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
//     }
    
//     }
// );

document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const city = document.getElementById('city').value;
    const apiKey = 'a5d91bc4a86998883bd2df4bd2c64d55'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weather = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
        });
});

