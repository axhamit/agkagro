import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import mission_image from '../public/assets/village-woman.png'
import mission_iconone from '../public/assets/micon-one.png'
import mission_icontwo from '../public/assets/micon-two.png'
import mission_iconthree from '../public/assets/micon-three.png'
import ceo_avatar from '../public/assets/team-avatar.png'

const page = () => {
  return (
    <section>
      <div className={styles.abtHeader}>
        <p className={styles.abtSubhead}>Home / About</p>
         <h2 className={styles.abtHead}>About Us</h2>
      </div>
      <div className={styles.abtMission}>
         <div className={styles.missionLeft}>
            <Image src={mission_image} alt='' className={styles.missionImage}/>
         </div>
         <div className={styles.missionRight}>
         <div className={styles.missionContainer}>
         <p className={styles.abtSubhead}>Our Mission</p>
            <h3 className={styles.abtHeading}>Commitment to Excellence and Growth</h3>
            <p className={styles.missionGreentext}>We strive to provide premium agricultural products, ensure customer satisfaction, and foster sustainable global growth</p>
            <p className={styles.missonDesc}>Our prime mission is to provide products and services that provide 100% satisfaction to the clients. Moreover, we have also made efforts to maintain long-term relation with our Team, Shareholders, Associates, and the Agriculture Community at large and play a vital role in their growth, prosperity, peace and pride.</p>
         </div>
            
            <div className={styles.benBox}>
            <h3 className={styles.abtBen}>Our Benefits</h3>
            <div className={styles.missionBenefits}>
                <div className={styles.missonBox}>
                  <Image src={mission_iconone } alt='' className={styles.mbIcon}/>
                  <p className={styles.mbHeadone}>Uncompromised Quality</p>
                  <p className={styles.mbDesc}>We ensure premium agricultural products meet the highest international standards through stringent quality controls.</p>
                </div>

                <div className={styles.missonBox}>
                 <Image src={mission_icontwo} alt='' className={styles.mbIcon}/>
                  <p className={styles.mbHeadtwo}>Extensive Global Network</p>
                  <p className={styles.mbDesc}>We efficiently market our diverse products globally through a strong network, ensuring timely delivery and satisfaction.</p>
                </div>

                <div className={styles.missonBox}>
                 <Image src={mission_iconthree} alt='' className={styles.mbIcon}/>
                  <p className={styles.mbHeadthree}>Innovation-Driven Growth</p>
                  <p className={styles.mbDescthree}>We blend traditional farming with technology to deliver innovative solutions for the evolving agricultural sector.</p>
                </div>
            </div>
            </div>
           

            
         </div>
      </div>
      <div className={styles.abtCeo}>
        <div className={styles.ceoLeft}>
          <Image src={ceo_avatar } alt='' className={styles.ceoImage}/>
          <div className={styles.ceoDetails}>
            <p className={styles.cName}>Mr. Anit Kumar Sinha</p>
            <p className={styles.cDesig}>Founder & CEO, AGK Agro Private Limited</p>
            
          </div>
        </div>
        <div className={styles.ceoRight}>
          <p className={styles.ceoSubhead}>Leadership Perspective</p>
          <h3 className={styles.ceoHead}>Message from the CEO</h3>
          <br />
          <br />
          <p className={styles.ceoPara}>AGK Agro Private Limited, founded by Anit Kumar Sinha in 2009, is a prominent player in international trade and logistics. Leveraging over 20 years of experience in the import-export sector, Anit has built a reputation for providing efficient, compliant trade solutions worldwide. Based in New Delhi, India, the company serves diverse markets, including the USA, Saudi Arabia, Russia, and Africa.</p>
          <br />
          <p className={styles.ceoPara}>Focusing on agricultural products, manufacturing, and consumer goods, AGK Agro ensures seamless goods movement between India and global markets. Anit’s leadership has driven market expansion in Eastern Asia, Europe, and Africa, building trusted relationships with suppliers and distributors.</p>
          <br />
          <p className={styles.ceoPara}>Under the guidance of Anit, AGK Agro has diversified its product portfolio, emphasizing sustainability and ethical practices. By mastering market dynamics and regulatory challenges, Anit ensures AGK Agro remains a reliable partner in an evolving global market.</p>
        </div>
      </div>
    </section>
  )
}

export default page


