import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  background: #1E213A;
  height: 100vh;
  width: 45vh;
  padding: 2rem 1rem;

  .search{
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SearchButton = styled('button')`
  background: #6E707A;
  padding: .5rem;
`

export const CircleButton = styled('button')`
  background: #6E707A;
  border-radius: 50%;
  padding: 1rem;
`