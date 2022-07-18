import { useContext } from 'react'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import { Wrapper } from './WeatherCards.style'
import { WeatherContext } from '../Context/WeatherContext';

export default function WeatherCards() {
  const { futureWeather } = useContext(WeatherContext);
  
  return (
    <Wrapper>
      {futureWeather?.list.map((weather: any, index: number) => {
        return index < 6 && <WeatherCard day={weather.dt_txt} img={weather.weather[0].main} temp={weather.main.temp} feelsLike={weather.main.feelsLike} key={index} />
      })}
    </Wrapper>
  )
}
