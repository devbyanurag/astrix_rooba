import React from 'react'
import styles from './EventLanding.module.css'
import EventCarousel from '../EventCarousel/EventCarousel'
import Banner from '../Banner/Banner'
import EventInfo from '../EventInfo/EventInfo'
import CollectionsInfo from '../CollectionsInfo/CollectionsInfo'

const EventLanding = () => {
  return (
    <div className={styles.container}>
      
      <EventCarousel/>
      <Banner/>
      <EventInfo/>
      {/* <CollectionsInfo/> */}

      

    </div>
  )
}

export default EventLanding