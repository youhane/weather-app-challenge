import moment from 'moment'
import React from 'react'
import { Wrapper } from './WeatherCard.style'

interface WeatherCardProps{
    day: String
    img: string
    temp: number
    feelsLike: String
}

export const WeatherCard: React.FC<WeatherCardProps> = ({day, img, temp, feelsLike}) => {
  const readableDate = (): String =>{
    return moment(day.toString()).format('DD MMM')
  }

  return (
    <Wrapper>
        {readableDate()}
        <img src={img} alt={img} />
        {Math.floor(temp)}°c {feelsLike}
    </Wrapper>
  )
}
