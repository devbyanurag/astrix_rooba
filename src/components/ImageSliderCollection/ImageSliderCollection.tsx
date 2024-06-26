import { useState, useEffect } from 'react';
import styles from './ImageSliderCollection.module.css';
import image1 from '../../assets/images/collections/event-carousel-5.png';
import image2 from '../../assets/images/event/event-carousel-2.png';
import image3 from '../../assets/images/collections/event-carousel-6.png';
import image4 from '../../assets/images/event/event-carousel-4.png';

const images = [image1, image2, image3, image4];

const ImageSliderCollection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (animationStarted) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [ animationStarted]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(windowWidth<500){
      setTranslateSize({initial: 20, reduceto:370})
    }
    else{
      setTranslateSize({initial: 300, reduceto:350})
    }

  }, [windowWidth])
  const [translateSize, setTranslateSize] = useState({initial:300,reduceto:350})
  

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.card_container}
            style={{
              transform: `translateX(${translateSize.initial - translateSize.reduceto * activeIndex}px)`,
            }}
          >
            <div className={`${index === activeIndex ? styles.cardInfoContainerActive : styles.cardInfoContainerActive}`}>
              <h1>Lunar Palace: </h1>
              <p>(ft. Kanye west)</p>
            </div>
            <img src={image} alt={`img${index + 1}`} />

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderCollection;
