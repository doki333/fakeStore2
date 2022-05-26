import { useMount } from 'react-use'
import { Routes, Route, useLocation } from 'react-router-dom'
import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default App
