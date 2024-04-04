'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import styles from './Serach.module.scss'
export default function Search() {
  return (
    <div className={styles.inputCointainer}>
        <Icon className={styles.inputIcon} icon="material-symbols:search" width="24" height="24"  style={{color: '#000'}} />
        <span>Search</span>
    </div>
  )
}
