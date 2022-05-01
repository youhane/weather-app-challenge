import React from 'react'
import { CircleButton, SearchButton, Wrapper } from './LeftDisplay.style'
import { MdGpsFixed } from 'react-icons/md'
import { IconContext } from 'react-icons'

export default function LeftDisplay() {
  return (
    <Wrapper>
        <div className='search'>
          <SearchButton>Search for places</SearchButton>
          <CircleButton>
            <IconContext.Provider
              value={{ 
                style: {
                  background: 'transparent', padding: '0', display: 'flex'
                } 
              }}
            >
              <MdGpsFixed size={20} />
            </IconContext.Provider>
          </CircleButton>
        </div>
    </Wrapper>
  )
}
