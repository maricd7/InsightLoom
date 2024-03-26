import Image from 'next/image'
import React from 'react'
import styles from './NewsMain.module.scss';

function NewsMain() {
  return (
    <div className={styles.newsContaiener}>
      <Image width={250} height={250} src='https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg'/>
      <span className={styles.date}>26.03.2024</span>
      <h2 className={styles.newsHeading}>Lorem ipsum</h2>
      <p  className={styles.newsDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nam, cumque, consequatur incidunt eius similique odit tempora voluptatibus cum dignissimos, deleniti vitae accusamus esse. Laudantium eaque quod id cumque nesciunt.</p>
    </div>
  )
}

export default NewsMain