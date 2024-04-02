'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NewsMain from '../NewsMain/NewsMain'
import styles from './AllArticles.module.scss';
export default function AllArticles() {
    const [news,setNews]=useState([])
    
  useEffect(()=>{
    async function getNews(){
      const res =await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
      const data = await res.json()
      setNews(data.articles)
    }
    getNews()
  },[])
  console.log(news,'asdsad')
  return (
    <div className={styles.allArticlesContainer}>
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
