import React from 'react'
import styles from './services.module.css'
import Image from 'next/image'
import cerals_image from '../../public/assets/cereals-image.png'
import spices_image from '../../public/assets/spices-image.png'
import fruits_image from '../../public/assets/fruit-image.png'
import vegetables_image from '../../public/assets/vegatables-image.png'
import cereals_icon from '../../public/assets/cereals-icon.png'
import spices_icon from '../../public/assets/spices-icon.png'
import fruits_icon from '../../public/assets/fruits-icon.png'
import veg_icon from '../../public/assets/veg-icon.png'

const Services = () => {
  return (
    <section className={styles.serviceCon}>
    <div className={styles.serviceContainer}>
    <div className={styles.headingWrapper}>
       <p className={styles.serviceHeading}>Our Services</p>
       <p className={styles.serviceTitle}>What We Offer</p>
    </div>
    <div className={styles.imagesContainer}>
      <div className={styles.categoryDetails}>
         <Image src={cerals_image} alt='' className={styles.categoryImage}/>
         <div className={styles.imageText}>
            <Image src={cereals_icon} alt='' className={styles.catIcon}/>
            <p className={styles.catHead}>Cereals</p>
            <a href="/service"><button className={styles.catBtn}>View Products</button></a>
         </div>
      </div>
      <div className={styles.categoryDetails}>
         <Image src={spices_image} alt='' className={styles.categoryImage}/>
         <div className={styles.imageText}>
            <Image src={spices_icon} alt='' className={styles.catIcon}/>
            <p className={styles.catHead}>Spices</p>
            <a href="/service"><button className={styles.catBtn}>View Products</button></a>
         </div>
      </div>
      <div className={styles.categoryDetails}>
         <Image src={fruits_image} alt='' className={styles.categoryImage}/>
         <div className={styles.imageText}>
            <Image src={fruits_icon} alt='' className={styles.catIcon}/>
            <p className={styles.catHead}>Fruits</p>
            <a href="/service"><button className={styles.catBtn}>View Products</button></a>
         </div>
      </div>
      <div className={styles.categoryDetails}>
         <Image src={vegetables_image} alt='' className={styles.categoryImage}/>
         <div className={styles.imageText}>
            <Image src={veg_icon} alt='' className={styles.catIcon}/>
            <p className={styles.catHead}>Vegetables</p>
            <a href="/service"><button className={styles.catBtn}>View Products</button></a>
         </div>
      </div>

    </div>
    </div>
    
    </section>
  )
}

export default Services
