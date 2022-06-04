import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { cartItemState } from 'recoil/cart.atom'

import { newStore } from 'services/sessionStore'
import { CartIcon, MenuIcon } from 'assets/svgs'

import { cx } from 'styles'
import styles from './gnb.module.scss'

const links = ['clothes', 'electronics', 'furniture', 'shoes']

const GNB = () => {
  const navigate = useNavigate()
  const [cartStatus, setCartStatus] = useRecoilState(cartItemState)

  const currentStatus = window.innerWidth < 600

  const [isMobile, setIsMobile] = useState(currentStatus)
  const [isVisible, setIsVisible] = useState(false)

  const handleClickMenu = () => {
    setIsVisible((prev) => !prev)
  }

  const resizeWindow = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true)
      return
    }
    setIsMobile(false)
  }

  const handleClickCart = () => {
    navigate('/cart')
    setIsVisible(false)
  }

  useEffect(() => {
    const getData = newStore.get('myFSCart') ?? []
    if (getData.length !== 0) {
      setCartStatus(true)
    }
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [setCartStatus])

  const handleClickBtn = () => {
    navigate('/')
    setIsVisible(false)
  }

  return (
    <aside className={styles.gnb}>
      <div className={styles.gnbInner}>
        <button type='button' onClick={handleClickBtn} className={styles.leftWing}>
          <span>F</span>
          <span>S</span>
        </button>
        <nav className={styles.navLinkWrapper}>
          <ul className={cx(styles.linkWrapper, { [styles.isNotVisible]: !isVisible })}>
            {links.map((link) => (
              <li key={`links-${link}`}>
                <NavLink
                  to={link}
                  className={({ isActive }) => (isActive ? styles.isActive : styles.linkBlock)}
                  onClick={handleClickMenu}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.rightWing}>
          <button type='button' onClick={handleClickCart} className={styles.cart}>
            <CartIcon />
          </button>
          {cartStatus && <span />}
          {isMobile && (
            <button type='button' onClick={handleClickMenu} className={styles.mobileMenu}>
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}

export default GNB
