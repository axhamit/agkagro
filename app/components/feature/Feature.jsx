import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image'
import feature_one from '../../public/assets/feature-one.png'
import feature_two from '../../public/assets/feature-two.png'
import feature_three from '../../public/assets/feature-three.png'

const Feature = () => {
  return (
    <section>
      <div className={styles.featureConatiner}>
        <div className={styles.featureCard}>
            <p className={styles.featureNum}>Feature 01</p>
            <p className={styles.featureText}>We are using new technology</p>
            <Image src={feature_one} alt='feature' className={styles.featureImage}/>
        </div>
        <div className={styles.featureCard}>
        <p className={styles.featureNum}>Feature 02</p>
            <p className={styles.featureText}>We deliver fresh products</p>
            <Image src={feature_two} alt='feature' className={styles.featureImage}/>
        </div>
        <div className={styles.featureCard}>
        <p className={styles.featureNum}>Feature 03</p>
            <p className={styles.featureText}>Swift & seamless delivery</p>
            <Image src={feature_three} alt='feature' className={styles.featureImage}/>
        </div>
      </div>
    </section>
  )
}

export default Feature
