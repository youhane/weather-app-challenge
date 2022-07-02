import React from 'react'
import { HighlightCard } from '../HighlightCard/HighlightCard'
import { Heading, Wrapper } from './Highlights.style'

export default function Highlights() {
  return (
    <Wrapper>
        <Heading>Today’s Hightlights</Heading>
        <HighlightCard name='Visibility' value='6,4' measure='miles'/>
    </Wrapper>
  )
}
