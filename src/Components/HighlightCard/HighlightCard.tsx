import React from 'react'
import { Wrapper } from './HighlightCard.style'

interface HightlightCardProps {
    name: String
    value: String
    windStatus?: Boolean
    humidity?: Boolean
}

export const HighlightCard: React.FC<HightlightCardProps> = ({ name, value, windStatus = false, humidity = false }) => {
    return (
        <Wrapper>
            <p>
                {name}
            </p>
            <p>
                {value}
            </p>
        </Wrapper>
    )
}
