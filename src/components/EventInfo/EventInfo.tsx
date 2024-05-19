import locdarkImg from '../../assets/images/utils/loc-dark.png'
import alarmdarkImg from '../../assets/images/utils/alarm-dark.png'
import artistlineup1Img from '../../assets/images/event/event-artistLineup-1.png'
import artistlineup2Img from '../../assets/images/event/event-artistLineup-2.png'
import artistlineup3Img from '../../assets/images/event/event-artistLineup-3.png'
import qrImg from '../../assets/images/event/event-qr-2.png'
import loclightImg from '../../assets/images/utils/loc-light.png'
import alarmlightImg from '../../assets/images/utils/alarm-light.png'






import styles from './EventInfo.module.css'
import Button from '../Button/Button'
import { useDarkMode } from '../../context/DarkModeContext'
const EventInfo = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={styles.info_container}>
      <div className={styles.info_inner_container}>
        <div>
          <h2 className={styles.info_heading}>
            Explore Your First <br /> Event
          </h2>
          <div className={styles.info}>
            <h1>
              Event Name
            </h1>
            <div className={styles.eventTimeVenue}>
              {darkMode ? <img src={locdarkImg} alt="loc" /> : <img src={loclightImg} alt="loc" />}
              <h4>Venue</h4>
              {darkMode ? <img src={alarmdarkImg} alt="alarm" /> : <img src={alarmlightImg} alt="alarm" />}
              <h4> 04/3/2024 @19:00</h4>
            </div>
            <p>Experience the innovative 'Explore Your First' event. Dive into new ideas and discoveries at an undisclosed venue. Stay tuned for updates!.</p>
            <div className={styles.artistLineup}>
              <div><h2>Artist Lineup</h2></div>
              <div className={styles.artistLineupImgs}>
                <img src={artistlineup2Img} alt="artist2" />
                <img src={artistlineup1Img} alt="artist1" />
                <img src={artistlineup3Img} alt="artist3" />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.qrContainer}>
          <img src={qrImg} alt="qr" />

          <Button />

        </div>
      </div>
    </div>
  )
}

export default EventInfo