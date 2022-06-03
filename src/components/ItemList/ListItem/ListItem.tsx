import { MouseEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { cartItemState } from 'recoil/cart.atom'
import { IStoreData } from 'types/ListItem'
import handleClickItemAdd from './setCartStorage'

import styles from './listItem.module.scss'
import PLACEHOLDER from 'assets/no-image.jpg'
import { Minus2Icon, Plus2Icon } from 'assets/svgs'

interface IProps {
  itemProps: IStoreData
}

const ListItem = ({ itemProps }: IProps) => {
  const setCartList = useSetRecoilState(cartItemState)

  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(1)

  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')

  const handleClickAdd = () => {
    handleClickItemAdd(itemProps, count, setCartList)
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
              <Minus2Icon />
            </button>
            <input type='number' readOnly value={count} />
            <button className={styles.countBtn} type='button' data-id='plus' onClick={handleClickCount}>
              <Plus2Icon />
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
