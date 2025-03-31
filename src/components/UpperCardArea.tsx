import styled from "styled-components";
import DetailsCard from "./DetailsCard";
import IconButton from "./IconButton";
import { TypographyHeader } from "./Typography";
import { CurrentWeather } from "../models/weather";
import { DNA, Grid, MutatingDots } from "react-loader-spinner";
import { WHITE } from "../enums/colors";

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
      flex-wrap: wrap;
`;

export default function UpperCardArea({handleEvent, weather, error, loading} : UpperCardAreaProps) {
    if(!weather?.day && weather?.temperature !== undefined) {
        weather.day = "TODAY"
     }
    return(
        <StyledCard>
        {loading 
        ?  <MutatingDots height="100" width="100" radius="10" color={WHITE} visible={loading}/> 
        :   <>
                <FlexDiv>
                    <IconButton disabled={true} iconColor={weather?.iconColor} title={weather?.day} subtitle={weather?.type} handleEvent={handleEvent} iconUrl={weather?.weatherIcon}></IconButton>
                </FlexDiv>
                <FlexDiv>
                    <TypographyHeader>{loading || error ? "": `${weather?.temperature}°c`}</TypographyHeader>
                </FlexDiv>
                <FlexDiv>
                    {loading || error ? "" : <DetailsCard firstContent={weather?.windSpeed} secondContent={weather?.precipitation} thirdContent={weather?.pressure}></DetailsCard>}
                </FlexDiv>
            </>
        }
        </StyledCard>
    )
}