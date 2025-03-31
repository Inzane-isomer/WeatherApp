import styled from "styled-components";
import IconButton from "./IconButton";
import { CurrentWeather } from "../models/weather";

interface LowerCardAreaProps {
    weeklyWeather: CurrentWeather[], 
    handleEvent: any,
    loading: boolean,
}

const StyledCard = styled.div`
display: flex;
  justify-content: space-evenly;
`;

export default function LowerCardArea({weeklyWeather, handleEvent, loading} : LowerCardAreaProps) {
    return(
        <StyledCard>
            {weeklyWeather?.map((weather) => {
                if(!weather.day && weather.temperature !== undefined) {
                   weather.day = "TODAY"
                }
                let temp = `${weather.temperature.toString()}°c`
                return <IconButton iconColor={weather.iconColor} key={weather.day} handleEvent={handleEvent} iconUrl={weather.weatherIcon} title={weather.day} subtitle={temp} weather={weather} ></IconButton>
            })}
        </StyledCard>
    )
}