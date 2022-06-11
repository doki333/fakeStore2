import { ChangeEvent, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import CartItem from './CartData'
import { cartItemState } from 'recoil/cart.atom'
import { newStore } from 'services/sessionStore'
import { ICartData } from 'types/ListItem'
import { CheckIcon, TrashIcon } from 'assets/svgs'

import styles from './cart.module.scss'
import DataList from 'components/DataList/DataList'
import { getTotalCost } from './cartItemCount'

const Cart = () => {
  const getSessionData = newStore.get('myFSCart') ?? []
  const isNothing = !getSessionData || getSessionData.length === 0

  const setCartItemStatus = useSetRecoilState(cartItemState)
  const [storedCart, setStoredCart] = useState(getSessionData)
  const [isWholeChecked, setIsWholeChecked] = useState(true)

  const totalCost = useMemo(() => getTotalCost(storedCart), [storedCart])
  const shipping = totalCost !== 0 ? 20 : 0

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget.dataset
    const newData = storedCart.map((cartThing: ICartData) =>
      cartThing.key === Number(id) ? { ...cartThing, checked: !cartThing.checked } : { ...cartThing }
    )
    setStoredCart(newData)
    const filteredData = newData.filter((cartThing: ICartData) => cartThing.checked === true)
    setIsWholeChecked(() => filteredData.length === storedCart.length)
  }

  const handleClickDelete = () => {
    const uncheckedData = storedCart.filter((cart: ICartData) => cart.checked !== true)
    const newCheck = uncheckedData.map((toCheck: ICartData) => {
      return {
        ...toCheck,
        checked: true,
      }
    })
    setStoredCart(newCheck)
    newStore.set('myFSCart', newCheck)
    setIsWholeChecked(true)
    if (!isNothing) setCartItemStatus(false)
  }

  const handleWholeCheckBox = () => {
    setIsWholeChecked((prev) => !prev)
    const wholeCheck = storedCart.map((toCheck: ICartData) => {
      return {
        ...toCheck,
        checked: !isWholeChecked,
      }
    })
    setStoredCart(wholeCheck)
  }

  const idxDataArr = [
    { key: 'Sub Total', content: `${totalCost.toLocaleString()}.00` },
    { key: 'Shipping', content: `$${shipping}.00` },
    { key: 'Total', content: `${(totalCost + shipping).toLocaleString()}.00` },
  ]

  return (
    <div className={styles.cartWrapper}>
      {isNothing && <p>Nothing! Add Something</p>}
      {!isNothing && (
        <>
          <ul className={styles.cItemList}>
            <div className={styles.ctrlWrapper}>
              <input id='checkBoxCtrl' type='checkbox' checked={isWholeChecked} onChange={handleWholeCheckBox} />
              <label htmlFor='checkBoxCtrl'>
                <CheckIcon />
              </label>
              All
            </div>
            {storedCart.map((cartItem: ICartData) => (
              <CartItem
                key={`cart-${cartItem.key}`}
                cartItem={cartItem}
                handleChange={handleChange}
                setStoredCart={setStoredCart}
              />
            ))}
          </ul>
          {idxDataArr && <DataList dataArr={idxDataArr} classTitle='costBottom' />}
          <div className={styles.cartBottomBtns}>
            <button type='button' onClick={handleClickDelete}>
              <TrashIcon />
            </button>
            <button type='button'>CHECKOUT</button>
          </div>
        </>
      )}
    </div>
  )
}
export default Cart
