import { NavLink, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'hooks'
import { CartIcon, MenuIcon } from 'assets/svgs'

import { cx } from 'styles'
import styles from './gnb.module.scss'
import { newStore } from 'services/sessionStore'

const linkList = ['clothes', 'electronics', 'furniture', 'shoes']

const GNB = () => {
  const navigate = useNavigate()

  const storeLength = newStore.get('myFSCart') ? newStore.get('myFSCart').length : 0
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
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  return (
    <header className={styles.gnb}>
      <div className={styles.leftWing}>
        <h1>F</h1>
        <h1>S</h1>
      </div>
      <nav className={styles.navLinkWrapper}>
        <ul className={cx(styles.linkWrapper, { [styles.isNotVisible]: !isVisible })}>
          {linkList.map((link) => (
            <li key={`linkItem-${link}`}>
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
        <span>{storeLength > 0 ? storeLength : ''}</span>
      </div>
      {isMobile && (
        <button type='button' onClick={handleClickMenu} className={styles.mobileMenu}>
          <MenuIcon />
        </button>
      )}
    </header>
  )
}

export default GNB
