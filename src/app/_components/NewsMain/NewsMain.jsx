import Image from 'next/image'
import React from 'react'
import styles from './NewsMain.module.scss';

function NewsMain({title,articleImage,description,date}) {
  return (
    <div className={styles.newsContaiener}>
      <Image className={styles.newImage} width={250} height={250} src={articleImage}/>
      <span className={styles.date}>{date}</span>
      <h2 className={styles.newsHeading}>{title}</h2>
      <p  className={styles.newsDescription}>{description}</p>
    </div>
  )
}

export default NewsMain