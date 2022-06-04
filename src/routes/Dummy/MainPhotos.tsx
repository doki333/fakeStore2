import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './mainPhotos.module.scss'
import { cx } from 'styles'

const MainPhotos = () => {
  const navigate = useNavigate()

  const handleClickShop = (e: MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset
    navigate(`/category/${category}`)
  }

  return (
    <div className={styles.mainImgWrapper}>
      <section className={cx(styles.bgWrapper, styles.bg1)}>
        <div>
          <h1>
            Summer finds from <br /> $5.99 <br />
            Spotted: summer pieces for less
          </h1>
          <button type='button' data-category='clothes' onClick={handleClickShop}>
            Shop Now
          </button>
        </div>
      </section>
      <section className={cx(styles.bgWrapper, styles.bg2)}>
        <div>
          <h1>
            Cushion covers in charcoal hues are a soft, <br /> sophisticated way to introduce the motif.
          </h1>
        </div>
      </section>
      <section className={cx(styles.bgWrapper, styles.bg3)}>
        <div>
          <h1>
            Heavy on features.
            <br />
            Light on price.
          </h1>
        </div>
      </section>
      <section className={cx(styles.bgWrapper, styles.bg4)}>
        <div>
          <h1>Collection for Summer</h1>
          <button type='button' data-category='shoes' onClick={handleClickShop}>
            Shop Now
          </button>
        </div>
      </section>
      <section className={cx(styles.bgWrapper, styles.bg5)}>
        <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam saepe, in dolorum debitis optio,
          </h1>
          <button type='button' data-category='all' onClick={handleClickShop}>
            Shop Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default MainPhotos
