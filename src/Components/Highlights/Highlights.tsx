import React, { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext'
import { HighlightCard } from '../HighlightCard/HighlightCard'
import { Heading, Wrapper } from './Highlights.style'

export default function Highlights() {
  const currentWeather = useContext(WeatherContext);
  console.log(currentWeather)

  return (
    <Wrapper>
        <Heading>Today’s Hightlights</Heading>
        <HighlightCard name='Visibility' value='6,4' measure='miles'/>
    </Wrapper>
  )
}
