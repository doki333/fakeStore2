import React, { MouseEvent } from 'react'

import FURNITURE from 'assets/furniture.jpg'
import WATCH from 'assets/watch.jpg'
import styles from './dummyMain.module.scss'
import { cx } from 'styles'
import { useNavigate } from 'react-router-dom'

const DummyMain = () => {
  const navigate = useNavigate()
  const handleClickShop = (e: MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset
    navigate(`/${category}`)
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
          <button type='button' data-category='electronics' onClick={handleClickShop}>
            Shop Now
          </button>
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
    </div>
  )
}

export default DummyMain
