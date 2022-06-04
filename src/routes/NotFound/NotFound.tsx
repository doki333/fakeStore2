import styles from './notFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h1>404</h1>
      <p>
        uh-oh! Nothing Here...
        <br /> <span>👻</span>
      </p>
    </div>
  )
}

export default NotFound
