import React from 'react'
import { ProgressBar, WindBlow, Wrapper } from './HighlightCard.style'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { Line } from 'rc-progress'

interface HightlightCardProps {
    name: String
    value: String
    measure: String
    windStatus?: any
    humidity?: any
}

export const HighlightCard: React.FC<HightlightCardProps> = ({ name, value, measure, windStatus, humidity }) => {
    return (
        <Wrapper>
            <p>{name}</p>
            <h1>{value} <span>{measure}</span></h1>
            {windStatus && (
                <WindBlow>
                    <IconContext.Provider
                        value={{
                            style: {
                                background: 'transparent', padding: '0', display: 'flex'
                            }
                        }}
                    >
                        <HiOutlinePaperAirplane size={30} style = {{transform: `rotate(${windStatus}deg)`}} />
                    </IconContext.Provider>
                   <p>{windStatus} deg</p> 
                </WindBlow>
            )}
            {humidity && (
                <ProgressBar>
                    <Line percent={humidity} strokeWidth={2} trailWidth={2} strokeColor="#FFEC65" trailColor='#E7E7EB' />
                </ProgressBar>
            )}
        </Wrapper>
    )
}
