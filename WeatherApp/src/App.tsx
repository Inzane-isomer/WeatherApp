import { useState } from 'react'
import './App.css'
import { getDefaultWeatherData } from './services/weather-service'
import { Weather } from './models/weather'
import { ErrorResponse } from './models/error-response'
import { BORDER_COLOR, PRIMARY_BG_COLOR, SECONDARY_BG_COLOR } from './enums/colors'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)
  const [weatherRes, setWeatherRes] = useState<Weather | null>();
  const [errorRes, setErrorRes] = useState<ErrorResponse | null>();

  async function handleClick() {
    const res = await getDefaultWeatherData();
    if(res instanceof Weather) {
      return setWeatherRes(res)  
    }
    return setErrorRes(res);
  }

  const StyledOuterCard = styled.div`
  display: flex;
    background-color: ${SECONDARY_BG_COLOR};
    width:750px;
    height:500px;
    justify-content: center;
`;

const StyledInnerCard = styled.div`
  width: 700px;
  height: 450px;
  background-color: ${PRIMARY_BG_COLOR};
  border-style: solid;
  border-width: 5px;
  border-radius: 10px;
  border-color: ${BORDER_COLOR};
  align-self: center;
`;

  return (
    <>
    <StyledOuterCard>
      <StyledInnerCard>
      
      </StyledInnerCard>
    </StyledOuterCard>
    </>
  )
}

export default App
