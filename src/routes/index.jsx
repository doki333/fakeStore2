import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'
import Layout from 'components/Layout/Layout'
import Dummy from './Dummy/Dummy'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dummy1' element={<Dummy />} />
            <Route path='dummy2' element={<Dummy />} />
            <Route path='dummy3' element={<Dummy />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
