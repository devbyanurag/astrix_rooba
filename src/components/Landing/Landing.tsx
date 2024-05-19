import React, { useState } from 'react'
import styles from './Landing.module.css'
import MainContainer from '../MainContainer/MainContainer'
import Banner from '../Banner/Banner'
import EventInfo from '../EventInfo/EventInfo'
import CollectionsInfo from '../CollectionsInfo/CollectionsInfo'

const Landing = () => {

  const [isCheckedCollection, setIsCheckedCollection] = useState(false);
  return (
    <div className={styles.container}>
      
      <MainContainer isCheckedCollection={isCheckedCollection} setIsCheckedCollection={setIsCheckedCollection}/>
      <Banner/>
      {
        !isCheckedCollection ? <EventInfo/>: <CollectionsInfo/>
      }
      {/* <CollectionsInfo/> */}

      

    </div>
  )
}

export default Landing