import { useEffect, useState } from 'react'
import { getForecastWeatherData, getHistoricalWeatherData } from './services/weather-service'
import { CurrentWeather, Location, Weather } from './models/weather'
import { ErrorResponse } from './models/error-response'
import { BORDER_COLOR, PRIMARY_BG_COLOR, RED, SECONDARY_BG_COLOR } from './enums/colors'
import { TypographyParagraph } from './components/Typography'
import UpperCardArea from './components/UpperCardArea'
import styled from 'styled-components'
import LowerCardArea from './components/LowerCardArea'


  const StyledOuterCard = styled.div`
  display: flex;
    background-color: ${SECONDARY_BG_COLOR};
    width:750px;
    height:500px;
    justify-content: center;
`;

const StyledInnerCard = styled.div`
  display: flex;
  flex-flow: column;
  width: 700px;
  height: 450px;
  background-color: ${PRIMARY_BG_COLOR};
  border-style: solid;
  border-width: 5px;
  border-radius: 10px;
  border-color: ${BORDER_COLOR};
  align-self: center;
`;

const StyledTitle = styled.div`
  flex: 0.5;
  text-align: center;
  line-height: 1;
  font-weight: 600;
`;

const StyledUpperCardArea = styled.div`
  width: 100%;
  flex: 2;
`;

const StyledLowerCardArea = styled.div`
  width: 100%;
  flex: 2;
`;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState<CurrentWeather>();
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const [errorRes, setErrorRes] = useState<ErrorResponse | null>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [weeklyWeather, setWeeklyWeather] = useState<CurrentWeather[]>();
  
  async function handleApiReq() {
    setLoading(true);
    const forecastRes = await getForecastWeatherData();
    let forecastArr : [] = [];
    let historicalArr = new Array();
    if(forecastRes instanceof Weather) {
      forecastArr = [...forecastRes.forecastWeather as []];
      setSelectedWeather(forecastRes.currentWeather)  
      setCurrentLocation(forecastRes.location);
    }else {
      setErrorRes(forecastRes);
      setErrorMessage(forecastRes.friendlyMessage);
    }
    
    const historicalRes = await getHistoricalWeatherData();
    if(historicalRes instanceof Weather) {
      historicalArr = [...historicalRes.historicalWeather as []];
      historicalArr.push(historicalRes.currentWeather);
      setCurrentLocation(historicalRes.location);

    } else {
      setErrorRes(historicalRes);
    }
    setWeeklyWeather([...historicalArr, ...forecastArr]);
    setLoading(false);
  }

  useEffect(() => {
    handleApiReq();
  }, []);

  async function handleClick(weatherDetails : any) {
    setSelectedWeather(weatherDetails)
  }
  
  return (
    <StyledOuterCard>
      <StyledInnerCard>
        <StyledTitle>
          <TypographyParagraph textSize={20} textColor={errorRes ? RED : "" }>
            {loading ? "Loading..." : (!errorRes ? `${currentLocation?.city}, ${currentLocation?.province}, ${currentLocation?.country}` : "")}
            {errorRes ? errorRes.friendlyMessage : ""}
          </TypographyParagraph>
        </StyledTitle>
        <StyledUpperCardArea >
          <UpperCardArea error={errorMessage!} handleEvent={handleClick} weather={selectedWeather} loading={loading}/>
        </StyledUpperCardArea>
        <StyledLowerCardArea>
          <LowerCardArea  weeklyWeather={weeklyWeather!} handleEvent={handleClick} loading={loading} />
        </StyledLowerCardArea>
      </StyledInnerCard>
    </StyledOuterCard>
  )
}
