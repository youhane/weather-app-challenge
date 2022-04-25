import { Global } from '@emotion/react';
import React from 'react';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <div>
        <LeftDisplay/>
        <RightDisplay/>
      </div>
    </>
  );
}

export default App;
