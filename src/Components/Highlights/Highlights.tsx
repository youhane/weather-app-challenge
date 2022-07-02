import React, { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext'
import { HighlightCard } from '../HighlightCard/HighlightCard'
import { Grid, Heading, Wrapper } from './Highlights.style'

export default function Highlights() {
  const { currentWeather } = useContext(WeatherContext);
  console.log(currentWeather)

  return (
    <Wrapper>
        <Heading>Today’s Hightlights</Heading>
        <Grid>
          <HighlightCard name='Wind Status' value={currentWeather.wind.gust} measure='mph' windStatus={currentWeather.wind.deg} />
          <HighlightCard name='Humidity' value={currentWeather.main.humidity} measure='%' humidity={currentWeather.main.humidity}/>
          <HighlightCard name='Visibility' value={currentWeather.visibility} measure='miles'/>
          <HighlightCard name='Air Pressure' value={currentWeather.main.pressure} measure='mb'/>
        </Grid>
    </Wrapper>
  )
}
