import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    display: flex;
    gap: 1rem;
    width: 70vw;
    margin-top: 2rem;
    justify-content: end;

    @media (max-width: 768px) {
        display: none;
    }
`