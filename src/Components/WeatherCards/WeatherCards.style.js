import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    display: flex;
    gap: 2rem;
    margin-left: 3rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 1rem;
    }
`