import React from 'react'
import { CircleButton } from '../CircleButton/CircleButton'
import { Wrapper } from './TempButtons.style'

export default function TempButtons() {
  return (
    <Wrapper>
        <CircleButton temp='C'/>
        <CircleButton temp='F'/>
    </Wrapper>
  )
}
