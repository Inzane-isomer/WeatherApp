import { DAYS, WEATHER_ICON_COLOR, WEATHER_ICONS } from "../enums/weather-enums";

export class Weather {
    location: Location;
    currentWeather: CurrentWeather;
    requestTime: Date;
    historicalWeather?: CurrentWeather[];
    forecastWeather?: CurrentWeather[];

    constructor({location, currentWeather, historicalWeather, forecastWeather}: {location: object, currentWeather: object, historicalWeather?: object, forecastWeather?: object}) {
        this.location = this.toLocation(location);
        this.currentWeather = this.toCurrentWeather(currentWeather);
        this.requestTime = new Date();
        this.historicalWeather =  historicalWeather ? this.toWeatherArray(historicalWeather) : undefined;
        this.forecastWeather = forecastWeather ? this.toWeatherArray(forecastWeather) : undefined;
    }


    toLocation(locationResponse : any): Location {
        return {
            country: locationResponse.country,
            province: locationResponse.region,
            city: locationResponse.name,
        }
    }

    toCurrentWeather(weatherResponse : any): CurrentWeather {
        let weatherIcons : string[] = [];
        let weatherColor : string[] = [];

        Object.entries(WEATHER_ICONS).forEach(([key, value]) => {
            if(key=== weatherResponse.weather_descriptions[0]) {
                weatherIcons.push(value);
            }
        })

        Object.entries(WEATHER_ICON_COLOR).forEach(([key, value]) => {
            if(key=== weatherIcons[0]) {
                weatherColor.push(value);
            }
        })
        
        return {
            temperature: weatherResponse.temperature,
            date: weatherResponse.date,
            day: DAYS[new Date(weatherResponse.date).getDay()],
            type: weatherResponse.weather_descriptions[0],
            weatherIcon: weatherIcons[0] ? weatherIcons[0] : weatherResponse.weather_icons[0],
            iconColor: weatherColor[0] ? weatherColor[0] : 'black',
            windSpeed: weatherResponse.wind_speed,
            precipitation: weatherResponse.precip,
            pressure: weatherResponse.pressure,
        }
    }

    toWeatherArray(dataObject: object): CurrentWeather[] {
        return Object.values(dataObject).map((item : any)  => (
            this.toCurrentWeather(item)
        ));
    }
}

export interface Location {
    country: string,
    province: string,
    city: string,
}

export interface CurrentWeather {
    temperature: number,
    date?: Date,
    day?: string,
    type: string,
    weatherIcon: string,
    iconColor?: string,
    windSpeed: number,
    precipitation: number,
    pressure: number,
}

