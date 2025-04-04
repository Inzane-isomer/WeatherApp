function setCorrectDate(dateShift : number) {
    let date = new Date();
    return date.setDate(date.getDate() + dateShift);
}

export const HISTORICAL_RES = {
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "current": {
        "observation_time": new Date().getHours(),
        "temperature": 15,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 0,
        "wind_degree": 0,
        "wind_dir": "N",
        "pressure": 1011,
        "precip": 0,
        "humidity": 78,
        "cloudcover": 0,
        "feelslike": 15,
        "uv_index": 5,
        "visibility": 16
    },
    "historical": {
        "2025-03-28": {
            "date": setCorrectDate(-3),
            "date_epoch": 1214870400,
            "astro": {
                "sunrise": "05:29 AM",
                "sunset": "08:31 PM",
                "moonrise": "03:24 AM",
                "moonset": "07:37 PM",
                "moon_phase": "Waning Crescent",
                "moon_illumination": 4
            },
            "mintemp": 0,
            "maxtemp": 0,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 14.5,
            "uv_index": 4,
            "time": "0",
            "temperature": 25,
            "wind_speed": 10,
            "wind_degree": 201,
            "wind_dir": "SSW",
            "weather_code": 113,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
            ],
            "weather_descriptions": [
                "Sunny"
            ],
            "precip": 5,
            "humidity": 80,
            "visibility": 9,
            "pressure": 1035,
            "cloudcover": 15,
            "heatindex": 25,
            "dewpoint": 20,
            "windchill": 24,
            "windgust": 11,
            "feelslike": 25,
            "chanceofrain": 0,
            "chanceofremdry": 0,
            "chanceofwindy": 0,
            "chanceofovercast": 0,
            "chanceofsunshine": 0,
            "chanceoffrost": 0,
            "chanceofhightemp": 0,
            "chanceoffog": 0,
            "chanceofsnow": 0,
            "chanceofthunder": 0,
        },
        "2025-03-29": {
            "date": setCorrectDate(-2),
            "date_epoch": 1214870400,
            "astro": {
                "sunrise": "05:29 AM",
                "sunset": "08:31 PM",
                "moonrise": "03:24 AM",
                "moonset": "07:37 PM",
                "moon_phase": "Waning Crescent",
                "moon_illumination": 4
            },
            "mintemp": 0,
            "maxtemp": 0,
            "avgtemp": 19,
            "totalsnow": 0,
            "sunhour": 14.5,
            "uv_index": 4,
                    "time": "0",
                    "temperature": 31,
                    "wind_speed": 7,
                    "wind_degree": 201,
                    "wind_dir": "SSW",
                    "weather_code": 113,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
                    ],
                    "weather_descriptions": [
                        "Fog"
                    ],
                    "precip": 1.8,
                    "humidity": 80,
                    "visibility": 9,
                    "pressure": 1011,
                    "cloudcover": 15,
                    "heatindex": 25,
                    "dewpoint": 20,
                    "windchill": 24,
                    "windgust": 11,
                    "feelslike": 25,
                    "chanceofrain": 0,
                    "chanceofremdry": 0,
                    "chanceofwindy": 0,
                    "chanceofovercast": 0,
                    "chanceofsunshine": 0,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
        },
        "2025-03-30": {
            "date": setCorrectDate(-1),
            "date_epoch": 1214870400,
            "astro": {
                "sunrise": "05:29 AM",
                "sunset": "08:31 PM",
                "moonrise": "03:24 AM",
                "moonset": "07:37 PM",
                "moon_phase": "Waning Crescent",
                "moon_illumination": 4
            },
            "mintemp": 0,
            "maxtemp": 0,
            "avgtemp": 19,
            "totalsnow": 0,
            "sunhour": 14.5,
            "uv_index": 4,
                    "time": "0",
                    "temperature": 22,
                    "wind_speed": 3,
                    "wind_degree": 201,
                    "wind_dir": "SSW",
                    "weather_code": 113,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
                    ],
                    "weather_descriptions": [
                        "Partly Cloudy"
                    ],
                    "precip": 0,
                    "humidity": 80,
                    "visibility": 9,
                    "pressure": 1090,
                    "cloudcover": 15,
                    "heatindex": 25,
                    "dewpoint": 20,
                    "windchill": 24,
                    "windgust": 11,
                    "feelslike": 25,
                    "chanceofrain": 0,
                    "chanceofremdry": 0,
                    "chanceofwindy": 0,
                    "chanceofovercast": 0,
                    "chanceofsunshine": 0,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
        }
    }
}

export const FORECAST_RES = {
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "current": {
        "observation_time": new Date().toTimeString(),
        "temperature": 15,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "air_quality": {
            "co": "527.25",
            "no2": "40.145",
            "o3": "57",
            "so2": "9.25",
            "pm2_5": "9.62",
            "pm10": "9.62",
            "us-epa-index": "1",
            "gb-defra-index": "1"
        },
        "wind_speed": 0,
        "wind_degree": 345,
        "wind_dir": "NNW",
        "pressure": 1011,
        "precip": 0,
        "humidity": 58,
        "cloudcover": 0,
        "feelslike": 18,
        "uv_index": 5,
        "visibility": 16
    },
    "forecast": {
        "2025-04-01": {
            "date": setCorrectDate(1),
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
             "air_quality": {
                "co": "456.284",
                "no2": "41.5436",
                "o3": "58.24",
                "so2": "8.406400000000001",
                "pm2_5": "9.7532",
                "pm10": "9.8272",
                "us-epa-index": "1",
                "gb-defra-index": "1"
            },
            "time": "0",
            "temperature": 18,
            "wind_speed": 28,
            "wind_degree": 15,
            "wind_dir": "NNE",
            "weather_code": 122,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Rainy"
            ],
            "precip": 100,
            "humidity": 68,
            "visibility": 10,
            "pressure": 1008,
            "cloudcover": 75,
            "heatindex": 18,
            "dewpoint": 12,
            "windchill": 18,
            "windgust": 35,
            "feelslike": 18,
            "chanceofrain": 0,
            "chanceofremdry": 87,
            "chanceofwindy": 0,
            "chanceofovercast": 90,
            "chanceofsunshine": 15,
            "chanceoffrost": 0,
            "chanceofhightemp": 0,
            "chanceoffog": 0,
            "chanceofsnow": 0,
            "chanceofthunder": 0,
        },
        "2025-04-02": {
            "date": setCorrectDate(2),
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
             "air_quality": {
                "co": "456.284",
                "no2": "41.5436",
                "o3": "58.24",
                "so2": "8.406400000000001",
                "pm2_5": "9.7532",
                "pm10": "9.8272",
                "us-epa-index": "1",
                "gb-defra-index": "1"
            },
            "time": "0",
            "temperature": 21,
            "wind_speed": 5,
            "wind_degree": 15,
            "wind_dir": "NNE",
            "weather_code": 122,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Overcast"
            ],
            "precip": 0,
            "humidity": 68,
            "visibility": 10,
            "pressure": 1023,
            "cloudcover": 75,
            "heatindex": 18,
            "dewpoint": 12,
            "windchill": 18,
            "windgust": 35,
            "feelslike": 18,
            "chanceofrain": 0,
            "chanceofremdry": 87,
            "chanceofwindy": 0,
            "chanceofovercast": 90,
            "chanceofsunshine": 15,
            "chanceoffrost": 0,
            "chanceofhightemp": 0,
            "chanceoffog": 0,
            "chanceofsnow": 0,
            "chanceofthunder": 0,
        },
        "2025-04-03": {
            "date": setCorrectDate(3),
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
             "air_quality": {
                "co": "456.284",
                "no2": "41.5436",
                "o3": "58.24",
                "so2": "8.406400000000001",
                "pm2_5": "9.7532",
                "pm10": "9.8272",
                "us-epa-index": "1",
                "gb-defra-index": "1"
            },
            "time": "0",
            "temperature": 21,
            "wind_speed": 20,
            "wind_degree": 15,
            "wind_dir": "NNE",
            "weather_code": 122,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Windy"
            ],
            "precip": 20,
            "humidity": 68,
            "visibility": 10,
            "pressure": 1000,
            "cloudcover": 75,
            "heatindex": 18,
            "dewpoint": 12,
            "windchill": 18,
            "windgust": 35,
            "feelslike": 18,
            "chanceofrain": 0,
            "chanceofremdry": 87,
            "chanceofwindy": 0,
            "chanceofovercast": 90,
            "chanceofsunshine": 15,
            "chanceoffrost": 0,
            "chanceofhightemp": 0,
            "chanceoffog": 0,
            "chanceofsnow": 0,
            "chanceofthunder": 0,
        }
    }
}