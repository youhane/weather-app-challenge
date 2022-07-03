import React, { useContext } from 'react'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import { Wrapper } from './WeatherCards.style'
import { WeatherContext } from '../Context/WeatherContext';
import Shower from '../../assets/icons/Shower.png';
import Clear from '../../assets/icons/Clear.png';
import Hail from '../../assets/icons/Hail.png';
import HeavyCloud from '../../assets/icons/HeavyCloud.png';
import Rain from '../../assets/icons/HeavyRain.png';
import LightCloud from '../../assets/icons/LightCloud.png';
import LightRain from '../../assets/icons/LightRain.png';
import Sleet from '../../assets/icons/Sleet.png';
import Snow from '../../assets/icons/Snow.png';
import Thunderstorm from '../../assets/icons/Thunderstorm.png';

export default function WeatherCards() {
  const { futureWeather } = useContext(WeatherContext);

  const WEATHER_IMGS = [Shower, Clear, Hail, HeavyCloud, Rain, LightCloud, LightRain, Sleet, Snow, Thunderstorm]

  const findWeatherImg = (weather:String):any => {
    
  }

  return (
    <Wrapper>
        {futureWeather?.list.map((weather: any, index:number) => {
          return index < 6 && <WeatherCard day={weather.dt_txt} img={Shower} temp={weather.main.temp} feelsLike={weather.main.feelsLike}/>
        })}
    </Wrapper>
  )
}
