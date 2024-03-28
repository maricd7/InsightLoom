import React from 'react'
import styles from './NewsMain.module.scss';
import NewsMain from './NewsMain';


function NewsContainer() {
  return (
    <div className={styles.newsList}>
        <NewsMain/>
        <NewsMain/>
        <NewsMain/>
        <NewsMain/>
        <NewsMain/>
    </div>
  )
}

export default NewsContainer