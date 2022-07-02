import React from 'react'
import { Wrapper } from './HighlightCard.style'

interface HightlightCardProps {
    name: String
    value: String
    measure: String
    windStatus?: Boolean
    humidity?: Boolean
}

export const HighlightCard: React.FC<HightlightCardProps> = ({ name, value, measure, windStatus = false, humidity = false }) => {
    return (
        <Wrapper>
            <p>
                {name}
            </p>
            <h1>
                {value} <span>{measure}</span>
            </h1>
        </Wrapper>
    )
}
