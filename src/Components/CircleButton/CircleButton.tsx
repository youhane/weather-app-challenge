import React from 'react'
import { Wrapper } from './CircleButton.style';

interface CircleButtonProps {
    temp: String;
}

export const CircleButton: React.FC<CircleButtonProps> = ({temp}) => {
  return (
    <Wrapper><sup>o</sup>{temp}</Wrapper>
  )
}
