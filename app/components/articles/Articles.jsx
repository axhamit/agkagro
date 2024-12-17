import React from 'react'
import styles from './articles.module.css'
import article_one from '../../public/assets/article-one.png'
import article_two from '../../public/assets/article-two.png'
import article_three from '../../public/assets/article-three.png'
import Image from 'next/image'

const Articles = () => {
  return (
    <section className={styles.articlesContainer}>
      <h2 className={styles.articleHead}>From the Blog</h2>
      <p className={styles.subHead}>News & Articles</p>
      <div className={styles.articleImages}>
        <div className={styles.blogBox}>
           <Image src={article_one} alt='' className={styles.artImage}/>
        <div className={styles.blogHead}>
            <button className={styles.artBtn}>Read More</button>
            <p className={styles.artText}>Bringing Food Production Back To Cities</p>
        </div>
        </div>
        <div className={styles.blogBox}>
           <Image src={article_two} alt='' className={styles.artImage}/>
        <div className={styles.blogHead}>
            <button className={styles.artBtn}>Read More</button>
            <p className={styles.artText}>Bringing Food Production Back To Cities</p>
        </div>
        </div>
        <div className={styles.blogBox}>
           <Image src={article_three} alt='' className={styles.artImage}/>
        <div className={styles.blogHead}>
            <button className={styles.artBtn}>Read More</button>
            <p className={styles.artText}>Bringing Food Production Back To Cities</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
