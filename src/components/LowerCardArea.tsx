import styled from "styled-components";
import IconButton from "./IconButton";
import { CurrentWeather } from "../models/weather";
import { MutatingDots } from "react-loader-spinner";

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
           {loading 
            ? 
                <MutatingDots height="50" width="50" radius="5" color="#FFFFFF" visible={loading}/> 
            :
                <>
                    {weeklyWeather?.map((weather) => {
                        if(!weather.day && weather.temperature !== undefined) {
                            weather.day = "TODAY"
                        }
                        let temp = `${weather.temperature.toString()}°c`
                        return <IconButton iconColor={weather.iconColor} key={weather.day} handleEvent={handleEvent} iconUrl={weather.weatherIcon} title={weather.day} subtitle={temp} weather={weather} ></IconButton>
                    })}
                </>
            }
        </StyledCard>
    )
}