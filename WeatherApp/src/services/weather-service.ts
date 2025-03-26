import { CurrentWeather, Location, Weather } from "../models/weather";
import { DEFAULT_LOCATION, AUTHED_WEATHER_API_URL } from "../enums/api-enums";
import { ErrorResponse } from "../models/error-response";

export async function getDefaultWeatherData(location? : string) : Promise<Weather | ErrorResponse>{
    try {
        const res = await fetch(`${AUTHED_WEATHER_API_URL}${location || DEFAULT_LOCATION}`);
        const data = await res.json();
        
        if(data.success!== undefined && !data.success) {
            return new ErrorResponse(data.error.code, data.error.info)     
        }
        
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

    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}
