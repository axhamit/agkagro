import React from 'react'
import styles from './benefits.module.css'
import farm_image from '../../public/assets/farm-image.png'
import green_tick from '../../public/assets/tick-green.png'
import yellow_tick from '../../public/assets/tick-yellow.png'
import orange_tick from '../../public/assets/tick-orange.png'
import Image from 'next/image'

const Benefits = () => {
  return (
    <section className={styles.benefitsContainer}>
    <div className={styles.benefitsContent}>
       <div className={styles.benefitsLeft}>
        <Image src={farm_image} alt='' className={styles.farmImage}/>
        <p className={styles.boardText}>We are the Best!</p>
       </div>
       <div className={styles.benefitsRight}>
        <p className={styles.benHeading}>Our Benefits</p>
        <p className={styles.benTitle}>Why Choose AGK Agro</p>
        <p className={styles.benDesc}>We are one of the leading suppliers and exporters of agricultural products possessing large farms wherein traditional to technology based export processes are implemented.</p>
        <div className={styles.benPoint}>
           <Image src={green_tick} alt='' className={styles.benTick}/>
           <div className={styles.benPointhead}>
            <p className={styles.pointHeading}>Wide Variety of Products</p>
            <p className={styles.pointDesc}>We export wide varieties of foodgrains ranging from cereals to spiices to vegetables & fruits.</p>
           </div>
        </div>

        <div className={styles.benPoint}>
           <Image src={yellow_tick} alt='' className={styles.benTick}/>
           <div className={styles.benPointhead}>
            <p className={styles.pointHeading}>Government Certified Products</p>
            <p className={styles.pointDesc}>All our products are certified from govt agency like Apeda, Spice Board of India, Halal and Nafed.</p>
           </div>
        </div>

        <div className={styles.benPoint}>
           <Image src={orange_tick} alt='' className={styles.benTick}/>
           <div className={styles.benPointhead}>
            <p className={styles.pointHeading}>Nation-wide and Global Delivery</p>
            <p className={styles.pointDesc}>We deliver products all over India and globally as well majorly in south-east asia and middle east.</p>
           </div>
        </div>
        <div className={styles.benfitBtn}>
           <button className={styles.benBtn}>Discover more</button>
        </div>
         
       </div>
    </div>
    </section>
  )
}

export default Benefits




