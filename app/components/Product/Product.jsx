import React from 'react'
import styles from './product.module.css'
import ProductList from '../ProductList/ProductList'

const Product = () => {
  return (
    <section className={`container ${styles.productSection}`}>
      <ProductList/>
      
    </section>
  )
}

export default Product
