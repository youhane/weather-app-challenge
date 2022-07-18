import React, { useContext, useRef } from 'react'
import { CloseButton, SearchInput, Selection, Wrapper } from './SearchBar.style'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { WeatherContext } from '../Context/WeatherContext';
import { IconContext } from 'react-icons';

const CITIES = ['Jakarta', 'Singapore', 'Bangkok', 'New York', 'London', 'Kuala Lumpur', 'Tokyo', 'Seoul']

export default function SearchBar() {
  const {location, setLocation} = useContext(WeatherContext)
  const locationRef = useRef<any>(location)

  return (
    <Wrapper>
      <CloseButton>X</CloseButton>
      <br />
      <SearchInput>
        <input type='text' name='search' ref={locationRef} placeholder='Search Location' />
        <button type='button' onClick={() => setLocation(locationRef.current.value)}>
          Search
        </button>
      </SearchInput>
      {CITIES.map((city, index) => (
          <Selection key={index} value={city}>{city}</Selection>
      ))}
    </Wrapper>
  )
}
