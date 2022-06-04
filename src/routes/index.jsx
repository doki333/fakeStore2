import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Dummy from './Dummy/Dummy'
import Cart from './Cart'
import Layout from 'components/Layout/Layout'
import GNB from 'routes/_shared/GNB'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <Toaster />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Dummy />} />
            <Route path=':category' element={<Dummy />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
