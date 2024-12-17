'use client'


import React, { useState } from 'react'
import styles from './ProductList.module.css'
import product_data from '../ProductItem/data'
import ProductItem from '../ProductItem/ProductItem'

const ProductList = () => {

  const [menu, setMenu] = useState("All");


  return (

    <div className={styles.serviceContainer}>
      <div className={styles.serviceLeft}>
      <div className={styles.categorySelection}>
      <button onClick={()=>setMenu('All')} className={ menu==="All" ?styles.btnBlack : styles.btnNormal}>All</button>
      <button onClick={()=>setMenu('Cereals')} className={ menu==="Cereals" ?styles.btnBlack : styles.btnNormal}>Cereals</button>
      <button onClick={()=>setMenu('Spices')} className={ menu==="Spices" ?styles.btnBlack : styles.btnNormal}>Spices</button>
      <button onClick={()=>setMenu('Fruits')} className={ menu==="Fruits" ?styles.btnBlack : styles.btnNormal}>Fruits</button>
      <button onClick={()=>setMenu('Vegetables')} className={ menu==="Vegetables" ?styles.btnBlack : styles.btnNormal}>Vegetables</button>
      </div>
      </div>
      
      <div className={styles.prodDisplay}>
        {
          product_data.filter((item)=> menu==="All"? true:item.category===menu).map((item, index)=>{
            return <ProductItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
          })
        }
      </div>
    </div>
  )
}

export default ProductList

