import { ChangeEventHandler, MouseEvent } from 'react'
import { SetterOrUpdater } from 'recoil'

import { ICartData } from 'types/ListItem'
import PLACEHOLDER from 'assets/no-image.jpg'
import { CheckIcon, Minus2Icon, Plus2Icon } from 'assets/svgs'
import handleItemCount from './cartItemCount'
import styles from './cartItem.module.scss'

interface IProps {
  cartItem: ICartData
  handleChange: ChangeEventHandler<HTMLInputElement>
  setDataList: SetterOrUpdater<ICartData[]>
}

const CartItem = ({ cartItem, handleChange, setDataList }: IProps) => {
  const handleClickCountBtn = (e: MouseEvent<HTMLButtonElement>) => {
    let initialCount = 1
    const { id } = e.currentTarget.dataset
    if (id === 'minus') {
      initialCount = 1 * -1
    }
    handleItemCount(cartItem, initialCount, setDataList)
  }

  return (
    <li key={`cart-${cartItem.key}`} className={styles.cartListItem}>
      <div className={styles.inputBoxWrapper}>
        <input id='itemBox' type='checkbox' checked={cartItem.checked} onChange={handleChange} data-id={cartItem.key} />
        <label htmlFor='itemBox'>
          <CheckIcon />
        </label>
      </div>
      <div className={styles.imgWrapper}>
        <img src={cartItem.image !== '' ? cartItem.image : PLACEHOLDER} alt='cart Item' />
        <span>{cartItem.price}$</span>
      </div>
      <div className={styles.nameInfo}>
        <p className={styles.itemName}>{cartItem.name}</p>
        <div className={styles.plusAndMinus}>
          <button type='button' data-id='minus' data-key={cartItem.key} onClick={handleClickCountBtn}>
            <Minus2Icon />
          </button>
          <p>{cartItem.count}</p>
          <button type='button' data-id='plus' data-key={cartItem.key} onClick={handleClickCountBtn}>
            <Plus2Icon />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
