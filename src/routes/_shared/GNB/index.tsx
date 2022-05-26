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
        <li>
          <NavLink to='dummy1' type='button'>
            카테고리1
          </NavLink>
        </li>
        <li>
          <NavLink to='dummy2' type='button'>
            카테고리2
          </NavLink>
        </li>
        <li>
          <NavLink to='dummy3' type='button'>
            카테고리3
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='dummy4' type='button'>
            카테고리4
          </NavLink>
        </li> */}
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
