import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for HTTP requests
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi'; // Import weather icons from react-icons
import './App.css'; // Import the CSS file

const App = () => {
  // Define state variables
  const [city, setCity] = useState(''); // State for city input
  const [weather, setWeather] = useState(null); // State for weather data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for error messages

  const apiKey = 'bdd1699b5f3b34adf266174492b95c4f'; // API key for OpenWeatherMap

  // Function to fetch weather data
  const getWeather = async () => {
    setLoading(true); // Set loading state to true
    setError(''); // Reset error message
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data); // Set weather state with the response data
    } catch (err) {
      if (err.response) {
        console.error('Error response:', err.response.data); // Log the full error response data
        if (err.response.status === 404) {
          setError('City not found'); // Set error message for city not found
        } else {
          setError(`An error occurred: ${err.response.data.message}`); // Set error message for other errors
        }
      } else {
        console.error('Error:', err.message); // Log the error message
        setError('An error occurred. Please try again.'); // Set general error message
      }
      setWeather(null); // Reset weather state
    }
    setLoading(false); // Set loading state to false
  };

  // Function to capitalize words
  const capitalizeWords = (string) => {
    return string.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to render weather icons based on description
  const renderWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return <WiDaySunny size={50} />;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return <WiCloud size={50} />;
      case 'shower rain':
      case 'rain':
      case 'thunderstorm':
        return <WiRain size={50} />;
      case 'snow':
        return <WiSnow size={50} />;
      default:
        return <WiDaySunny size={50} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
        />
        <button onClick={getWeather}>Get Weather</button> {/* Button to fetch weather data */}
        {loading && <p>Loading...</p>} {/* Display loading message */}
        {error && <p>{error}</p>} {/* Display error message */}
        {weather && (
          <div>
            <h2>{weather.name}</h2> {/* Display city name */}
            {renderWeatherIcon(weather.weather[0].description)} {/* Display weather icon */}
            <p>Temperature: {weather.main.temp}°C</p> {/* Display temperature */}
            <p>Humidity: {weather.main.humidity}%</p> {/* Display humidity */}
            <p>Wind Speed: {weather.wind.speed} m/s</p> {/* Display wind speed */}
            <p>{capitalizeWords(weather.weather[0].description)}</p> {/* Display weather description */}
          </div>
        )}
      </header>
    </div>
  );
};

export default App; // Export the App component
