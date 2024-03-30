'use client'
import React, { useEffect, useState } from 'react'
import styles from './NewsMain.module.scss';
import NewsMain from './NewsMain';
import Link from 'next/link';


function NewsContainer() {
  const [news,setNews]=useState([])

  useEffect(()=>{
    async function getNews(){
      const res =await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      const data = await res.json()
      setNews(data.articles);
      console.log(data,  'dejta')
    }
    getNews()
  },[])
  return (
    <div className={styles.newsList}>
        { news ? 
          news.map((article, index) => (
            <Link className={styles.link} href={article.url}>
              <NewsMain title={article.title} description={article.description} articleImage={article.urlToImage} key={index} date={article.publishedAt}/>
            </Link>
          ))
          :<></>
        }
    </div>
  )
}

export default NewsContainer