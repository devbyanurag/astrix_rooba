import React from 'react'

import inPeo_1 from '../../assets/images/collections/interseted-people-1.jpg'
import inPeo_2 from '../../assets/images/collections/interseted-people-2.jpg'
import inPeo_3 from '../../assets/images/collections/interseted-people-3.jpg'
import inPeo_4 from '../../assets/images/collections/interseted-people-4.jpg'
import inPeo_5 from '../../assets/images/collections/interseted-people-5.jpg'






import styles from './CollectionsInfo.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'
const CollectionsInfo = () => {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_inner_container}>
        <h2 className={styles.info_heading}>
          Explore Youre First  <br /> Collectible
        </h2>
        <div className={styles.info}>
          <h1>
            Meta <br /> Lives
          </h1>
          <h3>Live in Astrix</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. .</p>
        </div>
        <div className={styles.interested_container}>
          <div className={styles.interested_container_img}>
            <img src={inPeo_1}/>
            <img src={inPeo_2}/>
            <img src={inPeo_3}/>
            <img src={inPeo_4}/>
            <img src={inPeo_5}/>
          </div>
          <p>22k people interested</p>
        </div>
        <div className={styles.collectibles_container}>
          <p className={styles.heading}>Collectibles</p>
          <div className={styles.card_container}>
            <Card/>
            <Card/>

            <Card/>
            <Card/>



          </div>
        </div>

        <div className={styles.bottom_button}>
          <Button/>
        </div>

      </div>
    </div>
  )
}

export default CollectionsInfo