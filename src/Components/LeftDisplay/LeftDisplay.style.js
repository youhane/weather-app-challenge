import styled from '@emotion/styled';
import {ReactComponent as cloud} from '../../assets/images/cloud.svg';

export const Wrapper = styled('div')`
  background: #1E213A;
  height: 100vh;
  width: 45vh;
  padding: 2rem 1rem;

  *{
    background: transparent;
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
export const CircleButton = styled('button')`
  border-radius: 50%;
`

export const Middle = styled('div')`
  text-align: center;

  h1{
    font-size: 5rem;
  }

  h2{
    font-size: 2rem;
  }
`

export const Cloud = styled(cloud)`
  position: absolute;
  opacity: 0.5;
  height: auto;
  width: 5rem;

  :nth-child(1){
    left: 18%;
    top: 17%;
  }
  
  :nth-child(2){
    left: 1%;
    top: 15%;
  }

  :nth-child(3){
    left: 1%;
    top: 47%;
  }

  :nth-child(4){
    left: 18%;
    top: 45%;
  }
`

export const Bottom = styled('div')`
  text-align: center;
`