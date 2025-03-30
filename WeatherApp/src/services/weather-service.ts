import { CurrentWeather, Location, Weather } from "../models/weather";
import { DEFAULT_LOCATION, AUTHED_WEATHER_API_URL } from "../enums/api-enums";
import { ErrorResponse } from "../models/error-response";
import { returnForecastData, returnHistoricalData } from "./mocked-weather-service";

export async function getDefaultWeatherData(location? : string) : Promise<Weather | ErrorResponse>{
    try {
        const res = await fetch(`${AUTHED_WEATHER_API_URL}${location || DEFAULT_LOCATION}`);
        const data = await res.json();
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
            return err;
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
            
        const weather = new Weather(locationData, currentWeatherData);
        return weather;
    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}

export async function getHistoricalWeatherData(location? : string) : Promise<Weather | ErrorResponse>{
    try {
        const json = await returnHistoricalData(location || DEFAULT_LOCATION);
        const data = json;
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
            return err;
        }
        const historicalData = data.historical;

        const currentData = data.current;
        const rawLocationData = data.location;
        
        const locationData: Location = {
            country: rawLocationData.country,
            province: rawLocationData.region,
            city: rawLocationData.name,
        }


         
        const historical: CurrentWeather[] = Object.values(historicalData).map((item : any)  => ({
            temperature: item.temperature,
            type: item.weather_descriptions[0],
            weatherIcon: item.weather_icons[0],
            windSpeed: item.wind_speed,
            precipitation: item.precip,
            pressure: item.pressure,
        }));;
        
    
        const currentWeatherData: CurrentWeather = {
            temperature: currentData.temperature,
            type: currentData.weather_descriptions[0],
            weatherIcon: currentData.weather_icons[0],
            windSpeed: currentData.wind_speed,
            precipitation: currentData.precip,
            pressure: currentData.pressure,
        }
        
        const weather = new Weather(locationData, currentWeatherData, historical);
        return weather;
    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}

export async function getForecastWeatherData(location? : string) : Promise<Weather | ErrorResponse>{
    try {
        const json = await returnForecastData(location || DEFAULT_LOCATION);
        const data = json;
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
            return err;
        }
        const forecastData = data.forecast;

        const currentData = data.current;
        const rawLocationData = data.location;
        
        const locationData: Location = {
            country: rawLocationData.country,
            province: rawLocationData.region,
            city: rawLocationData.name,
        }


        

        const forecast : CurrentWeather[] = Object.values(forecastData).map((item : any)  => ({
            temperature: item.temperature,
            type: item.weather_descriptions[0],
            weatherIcon: item.weather_icons[0],
            windSpeed: item.wind_speed,
            precipitation: item.precip,
            pressure: item.pressure,
        }));;

           
         
        const currentWeatherData: CurrentWeather = {
            temperature: currentData.temperature,
            type: currentData.weather_descriptions[0],
            weatherIcon: currentData.weather_icons[0],
            windSpeed: currentData.wind_speed,
            precipitation: currentData.precip,
            pressure: currentData.pressure,
        }
        
        const weather = new Weather(locationData, currentWeatherData, forecast);
        return weather;
    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}
