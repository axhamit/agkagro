import React from 'react'
import styles from './videosec.module.css'
import Image from 'next/image'
import video_icon from '../../public/assets/video-icon.png'

const Videosec = ({setPlayState}) => {
  return (
    <section className={styles.videoContainer}>
    <div className={styles.videoTop}>
    <p className={styles.certificateTitle}>Certified from -</p>
    <div className={styles.certificateType}>
        <p>Apeda</p>
        <p>Spices board of India</p>
        <p>Nafed</p>
        <p>Halal</p>
    </div>
    </div>
    <div className={styles.videoBottom}>
    <p className={styles.videoText}>Good Food matters to the Future of Development</p>
    <Image src={video_icon} alt='' className={styles.videoIcon} 
    onClick={()=>{setPlayState(true)}}/>
    </div>
      
    </section>
  )
}

export default Videosec
