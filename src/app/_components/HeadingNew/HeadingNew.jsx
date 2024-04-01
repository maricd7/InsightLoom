'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Heading from '../common/Heading/Heading'
import styles from './HeadingNew.module.scss';
import Link from 'next/link';

export default function HeadingNew() {
  const [headingNew,setHeadingNew]=useState([])
  const [url,setUrl] = useState('/home')
  useEffect(() => {
    async function getHeadingNew() {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
      const data = await res.json();
      setHeadingNew(data.articles[0]); 
      setUrl(data.articles[0]?.url);
    }
    getHeadingNew();
  }, []);
  return (
    <Link className={styles.link} href={url}>
      <div className={styles.mainContainer}>
          <Image width={500} height={320} src='https://images.unsplash.com/photo-1564148204877-9bf116988675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg' className={styles.mainImg}/>
          <div className={styles.container}>
              <span className={styles.date}>{headingNew.publishedAt}</span>
              <Heading text={headingNew.title}/>
              <p className={styles.paragraph}>{headingNew.description}</p>
          </div>
      </div>
    </Link>
  )
}
