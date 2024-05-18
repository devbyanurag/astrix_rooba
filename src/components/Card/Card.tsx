import React from 'react'
import collectionCarouselImg from '../../assets/images/collections/collection-carousel-1.png'
import styles from './Card.module.css'
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>2024</span>
        <p>By Pablo</p>
      </div>
      <p className={styles.main_heading}>Collectible Name</p>
      <img src={collectionCarouselImg} alt="collectionCarouselImg" />
    </div>
  )
}

export default Card