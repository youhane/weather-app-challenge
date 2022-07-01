import React from 'react'
import TempButtons from '../TempButtons/TempButtons'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import Shower from '../../assets/icons/Shower.png';
import { WeatherCards } from './RightDisplay.style';

export default function RightDisplay() {
  return (
    <div>
      <TempButtons/>
      <WeatherCards>
        <WeatherCard day='Tomorrow' img={Shower} temp='15'/>
        <WeatherCard day='Tomorrow' img={Shower} temp='15'/>
      </WeatherCards>
    </div>
  )
}
