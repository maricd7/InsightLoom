import Link from 'next/link'
import React from 'react'
import styles from './NavLink.module.scss';

export default function NavLink({text,href}) {
  return (
    <Link href={href} className={styles.link}>{text}</Link>
  )
}
