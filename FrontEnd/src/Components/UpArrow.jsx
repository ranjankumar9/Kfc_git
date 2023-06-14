import React from "react";
import styles from '../Styles/UpArrow.module.css'
import { BiUpArrow } from 'react-icons/bi'

const UpArrow = () => {

    const handleArrow = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
  return (
    <div className={styles.up}>
      <div className={styles.arrow} onClick={handleArrow}>
      <BiUpArrow />
      </div>
    </div>
  );
};

export default UpArrow;
