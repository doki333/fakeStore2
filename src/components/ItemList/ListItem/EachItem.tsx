import { MouseEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import toast from 'react-hot-toast'

import { cartItemState, selectedModalItem } from 'recoil/cart.atom'
import { IStoreData } from 'types/ListItem'
import handleClickItemAdd from './setCartStorage'
import PLACEHOLDER from 'assets/no-image.jpg'
// import { Minus2Icon, Plus2Icon } from 'assets/svgs'

import styles from './eachItem.module.scss'
import Portal from 'components/DetailModal/Portal'

interface IProps {
  itemProps: IStoreData
}

const EachItem = ({ itemProps }: IProps) => {
  const setCartList = useSetRecoilState(cartItemState)
  const setSelected = useSetRecoilState(selectedModalItem)

  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(1)

  const isImgEmpty = itemProps.images[0].length === 0 || !itemProps.images[0].includes('https')

  const handleClickAdd = () => {
    handleClickItemAdd(itemProps, count, setCartList)
    toast.success('장바구니에 추가 되었습니다')
    setIsVisible((prev) => !prev)
    setCount(1)
  }

  const handleModalShow = () => {
    setIsVisible((prev) => !prev)
    setSelected(itemProps)
  }

  const handleClickClose = () => {
    setIsVisible((prev) => !prev)
    setCount(1)
  }
  const handleClickCount = (e: MouseEvent<HTMLButtonElement>) => {
    const { keyword } = e.currentTarget.dataset
    if (keyword === 'minus' && count === 1) return
    if (keyword === 'plus') {
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
        <Portal
          handleModalShow={handleModalShow}
          handleClickAdd={handleClickAdd}
          handleClickClose={handleClickClose}
          handleClickCount={handleClickCount}
          count={count}
        />
      )}
    </li>
  )
}

export default EachItem
