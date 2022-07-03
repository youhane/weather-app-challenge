import { Bottom, GPSButton, Middle, Top, Wrapper } from './LeftDisplay.style'
import { MdGpsFixed, MdLocationPin } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { WeatherContext } from '../Context/WeatherContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import Clear from '../../assets/icons/Clear.png';
import Hail from '../../assets/icons/Hail.png';
import Rain from '../../assets/icons/HeavyRain.png';
import Cloudy from '../../assets/icons/LightCloud.png';
import Snow from '../../assets/icons/Snow.png';
import Thunderstorm from '../../assets/icons/Thunderstorm.png';

export default function LeftDisplay() {
  const { currentWeather, location } = useContext(WeatherContext);
  const [weatherImage, setWeatherImage] = useState('')

  const todayDate = (): String => {
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const newDate = new Date();
    
    const day = DAYS[newDate.getDay()].substring(0, 3);
    const date = newDate.getDate();
    const month = MONTHS[newDate.getMonth()];
    
    return `${day}, ${date} ${month}`
  }

  const searchImage = useCallback(() => {
      const weather = currentWeather?.weather[0].main
      if(weather === 'Clouds') setWeatherImage(Cloudy)
      else if(weather === 'Rain') setWeatherImage(Rain)
      else if(weather === 'Snow') setWeatherImage(Snow)
      else if(weather === 'Hail') setWeatherImage(Hail)
      else if(weather === 'Clear') setWeatherImage(Clear)
      else if(weather === 'Thunderstorm') setWeatherImage(Thunderstorm)
    },
    [currentWeather?.weather],
  )

  useEffect(() => {
    searchImage()
  }, [searchImage])

  return (
    <Wrapper>
        <Top>
          <button>Search for places</button>
          <GPSButton>
            <IconContext.Provider
              value={{ 
                style: {
                  background: 'transparent', padding: '0', display: 'flex'
                } 
              }}
            >
              <MdGpsFixed size={20} />
            </IconContext.Provider>
          </GPSButton>
        </Top>
        <Middle>
          <img src={weatherImage} alt="shower" />
          <h1>{Math.floor(currentWeather?.main.temp)}<span>°C</span></h1>
          <h2>{currentWeather?.weather[0].main}</h2>
        </Middle>
        <Bottom>
          <p>Today • {todayDate()}</p>
          <p><MdLocationPin size={20}/> {location?.cityName.charAt(0).toUpperCase()+location.cityName.slice(1)}</p>
        </Bottom>
    </Wrapper>
  )
}
