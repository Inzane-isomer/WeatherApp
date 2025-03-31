import styled from "styled-components";
import DetailsCard from "./DetailsCard";
import IconButton from "./IconButton";
import { TypographyHeader } from "./Typography";
import { CurrentWeather } from "../models/weather";

interface UpperCardAreaProps {
    weather?: CurrentWeather, 
    handleEvent: any,
    loading: boolean,
    error: string,
}

const StyledCard = styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height:100%;
`;

const FlexDiv = styled.div`
    flex: 1;
`;

export default function UpperCardArea({handleEvent, weather, error, loading} : UpperCardAreaProps) {
    if(!weather?.day && weather?.temperature !== undefined) {
        weather.day = "TODAY"
     }
    return(
        <StyledCard>
            <FlexDiv>
            <IconButton iconColor={weather?.iconColor} title={weather?.day} subtitle={weather?.type} handleEvent={handleEvent} iconUrl={weather?.weatherIcon}></IconButton>
            </FlexDiv>
            <FlexDiv>
            <TypographyHeader>{loading || error ? "": `${weather?.temperature}°c`}</TypographyHeader>
            </FlexDiv>
            <FlexDiv>
            {loading || error ? "" : <DetailsCard firstContent={weather?.windSpeed} secondContent={weather?.precipitation} thirdContent={weather?.pressure}></DetailsCard>}
            </FlexDiv>
        </StyledCard>
    )
}