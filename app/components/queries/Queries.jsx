'use client'
import React, { useState } from 'react'
import styles from './queries.module.css'
import data from './data'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Queries = () => {

    const [selected, setSelected] = useState(null);
    const toggle = (i) =>{
        if ( selected == i){
           return setSelected(null)
        }
        setSelected(i)
     }
    
  return (

    <div>
    <div className={styles.faqHeading}>
             <p className={styles.faqHead}>Faqs</p>
             <p className={styles.faqSubhead}>Meeting your Expectations</p>
    </div>
        
        <div className={styles.faqWrapper}>
    
    <div className={styles.faqAccordion}>
      {
          data.map((item, i) =>(
              <div className={styles.faqItem} key={i}>
              <div className={styles.faqTitle} onClick={()=> toggle(i)} >
                  <p>{item.question}</p>
                  <span>{ selected == i? <FaMinus />:<FaPlus />}</span>
              </div>
              <div className={ selected == i? styles.faqContentshow : styles.faqContent}>{item.answer}</div>
             </div>
          ))
      }
    </div>
  </div>
    </div>

    
  )
}

export default Queries
