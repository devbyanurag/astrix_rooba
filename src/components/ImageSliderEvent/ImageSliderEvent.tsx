import React, { useState, useEffect } from 'react';
import styles from './ImageSliderEvent.module.css';
import image1 from '../../assets/images/event/event-carousel-1.png';
import image2 from '../../assets/images/event/event-carousel-2.png';
import image3 from '../../assets/images/event/event-carousel-3.png';
import image4 from '../../assets/images/event/event-carousel-4.png';

const images = [image1, image2, image3, image4];

const ImageSliderEvent = () => {
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
      setTranslateSize({initial: 20, reduceto:350})
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
            <img src={image} alt={`img${index + 1}`} />
            <div className={`${index === activeIndex ? styles.cardInfoContainerActive : styles.cardInfoContainerInactive}`}>
              <h1>Event Name</h1>
              <p>Location</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderEvent;
