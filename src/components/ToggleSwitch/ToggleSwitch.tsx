import React from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps{
  isCheckedCollection: boolean
  setIsCheckedCollection: React.Dispatch<React.SetStateAction<boolean>>
}
const ToggleSwitch = ({isCheckedCollection,setIsCheckedCollection}:ToggleSwitchProps)  => {
 


  return (
    <div className={styles.toggleContainer}>
      <div className={`${styles.toggleButton} ${isCheckedCollection ? styles.checked : ''}`}></div>
      <div className={styles.toggleText} onClick={()=>{
        setIsCheckedCollection(false)
      }}>
        <span>Events</span>
      </div>
      <div className={styles.toggleText} onClick={()=>{
        setIsCheckedCollection(true)
      }}>
        <span>Collections</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
