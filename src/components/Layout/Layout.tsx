import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <main className={styles.mainWrapper}>
      <h1>카테고리면 좋겠네...</h1>
      <Outlet />
    </main>
  )
}

export default Layout
