import { IStoreData } from 'types/ListItem'
import PLACEHOLDER from 'assets/no-image.jpg'
import styles from './listItem.module.scss'
import { MouseEvent, useState } from 'react'
import handleClickItemAdd from './setCartStorage'

interface IProps {
  itemProps: IStoreData
}

const ListItem = ({ itemProps }: IProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(1)
  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')

  const handleClickAdd = () => {
    handleClickItemAdd(itemProps, count)
    setIsVisible((prev) => !prev)
    setCount(1)
  }

  const handleModalShow = () => {
    setIsVisible((prev) => !prev)
  }

  const handleClickClose = () => {
    setIsVisible((prev) => !prev)
    setCount(1)
  }
  const handleClickCount = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset
    if (id === 'minus' && count === 1) return
    if (id === 'plus') {
      setCount((prev) => prev + 1)
      return
    }
    setCount((prev) => prev - 1)
  }

  return (
    <li className={styles.itemWrapper}>
      <div>
        <img src={isImgEmpty ? PLACEHOLDER : itemProps.images[0]} alt='item' width='300px' height='300px' />
      </div>
      <dl className={styles.titleBlock}>
        <dt>title</dt>
        <dd>{itemProps.title}</dd>
      </dl>
      <dl>
        <dt>price</dt>
        <dd>${itemProps.price}</dd>
      </dl>
      <button type='button' className={styles.cartAddBtn} onClick={handleModalShow}>
        ADD TO CART
      </button>
      {isVisible && (
        <div className={styles.countModal}>
          <div className={styles.countBlock}>
            <button className={styles.countBtn} type='button' data-id='minus' onClick={handleClickCount}>
              -
            </button>
            <input type='number' readOnly value={count} />
            <button className={styles.countBtn} type='button' data-id='plus' onClick={handleClickCount}>
              +
            </button>
          </div>
          <div className={styles.costBlock}>
            <label htmlFor='totalCost'>Total</label>
            <input id='totalCost' type='number' readOnly value={count * itemProps.price} />
          </div>
          <div className={styles.bottomBtns}>
            <button type='button' onClick={handleClickAdd}>
              ADD
            </button>
            <button type='button' onClick={handleClickClose}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default ListItem
