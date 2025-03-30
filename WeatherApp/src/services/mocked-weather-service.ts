import { FORECAST_RES, HISTORICAL_RES } from "../enums/mocked-api-data";



export function returnHistoricalData(location : string) : Promise<any>{
    const loc =  {
        "name": location,
        "country": "South Africa",
        "region": "Gauteng",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "Africa/Johannesburg",
        "localtime": "2025-03-30 11:11",
        "localtime_epoch": 1743333060,
        "utc_offset": "2.0"
    };


    const json = {"location": loc,...HISTORICAL_RES}
    const res = new Promise(function(resolve) {
        setTimeout(function() {
         resolve(json);
        }, 1000);
    });

    return res; 
}

export function returnForecastData(location : string) : Promise<any>{
    const loc =  {
        "name": location,
        "country": "South Africa",
        "region": "Gauteng",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "Africa/Johannesburg",
        "localtime": "2025-03-30 11:11",
        "localtime_epoch": 1743333060,
        "utc_offset": "2.0"
    };


    const json = {"location": loc,...FORECAST_RES}
    const res = new Promise(function(resolve) {
        setTimeout(function() {
         resolve(json);
        }, 1000);
    });

    return res; 
}