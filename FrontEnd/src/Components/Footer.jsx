import React from 'react'
import styles from '../Styles/Footer.module.css'
import Slider from './Slider'

const Footer = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider1}>
        <h1>OFFERS & DEALS</h1>
        <p>View All Deals &rarr;</p>
      </div>
      <Slider />
    </div>
  )
}

export default Footer