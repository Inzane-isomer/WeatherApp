export class Weather {
    location: Location;
    currentWeather: CurrentWeather;
    requestTime: Date;

    constructor(location: Location, currentWeather: CurrentWeather) {
        this.location = location,
        this.currentWeather = currentWeather,
        this.requestTime = new Date();
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

