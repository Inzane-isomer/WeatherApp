import { Weather } from "../models/weather";
import { DEFAULT_LOCATION, AUTHED_WEATHER_API_URL } from "../enums/api-enums";
import { ErrorResponse } from "../models/error-response";
import { returnForecastData, returnHistoricalData } from "./mocked-weather-service";

//NOTE: This method is deprecated and would normally be removed from the application with the addition of
//the historical and forecast api endpoints (as they return this same data). However since those api endpoints are
//unavailable, I'm keeping this here as an example of what I would've done to integrate with them if they were availble.
//export async function getDefaultWeatherData(location? : string) : Promise<Weather | ErrorResponse>{
export async function getDefaultWeatherData(location? : string) : Promise<void>{
    try {
        const res = await fetch(`${AUTHED_WEATHER_API_URL}${location || DEFAULT_LOCATION}`);
        const data = await res.json();
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
        }
        const currentData = data.current;
        const rawLocationData = data.location;
             
        // return new Weather(rawLocationData, currentData);
    } catch (error) {
        console.error("Weather API unavailable");
    }
}

export async function getHistoricalWeatherData(userLocation? : string) : Promise<Weather | ErrorResponse>{
    try {
        const json = await returnHistoricalData(userLocation || DEFAULT_LOCATION);
        const data = json;
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
            return err;
        }

        const historicalWeather = data.historical;
        const currentWeather = data.current;
        const location = data.location;
        
        return new Weather({location, currentWeather, historicalWeather});
    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}

export async function getForecastWeatherData(userLocation? : string) : Promise<Weather | ErrorResponse>{
    try {
        const json = await returnForecastData(userLocation || DEFAULT_LOCATION);
        const data = json;
        
        if(data.success!== undefined && !data.success) {
            const err = new ErrorResponse(data.error.code, data.error.info)
            return err;
        }
        const forecastWeather = data.forecast;

        const currentWeather = data.current;
        const location = data.location;
        
        return new Weather({location, currentWeather, forecastWeather});
    } catch (error) {
        console.error("Weather API unavailable");
        return new ErrorResponse(500, "Weather API down");
    }
}
