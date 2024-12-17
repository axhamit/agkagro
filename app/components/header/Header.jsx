import React from 'react'
import styles from './header.module.css'
import { MdOutlineFileDownload } from "react-icons/md";
import Modal from '../modal/Modal'



const Header = ({openModal}) => {
  return (
    <header>
    <div className={styles.header}>
    <div className={styles.heroText}>
        <p>Welcome to AGK Agro</p>
        <h3 className={styles.subheroHeading}>Leading Suppliers & Exporters<br/> of Agricultural Products</h3>
        <p className={styles.herotextHeading}>As a premier supplier and exporter of high-quality agricultural products, we prioritize sustainability, customer satisfaction, and global reach, ensuring excellence in every transaction.</p>
        <a href='' download className={styles.heroBtn}>Company Details <span className={styles.downIcon}><MdOutlineFileDownload /></span>
        </a>

      </div>
    </div>
      
    </header>
  )
}

export default Header
