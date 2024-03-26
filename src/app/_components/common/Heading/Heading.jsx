import React from 'react'
import styles from './Heading.module.scss'; 

export default function Heading({text}) {
  return (
    <h1 className={styles.heading}>{text}</h1>
    )
}
