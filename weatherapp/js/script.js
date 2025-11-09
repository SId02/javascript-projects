 const weatherDescriptions = {
      0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Depositing rime fog',
      51: 'Drizzle: Light', 61: 'Rain: Slight', 63: 'Rain: Moderate', 65: 'Rain: Heavy',
      80: 'Rain showers: Slight', 95: 'Thunderstorm', 99: 'Thunderstorm: Heavy hail'
    };

    const topWorldCities = ['New York','London','Tokyo','Paris','Dubai','Singapore','Hong Kong','Sydney','Los Angeles'];
    const topIndiaCities = ['Mumbai','Delhi','Bangalore','Hyderabad','Chennai','Kolkata','Pune','Ahmedabad','Jaipur','Lucknow'];

    const cityInput = document.getElementById('cityInput');
    const btnSearch = document.getElementById('btnSearch');
    const errorMessage = document.getElementById('errorMessage');
    const weatherInfo = document.getElementById('weatherInfo');
    const citiesContainer = document.getElementById('citiesContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const btnWorld = document.getElementById('btnWorld');
    const btnIndia = document.getElementById('btnIndia');
    const cityTitle = document.getElementById('cityTitle');

    let showWorldCities = true;

    const showError = (msg) => {
      errorMessage.textContent = msg;
      errorMessage.classList.remove('is-hidden');
    };

    const hideError = () => errorMessage.classList.add('is-hidden');
    const showLoading = () => loadingSpinner.classList.remove('is-hidden');
    const hideLoading = () => loadingSpinner.classList.add('is-hidden');

    async function fetchJSON(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      return res.json();
    }

    async function fetchWeatherForCity(cityName) {
      try {
        const geoRes = await fetchJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
        if (!geoRes.results || geoRes.results.length === 0) return null;
        const { latitude, longitude, name, country } = geoRes.results[0];
        const weatherRes = await fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        return { city: name, country, ...weatherRes.current_weather };
      } catch {
        return null;
      }
    }

    async function loadTopCities() {
      citiesContainer.innerHTML = '<div class="has-text-centered"><button class="button is-white is-loading"></button></div>';
      const cityList = showWorldCities ? topWorldCities : topIndiaCities;
      const results = await Promise.all(cityList.map(fetchWeatherForCity));
      renderCities(results.filter(Boolean));
    }

    function renderCities(cities) {
      citiesContainer.innerHTML = '';
      cities.forEach(data => {
        const column = document.createElement('div');
        column.className = 'column is-one-quarter';
        column.innerHTML = `
          <div class="box ${showWorldCities ? 'has-background-info-light' : 'has-background-primary-light'}"
               style="cursor:pointer">
            <strong>${data.city}, ${data.country}</strong>
            <div><i class="fas fa-thermometer-half has-text-warning"></i> ${data.temperature}°C</div>
            <div><i class="fas fa-cloud has-text-info"></i> ${weatherDescriptions[data.weathercode] || 'Unknown'}</div>
            <div><i class="fas fa-wind has-text-grey"></i> ${data.windspeed} km/h</div>
          </div>
        `;
        column.onclick = () => getCoordinates(data.city);
        citiesContainer.appendChild(column);
      });
    }

    async function getCoordinates(cityName) {
      hideError();
      weatherInfo.innerHTML = '';
      showLoading();
      try {
        const res = await fetchJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
        if (!res.results || res.results.length === 0) throw new Error('Location not found');
        const { latitude, longitude, name, country } = res.results[0];
        await getWeather(latitude, longitude, name, country);
      } catch (err) {
        showError(err.message);
      } finally {
        hideLoading();
      }
    }

    async function getWeather(latitude, longitude, city, country) {
      try {
        const res = await fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = { ...res.current_weather, city, country };
        renderWeather(data);
      } catch {
        showError('Weather data not available');
      }
    }

    function renderWeather(data) {
      weatherInfo.innerHTML = `
        <div class="weather-info box has-background-white-ter mt-5" style="max-width:400px;margin:0 auto">
          <div class="has-text-centered mb-3">
            <h2 class="title is-3 has-text-link mb-1">${data.city}, ${data.country}</h2>
            <p class="is-size-4 has-text-grey-dark mb-2">
              <i class="fas fa-thermometer-half fa-2x has-text-warning"></i>
              <span style="margin-left:8px;font-size:2.5rem;font-weight:bold">${data.temperature}°C</span>
            </p>
            <p class="is-size-5 has-text-info mb-3">
              <i class="fas fa-cloud"></i> ${weatherDescriptions[data.weathercode] || 'Unknown Condition'}
            </p>
            <p><i class="fas fa-wind has-text-grey"></i> Wind Speed: <strong>${data.windspeed} km/h</strong></p>
          </div>
        </div>
      `;
    }

    btnSearch.onclick = () => {
      const city = cityInput.value.trim();
      if (city) getCoordinates(city);
      else showError('Please enter a city name');
    };

    btnWorld.onclick = () => {
      showWorldCities = true;
      btnWorld.classList.add('is-info', 'is-selected');
      btnIndia.classList.remove('is-primary', 'is-selected');
      cityTitle.textContent = 'Top 10 Cities in the World';
      loadTopCities();
    };

    btnIndia.onclick = () => {
      showWorldCities = false;
      btnIndia.classList.add('is-primary', 'is-selected');
      btnWorld.classList.remove('is-info', 'is-selected');
      cityTitle.textContent = 'Top 10 Cities in India';
      loadTopCities();
    };

    loadTopCities();
