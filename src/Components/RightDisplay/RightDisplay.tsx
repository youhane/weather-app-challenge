import TempButtons from '../TempButtons/TempButtons'
import Highlights from '../Highlights/Highlights';
import Footer from '../Footer/Footer';
import WeatherCards from '../WeatherCards/WeatherCards';

export default function RightDisplay() {
  return (
    <div>
      <TempButtons/>
      <WeatherCards/>
      <Highlights/>
      <Footer />
    </div>
  )
}
