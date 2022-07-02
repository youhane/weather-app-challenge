import { Global } from '@emotion/react';
import { WeatherProvider } from './Components/Context/WeatherContext';
import LeftDisplay from './Components/LeftDisplay/LeftDisplay';
import RightDisplay from './Components/RightDisplay/RightDisplay';
import { Container, GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <WeatherProvider>
      <Global styles={GlobalStyles} />
      <Container>
        <LeftDisplay/>
        <RightDisplay/>
      </Container>
    </WeatherProvider>
  );
}

export default App;
