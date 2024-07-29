# Weather App

This is a simple weather application built with React. It allows users to enter a city name and fetch the current weather information for that city using the OpenWeatherMap API.

## Features

- Fetches and displays weather information for a specified city.
- Shows temperature, humidity, wind speed, and weather description.
- Displays appropriate weather icons based on the weather conditions.
- Handles loading and error states.

## Demo

You can view a live demo of the application [here](https://your-demo-link.com).

## Technologies Used

- React
- Axios
- OpenWeatherMap API
- React Icons

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/krishakhanal/weather-app.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd weather-app
   ```
3. **Install the dependencies**:
   ```sh
   npm install
   ```
4. **Run the application**:
   ```sh
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Enter the name of the city you want to get the weather information for in the input field.
3. Click the "Get Weather" button.
4. The application will display the current weather information for the specified city.

## API Key

This application uses the OpenWeatherMap API. You need an API key to fetch weather data. Replace the placeholder API key in the code with your own API key.

In `App.js`:

```javascript
const apiKey = "your_api_key_here";
```
