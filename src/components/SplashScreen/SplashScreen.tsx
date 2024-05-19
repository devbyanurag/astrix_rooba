import styles from './SplashScreen.module.css'
import logoImg from '../../assets/images/logo/Emlblem.png'
import frame1Img from '../../assets/images/splashScreen/frame1.png'
import frame2Img from '../../assets/images/splashScreen/frame2.jpg'
import frame3Img from '../../assets/images/splashScreen/frame3.png'
import frame4Img from '../../assets/images/splashScreen/frame4.jpg'
import frame5Img from '../../assets/images/splashScreen/frame5.png'
import frame6Img from '../../assets/images/splashScreen/frame6.png'
import frame7Img from '../../assets/images/splashScreen/frame7.png'
import frame8Img from '../../assets/images/splashScreen/frame8.png'


const SplashScreen = () => {
    return (
        <div className={styles.container}>
            {/* header for the SplashScreen */}
            <div className={styles.header}>
                <img src={logoImg} alt="Logo" id={styles.logo} />
                <span className={styles.logo_text}>Astrix.</span>
            </div>
            <section className={styles.centered_section}>
            <div className={styles.centered_content}>
                <div className={styles.centered_row}>
                    <span className={styles.content}>WE&nbsp;
                        <div className={styles.frameImg1}>
                            <img src={frame1Img} alt="frame1" />
                        </div>
                        &nbsp;ORGANISE THE
                    </span>
                </div>

                <div className={styles.centered_row}>
                    <span className={styles.content}>CONNECTION&nbsp;
                        <div className={styles.frameImg2}>
                            <img src={frame2Img} alt="frame1" />
                        </div>
                    </span>
                </div>
                <div className={styles.centered_row}>
                    <span className={styles.content}>
                        <div className={styles.frameImg3}>
                            <img src={frame3Img} alt="frame1" />
                        </div>
                        &nbsp;BETWEEN&nbsp;
                        <div className={styles.frameImg4}>
                            <img src={frame4Img} alt="frame1" />
                        </div>
                        &nbsp;MUSIC
                    </span>
                </div>
                <div className={styles.centered_row}>
                    <span className={styles.content}>
                        ARTIST&nbsp;
                        <div className={styles.frameImg5}>
                            <img src={frame5Img} alt="frame1" />
                        </div>
                        &nbsp;CULTURE&nbsp;
                        <div className={styles.frameImg6}>
                            <img src={frame6Img} alt="frame1" />
                        </div>
                    </span>
                </div>
                <div className={styles.centered_row}>
                    <span className={styles.content}>
                        <div className={styles.frameImg7}>
                            <img src={frame7Img} alt="frame1" />
                        </div>
                        &nbsp;ART&nbsp;
                        <div className={styles.frameImg8}>
                            <img src={frame8Img} alt="frame1" />
                        </div>
                        &nbsp;& COLLECTIONS
                    </span>
                </div>
            </div>
            </section>
        </div>
    )
}

export default SplashScreen



