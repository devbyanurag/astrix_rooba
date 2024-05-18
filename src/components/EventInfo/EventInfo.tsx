import React from 'react'
import locdarkImg from '../../assets/images/utils/loc-dark.png'
import alarmdarkImg from '../../assets/images/utils/alarm-dark.png'
import artistlineup1Img from '../../assets/images/event/event-artistLineup-1.png'
import artistlineup2Img from '../../assets/images/event/event-artistLineup-2.png'
import artistlineup3Img from '../../assets/images/event/event-artistLineup-3.png'
import qrImg from '../../assets/images/event/event-qr-1.png'






import styles from './EventInfo.module.css'
import Button from '../Button/Button'
const EventInfo = () => {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_inner_container}>
        <div>
          <h2 className={styles.info_heading}>
            Explore Youre First <br /> Event
          </h2>
          <div className={styles.info}>
            <h1>
              Event Name
            </h1>
            <div className={styles.eventTimeVenue}>
              <img src={locdarkImg} alt="loc" />
              <h4>Venue</h4>
              <img src={alarmdarkImg} alt="alarm" />
              <h4> 04/3/2024 @19:00</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem quo laboriosam, quaerat recusandae tempora modi iure voluptas mollitia? Impedit saepe eligendi libero alias ea omnis quo, repudiandae maiores repellat.</p>
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

          <Button/>

        </div>
      </div>
    </div>
  )
}

export default EventInfo