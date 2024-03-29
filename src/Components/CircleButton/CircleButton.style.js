import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16pt;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    
    background: #E7E7EB;
    color: #110E3C;

    /* Active */
    /* background: #585676; */
    /* color: #E7E7EB; */

    *{
        background: transparent;
        color: #110E3C;
    }

    :hover{
        background: #CBCBD4;
        color: #151149;
    }
`