'use client'
import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading/Heading'
import styles from './HeadingNew.module.scss';

export default function HeadingNew() {
  return (
    <div className={styles.mainContainer}>
        <Image width={500} height={320} src='https://images.unsplash.com/photo-1564148204877-9bf116988675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg' className={styles.mainImg}/>
        <div className={styles.container}>
            <span className={styles.date}>1 day ago</span>
            <Heading text='Scientists Uncover Ancient Fossilized Forest in Antarctica'/>
            <p className={styles.paragraph}>In a groundbreaking discovery, a team of international scientists has unearthed the remains of an ancient forest buried beneath Antarctica's icy landscape. The findings, published in the prestigious journal Nature, shed light on the continent's distant past and provide valuable insights into its geological history.</p>
        </div>
    </div>
  )
}
