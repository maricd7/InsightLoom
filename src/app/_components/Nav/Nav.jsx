import React from 'react'
import styles from './Nav.module.scss'
import NavLink from '../common/NavLink/NavLink'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>InsightLoom</h2>
      <ul className={styles.links}>
        <NavLink text={'Hottest'} href='./'/>
        <NavLink text={'Newest'} href='./'/>
        <NavLink text={'Sport'} href='./'/>
        <NavLink text={'Contact'} href='./'/>
      </ul>
    </nav>
  )
}
