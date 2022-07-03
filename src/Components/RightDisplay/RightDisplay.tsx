import TempButtons from '../TempButtons/TempButtons'
import Highlights from '../Highlights/Highlights';
import Footer from '../Footer/Footer';
import WeatherCards from '../WeatherCards/WeatherCards';
import { Wrapper } from './RightDisplay.style';

export default function RightDisplay() {
  return (
    <Wrapper>
      <TempButtons/>
      <WeatherCards/>
      <Highlights/>
      <Footer />
    </Wrapper>
  )
}
