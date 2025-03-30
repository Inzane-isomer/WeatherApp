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
        return {
            temperature: weatherResponse.temperature,
            type: weatherResponse.weather_descriptions[0],
            weatherIcon: weatherResponse.weather_icons[0],
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
    type: string,
    weatherIcon: string,
    windSpeed: number,
    precipitation: number,
    pressure: number,
}

