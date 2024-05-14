import wretch from 'wretch';

// Configure API URL from environment
const apiUrl = 'https://api.sunrise-sunset.org/json?lat=32.780140&lng=-96.800453&formatted=0';

// Create a wretch instance configured for API interactions
const api = wretch(apiUrl, {
  cache: 'no-store',
  mode: 'cors',
})
  .errorType('json')
  .resolve((resolver) => resolver.json() as Promise<WeatherForecast>);

// Function to fetch pinned repository
export const fetchWeatherForecast = async () => {
  try {
    const response = await api.get();
    console.log('Weather Forecast Response:', response); // Log the response
    return response;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return null; // Return null or a default value in case of an error
  }
};
