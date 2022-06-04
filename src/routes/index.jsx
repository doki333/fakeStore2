import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Dummy from './Dummy/Dummy'
import Cart from './Cart'
import Layout from 'components/Layout/Layout'
import GNB from 'routes/_shared/GNB'

import styles from './routes.module.scss'
import NotFound from './NotFound/NotFound'
import { Suspense } from 'react'
import Spinner from 'components/Spinner/Spinner'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <Toaster />
      <div className={styles.app}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='category/:category' element={<Dummy />} />
              <Route path='cart' element={<Cart />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
