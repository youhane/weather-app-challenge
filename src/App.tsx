import { Global } from '@emotion/react';
import React from 'react';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { Container, GlobalStyles } from './GlobalStyles';

function App() {
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
