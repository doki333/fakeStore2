import store from 'store'

import { NavLink } from 'react-router-dom'
import styles from './GNB.module.scss'

import { useEffect, useI18n, useState } from 'hooks'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
      <div className={styles.rightWing}>
        <button type='button' className={styles.theme}>
          hello
        </button>
        <button type='button' className={styles.language}>
          hello
        </button>
      </div>
    </nav>
  )
}

export default GNB
