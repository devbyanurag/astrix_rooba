import React from 'react'
import styles from './MainContainer.module.css'
import headerLogoImg from '../../assets/images/logo/Astrix Branding.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import ImageSliderEvent from '../ImageSliderEvent/ImageSliderEvent'

interface MainContainerProps {
    isCheckedCollection: boolean
    setIsCheckedCollection: React.Dispatch<React.SetStateAction<boolean>>
}

const MainContainer = ({ isCheckedCollection, setIsCheckedCollection }: MainContainerProps) => {

    return (
        <div className={styles.carousel_container}>
            <div className={styles.header}>
                <img src={headerLogoImg} alt="logo" />
                <h1>Astrix.</h1>
            </div>
            <div className={styles.carousel_section}>
                <div className={styles.carousel_section_bg}>
                    <div>
                        <h1>ASTR<br />IX</h1>
                    </div>
                    <div>
                        <h1>EVE<br />NTS</h1>
                    </div>
                </div>
            </div>
            <div className={styles.main_carousel_container}>
                <ImageSliderEvent />

            </div>


            <div className={styles.toggleContainer}>
                <ToggleSwitch isCheckedCollection={isCheckedCollection} setIsCheckedCollection={setIsCheckedCollection} />
            </div>
        </div>
    )
}

export default MainContainer