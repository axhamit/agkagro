import React, { useState } from 'react'
import styles from './enquire.module.css'
import Modal from './Modal';

const Enquire = () => {
    
  return (
    <div className={styles.enqContainer}>
      <button>Enq Now</button>
      <Modal/>
    </div>
  )
}

export default Enquire
