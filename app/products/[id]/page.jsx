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
    <h3 className={styles.headingTitle}>{data.heading4}</h3>
    <p className={styles.ppPara}>{data.para4a}</p>
    <br/>
    <p className={styles.ppPara}>{data.para4b}</p>
    <br/>
    <h3 className={styles.headingTitle}>{data.heading5}</h3>
    <p className={styles.ppPara}>{data.para5a}</p>
    <br/>
    <p className={styles.ppPara}>{data.para5b}</p>
    <br/>
    <p className={styles.ppPara}>{data.para5c}</p>
    <br/>
    <p className={styles.ppPara}>{data.para5d}</p>
    <br/>
    <p className={styles.ppPara}>{data.para5e}</p>
    <br/>
    <h3 className={styles.headingTitle}>{data.heading6}</h3>
    <p className={styles.ppPara}>{data.para6a}</p>
    <br/>
    <p className={styles.ppPara}>{data.para6b}</p>
    <br/>
    <p className={styles.ppPara}>{data.para6c}</p>
    <br/>
    <h3 className={styles.headingTitle}>{data.heading7}</h3>
    <p className={styles.ppPara}>{data.para7a}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7b}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7c}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7d}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7e}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7f}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7g}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7h}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7i}</p>
    <br/>
    <p className={styles.ppPara}>{data.para7j}</p>
    <br/>
    <br/>
    <br/>
    </div>
    

    
  </>:<></>
    
  )
}

export default Page
