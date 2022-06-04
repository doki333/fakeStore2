import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-use'
import MainPhotos from 'routes/Dummy/MainPhotos'
import styles from './layout.module.scss'

const Layout = () => {
  const { pathname } = useLocation()
  const isNotCart = pathname !== '/cart'
  const isFirst = pathname === '/'

  return (
    <main className={styles.mainWrapper}>
      {isFirst && <MainPhotos />}
      {!isNotCart && <h1 className={styles.mainTitle}>Cart</h1>}
      <Outlet />
    </main>
  )
}

export default Layout
