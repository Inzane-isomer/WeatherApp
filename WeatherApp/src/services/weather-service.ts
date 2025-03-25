import { Weather } from "../models/weather";
import { defaultLocation, authedWeatherUrl } from "../enums/api-enums";

class WeatherService {
    
} 

export async function getDefaultWeatherData(location? : string) : Promise<Weather> {
    console.log("got here");
    const res = await fetch(`${authedWeatherUrl}${location || defaultLocation}`);
    const data = await res.json();
    console.log(data);
    return data;
}