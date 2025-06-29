const apiKey = 'e205e8be7c9227b4511e336e5d152b26';

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value.trim();
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("City not found!");
        return;
      }

      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById('weather-result').classList.remove('hidden');
    })
    .catch(() => {
      alert("Error fetching weather data.");
    });
});
