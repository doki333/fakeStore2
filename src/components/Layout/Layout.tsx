import { Outlet, useParams } from 'react-router-dom'
import styles from './layout.module.scss'

const Layout = () => {
  const { category } = useParams()
  const upperCategory = category && category.replace(category[0], category[0].toUpperCase())
  return (
    <main className={styles.mainWrapper}>
      <h1>{category ? upperCategory : 'All'}</h1>
      <Outlet />
    </main>
  )
}

export default Layout
