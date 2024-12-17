import React from 'react'
import styles from './intro.module.css'
import Image from 'next/image'
import intro_icon_one from '../../public/assets/intro-icon.png'
import intro_icon_two from '../../public/assets/delivery.png'
import intro_image_big from '../../public/assets/intro-image-big.png'
import intro_image_small from '../../public/assets/intro-image-small.png'
import tickmark_icon from '../../public/assets/tick-icon.png'

const Intro = () => {
  return (
    <section className={styles.introContainer}>
       <div className={styles.introLeft}>
       <div className={styles.introImages}>
       <Image src={intro_image_big} alt='introimgone' className={styles.introBig}/>
       <Image src={intro_image_small} alt='introimgtwo' className={styles.introSmall}/>
       </div>
           
       </div>
       <div className={styles.introRight}>
         <p className={styles.introsubHead}>Our Introduction</p>
         <p className={styles.introHeading}>Exporters & Suppliers of Farm Products</p>
         <p className={styles.introGreenHead}>AGK Agro brings to you fresh products from farm</p>
         <p className={styles.introDesc}>We aim to offer required Agri-Technologies, Inputs and Services Globally. To maintain proper communication for sustainable growth with research and development in Products, Process and Markets.</p>
         <div className={styles.introFeatures}>
            <div className={styles.introCard}>
                <Image src={intro_icon_one} alt='' className={styles.introIcon}/>
                <p className={styles.introCardText}>Fresh processed products from farm</p>
            </div>
            <div className={styles.introCard}>
               <Image src={intro_icon_two} alt=''className={styles.introIcon}/>
               <p className={styles.introCardText}>Faster & seamless delivery</p>
            </div>
         </div>
         <div className={styles.mainText}>
            <div className={styles.introtext}>
              <Image src={tickmark_icon } alt='tickmark' className={styles.introTick}/>
              <p>We specialise in export & supply of rice, sugar and other foodgrains.</p>
            </div>
            <div className={styles.introtext}>
              <Image src={tickmark_icon } alt='tickmark' className={styles.introTick}/>
              <p>We also export wide variety of spices, fruits and vegetables.</p>
            </div>
            </div>
            <div className={styles.btnIntro}>
                <a href="/service"><button className={styles.introBtn}>Discover More</button></a>
            </div>
            
       </div>
    </section>
  )
}

export default Intro
