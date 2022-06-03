import { ChangeEvent, useMemo, useState } from 'react'

import CartItem from './CartData'
import { newStore } from 'services/sessionStore'
import { ICartData } from 'types/ListItem'
import { TrashIcon } from 'assets/svgs'

import styles from './cart.module.scss'

function getTotalCost(d: ICartData[]) {
  const checkedData = d.filter((data: ICartData) => data.checked === true)
  return checkedData.reduce((prev: number, next: ICartData) => prev + next.count * next.price, 0)
}

const Cart = () => {
  const getSessionData = newStore.get('myFSCart') ?? []
  const isNothing = !getSessionData || getSessionData.length === 0

  const [dataList, setDataList] = useState(getSessionData)
  const totalCost = useMemo(() => getTotalCost(dataList), [dataList])
  const shipping = totalCost !== 0 ? 20 : 0

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget.dataset
    const newData = dataList.map((data: ICartData) =>
      data.key === Number(id) ? { ...data, checked: !data.checked } : { ...data }
    )
    setDataList(newData)
    newStore.set('myFSCart', newData)
  }

  const handleClickDelete = () => {
    const uncheckedData = dataList.filter((cart: ICartData) => cart.checked !== true)
    setDataList(uncheckedData)
    newStore.set('myFSCart', uncheckedData)
  }

  return (
    <div className={styles.cartWrapper}>
      {isNothing && <p>Nothing! Add Something</p>}
      {dataList && (
        <ul className={styles.cItemList}>
          {dataList.map((cartItem: ICartData) => (
            <CartItem
              key={`cart-${cartItem.key}`}
              cartItem={cartItem}
              handleChange={handleChange}
              setDataList={setDataList}
            />
          ))}
        </ul>
      )}
      {dataList.length !== 0 && (
        <>
          <ul className={styles.costBottom}>
            <dl>
              <dt>Sub Total</dt>
              <dd>${totalCost.toLocaleString()}.00</dd>
            </dl>
            <dl>
              <dt>Shipping</dt>
              <dd>${shipping}.00</dd>
            </dl>
            <dl>
              <dt>Total</dt>
              <dd>${(totalCost + shipping).toLocaleString()}.00</dd>
            </dl>
          </ul>
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
