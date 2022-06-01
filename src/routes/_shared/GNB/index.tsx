import store from 'store'

import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'

import { useEffect, useState } from 'hooks'

const GNB = () => {
  return (
    <header className={styles.gnb}>
      <div className={styles.leftWing}>
        <h1>F</h1>
        <h1>S</h1>
      </div>
      <ul>
        {/* <li>
          <NavLink to='dummy1' type='button'>
            All
          </NavLink>
        </li> */}
        <li>
          <NavLink to='clothes'>Clothes</NavLink>
        </li>
        <li>
          <NavLink to='electronics'>Electronics</NavLink>
        </li>
        <li>
          <NavLink to='furniture'>Furniture</NavLink>
        </li>
        <li>
          <NavLink to='shoes'>Shoes</NavLink>
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
