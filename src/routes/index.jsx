import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'
import Layout from 'components/Layout/Layout'
import Dummy from './Dummy/Dummy'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.app}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Dummy />} />
              <Route path=':category' element={<Dummy />} />
              {/* <Route path='dummy3' element={<Dummy />} /> */}
              {/* <Route path='dummy4' element={<Dummy />} /> */}
            </Route>
          </Routes>
        </div>
      </Suspense>
    </div>
  )
}

export default App