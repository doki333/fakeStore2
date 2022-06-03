import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'
import Layout from 'components/Layout/Layout'
import Dummy from './Dummy/Dummy'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Cart from './Cart/Cart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <Toaster />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Dummy />} />
            <Route path=':category' element={<Dummy />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
