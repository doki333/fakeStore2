import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-use'
import styles from './layout.module.scss'

const Layout = () => {
  const { pathname } = useLocation()
  const isNotCart = pathname !== '/cart'

  return (
    <main className={styles.mainWrapper}>
      {!isNotCart && <h1 className={styles.mainTitle}>Cart</h1>}
      <Outlet />
    </main>
  )
}

export default Layout
