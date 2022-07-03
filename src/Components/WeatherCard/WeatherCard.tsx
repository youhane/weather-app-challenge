import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
import { Wrapper } from './WeatherCard.style'
import Clear from '../../assets/icons/Clear.png';
import Hail from '../../assets/icons/Hail.png';
import Rain from '../../assets/icons/HeavyRain.png';
import Cloudy from '../../assets/icons/LightCloud.png';
import Snow from '../../assets/icons/Snow.png';
import Thunderstorm from '../../assets/icons/Thunderstorm.png';

interface WeatherCardProps {
  day: String
  img: string
  temp: number
  feelsLike: String
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ day, img, temp, feelsLike }) => {
  const [weatherImage, setWeatherImage] = useState('')

  const searchImage = useCallback(() => {
    if (img === 'Clouds') setWeatherImage(Cloudy)
    else if (img === 'Rain') setWeatherImage(Rain)
    else if (img === 'Snow') setWeatherImage(Snow)
    else if (img === 'Hail') setWeatherImage(Hail)
    else if (img === 'Clear') setWeatherImage(Clear)
    else if (img === 'Thunderstorm') setWeatherImage(Thunderstorm)
  }, [img],)

  useEffect(() => {
    searchImage()
  }, [searchImage])
  
  const readableDate = (): String => {
    return moment(day.toString()).format('DD MMM')
  }

  return (
    <Wrapper>
      {readableDate()}
      <img src={weatherImage} alt={img} />
      {Math.floor(temp)}°c {feelsLike}
    </Wrapper>
  )
}
