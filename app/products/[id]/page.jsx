'use client'
import product_data from '@/app/components/ProductItem/data';
import React, { useCallback, useEffect, useState } from 'react'
import styles from './productpage.module.css'
import Image from 'next/image';

const Page = ({params}) => {

  const [data, setData] = useState(null);

  const fetchBlogData = useCallback(() =>{
     for(let i=0; i<product_data.length;i++)
     {
        if(Number(params.id)===product_data[i].id ){
           setData(product_data[i]);
           break;
        }
     }
  },[params.id]);

  useEffect(()=>{
     fetchBlogData();
  },[fetchBlogData])
  return (data ? <>
    <Image src={data.image} alt='' width={1000} height={600} className={styles.ppImage}/>
    <h2 className={styles.ppTitle}>{data.title}</h2>
    <div className={styles.contentContainer}>
    <h3 className={styles.headingTitle}>{data.heading1}</h3>
    <p className={styles.ppPara}>{data.para1a}</p>
    <br/>
    
    <p className={styles.ppPara}>{data.para1b}</p>
    <br/>
    
    <h3 className={styles.headingTitle}>{data.heading2}</h3>
    <p className={styles.ppPara}>{data.para2a}</p>
    <br/>
    <p className={styles.ppPara}>{data.para2b}</p>
    <br/>
    
    <h3 className={styles.headingTitle}>{data.heading3}</h3>
    <p className={styles.ppPara}>{data.para3a}</p>
    <br/>
    
    <p className={styles.ppPara}>{data.para3b}</p>
    <br/>
    
    </div>
    

    
  </>:<></>
    
  )
}

export default Page
