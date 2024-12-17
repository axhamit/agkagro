'use client'

import React from 'react'
import styles from './productitem.module.css'
import Image from 'next/image'
import product_data from './data'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'

const ProductItem = ({title, description, category, image,id}) => {
  return (
    <div className={styles.productCard}>
    <Link href={`/products/${id}`}>
    <Image src={image} alt='' width={200} height={200} className={styles.cardImage}/>
    </Link>
      <p className={styles.cardCategory}>{category}</p>
      <h5 className={styles.prodTitle}>{title}</h5>
      <p className={styles.prodDesc}>{description}</p>
      <Link href={`/products/${id}`} className={styles.readBtn}>Read more...</Link>
    </div>
  )
}

export default ProductItem

