import { Bottom, GPSButton, Middle, Top, Wrapper } from './LeftDisplay.style'
import { MdGpsFixed, MdLocationPin } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Shower from '../../assets/icons/Shower.png';

export default function LeftDisplay() {

  const todayDate = (): String => {
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const newDate = new Date();
    
    const day = DAYS[newDate.getDay()].substring(0, 3);
    const date = newDate.getDate();
    const month = MONTHS[newDate.getMonth()];
    
    return `${day}, ${date} ${month}`
  }

  return (
    <Wrapper>
        <Top>
          <button>Search for places</button>
          <GPSButton>
            <IconContext.Provider
              value={{ 
                style: {
                  background: 'transparent', padding: '0', display: 'flex'
                } 
              }}
            >
              <MdGpsFixed size={20} />
            </IconContext.Provider>
          </GPSButton>
        </Top>
        <Middle>
          <img src={Shower} alt="shower" />
          <h1>15<span>°C</span></h1>
          <h2>Shower</h2>
        </Middle>
        <Bottom>
          <p>Today • {todayDate()}</p>
          <p><MdLocationPin size={20}/> Jakarta</p>
        </Bottom>
    </Wrapper>
  )
}
