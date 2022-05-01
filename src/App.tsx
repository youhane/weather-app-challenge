import { Global } from '@emotion/react';
import React, { useEffect } from 'react';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { Container, GlobalStyles } from './GlobalStyles';
import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location/'

function App() {
  useEffect(() => {
    axios.get(BASE_URL+'search/?query=san').then(res => {
      console.log(res.data);
    });
  }, [])
  
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <LeftDisplay/>
        <RightDisplay/>
      </Container>
    </>
  );
}

export default App;
