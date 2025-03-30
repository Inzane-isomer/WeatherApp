export class Weather {
    location: Location;
    currentWeather: CurrentWeather;
    requestTime: Date;
    historicalWeather?: CurrentWeather[];
    forecastWeather?: CurrentWeather[];

    constructor(location: Location, currentWeather: CurrentWeather, historicalWeather?: CurrentWeather[], forecastWeather?: CurrentWeather[],) {
        this.location = location,
        this.currentWeather = currentWeather,
        this.requestTime = new Date(),
        this.historicalWeather = historicalWeather;
        this.forecastWeather = forecastWeather;
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

