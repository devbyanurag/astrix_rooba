import React from 'react'
import styles from './EventCarousel.module.css'
import headerLogoImg from '../../assets/images/logo/Astrix Branding.png'
const EventCarousel = () => {
    return (
        <div className={styles.carousel_container}>
            <div className={styles.header}>
                <img src={headerLogoImg} alt="logo" />
                <h1>Astrix.</h1>
            </div>
            <div className={styles.carousel_section}>
                <div className={styles.carousel_section_bg}>
                    <div>
                        <h1>ASTR<br/>IX</h1>
                    </div>
                    <div>
                        <h1>EVE<br/>NTS</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventCarousel