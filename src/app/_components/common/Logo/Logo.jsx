import React from 'react'
import styles from './Logo.module.scss';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link  href='./home' className={styles.logo}>InsightLoom</Link>
  )
}
