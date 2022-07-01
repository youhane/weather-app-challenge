import React from 'react'
import { Wrapper } from './WeatherCard.style'

interface WeatherCardProps{
    day: String
    img: string
    temp: String

}

export const WeatherCard: React.FC<WeatherCardProps> = ({day, img, temp}) => {
  return (
    <Wrapper>
        {day}
        <img src={img} alt={img} />
        {temp}oc
    </Wrapper>
  )
}
