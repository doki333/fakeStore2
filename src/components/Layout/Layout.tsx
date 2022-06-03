import { Outlet, useParams } from 'react-router-dom'
import { useLocation } from 'react-use'
import styles from './layout.module.scss'

const Layout = () => {
  const { category } = useParams()
  const { pathname } = useLocation()

  const isNotCart = pathname !== '/cart'
  const upperCategory = category && category.replace(category[0], category[0].toUpperCase())

  return (
    <main className={styles.mainWrapper}>
      {isNotCart && <h1 className={styles.mainTitle}>{category !== undefined ? upperCategory : ''}</h1>}
      {!isNotCart && <h1 className={styles.mainTitle}>Cart</h1>}
      <Outlet />
    </main>
  )
}

export default Layout
