import React, { useContext, useRef, useState } from 'react'
import { CloseButton, SearchInput, Selection, Wrapper } from './SearchBar.style'
import { WeatherContext } from '../Context/WeatherContext';

const CITIES = ['Jakarta', 'Singapore', 'Bangkok', 'New York', 'London', 'Kuala Lumpur', 'Tokyo', 'Seoul']

interface SearchBarProps {
  setSelectLocation: (value: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({setSelectLocation}) => {
  const {setLocationName, locationName} = useContext(WeatherContext)
  const [chooseLocation, setChooseLocation] = useState('')
  const locationRef = useRef<any>(locationName)

  return (
    <Wrapper>
      <CloseButton onClick={() => setSelectLocation(false)}>X</CloseButton>
      <br />
      <SearchInput>
        <input type='text' name='search' ref={locationRef} disabled value={chooseLocation} placeholder='Search Location' />
        <button type='button' onClick={() => setLocationName(locationRef.current.value)}>
          Search
        </button>
      </SearchInput>
      {CITIES.map((city, index) => (
          <Selection key={index} value={city} onClick={() => setChooseLocation(city)} >{city}</Selection>
      ))}
    </Wrapper>
  )
}
