import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
`

export const Grid = styled('div')`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }
    
    @media (max-width: 320px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 1rem;
    }
`