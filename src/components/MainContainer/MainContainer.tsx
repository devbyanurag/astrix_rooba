import React from 'react'
import styles from './MainContainer.module.css'
import headerLogoImg from '../../assets/images/logo/Astrix Branding.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import ImageSliderEvent from '../ImageSliderEvent/ImageSliderEvent'
import ImageSliderCollection from '../ImageSliderCollection/ImageSliderCollection'
import sunImg from '../../assets/images/utils/sun.png'
import moonImg from '../../assets/images/utils/moon.png'
import { useDarkMode } from '../../context/DarkModeContext'



interface MainContainerProps {
    isCheckedCollection: boolean
    setIsCheckedCollection: React.Dispatch<React.SetStateAction<boolean>>
}

const MainContainer = ({ isCheckedCollection, setIsCheckedCollection }: MainContainerProps) => {

    const { darkMode, setDark,setLight } = useDarkMode();

    const setDarkMode=()=>{
        document.querySelector('body')?.setAttribute('data-theme','dark')
    }
    const setLightMode=()=>{
        document.querySelector('body')?.setAttribute('data-theme','light')
    }

    
    return (
        <div className={styles.carousel_container}>
            <div className={styles.header}>
               <div className={styles.logoContainer}>
               <img src={headerLogoImg} alt="logo" />
                <h1>Astrix.</h1>
               </div>
               <div className={styles.darkMode}>
                {darkMode && <img src={sunImg} alt='sun'  onClick={()=>{
                    setLightMode()
                    setLight()
                }}/>}
                {!darkMode && <img src={moonImg} alt='moon' onClick={()=>{
                    setDarkMode()
                    setDark()

                }}/>}

               </div>

            </div>
            <div className={styles.carousel_section}>
                <div className={styles.carousel_section_bg}>
                    <div>
                        <h1>ASTR<br />IX</h1>
                    </div>
                    <br />
                    <br />
                    <div>
                        {!isCheckedCollection?<h1>EVE<br />NTS</h1>:<h1>COLL<br />ECTI <br /> BLE</h1>}
                    </div>
                </div>
            </div>
            <div className={styles.main_carousel_container}>
                {isCheckedCollection?<ImageSliderCollection/>:<ImageSliderEvent />}

            </div>


            <div className={styles.toggleContainer}>
                <ToggleSwitch isCheckedCollection={isCheckedCollection} setIsCheckedCollection={setIsCheckedCollection} />
            </div>
        </div>
    )
}

export default MainContainer