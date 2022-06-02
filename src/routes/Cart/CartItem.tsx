import { ICartData } from 'types/ListItem'
import PLACEHOLDER from '../../assets/no-image.jpg'
import { CheckIcon, Minus2Icon, Plus2Icon } from 'assets/svgs'
import { ChangeEventHandler } from 'react'
import styles from './cartItem.module.scss'

interface IProps {
  cartItem: ICartData
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const CartItem = ({ cartItem, handleChange }: IProps) => {
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
          <button type='button' data-id='minus'>
            <Minus2Icon />
          </button>
          <p>{cartItem.count}</p>
          <button type='button' data-id='plus'>
            <Plus2Icon />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
