import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getDefaultWeatherData } from './services/weather-service'
import Card from './components/Card'
import { Weather } from './models/weather'
import { ErrorResponse } from './models/error-response'

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

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        {weatherRes ? <Card count={count} content={weatherRes.currentWeather.type}/> : <></>}
        {errorRes ? <Card count={count} content={errorRes.friendlyMessage}/> : <></>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
