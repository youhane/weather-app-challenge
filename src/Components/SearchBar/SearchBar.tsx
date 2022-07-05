import React, { useContext, useRef } from 'react'
import { SearchInput, Selection, Wrapper } from './SearchBar.style'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { IconContext } from 'react-icons'
import { WeatherContext } from '../Context/WeatherContext';

export default function SearchBar() {
  const {location, setLocation} = useContext(WeatherContext)
  const locationRef = useRef<any>(location)

  return (
    <Wrapper>
      <button><GrClose/></button>
      <SearchInput>
        <input type='text' name='search' ref={locationRef} />
        <button type='button' onClick={setLocation(locationRef)}>
          <AiOutlineSearch size={20} /> Search
        </button>
      </SearchInput>
      <Selection>

      </Selection>
    </Wrapper>
  )
}
