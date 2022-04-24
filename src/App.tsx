import { Global } from '@emotion/react';
import React from 'react';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <LeftDisplay/>
      <RightDisplay/>
    </div>
  );
}

export default App;
