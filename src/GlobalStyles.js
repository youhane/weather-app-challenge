import { css } from "@emotion/react";
import styled from '@emotion/styled';

export const GlobalStyles = css`
    *{
        background: #100E1D;
        color: #E7E7EB;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: Raleway;
    }
`

export const Container = styled('div')`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`