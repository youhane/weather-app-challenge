import { Global } from '@emotion/react';
import { useEffect } from 'react';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { Container, GlobalStyles } from './GlobalStyles';
import axios from 'axios';

const CITY = 'jakarta'
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${CITY}?unitGroup=metric&key=${process.env.REACT_APP_API_KEY}&contentType=json`

function App() {
  useEffect(() => {
    axios.get(BASE_URL).then(res => {
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
