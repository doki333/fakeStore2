import store from 'store'

import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'

import { useEffect, useI18n, useState } from 'hooks'

const GNB = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.leftWing}>
        <h1>로고가 들어가면 좋겠네</h1>
      </div>
      <ul>
        {/* <li>
          <NavLink to='dummy1' type='button'>
            All
          </NavLink>
        </li> */}
        <li>
          <NavLink to='women' type='button'>
            WOMEN
          </NavLink>
        </li>
        <li>
          <NavLink to='men' type='button'>
            MEN
          </NavLink>
        </li>
        <li>
          <NavLink to='electronics' type='button'>
            ELECTRONICS
          </NavLink>
        </li>
        <li>
          <NavLink to='jewelery' type='button'>
            JEWELERY
          </NavLink>
        </li>
      </ul>
      <div className={styles.rightWing}>
        <button type='button' className={styles.theme}>
          장바구니..
        </button>
        <button type='button' className={styles.language}>
          프로필..
        </button>
      </div>
    </header>
  )
}

export default GNB
