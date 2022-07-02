import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    background: #1E213A;
    text-align: center;
    padding: 1rem 0;
    margin: 0 1rem;
    margin-bottom: 1.5rem;
    
    *{
        background: #1E213A;
        padding: .5rem 0;
    }

    h1{
        font-size: 3rem;
    }

    span{
        font-size: 1.5rem;
        font-weight: 300;
    }
`

export const WindBlow = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    gap: 1rem;
`

export const ProgressBar = styled('div')`
    margin: 0 5rem;
`