import styled from '@emotion/styled';
import BackgroundClouds from '../../assets/icons/Cloud-background.png';

export const Wrapper = styled('div')`
  background: #1E213A;
  height: auto;
  width: 25vw;
  padding: 1.8rem 0rem;

  *{
    background: transparent;
  }

  button:hover{
    cursor: pointer;
  }
`

export const Top = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  button{
    background: #6E707A;
    padding: .5rem;

    :hover{
      background: #5D5F6A;
    }
  }
`
export const GPSButton = styled('button')`
  border-radius: 50%;

  :hover{
    cursor: pointer;
  }
`

export const Middle = styled('div')`
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 100%
    ),
    url(${BackgroundClouds});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: 150%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  
  h1{
    font-size: 6rem;
    font-weight: 500;
    color: #E7E7EB;
  }

  h2{
    font-size: 2rem;
    font-weight: 500;
    color: #A09FB1;
  }

  span{
    color: #A09FB1;
    font-size: 2rem;
  }

  img{
    width: 40%;
  }
`

export const Bottom = styled('div')`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #88869D;

  *{
    color: #88869D;
    display: flex;
    gap: .5rem;
    justify-content: center;
  }
`