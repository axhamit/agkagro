import React from 'react'
import Product from '../components/Product/Product'
import styles from './service.module.css'

const page = () => {
  return (
    <section>
      <div className={styles.servicetHeader}>
        <p className={styles.serviceSubhead}>Home / Products</p>
         <h2 className={styles.serviceHead}>Products</h2>
      </div>
      <Product/>
    </section>
  )
}

export default page


