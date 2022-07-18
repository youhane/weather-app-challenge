import styled from "@emotion/styled";

export const Wrapper = styled('div')`
    position: absolute;
    background: #1E213A;
    width: 25vw;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
        margin-bottom: 2rem;
        height: 100%;
    }
`

export const CloseButton = styled('button')`
    float: right;
    margin-right: 1rem;
    font-size: 1.3rem;

    *{
        color: #fff;
    }

    :hover{
        cursor: pointer;
    }
`

export const SearchInput = styled('div')`
    color: #E7E7EB;
    display: flex;
    margin: 1rem;
    margin-top: 2rem;
    justify-content: space-between;

    input{
        border: 1px solid #E7E7EB;
        width: 15rem;
        padding-left: .5rem;

        @media (max-width: 768px){
            width: 70vw;
        }
    }

    button{
        background: #3C47E9;
        padding: .9rem;
    }
`

export const Selection = styled('button')`
    border: 1px solid #616475;
    margin: 1rem;
    margin-bottom: 0rem;
    width: 21rem;
    padding: .9rem;
    text-align: left;

    :hover{
        background: #5D5F6A;
    }

    @media (max-width: 768px){
        width: 90vw;
    }
`