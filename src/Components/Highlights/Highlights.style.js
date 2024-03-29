import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    margin: 2.5rem 3rem;
`

export const Heading = styled('h1')`
    margin-bottom: 1rem;
    font-size: 1rem;

    @media (max-width: 768px){
        text-align: center;
        font-size: 1.5rem;
    }
`

export const Grid = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-rows: auto auto;

    @media (max-width: 320px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`