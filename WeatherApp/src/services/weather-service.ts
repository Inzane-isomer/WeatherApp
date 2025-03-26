import { CurrentWeather, Location, Weather } from "../models/weather";
import { DEFAULT_LOCATION, AUTHED_WEATHER_API_URL } from "../enums/api-enums";

export async function getDefaultWeatherData(location? : string) : Promise<Weather> {
    const res = await fetch(`${AUTHED_WEATHER_API_URL}${location || DEFAULT_LOCATION}`);
    const data = await res.json();
    const currentData = data.current;
    const rawLocationData = data.location;
   
    const locationData: Location = {
        country: rawLocationData.country,
        province: rawLocationData.region,
        city: rawLocationData.name,
    }

    const currentWeatherData: CurrentWeather = {
        temperature: currentData.temperature,
        type: currentData.weather_descriptions[0],
        weatherIcon: currentData.weather_icons[0],
        windSpeed: currentData.wind_speed,
        precipitation: currentData.precip,
        pressure: currentData.pressure,
    }

    return new Weather(locationData, currentWeatherData);
    
}
